app.controller('homeController', ['$scope', '$http', function ($scope, $http) {

   $scope.title="This is Angularjs demp page";
    $scope.movieList=[
        {
            "id": "BVwi1",
            "name": "Bag It",
            "averageRating": 4.6,
            "releaseYear": 2010,
            "url": "http://www.netflix.com/Movie/Bag_It/70153545",
            "rating": "NR"
        },
        {
            "id": "BW1Ss",
            "name": "Lost Boy: The Next Chapter",
            "averageRating": 4.6,
            "releaseYear": 2009,
            "url": "http://www.netflix.com/Movie/Lost_Boy_The_Next_Chapter/70171826",
            "rating": "NR"
        },
        {
            "id": "BW2K0",
            "name": "To Live & Ride in L.A.",
            "averageRating": 4.6,
            "releaseYear": 2010,
            "url": "http://www.netflix.com/Movie/To_Live_Ride_in_L.A./70175120",
            "rating": "NR"
        },
        {
            "id": "BWAhv",
            "name": "K-ON!: Vol. 1",
            "averageRating": 4.6,
            "releaseYear": 2009,
            "url": "http://www.netflix.com/Movie/K-ON_Vol._1/70207355",
            "rating": "NR"
        },
        {
            "id": "BWDSi",
            "name": "Archer: Season 2: Disc 1",
            "averageRating": 4.6,
            "releaseYear": 2011,
            "url": "http://www.netflix.com/Movie/Archer_Season_2_Disc_1/70217944",
            "rating": "TV-MA"
        },
        {
            "id": "BWDSj",
            "name": "Archer: Season 2: Disc 2",
            "averageRating": 4.6,
            "releaseYear": 2011,
            "url": "http://www.netflix.com/Movie/Archer_Season_2_Disc_2/70217945",
            "rating": "TV-MA"
        },
        {
            "id": "caNeN",
            "name": "Big Time Rush: Season 1: Vol. 2",
            "averageRating": 4.6,
            "releaseYear": 2009,
            "url": "http://www.netflix.com/Movie/Big_Time_Rush_Season_1_Vol._2/70171491",
            "rating": "NR"
        },
        {
            "id": "BVf0R",
            "name": "Taylor Swift: Taylor Swift",
            "averageRating": 4.5,
            "releaseYear": 2007,
            "url": "http://www.netflix.com/Movie/Taylor_Swift_Taylor_Swift/70085495",
            "rating": "NR"
        },
        {
            "id": "BVixh",
            "name": "Hopkins 24/7: Season 2",
            "averageRating": 4.5,
            "releaseYear": 2008,
            "url": "http://www.netflix.com/Movie/Hopkins_24_7_Season_2/70100701",
            "rating": "NR"
        },
        {
            "id": "BVKAF",
            "name": "The Shawshank Redemption",
            "averageRating": 4.5,
            "releaseYear": 1994,
            "url": "http://www.netflix.com/Movie/The_Shawshank_Redemption/70005379",
            "rating": "R"
        }
    ];
}]);