select "g"."name" as "genre name",
       count(*) as "number of films"
  from "genres" as "g"
  join "filmGenre" using("genreId")
  join "castMembers" as "c" using ("filmId")
  where "c"."actorId" = 178
  group by "g"."name";
