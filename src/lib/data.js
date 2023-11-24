import dayjs from "dayjs";
const date1 = dayjs("2023-01-17")
const date2 = dayjs("2023-06-14")
const date3 = dayjs("2023-07-11")
export let galleryInformation = [{
  slug: "camera",
  cardTitle: "Into the lens",
  cardDes: "more than meets the eye",
  cardImg: "../images/camera.jpg", 
 altText: "old camera on piano"},
  {
    slug: "leaves",
    cardTitle: "Autumn leaves",
  cardDes: "this calls for indoor games",
  cardImg: "../images/autumn-leaves.jpg",
  altText: "yellow and orange leaves on the ground"},
  {
    slug: "desert",
    cardTitle: "Midnight Dunes",
  cardDes: "Into the Horizon",
  cardImg: "../images/desert-starry-night.jpg", 
 altText: "desert at dusk"},
  {
    slug: "laptop",
    cardTitle: "Study hour",
  cardDes: "Signed, sealed, delivered",
  cardImg: "../images/laptop-with-mouse.jpg",
 altText: "laptop on table"},
  {
    slug: "mountain",
    cardTitle: "Mountaintops",
  cardDes: "Ain't no mountain high enough",
  cardImg: "../images/mountains.jpg",
 altText: "mountaintop at midday"},
  {
    slug: "beach",
    cardTitle: "Island shore",
  cardDes: "Wave after wave",
  cardImg: "../images/ocean-shore.jpg",
altText: "rock being hit by waves on beach"},
  {
    slug: "sassy1",
    cardTitle: "Let's be real",
  cardDes: "Safe and sound",
  cardImg: "../images/submission.jpg",
altText: "sas mate holding onto tree with sunset in background"},
  {
    slug: "sassy2",
    cardTitle: "Nature valley",
  cardDes: "Music makes anything better",
  cardImg: "../images/submission-2.jpg",
altText: "sas mate playing the guitar on green hill with rainbow in the background"},
  {
    slug: "sassy3",
    cardTitle: "Fashion crisis",
  cardDes: "Eye for eye",
  cardImg: "../images/submission-3.jpg",
  altText: "sas mate in funny orange hat"
}];

export let reviewInfo = [{reviewName: "Bill W.",
review: "SkatePaint, notably represented by Sarah, exceeded expectations with a patient, knowledgeable, and empathetic approach. The team's genuine care, personalized assistance, and commitment to customer satisfaction set a commendable standard in an era often characterized by impersonal service.", date: date1},
{
  reviewName: "Jason M.", review: "Such an amazing place to get a custom board! Makes gift shopping so easy", date: date2
},
{
  reviewName: "Jimothy P.", review: "great experience 10/10. I have been skating for years and have always wanted my own custom deck. I now own a 1/1 skateboard that is amazing quality", date: date3,
}]