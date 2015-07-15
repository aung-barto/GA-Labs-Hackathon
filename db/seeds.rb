# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Category.delete_all
Location.delete_all
Post.delete_all

Category.create({cateogry_name: "Food"})
Category.create({cateogry_name: "Bars"})
Category.create({cateogry_name: "Sights"})
Category.create({cateogry_name: "Outdoors"})
Category.create({cateogry_name: "Just for Fun"})
Category.create({cateogry_name: "Culture"})
Category.create({cateogry_name: "Shopping"})

Location.create({street_address: "24 Reed St", city: "Brooklyn", state: "NY", location_name: "Brooklyn Crab", location_notes: "Great Views", location_category_id: 1})
Location.create({street_address: "337 3rd Ave", city: "New York", state: "NY", location_name: "Rose Hill Tavern", location_notes: "Sports Bar", location_category_id: 2})
Location.create({street_address: "129 Macdougal St", city: "New York", state: "NY", location_name: "La Lanterna Di Vittorio", location_category_id: 1})
Location.create({street_address: "117 Macdougal St", city: "New York", state: "NY", location_name: "Olive Tree Cafe & Bar", location_notes: "Atmosphere", location_category_id: 1})
Location.create({city: "New York", state: "NY", cross_st1: "E 106th", cross_st2: "Park", location_name: "Graffiti Wall of Fame", location_notes: "Art", location_category_id: 6})
Location.create({street_address: "1220 5th Ave", city: "New York", state: "NY", location_name: "Museum of the City of New York", location_notes: "Limited Hours", location_category_id: 6})
Location.create({street_address: "459 Broome St", city: "New York", state: "NY", location_name: "Purl Soho", location_category_id: 7})
Location.create({street_address: "530 W 27th St", city: "New York", state: "NY", location_name: "Sleep No More", location_notes: "Theater, Experience", location_category_id: 6})
Location.create({street_address: "99 Margaret Corbin Dr", city: "New York", state: "NY", location_name: "The Cloisters", location_notes: "Art", location_category_id: 6})
Location.create({street_address: "222 E 6th St", city: "New York", state: "NY", location_name: "Ukrainian Museum", location_notes: "History", location_category_id: 6})
Location.create({street_address: "315 9th St", city: "New York", state: "NY", location_name: "Verameat", location_notes: "Jewelry", location_category_id: 7})
Location.create({street_address: "248 Mercer St", city: "New York", state: "NY", location_name: "Think Coffee", location_notes: "Coffee", location_category_id: 1})
Location.create({city: "New York", state: "NY", cross_st1: "Madison Ave", cross_st2: "E 23rd St", location_name: "Shake Shack", location_category_id: 1})
Location.create({street_address: "113 N 3rd St", city: "Brooklyn", state: "NY", location_name: "Radegast Hall", location_category_id: 2})
Location.create({street_address: "79 N 11th St", city: "Brooklyn", state: "NY", location_name: "Brooklyn Brewery", location_notes: "Tour", location_category_id: 5})
Location.create({street_address: "222 W 44th St", city: "New York", state: "NY", location_name: "Bowlmor", location_notes: "Bowling", location_category_id: 5})
Location.create({street_address: "882 3rd Ave", city: "Brooklyn", state: "NY", location_name: "Rooftop Films", location_category_id: 6})
Location.create({street_address: "231 E 14th St", city: "Brooklyn", state: "NY", location_name: "Beauty Bar", location_category_id: 2})
Location.create({street_address: "700 E 9th St", city: "New York", state: "NY", location_name: "The Wayland", location_category_id: 5})
Location.create({street_address: "115 Macdougal St", city: "New York", state: "NY", location_name: "Cafe Wha?", location_notes: "Coffee" location_category_id: 1})
Location.create({street_address: "66 N 6th St", city: "New York", state: "NY", location_name: "Music Hall of Williamsburg",  location_category_id: 5})
Location.create({city: "New York", state: "NY", cross_st1: "34th St", cross_st2: "East River", location_name: "East River Ferry", location_notes: "Cheap", location_category_id: 4})
Location.create({street_address: "500 E 9th St", city: "New York", state: "NY", location_name: "Tompkins Square Park", location_notes: "Fresh Air", location_category_id: 5})

