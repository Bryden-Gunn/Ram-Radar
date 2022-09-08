exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('rams')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('rams').insert([
        {
          id: 1,
          month: 'august',
          plate: 'XYZ123',
          goods: 'alcohol',
          latitude: -36.91155444211259,
          longitude: 174.77635769771422,
        },
        {
          id: 2,
          month: 'august',
          plate: 'BOO253',
          goods: 'cash',
          latitude: -36.84738586250923,
          longitude: 174.85844313283803,
        },
        {
          id: 3,
          month: 'august',
          plate: 'RYE111',
          goods: 'vape',
          latitude: -36.78614736405009,
          longitude: 174.7727848157052,
        },
        {
          id: 4,
          month: 'september',
          plate: '235HYE',
          goods: 'snacks',
          latitude: -36.810717858044555,
          longitude: 174.64448803332164,
        },
        {
          id: 5,
          month: 'july',
          plate: 'JUL899',
          goods: 'chocolate',
          latitude: -36.87663042293795,
          longitude: 174.7416536387131
        },
        {
          id: 6,
          month: 'june',
          plate: 'LIM472',
          goods: 'yoga mats',
          latitude: -36.86363398848327,
          longitude: 174.77648082994924,
        },
        {
          id: 7,
          month: 'september',
          plate: 'YOO836',
          goods: 'alcohol',
          latitude: -36.9116521204497,
          longitude: 174.7763630222320,
        }

      ])
    })
}
