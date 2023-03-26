import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "../FirstSwiper/FirstSwiper.scss";
import VanillaTilt from "vanilla-tilt";
// import { Icon } from "@iconify/react";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}
const FirstSwiper = () => {
  const options = {
    speed: 2000,
    max: 20,
  };
  return (
    <section className="first_section">
      <div className="section_under">
        <div className="container h-100 px-4">
          <div className="row h-100 px-4">
            <div className="col-xl-2 col-lg-2 col-md-2 px-0">
              <div className="col_adaptation brdr_left"></div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 px-0">
              <div className="col_adaptation"></div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 px-0">
              <div className="col_adaptation"></div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 px-0">
              <div className="col_adaptation"></div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 px-0">
              <div className="col_adaptation"></div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 px-0">
              <div className="col_adaptation"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_on">
        <div className="container px_5">
          <div className="row px_5">
            <div className="col-xl-12 px-0">
              <Swiper
                loop={true}
                spaceBetween={250}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                speed={1500}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="swiper_element"
              >
                <SwiperSlide>
                  <div className="slider_inner">
                    <div className="slider_img">
                      <img
                        src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/slider/14.jpg"
                        alt=""
                      />
                      <Tilt className="image_card" options={options}>
                        <h6>CONDOMINIUM</h6>
                        <h4>Montana young menz club in the city center</h4>
                        <div className="details_link">
                          <span className="details_text">VIEW DETAILS</span>
                          <span className="link_animation">
                            <span className="line"></span>
                            <span className="circle"></span>
                            <span className="dot"></span>
                          </span>
                        </div>
                      </Tilt>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider_inner">
                    <div className="slider_img">
                      <img
                        src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/slider/5.jpg"
                        alt=""
                      />
                      <Tilt className="image_card" options={options}>
                        <h6>CONDOMINIUM</h6>
                        <h4>California winter condominium</h4>
                        <div className="details_link">
                          <span className="details_text">VIEW DETAILS</span>
                          <span className="link_animation">
                            <span className="line"></span>
                            <span className="circle"></span>
                            <span className="dot"></span>
                          </span>
                        </div>
                      </Tilt>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slider_inner">
                    <div className="slider_img">
                      <img
                        src="https://wpthemebooster.com/demo/themeforest/html/mrittik/assets/img/slider/8.jpg"
                        alt=""
                      />
                      <Tilt className="image_card" options={options}>
                        <h6>CONDOMINIUM</h6>
                        <h4>Find your own self invintage lake house</h4>
                        <div className="details_link">
                          <span className="details_text">VIEW DETAILS</span>
                          <span className="link_animation">
                            <span className="line"></span>
                            <span className="circle"></span>
                            <span className="dot"></span>
                          </span>
                        </div>
                      </Tilt>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        delectus placeat dicta quae obcaecati blanditiis libero tempora porro
        nulla. Placeat eaque ipsum cumque eveniet repudiandae expedita, hic sed
        veniam modi et unde, asperiores repellat officiis ad minus magni
        molestias? Quod placeat nihil necessitatibus nam voluptates aspernatur
        et, fugiat, doloremque voluptate dolore illo a quas sit praesentium
        dolorum, quaerat distinctio maiores nisi corrupti ullam iure voluptas
        quidem repellat. Quisquam alias ad corrupti, nam laboriosam dolorem illo
        et consequuntur reiciendis accusamus distinctio sapiente voluptatibus
        aspernatur velit eius itaque optio cum nihil at rerum, blanditiis quod
        fugit! Molestiae amet temporibus minima laborum, earum eum, harum
        explicabo excepturi illum sequi dolore, ipsa hic magni est perspiciatis
        dolores aliquam quam iure voluptas praesentium voluptatum similique rem.
        Magni laboriosam quo consequatur natus, labore excepturi, corrupti,
        vitae facilis cumque aliquid sapiente suscipit. Similique mollitia eaque
        dolore, error, nesciunt fugit accusamus dolorum rem itaque atque
        voluptate nobis dignissimos quos accusantium libero saepe doloribus vel
        minus ipsa exercitationem repellendus commodi ratione voluptas? Unde
        aspernatur quis dicta quidem eos voluptatibus labore ducimus id delectus
        voluptatem ipsa exercitationem quod, similique maiores culpa sit nemo
        ullam, molestias, magnam excepturi? Id cumque, aspernatur quas omnis
        sint odit, nihil voluptates totam alias veniam facere molestiae corporis
        temporibus suscipit, aliquam sequi est delectus. Laboriosam quas eos
        sequi nulla? Sint, velit quas. Rerum, labore iste, corrupti voluptate
        corporis animi, eum vel veniam molestiae atque odit possimus debitis
        eligendi assumenda! Debitis explicabo sequi, sunt porro possimus omnis
        inventore quibusdam minima minus nam, iusto ipsum reiciendis, corporis
        impedit consectetur fugit fuga? Excepturi, cumque sequi ab reprehenderit
        harum ea labore incidunt unde in beatae amet veritatis perspiciatis
        fugiat tempore quis delectus obcaecati, cum repellendus iste, quam
        placeat sunt provident. Adipisci deleniti harum doloribus impedit
        repudiandae blanditiis quae sapiente a labore. Corporis temporibus,
        aliquam labore incidunt commodi, eius est odit modi tenetur, laborum
        necessitatibus! Architecto, accusantium. Consequuntur nihil impedit
        laborum quos, architecto doloribus veniam molestias. Earum hic quasi
        expedita, voluptatibus aspernatur porro asperiores, explicabo modi
        corporis eligendi facere ut omnis saepe architecto fugit, ipsum ab.
        Perspiciatis rerum laboriosam ab quae illo, eaque quaerat molestias,
        laborum dolores numquam, iusto provident minima in quia accusantium
        aperiam. Hic, voluptatum at tempora itaque maiores amet dolores facere
        alias consectetur sequi beatae error. Obcaecati porro harum maiores
        debitis esse quae, consequuntur pariatur sint amet nostrum doloremque
        rerum architecto, enim molestias at? Vel eum similique deleniti nemo!
        Maiores pariatur repudiandae dolor fuga voluptas enim animi est maxime
        soluta quis quidem a, rem necessitatibus ipsum doloremque recusandae
        error tempore praesentium repellendus excepturi nam. Animi eum saepe
        iusto impedit aut eaque enim error mollitia neque est? Nulla corporis
        architecto eligendi suscipit recusandae! Ab facilis asperiores, eos,
        deserunt veritatis, ipsum accusantium et explicabo debitis autem
        corporis ad vitae iusto quam aut officia. Quasi ipsum asperiores
        voluptatem sint iusto! Non consequuntur totam autem deserunt dignissimos
        error saepe. Obcaecati alias eveniet similique enim fuga laudantium
        quibusdam numquam esse sapiente ad explicabo iusto, voluptates quo qui,
        repellat aperiam optio harum? Dignissimos voluptates delectus soluta
        eius aliquam! Saepe, fugiat minima? Dignissimos laudantium ipsam
        quibusdam. Quod recusandae voluptatem magni ipsum labore doloribus.
        Iusto voluptas aut ullam inventore nulla accusamus pariatur non aliquid
        fugiat repudiandae delectus reprehenderit nihil quia quos eos labore
        optio atque, alias, assumenda, sint magnam ratione exercitationem ut.
        Vitae aut eligendi eaque, minus ea quas deleniti hic quis error
        voluptatem autem possimus cupiditate, et iste repudiandae. Rerum itaque
        commodi molestias atque dolores, consequatur corporis numquam fugit
        adipisci quas natus unde dolore odio pariatur sunt reiciendis a,
        praesentium aut quae. Veniam rerum a animi unde expedita in nihil sed
        quod! Omnis architecto nemo sapiente qui minus minima quisquam, impedit
        delectus animi corrupti, aliquam, quaerat iste fugit est fugiat! Aliquam
        sequi laudantium alias ipsam omnis dolorem, tempora minima voluptate
        reiciendis eum iste id odit. Optio sed in quaerat, consequatur ipsam
        vero alias nemo, mollitia voluptatibus similique temporibus voluptate
        reiciendis, sunt repellat perferendis et. Assumenda rerum beatae vitae
        recusandae voluptatibus minima maiores enim autem nobis velit quidem
        consequuntur, nostrum numquam mollitia architecto illo quibusdam
        voluptates sit molestiae fuga tempora. Veritatis repellat sapiente
        tempore aperiam voluptas quia rerum, minima odio voluptatem placeat fuga
        delectus labore aspernatur nostrum voluptatum animi natus magnam.
        Labore, cumque? Placeat, tempore voluptates. Atque rem veniam facere, ab
        iusto quasi, optio laboriosam hic quam dolore ex eveniet quaerat.
        Pariatur itaque mollitia maiores, incidunt quisquam id est commodi sit.
        Soluta voluptates tempore nesciunt odit, reiciendis provident maiores,
        alias obcaecati dolore cupiditate nemo animi laudantium sed molestiae.
        Pariatur officia cupiditate in, labore earum aut minima repudiandae
        deserunt? Eaque sed maxime, suscipit quaerat quidem vero sequi nesciunt
        facere eius officia at rem voluptas illo repudiandae blanditiis quasi
        iure consectetur. Aliquid nostrum consectetur cupiditate cumque beatae
        ex suscipit? Praesentium dolor facere accusamus obcaecati nobis,
        consequuntur minus consectetur natus fugiat culpa quae molestiae omnis
        libero delectus repellendus error repudiandae dicta! Illum ullam
        perferendis veritatis, laudantium unde eius itaque eaque eos adipisci
        deleniti molestias, voluptas rerum suscipit quaerat in voluptatem culpa
        sapiente ratione esse porro aperiam ex officiis. Repudiandae fuga
        nostrum facilis ullam rerum doloribus mollitia ut culpa, dolorem eaque
        in temporibus obcaecati eveniet minus ratione, eos aliquam possimus?
        Iste dicta excepturi error atque incidunt, perspiciatis animi ex sunt!
        Harum est natus, veritatis exercitationem commodi praesentium quaerat,
        expedita vel, quo veniam nostrum. In impedit delectus suscipit veritatis
        obcaecati ullam optio animi eum ut distinctio. Ipsa sed praesentium,
        odio quae quas vero totam et sequi! Ullam id odio dicta maxime amet ad
        commodi molestiae accusamus eum illum consequatur ipsam, quasi mollitia
        autem obcaecati, magnam eligendi doloribus alias ea consectetur libero,
        quod quae atque. Animi, consequuntur alias odio vero illum tempore. Iste
        nihil odit sequi ut vero deleniti libero iure? Facilis at qui recusandae
        ullam sapiente eaque nulla, numquam odit, alias amet adipisci dolor
        laudantium animi tempora id nobis sed aspernatur voluptatem asperiores
        ratione nemo explicabo consectetur distinctio incidunt. Excepturi
        necessitatibus aspernatur laborum, explicabo voluptatem id facere
        corrupti, ratione odio dolor consequatur sapiente dolorem laboriosam
        ipsa placeat earum vitae inventore quasi modi quidem eius illo
        distinctio? Architecto voluptatibus fugit itaque provident praesentium
        adipisci accusamus quisquam minima quia ut at autem, sequi quibusdam
        dolorum asperiores. Corrupti incidunt atque iure consequatur vel quos
        sit, necessitatibus animi impedit, perferendis corporis eveniet sunt
        ipsum deleniti dolore sequi quaerat cum ratione eius similique
        perspiciatis amet eos. Odio delectus fugiat unde incidunt beatae laborum
        assumenda rerum odit! Odio, praesentium blanditiis. Ad labore voluptas
        sit magni. Porro quidem nulla odit maxime veritatis numquam eius vel!
        Aut voluptas ullam neque ex explicabo numquam temporibus natus facere
        asperiores. Beatae ipsa adipisci nulla laborum odio, aliquam maiores
        quia? At quia sit fugiat, vitae inventore quae facilis perferendis! Eos
        fugit quis, odio doloremque molestiae deserunt, illo ad, architecto eius
        adipisci voluptatem? Nesciunt aspernatur omnis asperiores. Delectus
        assumenda eveniet magnam incidunt, nemo consequuntur labore, unde
        veritatis quasi qui consequatur sunt reiciendis fugit. Voluptas, alias?
        Laboriosam vero aliquid et omnis id pariatur nostrum error eligendi
        inventore, doloribus dignissimos nesciunt laborum incidunt officia
        maiores suscipit sunt aliquam autem dolorem aspernatur. Amet, totam
        dolorum nostrum qui dolores hic nemo voluptatem ad ipsam excepturi,
        culpa iure ea? Repellendus eaque, maxime debitis consectetur in
        voluptate soluta beatae similique suscipit quisquam sed quaerat
        architecto dolorem? Aliquam voluptas ullam deleniti dicta molestiae,
        aspernatur dolor quod maxime. Veniam delectus consequuntur ea, fuga,
        neque itaque sint tenetur, iste quis laboriosam atque magni cumque ullam
        illo esse nisi quaerat quo magnam quam cum nobis et deserunt. Atque
        impedit, nihil magni non necessitatibus vero! Eos neque mollitia
        voluptate praesentium tempora natus, provident voluptatem perspiciatis,
        dignissimos porro nisi aut adipisci vitae debitis nulla dolorum aliquam
        accusantium similique nobis! Cum provident, vitae quidem ad modi hic
        deleniti, facere a cupiditate minima exercitationem? Illo, omnis dolore
        ullam debitis aliquid obcaecati, quas, dignissimos ipsum iure facere
        autem id quos. Dolores vitae, qui delectus quo, illo, cupiditate cumque
        magni fugit explicabo aspernatur numquam quos? Vero dolorum tenetur sit
        omnis suscipit velit repellendus, recusandae aspernatur ullam molestiae
        dignissimos impedit ducimus accusantium, maiores ipsa animi perferendis
        deserunt voluptatum soluta! Libero temporibus laborum facilis facere
        voluptatum ipsam pariatur cupiditate veniam. Consequuntur saepe,
        repellendus doloremque cum corporis qui, necessitatibus quasi quod nisi
        veniam laboriosam voluptatibus, omnis numquam voluptatum aspernatur
        consectetur totam obcaecati! Similique, iure laboriosam neque maiores
        sapiente autem nobis ipsa, id nesciunt et, maxime velit. Recusandae
        debitis, provident earum mollitia ea molestias corrupti! Sunt neque
        laudantium unde accusantium odit! Rerum perferendis nisi ut! Maxime
        ipsam, dolor dolore ducimus laboriosam quidem excepturi itaque deleniti,
        soluta illum voluptas aut nulla molestiae. Aut, dolorum nemo ab quas,
        nobis voluptatum nesciunt fugiat voluptatibus odit possimus odio
        consequatur commodi esse, tempora vero ducimus illum? Provident vel, at
        quod eos doloribus voluptatibus omnis. Totam quo exercitationem, aliquid
        numquam repudiandae enim illo at laudantium officiis magni et dolores
        reprehenderit, deleniti cupiditate est reiciendis? Ut voluptatibus ipsa
        quam impedit corrupti error dicta fuga, praesentium modi, et obcaecati
        accusantium sunt dolorum quaerat voluptas, quis culpa mollitia facere
        temporibus laborum natus aperiam. Quidem velit delectus nostrum sed
        similique dignissimos, est deleniti officia ex aliquid, exercitationem
        tempore rerum quisquam. Sint, obcaecati consectetur pariatur cupiditate
        distinctio sapiente illum velit hic porro omnis aperiam, nulla aliquam
        quidem possimus. Maiores ea molestiae natus! Nulla, pariatur, numquam
        esse totam debitis, corporis natus rerum repellendus assumenda
        consectetur maiores? Soluta neque animi porro quisquam sequi ipsum enim
        laboriosam magnam veniam autem a assumenda deleniti, odit, nemo
        cupiditate natus nesciunt, corporis totam quibusdam veritatis cumque
        molestias. Voluptatibus sapiente tenetur, quidem minus quos impedit
        optio dolor vero odit recusandae perspiciatis id, ducimus eveniet
        deleniti blanditiis culpa nisi inventore provident eos sint? Voluptate,
        ut necessitatibus? Dolorem, odio quasi. Maiores voluptatibus eum totam
        optio consequatur ab ullam aliquam cupiditate, unde omnis! Iste corporis
        ex sint doloribus optio, placeat quod at, tempora, obcaecati earum ipsam
        consectetur molestias nesciunt aperiam architecto commodi laboriosam
        sapiente? Cum aliquam consequuntur neque ducimus veniam aliquid, cumque
        et ipsa obcaecati quibusdam quod sint officia qui laboriosam officiis
        consectetur dignissimos soluta animi? Facilis maxime molestias enim,
        nisi consequatur deserunt, labore officiis et ullam sed hic vero,
        excepturi sequi! Ab ullam libero nobis voluptatibus optio autem placeat
        asperiores, unde, esse debitis recusandae. Delectus eaque ut voluptates
        nobis facere quaerat illum eveniet, exercitationem qui alias ad dolorem
        aspernatur. Ab tempora debitis impedit, maiores ducimus assumenda
        placeat nam ut! Minus cumque eius eaque provident voluptas laudantium
        earum, odit labore quas magni recusandae deserunt magnam in nihil
        repellendus accusamus quasi. Nostrum repudiandae tempora delectus fugiat
        neque? Ut quam maiores, temporibus odio sit laboriosam magni fugit quia
        eius atque? Laboriosam consectetur ipsum, doloribus, illo fuga ipsa
        voluptatem iure placeat voluptatibus necessitatibus hic minus autem
        aspernatur nisi eveniet porro unde quas eaque odit. Dicta expedita
        inventore culpa ullam accusantium! Soluta, provident iusto deleniti
        quibusdam ad minima odit error. Fugit id itaque quod earum est
        asperiores accusantium, expedita qui porro dignissimos, eligendi
        blanditiis. Doloribus, numquam. Quam voluptates dolor sunt eum rem,
        voluptatem, quasi quae maiores nesciunt ipsum, minus distinctio odio
        non! Molestias molestiae eos praesentium excepturi, explicabo
        dignissimos. Qui dignissimos aperiam, pariatur repudiandae nam libero
        facilis iure enim delectus error atque eaque mollitia sequi quis
        asperiores, molestiae blanditiis deserunt quidem ipsa illo minus nobis
        commodi amet maiores. Assumenda perferendis impedit, atque, consequuntur
        in voluptas soluta et facere amet, porro quia! Expedita mollitia rerum
        cumque laudantium sint necessitatibus nostrum quos tenetur fugit ea
        assumenda dolorem a deserunt dolores, facere iusto unde alias architecto
        officiis natus labore. Soluta repudiandae similique facilis commodi
        magnam, tempore atque, nisi in unde rerum vel. Aliquam quas temporibus
        sint incidunt fugit perspiciatis repellendus rerum voluptate iure
        mollitia eaque consectetur impedit dolorum pariatur earum doloremque,
        illum quis deleniti beatae. Aliquid alias sit atque magni sint expedita?
        Dolorem sunt veniam, voluptate accusamus aliquid exercitationem enim
        eligendi architecto nam assumenda perspiciatis ullam reiciendis
        laudantium in, fugit non quo tempore, nobis cum quaerat consequatur.
        Itaque aut quas quo nulla porro ullam repellat. Quaerat nobis laudantium
        officia reiciendis in deleniti commodi labore vitae, vero eveniet
        deserunt, voluptates ipsum aliquid illum voluptas earum quidem aliquam
        quis obcaecati? Itaque ea maiores ex ipsum aliquid, omnis quisquam
        repellendus deserunt quos velit voluptas tempore veritatis cum aliquam
        obcaecati repellat. Voluptates dignissimos eos facilis itaque ducimus,
        assumenda deserunt cum quam? Nisi sint architecto voluptatibus
        perferendis modi sapiente rerum, magnam, repellendus officia placeat
        illum. Temporibus, ratione?
      </p>
    </section>
  );
};

export default FirstSwiper;
