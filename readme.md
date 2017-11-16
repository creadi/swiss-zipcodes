# swiss-zipcodes

## Purpose

Search and validate swiss zip codes

## Usage

```bash
npm install https://github.com/creadi/swiss-zipcodes
```

and

```javascript
import { search, validate, cityFromZip } from 'swiss-zipcodes'
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

## Data

Data from Federal Statistics
https://www.bfs.admin.ch/bfs/fr/home/bases-statistiques/repertoire-officiel-communes-suisse/tableau-correspondance-regbl.assetdetail.2861277.html

Direct link to excel sheet
https://www.bfs.admin.ch/bfsstatic/dam/assets/2861277/master
