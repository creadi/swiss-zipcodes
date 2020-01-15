[![Build Status](https://travis-ci.org/creadi/swiss-zipcodes.svg?branch=master)](https://travis-ci.org/creadi/swiss-zipcodes)
[![GitHub issues](https://img.shields.io/github/issues/creadi/swiss-zipcodes.svg)](https://github.com/creadi/swiss-zipcodes/issues)
[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/creadi/swiss-zipcodes)
[![GitHub stars](https://img.shields.io/github/stars/creadi/swiss-zipcodes.svg)](https://github.com/creadi/swiss-zipcodes/stargazers)

# swiss-zipcodes

## Purpose

Search and validate swiss zip codes

## Usage

```bash
npm i --save swiss-zipcodes
# or
npm install https://github.com/creadi/swiss-zipcodes
```

and

```javascript
import { search, validate, cityFromZip, allZips } from 'swiss-zipcodes'
```

### search()

Search by any combination of:
  * `zip` (`number`)
  * `canton` (`string`)
  * `commune` (`string`)

```javascript
search({ zip: 4054 })
```

returns

```javascript
[
  {
    zip: 4054,
    canton: 'BS',
    commune: 'Basel'
  }
]
```

### validate()

Validate `zip` code as `number` or `string`

```javascript
validate(4054)

// or

validate('4054')
```

returns `true`

### cityFromZip()

Get an array of `commune` names from a zip code ( `number` or `string`)

```javascript
cityFromZip(4052)

// or

cityFromZip('4052')
```

returns

```javascript
[
  'Basel',
  'Münchenstein'
]
```

### allZips

is an array of zipcodes (`number`)

## Data

Data from [Federal Statistics](https://www.bfs.admin.ch/bfs/fr/home/bases-statistiques/repertoire-officiel-communes-suisse/tableau-correspondance-regbl.assetdetail.2861277.html).

Direct link to [excel sheet](https://www.bfs.admin.ch/bfsstatic/dam/assets/2861277/master).

## Update 1.0.6

Add data from [geonames](https://www.geonames.org/postal-codes/CH/) [extraction](https://raw.githubusercontent.com/TrustChainEG/postal-codes-json-xml-csv/master/data/CH/zipcodes.ch.json)