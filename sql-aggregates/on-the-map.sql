select "c"."name" as "country name",
    count(*) as "total number of cities"
    from "cities" as "city"
    join "countries" as "c" using ("countryId")
    group by "c"."name"
