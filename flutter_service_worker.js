'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ecabcd0478b29ebef3c9bc8683e2afb3",
".git/config": "8224e8719283d66be7454dc6683220a5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4413ebbee4fea397f26f81f9a3875219",
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
".git/index": "ce2ba632478dcfe76d29805ca3629623",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f989024ec259db1e47ecc0110d85935c",
".git/logs/refs/heads/main": "7a9b627172ebd2b443cd69db18dbebca",
".git/logs/refs/remotes/origin/main": "d7306b2d92b1b45d5f412139539900d8",
".git/objects/01/4877bd45dbe65141af3a52c522fd74970cc97c": "cf8c1a6869a9b6fd17c54b3dc40328fd",
".git/objects/0a/a91cf69bf891b6a1922c83a1b1af9837d54d06": "b73b96bd483ce0c818db8c5eed877fd8",
".git/objects/0a/e050a74a571f25886fb9a8ec3cdac9c4e06f9a": "f181b985bf68d812db4baeb2559a9969",
".git/objects/0c/365baa1dd2fc04866012e44f3ac38472a68057": "a55e75f64400e7b43200ed9a25d5e775",
".git/objects/0c/384ba019d3c2b2377d9bdf26e08cd7c624363f": "650c63dc50f9a0d15562806c52db9ab6",
".git/objects/0c/b4a051e0b8486342640bce0cd4acca37151b49": "c59745240b060a6c5d1cb93d81eab68d",
".git/objects/10/179c4ff744208411de193ca76e7135222bd05c": "9f2d81474d2ca2b80a81e25329758b67",
".git/objects/13/470a8bbb587220e0235029a069b91819449585": "2f254096230771270569c26d7f09a066",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/18/e423bbbc3ff33184cc2c6226d8efad077cadd1": "28cbb45c4c21c44b2c94ecf5f7b8ebf2",
".git/objects/19/6a59f4a2a8c139b106c6dc3c821c2abeefac1e": "298e107c2498b7493d939ec433c2a9e4",
".git/objects/1a/6f41cce18fa388d037844021d30239ce19e262": "90f3574f301a31a212ac27651d00c384",
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
".git/objects/28/91cc86890fa8ab960a459e1519b45053b88190": "eb3a9888fc687dc97a9538d7bab2fca0",
".git/objects/2b/479f44994b3de3c7a869a584234508f050e67b": "85ca33c2547e0b7ab0c556436aa1d88f",
".git/objects/2c/1b6e88e4cdb3fac6587791e206ea3fcc59a593": "13c2bf3b4f92fbf5d70b5a6422c5f0d4",
".git/objects/2e/3604add2695e5bdb70babf90ab8c1dc01c4732": "5b2128a9593588c15c5ccb7f6182b100",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/28893ffada11bceaee22230ab989273e4f4ab6": "a74fbb600f0619f23250e9aa429e191c",
".git/objects/36/bc4d14e26d5418c2afe224d67804e4aa181627": "144e2b16fd758b7d42af56088d636a6e",
".git/objects/37/54c30e7178bb1faf2576aa222500da6aa0464c": "8000ee05140a1b3864debe0443c2345e",
".git/objects/38/8ecdb1b8e0d1851ddda4357e163c09828f2051": "0ed36365f2e6b5d9159fbcdeb92e9137",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/e2110a3535e26c46c0cf662a12f6fe8f645ee5": "d933a7c97e5561c673372381593ff9a7",
".git/objects/40/ce125c2b2b4ea1f7726e835ee1e600d62ec317": "462ce1e3142a2196fd8c8f5f96b0909a",
".git/objects/41/0e22f15f598f76de4b407fb5c3a037e6d15f23": "c287a5d72bbd1d7ca98fb7d3f311785d",
".git/objects/45/869c111bc9710f558b403754a307a4dbf9a3c7": "e5ea6adafb06be47cbbc7c1c556b179e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/6832a324c60c1cd421cb563df7796276543d92": "cabed2e6384f2c47d1ffc06a0ddf193a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/d11860015f43549b7d13d05d68e02b23d3a35f": "01d330570b903295f94361102832460c",
".git/objects/4e/a6c4a7009714877830ae5fbc41d8a5046fc08d": "f3c51d7d56825547dcb69ed5f7379bc5",
".git/objects/4e/f520963c4c207f163abdff57df8077c1303aa7": "7764a2922762b31b4137d934b2e7665f",
".git/objects/50/3642accf2e44cfdd0bdbb84370b6c2671661a5": "5d871eff988f0a65b802450c57b90da3",
".git/objects/51/45d3f68b35a5aae0b66ab4d6d255dda2e34fa9": "40317c84413a977452aeff7e452799e1",
".git/objects/52/4cf7bc8ec9b20c9e28e53a65c6ae74accd9b12": "aae0b0ffe357716f28b950ec409a20ba",
".git/objects/53/9bd2cd93e9992b2ec18ebd9cd3188ba679a8e0": "cd73c9a86da76e50268369b200dc6a59",
".git/objects/57/b6485306d86a2548cfe8df1049effbeca9598d": "1fa7036663f8c00da5a5f2a90aa32e08",
".git/objects/58/c0fd449fd0032ae6dda868437451ae60be8ebf": "6760a10f7fdc140fa48aaf55a2d64e84",
".git/objects/58/de82aecdb25ffdfeda45a3e78de767f62a20bd": "e4ab19c8e47b996080c1b4b081029898",
".git/objects/59/461c9aca632f4e5d6691cbe9dd74178b702c76": "b6220596ff6595e24c03ae1ca1f0da3e",
".git/objects/5a/592515d915d0ec71a27d49e50994a31b7e8524": "0e729f898a0659f321d1bba5cbe14ef1",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/75058b79bdfcf64741fdc76b6de4443253ee18": "5f9ddde13b48eb859af6e04083806cb1",
".git/objects/60/9ebe4d98f20ec723d34f45df36c8cac46c4b86": "8531020be6288ca923dfd58d22af468c",
".git/objects/64/544cbaa1d3e9618dd53aa126b9c478fabd4187": "52ed674b6fbf414509816c15d421681f",
".git/objects/66/8de05f223e7f6cbc335c15bf3b90649824071d": "e379e290d8c3ceed82769b1966a2ccef",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/75/29aa4e7e29be9815b04d0fa6b98ef0c8136927": "eb9fcaf9dd8c32c5f316185e2fdeaddb",
".git/objects/76/c3f2bc86d9b2bf4213f864449f7791a3747083": "fb27a0ecf4d7efeee072921495991f3a",
".git/objects/7d/6f5d10192772c6592c0a7938dadde532e25b3e": "366fba31c5970fe073bc4eded800fb95",
".git/objects/7e/cf5186cd76315c3438266cb8805c90332bb5d8": "89defee98132cab0919230c2c72d77eb",
".git/objects/7f/c27209fc1d5c226378ab55950b11803c3d1f07": "79baf9eb466cc3a166be403eb48c819e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/22e14574bf8c716780c2e20dc7cddc5be49012": "a96b69228f6ef4462ff05acdac088426",
".git/objects/8a/242c71e58593a289370b6ef2c4b5a15b48b34b": "fb02cd3bb2fc46c8174bb9526d84a31e",
".git/objects/8a/954c07834c6e127a627d1485084b5c32552d95": "a0a2d258691bf937886e84c3f3358348",
".git/objects/8a/bd878c9125d358370655512b2bec9a01f1a1c4": "48245a44015cb003e0157f821259ec68",
".git/objects/8a/cd6ab703341ce6b71d25659eae2fd5bcf60974": "b2cbbab5f165184f9ae6f68a0f8632e9",
".git/objects/8b/fdb39c4b8512caa38d5f077b9b1db87b8c82f4": "820f3cb7d485dd080c73e8264a426de5",
".git/objects/8c/94016d2e07014b6c4cfd3a75f3c603b50807e1": "1398e4cb85623329a89235b83602a371",
".git/objects/8d/2220ef7cb8752f90e45012f4cf4e8d786b18ad": "12628ef8d982286beec9f93d8e85f352",
".git/objects/8d/eff7af039200efe6b0a220a90fa550b43688cf": "fa89da16137eee7004fcec3f13a95bfa",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/1063d8bdf21eabeca93e1e26bafc7d4390ec20": "199faee9a13b5f67a056b02a795fab29",
".git/objects/93/3f24614803f74e1fc69b42f6f48883a1b85ad4": "919a737f0445a9404111a6638f4ed4ad",
".git/objects/94/54e1235bf8366edd2ec7c145307a1f7ec289aa": "3d0ad2586abe6d41167a4c37a4e8fa9a",
".git/objects/95/3b13404ab5951093acf7524919cffd3ca85efa": "6e177e7102d347d1a05c5707ea4c981f",
".git/objects/96/25e045fc3b75e59ca4caebe0abdd721f2051d6": "5e064c9f7b5fdcef881d0696514e8144",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/5e57e5cdcf20555eed872248b2781498ffc982": "efa71d66702c70faa547bb74185c6374",
".git/objects/9b/a0f68a719fdbb54747715e7ac787570993732c": "8a31a2684184c4fe6951270fb97db530",
".git/objects/a1/45016f3a1fecfe5ce4d95555a7a1a0366c50c2": "4f52d011ac23da695145dbd0bb6852b8",
".git/objects/a1/565b349327827597e4dceefdf726eb9bec6d9b": "decdcd5b0988e8157143e64e1c9fdfc8",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a4/b5577242211d9d0c723b184f1621e957a2e3c1": "52faae720ce08ca8fe835db60e3f0abb",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a6/cabb465bcdd912bb06c8c5db9c405aa792b1ae": "c1633ebadb56d87a3fe2d1ea07b3a76f",
".git/objects/a8/a258f3e389635533f8af7e0ee3f55b62714d6a": "5d23bd50a256426afcbc84a0bcf5f941",
".git/objects/ac/97a402b965256497a36b334db7dabf817d7957": "78236a079c583837594fbc9aa537c932",
".git/objects/af/fe95b1a858f1117a66241d3a748df8e80b4f10": "7d7d0f53848686d19a62f09f452092dc",
".git/objects/b4/a28ca0a9ad4543a9e27d1688ae566b3cbef300": "df99d89e2b506e2ca8a1b341f6b84d68",
".git/objects/b5/771dd95e0ef9e9439874398ae2710c033d5b91": "48d44bb6101a6388a7e72c2df676ea48",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/8dad2776d7527f8abbbda2e34ba3716803ba9c": "0b48752ff457ef940903724318da0139",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/1475fcce1fdc32d5bfa969b6862261f6e3a724": "bc3dcff272a560764ec739bfb6c44f9c",
".git/objects/bb/cc05df07e2bf16c9b257e1d5dfed66ca4c083c": "5b1cf6d4538089ee88a6036ff12543ef",
".git/objects/c5/977ead9d5d81fdac1578848ccdda4a03c0db8e": "276f246ab9c039df571de05d65dc39a8",
".git/objects/cc/7b5dd1dc12e16b15c6473fa20119a87e0de889": "1426afbfb0603de119fe6d1b16364617",
".git/objects/ce/e89a24cf4745bf16695469d9a0a0ec86b93c66": "299dd58924590f3a89d61799f33da97a",
".git/objects/cf/fcd69b5d5a96668cd93feff000d25cf37590aa": "c7797699b5a2977b3a9dd0e047214b58",
".git/objects/d1/3bedbc3efdb5c1e5fba542e2fd599ede12b997": "3c85288f717b0ebc9a6f01453013ab98",
".git/objects/d1/8d786e5118e973a8755bab2918643095e5a1ad": "4f592234f2fdcb37cb53ab08551fdec8",
".git/objects/d1/f94f56409c8d91c0fada935df98641621705d9": "d861b72f0e6cbedf58340ef680c26eb8",
".git/objects/d3/aa8dd44b9d1b11450657a4abc97cda3f8301ec": "ea8c46cb9412557cd9bf30b83363382b",
".git/objects/d3/b93f59f226d64e45e6533680c0445ae9efd2f6": "148ae18844a2720e4c3e0a58a4f5239f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/fba3f49a8919035ae97f5963d5d6e5ddd58d3b": "490f1462e7632628748bb41e91038ab5",
".git/objects/da/d77737ba03ba480e3affb305487347beb8ebac": "335e1e527fdb0b7cae7f97c56a187351",
".git/objects/dd/3c693172c6004392ef611a110d42addc48271a": "fb93f1ce484b1703ce9d7394099e6a45",
".git/objects/de/b948eeddfdcc37291ea8c54e1251a1c8558526": "3dc01246aa61560f8ab8b7e722e5c98a",
".git/objects/e3/facef553428ee3e86dc812227c21a4dc94c0b9": "8d04c244aad694d194252cce0b9803cc",
".git/objects/e4/1112a2a9fe3d9db1576d6a0d0933b77f021ebd": "bc4edae8647ffa6aa795688ad87db02d",
".git/objects/e4/f169b359c6ce8dbeacab8e05fdb66935c8dfe7": "405073cab8c3c3f67aa3098147ce86a9",
".git/objects/eb/2747f2ac753f623727c51d8c81c4a5163f6f3e": "68b38dbdfecc33862b2a85068539aa5e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/cd9a97db939e869f8e8392fa57327f45292b8e": "1117b951f995ab880e6dd3cae0dd9e62",
".git/objects/ef/561a636e48ccb4c5ef8c0370501fc37871b012": "42b425174e443483f98d74819965eda3",
".git/objects/f1/5013d5d529358688351a49ee6cb4254daa001f": "ebb06c7dcbaa9dedb1a9c03f0e339439",
".git/objects/f1/d6060cf42d730ddf3eec3d5754f6beafd9c7e6": "f13157d00d2987888e69bbe86a955632",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f8/d51faccecb181914cc01260b488fdba86820d4": "78a90bb8db85e9ec853b1012a8e451b2",
".git/objects/fc/0280c05bdaa4769b9a1d45933961c7bef2f770": "1b98dd9ee62b284e7ba87a30391df154",
".git/ORIG_HEAD": "b78e0433c508fa1ed9400da94c01c5fd",
".git/refs/heads/main": "136f179a2f2f8966543256eee195ca2c",
".git/refs/remotes/origin/main": "136f179a2f2f8966543256eee195ca2c",
"assets/AssetManifest.bin": "a2236e395206d70556fad2e0ace93bcc",
"assets/AssetManifest.bin.json": "c1aafecad3bb80cbfda1a6e24657393c",
"assets/AssetManifest.json": "af058bad16461a2660902db7a1433b71",
"assets/assets/docs/CV.pdf": "c921cabc3d3784a9b25e6e7bbd86de32",
"assets/assets/images/BNEC_Logo.png": "99e97dc24ca8917f58a56315bab32796",
"assets/assets/images/copy.png": "793841bcb7d597cc7482befff347f855",
"assets/assets/images/copyright.png": "7d8433656767f783375b2d381d516e28",
"assets/assets/images/dark-mode.png": "5f6c5f4c6928d3059e13a65afae7d186",
"assets/assets/images/email.png": "0d842b0f60279cbdeae6f43544636b5d",
"assets/assets/images/github.png": "a7231b6caa0e85b7b9f25f56a9045adf",
"assets/assets/images/image.JPG": "d3c361558bf273518ed0833250a2d6df",
"assets/assets/images/light-mode.png": "fc3b5c5c648d755d1c66c1823cc9c679",
"assets/assets/images/linkedin.png": "16e4b76db468072c4d546c2aae3844dc",
"assets/assets/images/location.png": "44b77d430dc8a96cea6029ad3f24ac6e",
"assets/assets/images/logo.png": "3b91e3191e2b052fe271f28fcc8b36c5",
"assets/assets/images/phone.png": "4feec0124f16233c78891f8e29b1c22a",
"assets/assets/images/projects/bnec-mobile.png": "4d0cfa2bae30e877d7c1be81410a4164",
"assets/assets/images/projects/expense-tracker.png": "f3dd719cd574f181fe74d59641c8fa79",
"assets/assets/images/projects/favorite-place.png": "0aaa1f0185b8b7d55c01ac93c7f72a07",
"assets/assets/images/projects/micon.png": "bd7264dc8380ec3ab23ecb6b8fd0c6a7",
"assets/assets/images/skills/c.png": "e404990862473d8a41dbf234706c4441",
"assets/assets/images/skills/cpp.png": "340a2c96b975e8993790ce78bf1576f6",
"assets/assets/images/skills/dart.png": "2e0719b33b5cdd1ece46611b4d3d4a81",
"assets/assets/images/skills/firebase.png": "cf0918b3d77d6e4505a65f103e5f3382",
"assets/assets/images/skills/flutter.png": "23ded1e93189e77c12bda66ca4274d08",
"assets/assets/images/skills/git.png": "5f551c335eb3dc4b81ae34cf93b9a7f1",
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
"assets/fonts/MaterialIcons-Regular.otf": "dd6ff7e8292e86b6a03b856bad9cd50e",
"assets/NOTICES": "e771802a8c304da7dfc6264fef9f9068",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "e52a27f84951d080acb886521734cc5b",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "9b618ba664594f276424009371e44083",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2258088a907a2c9b0c2154b97e1b49a5",
"/": "2258088a907a2c9b0c2154b97e1b49a5",
"main.dart.js": "00c53291cd6d5dd24392a859dc3afb77",
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
