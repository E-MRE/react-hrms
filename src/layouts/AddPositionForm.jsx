import React, { useEffect, useState } from "react";
import { Icon, Grid, Button, Header } from "semantic-ui-react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "../components/CustomInput";
import CustomDropdown from "../components/CustomDropdown";
import CustomTextArea from "../components/CustomTextArea";
import CustomCheckBox from "../components/CustomCheckBox";
import JobPositionService from "../services/jobPositionService";
import JobService from "../services/jobService";
import WorkTypeService from "../services/workTypeService";
import WorkTimeService from "../services/workTimeService";
import CityService from "../services/cityService";

const handleChangeSemantic = (prop, value, fieldName) => {
  prop.setFieldValue(fieldName, value);
};

const handleOptions = (list, textField) => {
  return list.map((item, index) => ({
    key: index,
    text: item[textField],
    value: item,
  }));
};

//TODO: set employerId
const handleOnSubmit = (values) => {
  values.creationDate = new Date();
  values.positionActive = false;

  let jobPositionService = new JobPositionService();
  jobPositionService
    .addJobPosition({ ...values, employer: { employerId: 11 } })
    .then((response) => {
      if (response.data.success) alert("İş İlanı Başarıyla Eklenmiştir");
      else alert(response.data.message);
    })
    .catch((error) => alert(error.message));
};

const schema = Yup.object({
  positionName: Yup.string()
    .max(50, "Pozisyon Adı maksimum 50 karakter olabilir")
    .min(3, "Pozisyon adı minimum 3 karakter olmalıdır")
    .required("Zorunlu alan"),
  job: Yup.object().required("Zorunlu alan"),
  minSalary: Yup.number()
    .min(0, "Maaş minimum 0 olabilir")
    .required("Zorunlu alan"),
  maxSalary: Yup.number()
    .min(0, "Maaş minimum 0 olabilir")
    .required("Zorunlu alan"),
  activePositionQuantity: Yup.number()
    .min(1, "En az 1 kişi eklemelisiniz")
    .required("Zorunlu alan"),
  workType: Yup.object().required("Zorunlu alan"),
  workTime: Yup.object().required("Zorunlu alan"),
  city: Yup.object().required("Zorunlu alan"),
  applicationDeadline: Yup.date()
    .min(new Date(), "İleri tarihi seçmelisiniz")
    .required("Zorunlu alan"),
  description: Yup.string()
    .min(10, "En az 10 karakter ile açıklama yapmalısınız")
    .required("Zorunlu alan"),
  acceptedTerms: Yup.boolean()
    .required("Zorunlu alan")
    .oneOf([true], "Sözleşme şartlarını kabul etmelisiniz."),
});

const initValues = {
  positionName: "",
  job: {},
  minSalary: "",
  maxSalary: "",
  activePositionQuantity: "1",
  workType: {},
  workTime: {},
  city: {},
  applicationDeadline: "",
  description: "",
  acceptedTerms: false,
};


const AddPositionForm = () => {
  let jobService = new JobService();
  let workTypeService = new WorkTypeService();
  let workTimeService = new WorkTimeService();
  let cityService = new CityService();

  const [jobs, setJobs] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [workTimes, setWorkTimes] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    jobService
      .getJobs()
      .then((result) => {
        if (result.data.success)
          setJobs(handleOptions(result.data.data, "jobName"));
        else alert(result.data.message);
      })
      .catch((error) => alert(error.message));

    workTypeService
      .getWorkTypes()
      .then((result) => {
        if (result.data.success)
          setWorkTypes(handleOptions(result.data.data, "workTypeName"));
        else alert(result.data.message);
      })
      .catch((error) => alert(error.message));

    workTimeService
      .getWorkTimes()
      .then((result) => {
        if (result.data.success)
          setWorkTimes(handleOptions(result.data.data, "workTimeName"));
        else alert(result.data.message);
      })
      .catch((error) => alert(error.message));

    cityService
      .getCities()
      .then((result) => {
        if (result.data.success)
          setCities(handleOptions(result.data.data, "cityName"));
        else alert(result.data.message);
      })
      .catch((error) => alert(error.message));
  }, []);

  return (
    <>
      <Header as="h2" icon textAlign="center" style={{ marginBottom: "3em" }}>
        <Icon name="add circle" circular />
        <Header.Content>Pozisyon Ekle</Header.Content>
      </Header>

      <Formik
        initialValues={initValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleOnSubmit(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formikProps) => (
          <Form>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                  <CustomInput
                    fluid={true}
                    label="Pozisyon Adı"
                    name="positionName"
                    type="text"
                    placeholder="Pozisyon Adı"
                    iconPosition="left"
                    icon="tag"
                  />
                </Grid.Column>

                <Grid.Column width={8}>
                  <CustomDropdown
                    fluid={true}
                    label="İş Kolu"
                    name="job"
                    placeholder="Seçiniz"
                    options={jobs}
                    onChange={(event, data) =>
                      handleChangeSemantic(formikProps, data.value, "job")
                    }
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={8}>
                  <CustomInput
                    fluid={true}
                    label="Minimum Maaş"
                    name="minSalary"
                    type="number"
                    placeholder="Minimum Maaş"
                    iconPosition="left"
                    icon="money"
                  />
                </Grid.Column>

                <Grid.Column width={8}>
                  <CustomInput
                    fluid={true}
                    label="Maksimum Maaş"
                    name="maxSalary"
                    type="number"
                    placeholder="Maksimum Maaş"
                    iconPosition="left"
                    icon="money"
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <CustomInput
                    fluid={true}
                    label="Alınacak Kişi Sayısı"
                    name="activePositionQuantity"
                    type="number"
                    placeholder="Alınacak Kişi Sayısı"
                    iconPosition="left"
                    icon="users"
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={8}>
                  <CustomDropdown
                    fluid={true}
                    label="Çalışma Tipi"
                    name="workType"
                    placeholder="Seçiniz"
                    options={workTypes}
                    onChange={(event, data) =>
                      handleChangeSemantic(formikProps, data.value, "workType")
                    }
                  />
                </Grid.Column>

                <Grid.Column width={8}>
                  <CustomDropdown
                    fluid={true}
                    label="Çalışma Saatleri"
                    name="workTime"
                    placeholder="Seçiniz"
                    options={workTimes}
                    onChange={(event, data) =>
                      handleChangeSemantic(formikProps, data.value, "workTime")
                    }
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <CustomDropdown
                    fluid={true}
                    label="Lokasyon"
                    name="city"
                    placeholder="Seçiniz"
                    options={cities}
                    onChange={(event, data) =>
                      handleChangeSemantic(formikProps, data.value, "city")
                    }
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <CustomInput
                    fluid={true}
                    label="İş İlanı Bitiş Tarih"
                    name="applicationDeadline"
                    type="datetime-local"
                    placeholder="GG/AA/YYYY"
                    iconPosition="left"
                    icon="add to calendar"
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <CustomTextArea
                    fluid={true}
                    name="description"
                    label="İş Tanımı"
                    placeholder="İlan hakkında bilgi verin"
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <CustomCheckBox name="acceptedTerms">
                    Şartları kabul ediyorum
                  </CustomCheckBox>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Button primary type="submit">
                    Submit
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddPositionForm;
