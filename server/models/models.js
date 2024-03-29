const db = require('../database/db');

module.exports = {
   repos: {
      getRepos: function () {
         let promise = db.Repo.find();
         let promiseData = promise.then((repos) => {
            return repos;
         });
         return promiseData;
      },
      storeRepos: function (repo) {
         db.Repo.create({
            _id: repo.id,
            name: repo.name,
            openGraphImageUrl: repo.openGraphImageUrl,
            description: repo.description,
            homepageUrl: repo.homepageUrl,
            url: repo.html_url,
         });
      },
      updateRepo: function (repo) {
         let document = db.Repo.findOneAndUpdate(
            { _id: repo.id },
            {
               _id: repo.id,
               name: repo.name,
               openGraphImageUrl: repo.openGraphImageUrl,
               description: repo.description,
               homepageUrl: repo.homepage,
               url: repo.url,
            },
            {
               new: true,
               upsert: true,
            }
         );
         return document;
      },
   },
};
