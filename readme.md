# swiss-zipcodes

## Usage

```javascript
import * as search from 'swiss-zipcodes'

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

Search by any combination of `zip`, `canton` and `commune`

## Data

Data from Federal Statistics
https://www.bfs.admin.ch/bfs/fr/home/bases-statistiques/repertoire-officiel-communes-suisse/tableau-correspondance-regbl.assetdetail.2861277.html

Direct link to excel sheet
https://www.bfs.admin.ch/bfsstatic/dam/assets/2861277/master
