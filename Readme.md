# level-up_task_1

A command line program that accepts the string and post it to the endpoint (e.g https://jsonplaceholder.typicode.com/)
        - The string can contain markdown/html and you have to sanitize it  
        - The string can contain Invalid character (e.g !@#$%^&*) and you have to sanitize it

## Local Install

    npm install

## Local Run

    node . -b <body> -e <endpoint>

## Test

    npm test

## Global Install

    npm install -g .

## Global Run

    levelup-task1 -b <body> -e <endpoint>

## Global Uninstall

    npm uninstall -g levelup-task1

## Usage

    Usage: -b <body> -e <endpoint>

    Options:
    --help          Show help
    --version       Show version number
    -b, --body      Request Body
    -e, --endpoint  Your Endpoin

## Example

    Local:
    node . -b "Test" -e https://jsonplaceholder.typicode.com/posts

    Global:
    levelup-task1 -b "Test" -e https://jsonplaceholder.typicode.com/posts

## Change log

The change log can be found on the [Releases page](https://github.com/mohammadkarimian/level-up_task_1/releases).

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](Contributing.md).

## Authors and license

[mohammadkarimian](level-up_task_1) and [contributors](https://github.com/mohammadkarimian/level-up_task_1/graphs/contributors).

MIT License, see the included [License.md](License.md) file.
