import QuestionFilters from "../components/Questions/QuestionFilters";
import QuestionsList from "../components/Questions/QuestionsList";
import RootLayout from "../layouts/RootLayout";

const IndexPage = () => {
   return <RootLayout>
      <QuestionFilters />
      <QuestionsList />
   </RootLayout>;
};

export default IndexPage;
