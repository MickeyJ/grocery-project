

exports.seed = function(knex, Promise) {
  return Promise.join(
    
    knex('items').del(),
    
    knex('items').insert({id: 1, name: 'pickels', price: 2, info: 'I got a pickle hey hey hey hey'}),
    knex('items').insert({id: 2, name: 'tacos', price: 1, info: 'mmm tacos'}),
    knex('items').insert({id: 3, name: 'broccoli', price: 2, info: 'i like broccoli'})
  );
};
