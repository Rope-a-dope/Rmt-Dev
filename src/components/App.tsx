import { Toaster } from "react-hot-toast";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";

function App() {

  return (
    <>
      <Background />

      <Header />

      <Container>
        <Sidebar />
        <JobItemContent />
      </Container>

      <Footer />

      <Toaster position="top-right" />
    </>
  );
}

export default App;
