import { faCircleNotch, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default function Icons() {
  library.add(faCircleNotch, faGithub, faEnvelope);
}
