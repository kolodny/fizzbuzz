#!/bin/sh

dir=$(dirname $0)
pkg=$1

cd packages
mkdir $pkg
cd $pkg
npm init -y > /dev/null
touch index.js
