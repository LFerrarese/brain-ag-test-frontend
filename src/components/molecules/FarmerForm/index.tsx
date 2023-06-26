import * as yup from "yup";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { GiFarmer, GiFarmTractor, GiShinyApple } from "react-icons/gi";
import { MdAddBox } from "react-icons/md";
import { BsPersonVcardFill } from "react-icons/bs";
import { RiTreasureMapLine } from "react-icons/ri";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { TbPlant } from "react-icons/tb";
import { Farmer, State } from "@interfaces";
import { Form } from "~/components/atoms/Form";
import { Input } from "~/components/atoms/Input";
import { Card } from "~/components/atoms/Card";
import { Select, SelectOption } from "~/components/atoms/Select";
import { getCropList } from "~/services/crop";
import { useAlert } from "~/hooks/useAlert";
import { Button } from "~/components/atoms/Button";
import { createFarmer } from "~/services/farmer";
import { getStateList } from "~/services/state";
import { Container, Row, Title, Category } from "./styles";

type FarmerFormProps = {
  farmer?: Farmer;
  onSubmit?: () => void;
};

export const FarmerForm = ({
  farmer,
  onSubmit,
}: FarmerFormProps): JSX.Element => {
  const [cropList, setCropList] = useState<SelectOption[]>([]);
  const [stateList, setStateList] = useState<State[]>();
  const [selectedCrops, setSelectedCrops] = useState<SelectOption[]>();
  const [selectedState, setSelectedState] = useState<SelectOption>();
  const [selectedCity, setSelectedCity] = useState<SelectOption>();

  const { error, success } = useAlert();

  const schema = yup.object().shape({
    name: yup.string().required(),
    document: yup.string().required(),
    farmName: yup.string().required(),
    totalArea: yup.number().required(),
    arableArea: yup.number().required(),
    vegetationArea: yup.number().required(),
  });

  const form = useFormik({
    initialValues: {
      name: farmer?.name ?? "",
      document: farmer?.document ?? "",
      farmName: farmer?.farmName ?? "",
      totalArea: farmer?.totalArea ?? 0,
      arableArea: farmer?.arableArea ?? 0,
      vegetationArea: farmer?.vegetationArea ?? 0,
    },
    validationSchema: schema,
    onSubmit: async (data) => {
      if (!selectedCrops || !selectedCrops.length) {
        error("Nenhuma cultura selecionada");
        return;
      }

      if (!selectedState || !selectedCity) {
        error("Nenhum Estado e Cidade selecionados");
        return;
      }

      const crops = [...selectedCrops.map((crop) => crop.value as string)];
      const address = {
        stateId: selectedState.value as string,
        cityId: selectedCity.value as string,
      };

      const response = await createFarmer({
        farmer: {
          ...data,
          arableArea: Number(data.arableArea),
          vegetationArea: Number(data.vegetationArea),
          totalArea: Number(data.totalArea),
        },
        address,
        crops,
      });

      if (response) {
        success("Informações guardadas com sucesso!");
        return onSubmit && onSubmit();
      }
    },
  });

  const getCrops = async () => {
    const crops = await getCropList();
    if (crops) {
      const list = crops.map((crop) => ({
        label: crop.name,
        value: crop.id,
      }));

      setCropList(list);
    }
  };

  const getStates = async () => {
    const states = await getStateList();

    if (states) {
      setStateList(states);
    }
  };

  useEffect(() => {
    getCrops();
    getStates();
  }, []);

  return (
    <Form onSubmit={form.handleSubmit}>
      <Card>
        <Container>
          <Row className="title">
            <Title>Cadastrar Agricultor</Title>
            <AiOutlineCloseSquare size={40} onClick={onSubmit} />
          </Row>
          <Row>
            <Input
              label="Nome"
              id="name"
              name="name"
              placeholder="joaosilva@agro.tech"
              onChange={form.handleChange}
              value={form.values.name}
              icon={{
                start: {
                  Icon: GiFarmer,
                },
              }}
            />
            <Input
              label="Documento"
              id="document"
              name="document"
              placeholder="CPF ou CNPJ"
              onChange={form.handleChange}
              value={form.values.document}
              icon={{
                start: {
                  Icon: BsPersonVcardFill,
                },
              }}
            />
          </Row>
          <Input
            label="Nome da Fazenda"
            id="farmName"
            name="farmName"
            placeholder="Fazenda Feliz"
            onChange={form.handleChange}
            value={form.values.farmName}
            icon={{
              start: {
                Icon: GiFarmTractor,
              },
            }}
          />
          <Input
            label="Área Total"
            id="totalArea"
            name="totalArea"
            placeholder="500 he"
            onChange={form.handleChange}
            value={form.values.totalArea}
            icon={{
              start: {
                Icon: RiTreasureMapLine,
              },
            }}
          />
          <Row>
            <Input
              label="Área Agricultável"
              id="arableArea"
              name="arableArea"
              placeholder="420 he"
              onChange={form.handleChange}
              value={form.values.arableArea}
              icon={{
                start: {
                  Icon: GiShinyApple,
                },
              }}
            />
            <Input
              label="Área de Vegetação"
              id="vegetationArea"
              name="vegetationArea"
              placeholder="80 he"
              onChange={form.handleChange}
              value={form.values.vegetationArea}
              icon={{
                start: {
                  Icon: TbPlant,
                },
              }}
            />
          </Row>
          <Category>Localização</Category>
          <Row>
            <Select
              options={
                stateList
                  ? [
                      ...stateList.map((state) => ({
                        value: state.id,
                        label: state.name,
                      })),
                    ]
                  : [{ label: "Carregando...", value: "" }]
              }
              onChange={(value) => setSelectedState(value as SelectOption)}
              placeholder="Estado"
            />
            <Select
              options={
                stateList && selectedState
                  ? [
                      ...stateList
                        .filter((state) => state.id === selectedState.value)[0]
                        .City.map((city) => ({
                          value: city.id,
                          label: city.name,
                        })),
                    ]
                  : [{ label: "Carregando...", value: "" }]
              }
              onChange={(value) => setSelectedCity(value as SelectOption)}
              placeholder="Cidade"
            />
          </Row>
          <Category>Culturas</Category>
          <Select
            id="crops"
            name="crops"
            options={cropList || []}
            onChange={(selectedOptions) =>
              setSelectedCrops(selectedOptions as SelectOption[])
            }
            placeholder="Culturas Plantadas"
            multi
          />
          <Button type="submit" className="farmer-submit">
            Cadastrar <MdAddBox size={30} />
          </Button>
        </Container>
      </Card>
    </Form>
  );
};
