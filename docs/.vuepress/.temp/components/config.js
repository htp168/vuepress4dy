import { hasGlobalComponent } from "/cloudide/workspace/vuepress/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.66_typescript@5.7.2_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/cloudide/workspace/vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.65_sass@1.83.0_typescript@5.7.2_vuepress@2.0.0-rc.19/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/cloudide/workspace/vuepress/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.65_sass@1.83.0_typescript@5.7.2_vuepress@2.0.0-rc.19/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "/cloudide/workspace/vuepress/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.66_typescript@5.7.2_vuepress@2.0.0-rc.19/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
