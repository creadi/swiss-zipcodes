import * as test from 'tape'
import { search, validate } from './index'

test('search({ zip: 4054 })', t => {
  const res = search({ zip: 4054 })
  t.true(Array.isArray(res), 'should return array')
  t.same(res.length, 1, 'should be an array with one item')
  const item = res.shift()
  t.same(item.zip, 4054, 'item should have correct zip')
  t.same(item.canton, 'BS', 'item should have correct canton')
  t.same(item.commune, 'Basel', 'item should have correct commune')
  t.end()
})

test('search({ zip: 4000 })', t => {
  const res = search({ zip: 4000 })
  t.true(Array.isArray(res), 'should return array')
  t.same(res.length, 0, 'should be an empty array')
  t.end()
})

test('search({ commune: \'Basel\' })', t => {
  const res = search({ commune: 'Basel' })
  t.true(Array.isArray(res), 'should return array')
  t.same(res.length, 10, 'should be an array with 10 items')
  const firstItem = res.shift()
  t.true(firstItem.zip, 'first item should have zip')
  t.true(firstItem.canton, 'first item should have canton')
  t.true(firstItem.commune, 'first item should have commune')
  t.end()
})

test('search({ commune: \'Xxxx\' })', t => {
  const res = search({ commune: 'Xxxx' })
  t.true(Array.isArray(res), 'should return array')
  t.same(res.length, 0, 'should be an empty array')
  t.end()
})

test('search({ canton: \'BS\' })', t => {
  const res = search({ canton: 'BS' })
  t.true(Array.isArray(res), 'should return array')
  t.same(res.length, 13, 'should be an array with 13 items')
  const firstItem = res.shift()
  t.true(firstItem.zip, 'first item should have zip')
  t.true(firstItem.canton, 'first item should have canton')
  t.true(firstItem.commune, 'first item should have commune')
  t.end()
})

test('search({ canton: \'XX\' })', t => {
  const res = search({ canton: 'XX' })
  t.true(Array.isArray(res), 'should return array')
  t.same(res.length, 0, 'should be an empty array')
  t.end()
})

test('search({ zip: 4054, canton: \'BS\' })', t => {
  const res = search({ zip: 4054, canton: 'BS' })
  t.true(Array.isArray(res), 'should return array')
  t.same(res.length, 1, 'should be an array with one item')
  const item = res.shift()
  t.same(item.zip, 4054, 'item should have correct zip')
  t.same(item.canton, 'BS', 'item should have correct canton')
  t.same(item.commune, 'Basel', 'item should have correct commune')
  t.end()
})

test('search({ zip: 4054, canton: \'BL\' })', t => {
  const res = search({ zip: 4054, canton: 'BL' })
  t.true(Array.isArray(res), 'should return array')
  t.same(res.length, 0, 'should be an empty array')
  t.end()
})

test('validate(4054)', t => {
  t.true(validate(4054), 'should return true')
  t.end()
})

test('validate(\'4054\')', t => {
  t.true(validate('4054'), 'should return true')
  t.end()
})

test('validate(4000)', t => {
  t.false(validate(4000), 'should return false')
  t.end()
})

test('validate(\'4000\')', t => {
  t.false(validate('4000'), 'should return false')
  t.end()
})

test('cityFromZip(4054)', t => {
  const res = cityFromZip(4054)
  t.true(Array.isArray(res), 'should return an array')
  t.same(res.length, 1, 'should be an array with one item')
  t.same(typeof res.shift(), 'string', 'item should be a string')
  t.end()
})

test('cityFromZip(\'4054\')', t => {
  const res = cityFromZip('4054')
  t.true(Array.isArray(res), 'should return an array')
  t.same(res.length, 1, 'should be an array with one item')
  t.same(typeof res.shift(), 'string', 'item should be a string')
  t.end()
})

test('cityFromZip(4000)', t => {
  const res = cityFromZip(4000)
  t.true(Array.isArray(res), 'should return an array')
  t.same(res.length, 0, 'should be an empty array')
  t.end()
})

test('cityFromZip(\'4000\')', t => {
  const res = cityFromZip(4000)
  t.true(Array.isArray(res), 'should return an array')
  t.same(res.length, 0, 'should be an empty array')
  t.end()
})