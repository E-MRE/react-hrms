import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import JobPositionService from '../services/jobPositionService.js'

export default function JobPositionList() {
    const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
      let jobPositionService = new JobPositionService();
      jobPositionService.getJobPositions().then(result=>setJobPositions(result.data.data))
  })

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
            <Table.HeaderCell>Firma Adı</Table.HeaderCell>
            <Table.HeaderCell>Web Sitesi</Table.HeaderCell>
            <Table.HeaderCell>İşe Alım Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Lokasyon</Table.HeaderCell>
            <Table.HeaderCell>Minimum Ücret</Table.HeaderCell>
            <Table.HeaderCell>Maksimum Ücret</Table.HeaderCell>
            <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPositions.map((jobPosition) => (
            <Table.Row key={jobPosition.positionId}>
              <Table.Cell>{jobPosition.positionName}</Table.Cell>
              <Table.Cell>{jobPosition.employer.companyName}</Table.Cell>
              <Table.Cell>{jobPosition.employer.website}</Table.Cell>
              <Table.Cell>{jobPosition.activePositionQuantity}</Table.Cell>
              <Table.Cell>{jobPosition.city.cityName}</Table.Cell>
              <Table.Cell>{jobPosition.minSalary}</Table.Cell>
              <Table.Cell>{jobPosition.maxSalary}</Table.Cell>
              <Table.Cell>{jobPosition.applicationDeadline}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
