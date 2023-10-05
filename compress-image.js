/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import md5 from 'crypto-md5';
import _ from 'lodash';
import dir from 'node-dir';
import tinify from 'tinify';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
tinify.key = 'KfSVWCKT4kxq5vPNCQtv5RsbLM1myKvg';
const imgFolder = path.join(__dirname, '..', 'loyoung', 'assets', 'images');
const cachePath = path.join(__dirname, '..', 'loyoung', '.compress-image');

tinyPng();

async function tinyPng() {
    const supportedExtensions = ['.jpg', '.jpeg', '.png'];

    const hashes = fs.existsSync(cachePath)
        ? fs.readFileSync(cachePath).toString().split('\n').map(x => x.trim())
        : ['Cache for compressed images hash', ''];

    const images = dir.files(imgFolder, { sync: true })
        .filter(filePath => supportedExtensions.some(ext => filePath.endsWith(ext)))
        .filter(filePath => !hashes.includes(getFileHash(filePath)));

    if (images.length === 0) {
        console.log('All images have been optimized');
        return;
    }

    const imageRelativePaths = images.map(filePath => getRelativePath(filePath));
    const oldSizes = images.map(filePath => getFileSizeInKB(filePath));
    await Promise.all(images.map(filePath => tinify.fromFile(filePath).toFile(filePath)));
    const newSizes = images.map(filePath => getFileSizeInKB(filePath));

    const results = _.zipWith(imageRelativePaths, oldSizes, newSizes, (filePath, oldSize, newSize) => ({
        'File Name': filePath.replace(/\\/g, '/'),
        'Old Size (KB)': _.round(oldSize, 1),
        'New Size (KB)': _.round(newSize, 1),
        'Saved (%)': _.round(100 - (newSize / oldSize) * 100, 1),
    }));
    results.push({}, {
        'File Name': 'Total',
        'Old Size (KB)': _.round(_.sum(oldSizes), 1),
        'New Size (KB)': _.round(_.sum(newSizes), 1),
        'Saved (%)': _.round(100 - (_.sum(newSizes) / _.sum(oldSizes)) * 100, 1),
    });
    console.table(results);

    // write hashes
    hashes.push(...images.map(filePath => getFileHash(filePath)));
    fs.writeFileSync(cachePath, hashes.join('\n'));
}

function getFileSizeInKB(filePath) {
    return fs.statSync(filePath).size / 1024;
}

function getFileHash(filePath) {
    const content = fs.readFileSync(filePath).toString();
    return md5(content).toString();
}

function getRelativePath(filePath) {
    return filePath.replace(imgFolder, '');
}
