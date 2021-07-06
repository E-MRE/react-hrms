import React from "react";
import { Item, Label, Button } from "semantic-ui-react";

export default function JobPositionItem({
  jobPosition,
  userType,
  approveJobPosition,
  disprageJobPosition,
}) {
  return (
    <Item key={jobPosition.positionId}>
      <Item.Image src="https://image.freepik.com/free-vector/cv-document-paper-icon-vector-illustration-design_24877-15366.jpg" />

      <Item.Content verticalAlign="center" horizontalAlign="left">
        <Item.Header
          style={{
            width: "100%",
            textAlign: "left",
            marginBottom: "0.5em",
          }}
        >
          {jobPosition.positionName}
        </Item.Header>
        <Item.Meta
          style={{
            width: "100%",
            textAlign: "left",
            marginBottom: "0.5em",
          }}
        >
          <span className="cinema">
            {jobPosition.workType.workTypeName} -{" "}
            {jobPosition.workTime.workTimeName}
          </span>
        </Item.Meta>
        <Item.Description
          style={{
            width: "100%",
            textAlign: "left",
            marginBottom: "0.5em",
            height: "40%",
          }}
        >
          {jobPosition.description}
        </Item.Description>
        <Item.Extra>
          <Label icon="globe" content={jobPosition.city.cityName} />
          <Label
            icon="money"
            content={jobPosition.minSalary + " - " + jobPosition.maxSalary}
          />
          <Label
            icon="privacy"
            content={jobPosition.positionActive ? "Aktif" : "Pasif"}
            style={{ marginRight: "2.5em" }}
          />

          {userType == "Personel" ? (
            <Button.Group>
              <Button
                primary={jobPosition.positionActive}
                positive={!jobPosition.positionActive}
                onClick={() => {
                  jobPosition.positionActive
                  ? disprageJobPosition(jobPosition.positionId)
                    : approveJobPosition(jobPosition.positionId);
                }}
              >
                {jobPosition.positionActive ? "Onay Kaldır" : "Onayla"}
              </Button>
              <Button.Or text="" />
              <Button negative>Kaldır</Button>
            </Button.Group>
          ) : (
            <Button.Group>
              <Button primary disabled={!jobPosition.positionActive}>
                Düzenle
              </Button>
              <Button.Or text="" />
              <Button negative disabled={!jobPosition.positionActive}>
                Pasif Yap
              </Button>
            </Button.Group>
          )}
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}

const employerButtonGroup = ({ isActive }) => {
  return (
    <Button.Group>
      <Button primary disabled={!isActive}>
        Düzenle
      </Button>
      <Button.Or text="" />
      <Button negative disabled={!isActive}>
        Kaldır
      </Button>
    </Button.Group>
  );
};

const personelButtonGroup = ({ isActive }) => {
  return (
    <Button.Group>
      <Button primary={isActive} positive={!isActive}>
        {isActive ? "Onay Kaldır" : "Onayla"}
      </Button>
      <Button.Or text="" />
      <Button negative>Kaldır</Button>
    </Button.Group>
  );
};
