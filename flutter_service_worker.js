'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/config": "8224e8719283d66be7454dc6683220a5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "695080cc3a9a4418a64f3d49162a1097",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b891ac2cc8c5fed1946bb9627e6b61ca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "530e497769e5ef7378ac4fcbf8b0c718",
".git/logs/refs/heads/main": "3c36fde783008013e128d1af8d67706f",
".git/logs/refs/remotes/origin/main": "df14437f4386a468b38e427e9ce3cf6e",
".git/objects/00/5aae3fa827ddb186eba22d69658987875e3087": "aa873126fce125e178e33659842f1df4",
".git/objects/00/8c40ff440a60b46f6aebff87b284e53f0f9e83": "70575637e26c321e13c6312425921ac3",
".git/objects/00/d67924904c93651d738bb8e45cb5a63b8c5809": "870e16eb83268dadb79f1b988f9ba61a",
".git/objects/01/4877bd45dbe65141af3a52c522fd74970cc97c": "cf8c1a6869a9b6fd17c54b3dc40328fd",
".git/objects/01/d92f463105f477dfd1b6b38455176246bdb9df": "dc4386486f82c6e0a33cc9fb1cb9bb44",
".git/objects/01/da4cca2ce122adad42563438134a2dcaf3bb7b": "1e244ebdba16cb49b0a54fb259cf84ca",
".git/objects/04/cea0bfe146fa22120855465364e3d6cc3dea49": "38ff661711f357515d035f6268d199b1",
".git/objects/07/9a7d581f7eb223f6a9f2d90555f62c49ddd47b": "4dfb8c73b7c8e40525a0b97ec60105f0",
".git/objects/0a/a91cf69bf891b6a1922c83a1b1af9837d54d06": "b73b96bd483ce0c818db8c5eed877fd8",
".git/objects/0a/e050a74a571f25886fb9a8ec3cdac9c4e06f9a": "f181b985bf68d812db4baeb2559a9969",
".git/objects/0c/365baa1dd2fc04866012e44f3ac38472a68057": "a55e75f64400e7b43200ed9a25d5e775",
".git/objects/0c/384ba019d3c2b2377d9bdf26e08cd7c624363f": "650c63dc50f9a0d15562806c52db9ab6",
".git/objects/0c/b4a051e0b8486342640bce0cd4acca37151b49": "c59745240b060a6c5d1cb93d81eab68d",
".git/objects/0e/78b14517376c8d5ce3d6a6115adf3016ec2d7f": "d951cfc70306031dfef70293aba157cd",
".git/objects/0f/6360416cda5aabfd95a57edeee56b973fac1b5": "e1e5edbad7fbd3d442d727295181430f",
".git/objects/10/179c4ff744208411de193ca76e7135222bd05c": "9f2d81474d2ca2b80a81e25329758b67",
".git/objects/13/470a8bbb587220e0235029a069b91819449585": "2f254096230771270569c26d7f09a066",
".git/objects/14/e57a02f11186b685b56c5cfcdc44379c6c338a": "76cb4dd546362520c714135afd3bc327",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/17/a1629ec912b906ca66ffa97b2a830e0f4c507f": "4c744621fcc87d6f2dd99c55c8029985",
".git/objects/18/37fb2ad03fed1560717329de3ac14f92b0fe70": "bb3e0939ab4c13bf97c08badf53b1160",
".git/objects/18/e423bbbc3ff33184cc2c6226d8efad077cadd1": "28cbb45c4c21c44b2c94ecf5f7b8ebf2",
".git/objects/19/6a59f4a2a8c139b106c6dc3c821c2abeefac1e": "298e107c2498b7493d939ec433c2a9e4",
".git/objects/19/b27bb1b606c6f3ebf6cae4ac427e3203a5cd4d": "dd6372778550033c4243d764bdd8c6f2",
".git/objects/1a/025c881d2ca78eba071bee64a25ca16170d7be": "250b999f7b28eeea098ab21836620580",
".git/objects/1a/6f41cce18fa388d037844021d30239ce19e262": "90f3574f301a31a212ac27651d00c384",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/bc162ae903906d50382cee9c3ef392e9d04290": "f8ae926cf847b65e9c9dde7d98072abb",
".git/objects/1b/ef0291741332404bf43e241a50b278f4399ca3": "33a1afd6633b07746d9531c68c7a2c71",
".git/objects/1d/08c29a0b2581128ce0fefc578c24e93daed2ec": "a63e6c5e8abe563c1ec951b969402c09",
".git/objects/1d/20080dac13cd20a62d9281a539a556c13ace9a": "a268b4b9440606087f7750425a9c1d24",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/16018ebf098943019526377d058c30a0cbdf95": "a5027eb8efe96a9ad0b6950bc96f1694",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/c17c3ec6dd1792bd04dab36de83ee14a41524a": "2896d8c98115350f07baae18b8065231",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/aa738ec8604d5dc7360c17b3d0f5b76c34fa98": "53715d55740ba856f503a28779221f1a",
".git/objects/23/370a9ca65173deac01533c41351e42203cc259": "facb00db53eb1b29247fb80a0cd388d5",
".git/objects/23/58dcde9de6ff49eb6f42c0a2a423a16fc349f7": "89429ea6e1a4fe0e60ade050119bf6c7",
".git/objects/23/89ecc8df19d898fdfa254e35a4625bdef4cdd2": "bd30b10f2216e48990705c3989ef0ee7",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/49e6d1fe78b96699f47a1fc7b25bcbe195000e": "a57eb440875435ab79c66aeb53b884d4",
".git/objects/28/91cc86890fa8ab960a459e1519b45053b88190": "eb3a9888fc687dc97a9538d7bab2fca0",
".git/objects/29/7bb71c43b9ac42b83782a6021c9f6f5bd23648": "def682a0b48b5272e470aeb64e33b2e2",
".git/objects/2a/127a35368874665b73c1d5830522b5ad4f5741": "db20b2df57cb19e6daa115c5ba31d7f0",
".git/objects/2a/bd63cbe86deae2afbb3301dc89e5c7f91007d2": "8fb3e27d0a75411b7e39b125e3fc360b",
".git/objects/2a/c6741952a17b3d429ac58f1045d3304bdcd2f5": "78e369a2a11f2bb3207571536478171c",
".git/objects/2b/479f44994b3de3c7a869a584234508f050e67b": "85ca33c2547e0b7ab0c556436aa1d88f",
".git/objects/2c/1b6e88e4cdb3fac6587791e206ea3fcc59a593": "13c2bf3b4f92fbf5d70b5a6422c5f0d4",
".git/objects/2c/91bd7773062147775b94a3aa93fb152d9a74f1": "9f9fae14dec9c5272aa8a4aed3c61a32",
".git/objects/2c/da0e9e33f20c2924ca65cfc4fe21e757044c9e": "4856f0ecc41e9f218d8ede1d3cc1d196",
".git/objects/2e/3604add2695e5bdb70babf90ab8c1dc01c4732": "5b2128a9593588c15c5ccb7f6182b100",
".git/objects/2e/5cc9c5c5a832fd7dc17747459e76f113a130ce": "da2d1803f0d24689a6c75543ee2eff9e",
".git/objects/2f/8b3106ff5cbb616e688e1f4bd1f0733ef3e494": "654c8f82604e1fe5ed57b795ec1362c3",
".git/objects/30/43bfc5934fd1848cac822fa45ce1e9a830e691": "749cf95f7110ac4af8c3b61c1ded1bd5",
".git/objects/31/5ec3f1be9163b38b60d423b06069f51585b077": "0e530908dc72ddcfb849786b50b4d4a0",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/fa719fe004b84357c3cf8af32d921c0d239f52": "8e37765fc8c54c80f7492b680fbb63a9",
".git/objects/33/fc2b0d7de2a90cd9594cb9b3ecc8ce21d28f81": "e34783b5a5aba79de88e416d4fcc5b50",
".git/objects/34/471393c4e5c6b4995553f14eb2c6d4a36ea5f7": "4f7f8705bb077983846fb88dbfbbb105",
".git/objects/35/6d75d0f66075932b9ac6503f67edd2fd8110c2": "15e0019d68f0cf2836e13650a892ed2d",
".git/objects/35/c09ee6815fd3434fc976e26524260849079d23": "9e0aaa3062bc53456e03978be35025a6",
".git/objects/36/28893ffada11bceaee22230ab989273e4f4ab6": "a74fbb600f0619f23250e9aa429e191c",
".git/objects/36/bc4d14e26d5418c2afe224d67804e4aa181627": "144e2b16fd758b7d42af56088d636a6e",
".git/objects/37/54c30e7178bb1faf2576aa222500da6aa0464c": "8000ee05140a1b3864debe0443c2345e",
".git/objects/37/f0c613d9de4d914b2938c7310d7a9ef7a81712": "dea8c3a5e7ab4154114360b042b70da1",
".git/objects/38/8ecdb1b8e0d1851ddda4357e163c09828f2051": "0ed36365f2e6b5d9159fbcdeb92e9137",
".git/objects/39/aba5add8c3a28f07aedd7ae5ba21358d14550e": "e25699ae4baa4c872b5a07346f9f28ec",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/fa050957af9aa3966a4a5f7cc4f6e580dd6789": "0be5b6d73d1bf801c29401016b1a6aed",
".git/objects/3b/e2110a3535e26c46c0cf662a12f6fe8f645ee5": "d933a7c97e5561c673372381593ff9a7",
".git/objects/3c/99aac51b2dc4ae9ddd131887365e878d7541d7": "09b90bc5c9f6b5e86a5910e73971c0d2",
".git/objects/3d/aa835d47b1d025dc57f4861d30743100b176b7": "11ac7015ac43d1c2848c47d3add032a0",
".git/objects/40/1869df66adb2a14f9d41cfb63c7c9896689f1d": "1c6b8bbd4eebc9e88a88c0be40086a2d",
".git/objects/40/ce125c2b2b4ea1f7726e835ee1e600d62ec317": "462ce1e3142a2196fd8c8f5f96b0909a",
".git/objects/41/0e22f15f598f76de4b407fb5c3a037e6d15f23": "c287a5d72bbd1d7ca98fb7d3f311785d",
".git/objects/45/5beecc2cf628f258dfeca389e28a78c028801a": "7492d1db36459c270f13aac1bb89425d",
".git/objects/45/869c111bc9710f558b403754a307a4dbf9a3c7": "e5ea6adafb06be47cbbc7c1c556b179e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/6832a324c60c1cd421cb563df7796276543d92": "cabed2e6384f2c47d1ffc06a0ddf193a",
".git/objects/48/cfdca78569cd2279ffe40754038bd3a8d6e20f": "3beabf6c341d70af692411db79208483",
".git/objects/48/eb03a1cc178bb878b0fb82338f327c720c280a": "0a3d84262784893a7a4be1f56cb0616e",
".git/objects/49/317e8c2d9919f4cd995b27dc1e93b2b1653fd3": "185dcce6ccce621b4d6d91f9292b006a",
".git/objects/4a/48c66ff8c3e8514d7e009a48629ed237c02f7c": "ef9e5f09457ca1a12e5f0c9893fae1c1",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/d11860015f43549b7d13d05d68e02b23d3a35f": "01d330570b903295f94361102832460c",
".git/objects/4c/418b2ed362010d9bc252b79bf7c1d6444df65d": "efe85e0eed4f65801ecfc6f05a161885",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/7fa3e254cc94905a6994acbb65aeb8fcb38a58": "3d5ce094429c968c678a1e0c65601e52",
".git/objects/4c/9649fa2199461d51da19735298b23aac75888f": "7b82f6d84eb8e16787ec34099a6041cb",
".git/objects/4c/bc59f7b3fcd2d96deacfc26051739d1570f57d": "b863841da396af6eb8d68662cd66e2d4",
".git/objects/4d/f32123febd0bf82c3ffa0bba630b675df17c23": "1ab7f86705b115b7ac8bcd0699e0d804",
".git/objects/4e/a6c4a7009714877830ae5fbc41d8a5046fc08d": "f3c51d7d56825547dcb69ed5f7379bc5",
".git/objects/4e/f520963c4c207f163abdff57df8077c1303aa7": "7764a2922762b31b4137d934b2e7665f",
".git/objects/4f/dc25249bcabec0122d6aac201d55d30e23b9e0": "4fbe25e13b81b65367e32b0390eb1cf8",
".git/objects/50/3642accf2e44cfdd0bdbb84370b6c2671661a5": "5d871eff988f0a65b802450c57b90da3",
".git/objects/50/bcfb12a7a63e613ef3fcaa1d9596bb68594d74": "19f95ac28efe533fed7fb299efed542c",
".git/objects/50/cd8baea3c0c1d1ee4f3ae5ff54ee12b7ad6f0f": "dcf83c649de0cd0cfd7c6d71e549e3a6",
".git/objects/50/d70dfd2317c580f955132307c9c59e78b9c305": "a65e713be938fe6e4009c22024d8f06c",
".git/objects/51/45d3f68b35a5aae0b66ab4d6d255dda2e34fa9": "40317c84413a977452aeff7e452799e1",
".git/objects/52/4cf7bc8ec9b20c9e28e53a65c6ae74accd9b12": "aae0b0ffe357716f28b950ec409a20ba",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/9bd2cd93e9992b2ec18ebd9cd3188ba679a8e0": "cd73c9a86da76e50268369b200dc6a59",
".git/objects/53/d5fcc3fe443e490bf7803ccd77cb2202f159d1": "83ebf035c6ebc75b99e31029780b1189",
".git/objects/54/a5f590e166b442e51655a960acf67a10625ce9": "0c3096dd16eefed5f17501f8f64497ea",
".git/objects/55/c598906e784f258e7ab1f21a4256cbece464c2": "ccf0fd4460a120456f6747810119281c",
".git/objects/57/ace359588f1efb3d05cb64ce41a657031eefa1": "04cab6d4c0e4958282a42a993f73f157",
".git/objects/57/b6485306d86a2548cfe8df1049effbeca9598d": "1fa7036663f8c00da5a5f2a90aa32e08",
".git/objects/58/c0fd449fd0032ae6dda868437451ae60be8ebf": "6760a10f7fdc140fa48aaf55a2d64e84",
".git/objects/58/de82aecdb25ffdfeda45a3e78de767f62a20bd": "e4ab19c8e47b996080c1b4b081029898",
".git/objects/59/203257c56692a07d9109ccf598c88cef8a7d14": "73c15215a346170f9dd7b0c143cc33c8",
".git/objects/59/384a628666de9dc1c76b1293b3ca5416743439": "dbb21bd4d7f96854d01becb82eb3457b",
".git/objects/59/461c9aca632f4e5d6691cbe9dd74178b702c76": "b6220596ff6595e24c03ae1ca1f0da3e",
".git/objects/59/5bdc4c6d5af4778434177c1e5f1af6d13df870": "a825c40f049dbdd6c9d0c4ed956adb29",
".git/objects/5a/592515d915d0ec71a27d49e50994a31b7e8524": "0e729f898a0659f321d1bba5cbe14ef1",
".git/objects/5b/7bc0f3339565da2fb5e6b4730de87165044553": "9e0a3334c5eb912f12e00d78f224bf48",
".git/objects/5b/bb704abbe3342d1b1be39fdc9b0be9a2448106": "5f71d89da1c7980ea0fe65efe9f86e81",
".git/objects/5c/6abf4c61a70843680d470d637bbefc33439a24": "e939c47376858363bf0f4b463bca7348",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/75058b79bdfcf64741fdc76b6de4443253ee18": "5f9ddde13b48eb859af6e04083806cb1",
".git/objects/5d/cdbbc3833e4cf58f7ac4624b9f56a0546d189d": "a73a71e2c01bab1ec604b90031457eea",
".git/objects/5d/e60089a16fbe0e3b0b2d758e0017dfae177282": "7455b64c7d79341ddf2bd5b120bfd2dd",
".git/objects/5e/37d44f5e0413adb181b670650001b2d82407f5": "b1835054940134be6092e42183dad059",
".git/objects/5f/bfe35aeb99546b7bf80e3c930b07af4c36063e": "c162ec13b96edd15b1223c09204c571d",
".git/objects/60/9ebe4d98f20ec723d34f45df36c8cac46c4b86": "8531020be6288ca923dfd58d22af468c",
".git/objects/61/2e976ed5fe14e1bbc39074df3e4ee3e004a8b2": "4348d8b70f263aa26c9048792c2fe8c4",
".git/objects/64/544cbaa1d3e9618dd53aa126b9c478fabd4187": "52ed674b6fbf414509816c15d421681f",
".git/objects/66/8de05f223e7f6cbc335c15bf3b90649824071d": "e379e290d8c3ceed82769b1966a2ccef",
".git/objects/66/9328aa3c555e40f901b27396d1e1e15c8286a1": "b19f9c68a139c02b93f87ba319d99e54",
".git/objects/66/fc37308c0db7266991570c935c1ff38b219d0e": "33f0c7b61625933ab71d151e1939cc9a",
".git/objects/67/bedad4839cffae62c9203bbaf2fc643482b878": "d0a8d7fbf8701b1749e0278eaceb6dfd",
".git/objects/6a/11011d54dd7f9af46441573b2b15e27fd9c775": "0222f85e0a780613775219cc20756f4c",
".git/objects/6a/38deedf75d76ee5f6a968342deaf9221c3cbd4": "5b9d2c61f8d6b3d88de169dedcfffdc6",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/9c76b03e58af16c02ba291d9a56abafa21bf9e": "9cf6244d2157fe827527a7fd478784fd",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/2a142a0057a1680202778d2a292c5fc8f0273d": "b07da8e7ab88b0969fb651035e62ba18",
".git/objects/6c/aaa8e998fea88a515024bd6d43b5a6d4b79d4d": "f838c80936bfec70b69dc0e92a9f65e2",
".git/objects/6c/b21d1186cf1a165f720448ea5dc3b839a43cd4": "3977048f2641b1951bf3e347f9936d78",
".git/objects/6d/e6aa4be025016e72ea1669764b56d9a0929466": "d9eae9cde3017bd4c18606bad808ae8a",
".git/objects/6e/079f1f321d10378e076f43cffab37c69fd190d": "1f477b483e2a4dc6452343d1a0d74b26",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/4d7bd0259588565a5bcd3a79a3e7cccaf4f717": "f4b2c5b29a05a91a99ba4e80a43ce61d",
".git/objects/72/165a3b10a2bb061e4e316b2947929c477046a0": "0353cd1981bd2c533e6b1cdc377d93a5",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/3ddbefc7be0835942e2c52014b373953299cee": "3555cb0ee48e26051876d2054c767638",
".git/objects/75/29aa4e7e29be9815b04d0fa6b98ef0c8136927": "eb9fcaf9dd8c32c5f316185e2fdeaddb",
".git/objects/76/c3f2bc86d9b2bf4213f864449f7791a3747083": "fb27a0ecf4d7efeee072921495991f3a",
".git/objects/7a/03f22e71dcf49b52f670b309c8f6d64bdaf335": "50d075d13d0d42d44dd5b11c99c0a894",
".git/objects/7b/730568b929f0f2c20e2c609c988f6ce52b3204": "08a9305e67948303242c953609d2f27f",
".git/objects/7c/3b6ce35c4e317195373ef328a5c80cc7904dcd": "647f2a5ad9c213d349bcf8e5d2f606d4",
".git/objects/7d/6f5d10192772c6592c0a7938dadde532e25b3e": "366fba31c5970fe073bc4eded800fb95",
".git/objects/7e/cf5186cd76315c3438266cb8805c90332bb5d8": "89defee98132cab0919230c2c72d77eb",
".git/objects/7f/21474ea73df71612edf9be87ee400f6cf0fb86": "d2a84f88f45ff8f7cfcb204f8c3bf63b",
".git/objects/7f/c27209fc1d5c226378ab55950b11803c3d1f07": "79baf9eb466cc3a166be403eb48c819e",
".git/objects/81/5248e80d98fb4a729be90778fc9959b32359ff": "5169fcd18903fa196687b04580b8ffac",
".git/objects/81/615b40e416bea962e554823ba1955b4c38c926": "05024a1f2362cc3525d5e85c130cc342",
".git/objects/81/7d64bc433a4d52297baf4ac1f320bf91271344": "bfc5f0b86d9fa457590f2c36df65a5dd",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/683f75e638c1694e94cad898a0d653b033fe3f": "d9137bafb3b0e1d8b5ea79d1dfb2dd4e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/f508cbffba8ddea18cbdf9d4762975b39be0ff": "d70d05baf9cc4209e655d78a61d9c950",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/22e14574bf8c716780c2e20dc7cddc5be49012": "a96b69228f6ef4462ff05acdac088426",
".git/objects/89/f8eeb260e22c7fc24116f46af6dd9dd0a35886": "c263192ca52c1dec8576428cf2fc0484",
".git/objects/8a/242c71e58593a289370b6ef2c4b5a15b48b34b": "fb02cd3bb2fc46c8174bb9526d84a31e",
".git/objects/8a/954c07834c6e127a627d1485084b5c32552d95": "a0a2d258691bf937886e84c3f3358348",
".git/objects/8a/bd878c9125d358370655512b2bec9a01f1a1c4": "48245a44015cb003e0157f821259ec68",
".git/objects/8a/cd6ab703341ce6b71d25659eae2fd5bcf60974": "b2cbbab5f165184f9ae6f68a0f8632e9",
".git/objects/8b/c6c2ada5ce8179d311b232242467009e2a3c0b": "142f40e34a7fd879e5957dab2d634337",
".git/objects/8b/fdb39c4b8512caa38d5f077b9b1db87b8c82f4": "820f3cb7d485dd080c73e8264a426de5",
".git/objects/8c/94016d2e07014b6c4cfd3a75f3c603b50807e1": "1398e4cb85623329a89235b83602a371",
".git/objects/8d/2220ef7cb8752f90e45012f4cf4e8d786b18ad": "12628ef8d982286beec9f93d8e85f352",
".git/objects/8d/a5eb09534e0feaa274a0f7cf0592dbe9e9c0d2": "55ea872f150626c4356317a5887cf039",
".git/objects/8d/eff7af039200efe6b0a220a90fa550b43688cf": "fa89da16137eee7004fcec3f13a95bfa",
".git/objects/8e/d0a5ebbf26aec8322ed9cc0220aff0365ee592": "d9bcd028bf5baf4e0ec6259377e55881",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/1063d8bdf21eabeca93e1e26bafc7d4390ec20": "199faee9a13b5f67a056b02a795fab29",
".git/objects/93/3f24614803f74e1fc69b42f6f48883a1b85ad4": "919a737f0445a9404111a6638f4ed4ad",
".git/objects/94/54e1235bf8366edd2ec7c145307a1f7ec289aa": "3d0ad2586abe6d41167a4c37a4e8fa9a",
".git/objects/94/8ca30808f4d32c98ab653a10bfc6223721a057": "88404c6062fe455be4083c9e31d986e1",
".git/objects/95/3b13404ab5951093acf7524919cffd3ca85efa": "6e177e7102d347d1a05c5707ea4c981f",
".git/objects/96/25e045fc3b75e59ca4caebe0abdd721f2051d6": "5e064c9f7b5fdcef881d0696514e8144",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/5e57e5cdcf20555eed872248b2781498ffc982": "efa71d66702c70faa547bb74185c6374",
".git/objects/9b/a0f68a719fdbb54747715e7ac787570993732c": "8a31a2684184c4fe6951270fb97db530",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/a29288e4d6561a9143a96e511c60916616d514": "46ad65842c012b495b8744eeb084407a",
".git/objects/9f/b90f05499b1ec3941d4ab3e0dd60f00fc7c8f2": "8d531aeff8c5d9d7853433925c9644b6",
".git/objects/a1/45016f3a1fecfe5ce4d95555a7a1a0366c50c2": "4f52d011ac23da695145dbd0bb6852b8",
".git/objects/a1/565b349327827597e4dceefdf726eb9bec6d9b": "decdcd5b0988e8157143e64e1c9fdfc8",
".git/objects/a1/b412834b9c660dbd5b19999a7d7d69c825148e": "987e1aea5803750f10765d571c1083ad",
".git/objects/a2/767dcbe956ac1b34233866f4afdcf03ed0271b": "33346970e6a8b73b276b8aff70808ca6",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a4/b5577242211d9d0c723b184f1621e957a2e3c1": "52faae720ce08ca8fe835db60e3f0abb",
".git/objects/a5/0c67c3d11a73ffae196c6ebe004ee1040d84fd": "a1d9a269ceffa132eecafb405112eb35",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a5/e2a334307802baf91090ae4ccd2a1f2d42fe96": "b4a51700c5ba70ba13bf71dfb0900670",
".git/objects/a6/a9e5fa755d84c468b16250a8da09925fae44ad": "2b3eeabe067168639a710da2cd17fdb4",
".git/objects/a6/cabb465bcdd912bb06c8c5db9c405aa792b1ae": "c1633ebadb56d87a3fe2d1ea07b3a76f",
".git/objects/a8/23c53d49524bca0d51238f0582e605f107046b": "4f7296f93d07c15c1b10b980536b8c87",
".git/objects/a8/a258f3e389635533f8af7e0ee3f55b62714d6a": "5d23bd50a256426afcbc84a0bcf5f941",
".git/objects/ab/45d6794b605c49daf0f5bfb8bed4e7c651e55a": "3b3fcf720eb9b7abdc61986a50f02fa2",
".git/objects/ac/3d791014758331ab274882c11b05a1b2940457": "b0cf520cd0ffa82853ee5ff723c3986c",
".git/objects/ac/4657fcbd7bd54441b08a2c994914196a38a9a8": "f4ae785f7e70b37fcb62753b57fa1255",
".git/objects/ac/97a402b965256497a36b334db7dabf817d7957": "78236a079c583837594fbc9aa537c932",
".git/objects/ad/8867d9af1cf5f5d9ac336c14f882cb0bf9b178": "ef22c9f13af5a8aefeaed18aae021277",
".git/objects/af/fe95b1a858f1117a66241d3a748df8e80b4f10": "7d7d0f53848686d19a62f09f452092dc",
".git/objects/b4/51a24d00d3ed397bab3582cb6ff7b191bef337": "7c8927d9b564ea0a6b65e86af6f2c099",
".git/objects/b4/a28ca0a9ad4543a9e27d1688ae566b3cbef300": "df99d89e2b506e2ca8a1b341f6b84d68",
".git/objects/b5/771dd95e0ef9e9439874398ae2710c033d5b91": "48d44bb6101a6388a7e72c2df676ea48",
".git/objects/b6/69028c3863a579290c3eb8dd2bbbd122c9885c": "a67421b774370cd34260924a180b4920",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8dad2776d7527f8abbbda2e34ba3716803ba9c": "0b48752ff457ef940903724318da0139",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2eff7153519aa977d1bc76b73412e2e7084562": "d343ab156cecd6a774152c3fd653ae6d",
".git/objects/b9/687cba81dff6f15b1722e0829eb4361ebd8677": "643030a0210f17c40b34881ec5c2dee3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/db25296f29c1ed16676ff11ccd0da7a98b17dc": "094db087b479841d9ae694132d80a130",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/1475fcce1fdc32d5bfa969b6862261f6e3a724": "bc3dcff272a560764ec739bfb6c44f9c",
".git/objects/bb/cc05df07e2bf16c9b257e1d5dfed66ca4c083c": "5b1cf6d4538089ee88a6036ff12543ef",
".git/objects/bc/37e42b8662a01b65a66a39fd6e958dd0a2c2ec": "937280d139776e209b579c8042ed0798",
".git/objects/bd/27df240d4cda52d16ad5753ffd97963bfcc416": "18e151125e83cd56f80aac0ae3f1c241",
".git/objects/bd/b770b0ae37a797bd6dabec0f2a4bd0f3cf650e": "6d37c795bd9a521b9fee6bc4883b513c",
".git/objects/be/edb65a8dc3b8f64fecde761df0e8a98a1da473": "16a9a556d1fdde21aabddbcb7085cd53",
".git/objects/c1/3dc6810f27a160f73bdcc4b900bae93d031f1a": "21e608a1080c9a513fed641a49d63dbc",
".git/objects/c1/a41e337a03185aad377994b70fddfdba32c7c9": "900f0b3b1eedd4a70fbf2857208a8c84",
".git/objects/c2/864585b483e0def59c37c0caa49294e4eb9e81": "14c65a8e9762fbcd3ffb83970bb07ff0",
".git/objects/c3/91c87e6ff1557636c36bacb1d8906778bf6ba9": "646a7a4e8ee1331d5f1762ae302328fe",
".git/objects/c3/ed7b14dba3b36b59c3d996e270d0ccf2a805a4": "30587b838572d6145240220a139a3f99",
".git/objects/c5/78e213089c2714c02392403ba0b5e4a43077ac": "3a275150b7cbb5a19388f404eec26b22",
".git/objects/c5/977ead9d5d81fdac1578848ccdda4a03c0db8e": "276f246ab9c039df571de05d65dc39a8",
".git/objects/c7/7aab10d65f9e7852dfc164626a87e94d2e5745": "c86a5f5cd39bf42624d35dc4778d3784",
".git/objects/c7/9649f62acd0a1ad9245d5e01a61b983082445b": "ce26559b04b3c065821ea79392fceb59",
".git/objects/c7/9aa2fa435b0e91fe38eeb33c72445d7c00b37d": "1d73f020c95946f4e171719ee3cdafda",
".git/objects/c7/9f52fc6e968503cdfd15cbdd7250b222e6543d": "8ecd05a0159f5f74320b0cef76153a47",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/d299002fdcbf8b999f095c6229e21a9f774702": "a05ff70acf512b0ea1e301f004e73892",
".git/objects/ca/3a718823964a24276502cdb0e8f6ad43c68ed7": "ea7530420f52bd11961985893183a7c3",
".git/objects/ca/5afee4c3af8ceb4bc4b7ec851766bf0be2baea": "c92d908a699ac4d153ab57c03589295a",
".git/objects/cc/7b5dd1dc12e16b15c6473fa20119a87e0de889": "1426afbfb0603de119fe6d1b16364617",
".git/objects/cc/eddf92e836dd6a5e693dd9924d964acc9e2a68": "db8fa7d1a8ff7054422176f341d8de6f",
".git/objects/cd/5def53f8f53dd21434afcc35e47b6134e32e71": "3a590a2f09835d881edcf2214ad5496b",
".git/objects/ce/e89a24cf4745bf16695469d9a0a0ec86b93c66": "299dd58924590f3a89d61799f33da97a",
".git/objects/cf/fcd69b5d5a96668cd93feff000d25cf37590aa": "c7797699b5a2977b3a9dd0e047214b58",
".git/objects/d1/3bedbc3efdb5c1e5fba542e2fd599ede12b997": "3c85288f717b0ebc9a6f01453013ab98",
".git/objects/d1/8d786e5118e973a8755bab2918643095e5a1ad": "4f592234f2fdcb37cb53ab08551fdec8",
".git/objects/d1/f94f56409c8d91c0fada935df98641621705d9": "d861b72f0e6cbedf58340ef680c26eb8",
".git/objects/d2/7ee826254b15397c5907ea48595a2c4c118b4a": "85192202d1eff1ce2004dc32ca8e1c51",
".git/objects/d3/8cae841e2c3e46c7a8ac9fd109044c468e36a3": "e94e3bb74bc3ebfe8f8aae6c0dbbc8a9",
".git/objects/d3/aa8dd44b9d1b11450657a4abc97cda3f8301ec": "ea8c46cb9412557cd9bf30b83363382b",
".git/objects/d3/b93f59f226d64e45e6533680c0445ae9efd2f6": "148ae18844a2720e4c3e0a58a4f5239f",
".git/objects/d4/28cebeaed78513e01e854d5c47728f90399d1f": "3ce3c5fcfd9886aa1db2529f208b6571",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a266f8136d6c3b2b1698feb8ffefe378ed8c83": "94e2edb0fa781a1d89723229f7858d89",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2af7e7f359a6979de5ade78afea60ab02eaee4": "0507cf7af68cc4d0a9227f7d96f905a1",
".git/objects/d7/514bf8130032350e3f5910acaf750ff86d6124": "550bb3c5cef57b206d57facaec303654",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/fba3f49a8919035ae97f5963d5d6e5ddd58d3b": "490f1462e7632628748bb41e91038ab5",
".git/objects/da/d77737ba03ba480e3affb305487347beb8ebac": "335e1e527fdb0b7cae7f97c56a187351",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/3c693172c6004392ef611a110d42addc48271a": "fb93f1ce484b1703ce9d7394099e6a45",
".git/objects/dd/b0af308f44246f41bf808baa62cef13547dca8": "74c2a17ac7d445e452ec73d2336af7db",
".git/objects/de/69921a5937e5ac0232a6c32a046aa44701b07f": "8a180d107ca6e982c15694dbbe7b3c05",
".git/objects/de/b948eeddfdcc37291ea8c54e1251a1c8558526": "3dc01246aa61560f8ab8b7e722e5c98a",
".git/objects/df/0fe18745daff25c939fe319f73ab20c701350f": "dfe4cd32c958534087dde3c3a2c6b030",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/953761306150dd511dd4ed040a2b65c5b08084": "2f89211fef2425cb519030d9064dc4c9",
".git/objects/e2/4604316f51e4671893e1dd55bf2780ca758ec5": "af4324619bbda422210339614d2fcfc9",
".git/objects/e2/b03664f0583ce5dcabbb816fd24ae52ac70203": "8152ff36c5b672640c474ba20544eb2f",
".git/objects/e3/facef553428ee3e86dc812227c21a4dc94c0b9": "8d04c244aad694d194252cce0b9803cc",
".git/objects/e4/1112a2a9fe3d9db1576d6a0d0933b77f021ebd": "bc4edae8647ffa6aa795688ad87db02d",
".git/objects/e4/f169b359c6ce8dbeacab8e05fdb66935c8dfe7": "405073cab8c3c3f67aa3098147ce86a9",
".git/objects/e4/f8c2b76b9d0f0c01dae4ed373bdc16294a23e9": "8ddc7232c4b5008f4f07f93ec0f59fe1",
".git/objects/e5/d71caaa76a11f04c3a02f787c3dbb2f07652dd": "ea559c5bfdbe84baf537ce1b4b797d07",
".git/objects/e6/5672cce9b62e870b13654c051d68898959dfcf": "68caa3b035905242b239fb33f9a4fc0c",
".git/objects/e7/feb92185cd2beee5b7083351eb018efbf22167": "b2b7164fc32a3c44e1d4795be0799dca",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/2747f2ac753f623727c51d8c81c4a5163f6f3e": "68b38dbdfecc33862b2a85068539aa5e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/cd9a97db939e869f8e8392fa57327f45292b8e": "1117b951f995ab880e6dd3cae0dd9e62",
".git/objects/ee/e9f2f894ca5c5fb9d79a5f6c02d21e8f5ceab1": "225ab6ad004156d17f0a3cb2f809211c",
".git/objects/ef/561a636e48ccb4c5ef8c0370501fc37871b012": "42b425174e443483f98d74819965eda3",
".git/objects/f0/595e9865582fdd1833a0188864b7e7a72cb961": "1ed8f35ad9d5f53d86d2b8945604bf2f",
".git/objects/f1/5013d5d529358688351a49ee6cb4254daa001f": "ebb06c7dcbaa9dedb1a9c03f0e339439",
".git/objects/f1/72ccab56cf96c9f3e2bd011a16d7ed1e82a4c4": "0819e79028ac3d55ad00458975fa2ef0",
".git/objects/f1/d6060cf42d730ddf3eec3d5754f6beafd9c7e6": "f13157d00d2987888e69bbe86a955632",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/d51faccecb181914cc01260b488fdba86820d4": "78a90bb8db85e9ec853b1012a8e451b2",
".git/objects/fa/e3933a274b21d5ef7fe7d752ffeb281f55893b": "cc1e0f2470e0c9853d4b9d605e9090d6",
".git/objects/fc/0280c05bdaa4769b9a1d45933961c7bef2f770": "1b98dd9ee62b284e7ba87a30391df154",
".git/objects/fe/42b2c68d357da82ec8d64751ccbb9378e5875b": "b5fa3073f79ac590d3ddba1d1f34678d",
".git/objects/fe/914bdc5502c018519fc3c0ba1d28becc25d723": "72a11c79ee6dcff62d232cfdad560231",
".git/objects/fe/bb69eface59a34f35832108d1682eb7f8566bb": "53e1dd4580194fc6cbc0a500c4618de1",
".git/objects/ff/f1398f359912347a8777013315b615c2fd6920": "12fa8bc6d6abb7894d46b4de817aedec",
".git/ORIG_HEAD": "f03a7c9e1015911b4173c612ba98fcf6",
".git/refs/heads/main": "9e17b646636a7e3a33ea8e5e9e0a9202",
".git/refs/remotes/origin/main": "9e17b646636a7e3a33ea8e5e9e0a9202",
"assets/AssetManifest.bin": "65463a3168026801202c51836a2cd438",
"assets/AssetManifest.bin.json": "504ebe5f05738e13187dcb78a5b6a2ad",
"assets/AssetManifest.json": "e68b44c26b1f01f1ac51b6734dc19fbf",
"assets/assets/docs/CV.pdf": "fa7170b7aa9106f9553d147d93dddd06",
"assets/assets/images/BNEC_Logo.png": "99e97dc24ca8917f58a56315bab32796",
"assets/assets/images/copy.png": "793841bcb7d597cc7482befff347f855",
"assets/assets/images/copyright.png": "7d8433656767f783375b2d381d516e28",
"assets/assets/images/dark-mode.png": "5f6c5f4c6928d3059e13a65afae7d186",
"assets/assets/images/email.png": "0d842b0f60279cbdeae6f43544636b5d",
"assets/assets/images/github.png": "a7231b6caa0e85b7b9f25f56a9045adf",
"assets/assets/images/go_to.png": "84b75ef9428b4dcc7ba1b6aafae28f12",
"assets/assets/images/image.JPG": "d3c361558bf273518ed0833250a2d6df",
"assets/assets/images/light-mode.png": "fc3b5c5c648d755d1c66c1823cc9c679",
"assets/assets/images/linkedin.png": "16e4b76db468072c4d546c2aae3844dc",
"assets/assets/images/location.png": "44b77d430dc8a96cea6029ad3f24ac6e",
"assets/assets/images/logo.png": "3b91e3191e2b052fe271f28fcc8b36c5",
"assets/assets/images/phone.png": "4feec0124f16233c78891f8e29b1c22a",
"assets/assets/images/projects/bnec-mobile.png": "4d0cfa2bae30e877d7c1be81410a4164",
"assets/assets/images/projects/expense-tracker.png": "f3dd719cd574f181fe74d59641c8fa79",
"assets/assets/images/projects/faraidh-calculator.png": "4992351d1620261fa1fd5becbc6fe60b",
"assets/assets/images/projects/favorite-place.png": "0aaa1f0185b8b7d55c01ac93c7f72a07",
"assets/assets/images/projects/medicine-reminder.png": "77e0f564839b0b863e9c48937f968052",
"assets/assets/images/projects/micon.png": "bd7264dc8380ec3ab23ecb6b8fd0c6a7",
"assets/assets/images/projects/minder-mobile-v1.png": "30d742e758c888571d3c34f55526eda2",
"assets/assets/images/projects/minder-v1.png": "a3dd10cab1a90242e3cce224f9039401",
"assets/assets/images/projects/triana-iot.png": "14890e2630506be644a360f1b3c6139e",
"assets/assets/images/projects/triana.png": "cc848634a228e8ffe909c28f3327ee7f",
"assets/assets/images/skills/c.png": "e404990862473d8a41dbf234706c4441",
"assets/assets/images/skills/cpp.png": "340a2c96b975e8993790ce78bf1576f6",
"assets/assets/images/skills/dart.png": "2e0719b33b5cdd1ece46611b4d3d4a81",
"assets/assets/images/skills/firebase.png": "cf0918b3d77d6e4505a65f103e5f3382",
"assets/assets/images/skills/flutter.png": "23ded1e93189e77c12bda66ca4274d08",
"assets/assets/images/skills/git.png": "5f551c335eb3dc4b81ae34cf93b9a7f1",
"assets/assets/images/skills/golang.png": "5648e990564409cc0241df03bbae6bbe",
"assets/assets/images/skills/iot.png": "36c6492e26b50b69be23c36ad7709fc7",
"assets/assets/images/skills/keras.png": "b565438236c0eec8870694532a376ca6",
"assets/assets/images/skills/laravel.png": "978d1e3e3909d5c3129318732f980a55",
"assets/assets/images/skills/micon.png": "0df732bcc02d4635a552c86f832a465d",
"assets/assets/images/skills/opencv.png": "bfae5b1e6ec7f3626fc2f95ae9aa785b",
"assets/assets/images/skills/php.png": "117f84810dbc36ff6313846edbf6ed53",
"assets/assets/images/skills/python.png": "8fc980504e086ccec2612f8bdb6bfe15",
"assets/assets/images/skills/qt.png": "3246d5236ff955a00c3286f5748ec770",
"assets/assets/images/skills/tensorflow.png": "2fcc32929f9901c0508f7742b5d0b175",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "57c28ae1c7c5b389a548c2c730e9c2ec",
"assets/NOTICES": "f8f4c34cc3a2e8e51ffd3ffd48167664",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "e52a27f84951d080acb886521734cc5b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "a105756f7106e3d98c64ee092995795b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c12edb0e52d71c839407fe137b2e6b32",
"/": "c12edb0e52d71c839407fe137b2e6b32",
"main.dart.js": "e971d1173144076fe96b4c845f22f5fd",
"manifest.json": "9b91fd8c6820ec2fde8ed86fbfa06dae",
"version.json": "d56a8f155e857828189fafbe8fef372b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
