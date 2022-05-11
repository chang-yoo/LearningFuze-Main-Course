select "c"."firstName",
       "c"."lastName",
       sum ("p"."amount") as "total amount paid"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
  group by "c"."firstName", "c"."lastName"
  order by "total amount paid" desc;
