#! /usr/bin/env node
import { hideBin } from "yargs/helpers";

import cli from "../cli";

cli(hideBin(process.argv));
