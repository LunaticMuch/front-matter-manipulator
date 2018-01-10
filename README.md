# Front Matter Manipulator
> A utility for parsing and manipulating documents with Front Matter. Get the fields, values for any collection of documents. Bulk update, delete, or rename fields.

## Getting Started
This utility can be used as a Command Line Interface, or as an import in your scripts.

It has two primary uses:

- Parsing one or many files to discover the content model
- Updating the content model of one or many files

This is done through the following commands:

- `fields`: finds all fields in specified files
- `values`: finds all values for specified fields in specified files
- `update`: update the value for specified field in specified files
- `rename`: update the name of specified field in specified files
- `drop`: delete the specified fields from the specified files
- `convert`: convert any field to an array

## Installation

### Install CLI
Run the following command:
```
npm install -g front-matter-manipulator
```

### Install in current directory for use in scripts
```
npm install front-matter-manipulator --save-dev
```

## CLI (Command Line Interface)
Front Matter Manipulator can be used on the command line to perform operations on fields.

See the documentation for each action:

- [Fields](https://chrisdmacrae.github.io/front-matter-manipulator/cli#fields)
- [Values](https://chrisdmacrae.github.io/front-matter-manipulator/cli#values)
- [Update](https://chrisdmacrae.github.io/front-matter-manipulator/cli#update)
- [Rename](https://chrisdmacrae.github.io/front-matter-manipulator/cli#rename)
- [Drop](https://chrisdmacrae.github.io/front-matter-manipulator/cli#drop)
- [Convert](https://chrisdmacrae.github.io/front-matter-manipulator/cli#convert)

## Usage in node scripts/packages
Front Matter Manipulator can be used on in javascript files to perform advanced parsing or manipulation of fields.

See the documentation for each action:

- [Fields](https://chrisdmacrae.github.io/front-matter-manipulator/scripts#fields)
- [Values](https://chrisdmacrae.github.io/front-matter-manipulator/scripts#values)
- [Update](https://chrisdmacrae.github.io/front-matter-manipulator/scripts#update)
- [Rename](https://chrisdmacrae.github.io/front-matter-manipulator/scripts#rename)
- [Drop](https://chrisdmacrae.github.io/front-matter-manipulator/scripts#drop)
- [Convert](https://chrisdmacrae.github.io/front-matter-manipulator/scripts#convert)