import React from "react";
import { Row } from "reactstrap";
import { ServiceCard } from "./ServiceCard";

export const ServiceCardRow = ({ rows }) => {
  return rows.map((row, i) => {
    return (
      <Row key={i} className="justify-content-center">
        {row.row.map((s) => {
          return (
            <ServiceCard
              key={s.title}
              xs={s.xs}
              sm={s.sm}
              md={s.md}
              lg={s.lg}
              xl={s.xl}
              icon={s.icon}
              title={s.title}
              price={s.price}
              desc={s.desc}
            />
          );
        })}
      </Row>
    );
  });
};
