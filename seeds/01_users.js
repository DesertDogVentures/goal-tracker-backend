
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'cjannenga', password: 'pa$$w0rd', email: 'cjannenga312@gmail.com', age: '24'},
        {id: 2, username: 'kjannenga', password: 'krystine1!', email: 'kjannenga1@gmail.com', age: '22'},
        {id: 3, username: 'sjannenga', password: 'sag3Marie1!', email: 'sage@desertdogventures.com', age: '2'}
      ]);
    });
};
