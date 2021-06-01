import React from "react";
// axios configurations
import { setAxiosHeader } from "config/axios";
// server cookie validations
import { getServerAuthenticationCookie } from "@lib/cookie";
// redirect
import redirect from "@lib/redirect";

const withAdminAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    React.useEffect(() => {
      if (props.tokenDetails) setAxiosHeader(props.tokenDetails.access_token);
    }, []);

    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async (ctx: any) => {
    let tokenDetails: any = getServerAuthenticationCookie(ctx);
    if (tokenDetails) {
      if (tokenDetails.user && tokenDetails.user.onboard) {
        const componentProps =
          WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
        return { ...componentProps, tokenDetails };
      } else {
        redirect(ctx, "/onboarding");
      }
    } else {
      redirect(ctx, "/signin");
    }
  };

  return Wrapper;
};

export default withAdminAuth;
