# eslint-plugin-dummy-rules

dummy rules desc

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-dummy-rules`:

```
$ npm install eslint-plugin-dummy-rules --save-dev
```


## Usage

Add `dummy-rules` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "dummy-rules"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "dummy-rules/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





