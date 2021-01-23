import React from "react";
import { Row } from "reactstrap";
import { MassageBenefitsCard } from "./MassageBenefitsCard";

export const MassageBenefitsCardRow = ({ rows }) => {
  return rows.map((row, i) => {
    return (
      <Row key={i} className="justify-content-center">
        {row.row.map((s) => {
          return (
            <MassageBenefitsCard
              key={s.title}
              xs={s.xs}
              md={s.md}
              lg={s.lg}
              xl={s.xl}
              icon={s.icon}
              title={s.title}
              items={s.items}
            />
          );
        })}
      </Row>
    );
  });
};
