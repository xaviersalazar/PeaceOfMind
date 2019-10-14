import React from "react";
import { Row } from "reactstrap";
import ServiceCard from "./ServiceCard";

const ServiceCardRow = ({ rows }) => {
  return rows.map((row, i) => {
    return (
      <Row key={i}>
        {row.row.map(s => {
          return (
            <ServiceCard
              key={s.title}
              xs={s.xs}
              md={s.md}
              lg={s.lg}
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

export default ServiceCardRow;
