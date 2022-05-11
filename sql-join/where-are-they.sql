select "a"."line1",
       "a"."district",
       "city"."name" as "city",
       "c"."name" as "country"
  from "addresses" as "a"
  join "cities" as "city" using ("cityId")
  join "countries" as "c" using ("countryId");
