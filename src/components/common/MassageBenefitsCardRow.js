import React from "react";
import { Row } from "reactstrap";
import MassageBenefitsCard from "./MassageBenefitsCard";

const MassageBenefitsCardRow = ({ rows }) => {
  return rows.map((row, i) => {
    return (
      <Row key={i} className="justify-content-center">
        {row.row.map(s => {
          return (
            <MassageBenefitsCard
              key={s.title}
              xs={s.xs}
              md={s.md}
              lg={s.lg}
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

export default MassageBenefitsCardRow;
