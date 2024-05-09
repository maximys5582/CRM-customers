import { getImageByKey } from "../getImageKey"
import { options } from "./options"

export const clientArray = [
  {
    id: 1,
    clients: { firstName: "Mustermann", lastName: "GmbH" },
    type: {
      title: "SFF",
      typeSubscribe: "",
      subscriptionDuration: "",
      userPlaces: 0, // Замените строку на число
      paymentProcedure: "",
      generalExpenses: 0, // Замените строку на число
    },
    responsible: { img: getImageByKey("avatar"), name: "Sheldon" },
    date: "22.10.2023",
    employee: 113,
    user: 147,
    load: 96,
    product: 300000,
    project: [{
      leftText: "Projektname goes here",
      new: true,
      projectCompletion: 95,
      icon: getImageByKey("euro_svg"),
    },
    {
      leftText: "Other project",
      new: true,
      projectCompletion: 82,
      icon: getImageByKey("euro_svg"),
    },
    {
      leftText: "Projektname goes",
      new: false,
      projectCompletion: 82,
      icon: getImageByKey("euro_svg"),
    },
    {
      leftText: "Other project",
      new: false,
      projectCompletion: 82,
      icon: getImageByKey("euro_svg"),
    },
    {
      leftText: "Projektname goes",
      new: false,
      projectCompletion: 82,
      icon: getImageByKey("euro_svg"),
    },
    {
      leftText: "Other project",
      new: false,
      projectCompletion: 82,
      icon: getImageByKey("euro_svg"),
    },],
    actions: false,
  },
  {
    id: 2,
    clients: { firstName: "Mustermann", lastName: "GmbH" },
    type: {
      title: "SA",
      typeSubscribe: "STUDIO",
      subscriptionDuration: "12 mounth",
      userPlaces: 200,
      paymentProcedure: "Yearly",
      generalExpenses: 6000,
    },
    responsible: { img: getImageByKey(""), name: "Sheldon" },
    date: "22.10.2023",
    employee: 113,
    user: 147,
    load: 82,
    product: 300000,
    project: [{
      leftText: "Projektname goes here",
      new: true,
      projectCompletion: 95,
      icon: getImageByKey("euro_svg"),
    },
    {
      leftText: "Other project",
      new: true,
      projectCompletion: 82,
      icon: getImageByKey("euro_svg"),
    },
    {
      leftText: "Projektname goes",
      new: false,
      projectCompletion: 82,
      icon: getImageByKey("euro_svg"),
    },
    {
      leftText: "Other project",
      new: false,
      projectCompletion: 82,
      icon: getImageByKey("euro_svg"),
    },
    {
      leftText: "Projektname goes",
      new: false,
      projectCompletion: 82,
      icon: getImageByKey("euro_svg"),
    },
    {
      leftText: "Other project",
      new: false,
      projectCompletion: 82,
      icon: getImageByKey("euro_svg"),
    },],
    actions: false,
  },
  {
    id: 2,
    clients: { firstName: "Mustermann", lastName: "GmbH" },
    type: {
      title: "SA",
      typeSubscribe: "STUDIO",
      subscriptionDuration: "10 mounth",
      userPlaces: 180,
      paymentProcedure: "Yearly",
      generalExpenses: 8000,
    },
    responsible: { img: getImageByKey(""), name: "Sheldon" },
    date: "22.10.2023",
    employee: 113,
    user: 147,
    load: 82,
    product: 300000,
    project: [{
      leftText: "Projektname goes here",
      new: false,
      projectCompletion: 95,
      icon: getImageByKey("euro_svg"),
    },
    {
      leftText: "Other project",
      new: false,
      projectCompletion: 82,
      icon: getImageByKey("euro_svg"),
    },
    {
      leftText: "Projektname goes",
      new: false,
      projectCompletion: 82,
      icon: getImageByKey("euro_svg"),
    },
    {
      leftText: "Other project",
      new: false,
      projectCompletion: 22,
      icon: getImageByKey("euro_svg"),
    },
    {
      leftText: "Projektname goes",
      new: false,
      projectCompletion: 42,
      icon: getImageByKey("euro_svg"),
    },
    {
      leftText: "Other project",
      new: false,
      projectCompletion: 72,
      icon: getImageByKey("euro_svg"),
    },],
    actions: true,
  },
]
