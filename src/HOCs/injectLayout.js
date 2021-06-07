import AppTopBar from "../layout/AppTopBar";
import Footer from "../layout/Footer";

const pageStyling = {
  paddingBottom: 50,
};
export const injectLayout =
  (Component) =>
  ({ ...props }) =>
    (
      <>
        <AppTopBar />
        <div style={pageStyling}>
          <Component {...props} />
        </div>
        <Footer />
      </>
    );
