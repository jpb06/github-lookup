import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import GloballyBusy from "../../generic/globally-busy/GloballyBusy";
import * as api from "../../../logic/api";
import LookupApi from "../../../logic/api/setup/lookup.api";

const LoginCallback = () => {
  const history = useHistory();

  useEffect(() => {
    const login = async () => {
      const url = new URL(window.location.href);

      const code = url.searchParams.get("code");
      if (code) {
        const result = await api.login(code);
        if (result) {
          LookupApi.setup(history);
          history.push("/home");
        } else {
          history.push("/");
        }
      }
    };

    login();
  }, [history]);

  return <GloballyBusy text="Logging in ..." />;
};

export default LoginCallback;
