import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    hot: true,
    open: true,
    port: options.port,
    historyApiFallback: true,
  };
}

