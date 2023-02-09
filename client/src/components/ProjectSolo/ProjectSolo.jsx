import React from "react";
import Constellation from "./Constellation";
import BackgroundStars from "./BackgroundStars";
import Star from "./Star";

export default function Home({ user, horoscopes }) {
  function findHoroscope(sign) {
    return "hello motto";
    // return horoscopes.find((horoscope) => horoscope.sign === sign).horoscope;
  }

  return (
    <>
      <BackgroundStars></BackgroundStars>
      <div className="bg-night-sky h-full text-white">
        <main className="min-h-full-body relative z-10">
          <div className="flex flex-col h-full-body justify-evenly">
            <div className="flex gap-y-6 flex-wrap justify-evenly">
              <Constellation
                label="aries"
                width="300"
                height="280"
                horoscope={findHoroscope("aries")}
              >
                <Star label="1" y="20" x="10" size="medium" color="teal" />
                <Star label="2" y="45" x="55" size="big" color="teal" />
                <Star label="3" y="55" x="75" size="medium" color="teal" />
                <Star label="4" y="65" x="80" size="small" color="teal" />
              </Constellation>

              <Constellation
                label="taurus"
                width="300"
                height="280"
                horoscope={findHoroscope("taurus")}
              >
                <Star label="1" y="5" x="5" size="small" color="purple" />
                <Star label="2" y="10" x="25" size="big" color="purple" />
                <Star label="3" y="25" x="40" size="small" color="purple" />
                <Star label="4" y="35" x="48" size="small" color="purple" />
                <Star label="5" y="44" x="52" size="small" color="purple" />
                <Star label="6" y="36" x="2" size="small" color="purple" />
                <Star label="7" y="40" x="35" size="big" color="purple" />
                <Star label="8" y="44" x="45" size="small" color="purple" />
                <Star label="9" y="55" x="62" size="small" color="purple" />
                <Star label="10" y="59" x="75" size="small" color="purple" />
                <Star label="11" y="68" x="83" size="medium" color="purple" />
                <Star label="12" y="65" x="57" size="small" color="purple" />
                <Star label="13" y="75" x="60" size="medium" color="purple" />
              </Constellation>

              <Constellation
                label="gemini"
                width="300"
                height="280"
                horoscope={findHoroscope("gemini")}
              >
                <Star label="1" y="15" x="25" size="medium" color="cyan" />
                <Star label="2" y="35" x="10" size="big" color="cyan" />
                <Star label="3" y="55" x="40" size="small" color="cyan" />
                <Star label="4" y="60" x="55" size="small" color="cyan" />
                <Star label="5" y="75" x="75" size="medium" color="cyan" />
                <Star label="6" y="30" x="60" size="medium" color="cyan" />
                <Star label="7" y="38" x="75" size="small" color="cyan" />
                <Star label="8" y="37" x="85" size="small" color="cyan" />
              </Constellation>

              <Constellation
                label="cancer"
                width="300"
                height="280"
                horoscope={findHoroscope("cancer")}
              >
                <Star label="1" y="10" x="35" size="big" color="sky" />
                <Star label="2" y="42" x="51" size="small" color="sky" />
                <Star label="3" y="55" x="41" size="big" color="sky" />
                <Star label="4" y="75" x="25" size="small" color="sky" />
                <Star label="5" y="80" x="60" size="big" color="sky" />
              </Constellation>
            </div>

            <div className="flex gap-y-6 flex-wrap justify-evenly">
              <Constellation
                label="leo"
                width="300"
                height="280"
                horoscope={findHoroscope("leo")}
              >
                <Star label="1" y="55" x="10" size="big" color="purple" />
                <Star label="2" y="40" x="40" size="medium" color="purple" />
                <Star label="3" y="39" x="65" size="big" color="purple" />
                <Star label="4" y="25" x="68" size="small" color="purple" />
                <Star label="5" y="15" x="75" size="small" color="purple" />
                <Star label="6" y="17" x="85" size="medium" color="purple" />
                <Star label="7" y="60" x="40" size="medium" color="purple" />
                <Star label="8" y="75" x="75" size="big" color="purple" />
                <Star label="9" y="47" x="73" size="medium" color="purple" />
              </Constellation>

              <Constellation
                label="virgo"
                width="300"
                height="280"
                horoscope={findHoroscope("virgo")}
              >
                <Star label="1" y="90" x="20" size="big" color="fuchsia" />
                <Star label="2" y="55" x="17" size="small" color="fuchsia" />
                <Star label="3" y="75" x="35" size="small" color="fuchsia" />
                <Star label="4" y="65" x="50" size="big" color="fuchsia" />
                <Star label="5" y="45" x="40" size="small" color="fuchsia" />
                <Star label="6" y="10" x="30" size="big" color="fuchsia" />
                <Star label="7" y="60" x="75" size="small" color="fuchsia" />
                <Star label="8" y="50" x="85" size="medium" color="fuchsia" />
                <Star label="9" y="35" x="90" size="small" color="fuchsia" />
              </Constellation>

              <Constellation
                label="libra"
                width="300"
                height="280"
                horoscope={findHoroscope("libra")}
              >
                <Star label="1" y="30" x="25" size="small" color="indigo" />
                <Star label="2" y="10" x="48" size="big" color="indigo" />
                <Star label="3" y="25" x="75" size="big" color="indigo" />
                <Star label="4" y="65" x="65" size="medium" color="indigo" />
              </Constellation>

              <Constellation
                label="scorpio"
                width="300"
                height="280"
                horoscope={findHoroscope("scorpio")}
              >
                <Star label="1" y="47" x="20" size="medium" color="violet" />
                <Star label="2" y="55" x="15" size="small" color="violet" />
                <Star label="3" y="67" x="11" size="big" color="violet" />
                <Star label="4" y="78" x="22" size="small" color="violet" />
                <Star label="5" y="81" x="35" size="small" color="violet" />
                <Star label="6" y="77" x="47" size="small" color="violet" />
                <Star label="7" y="60" x="50" size="big" color="violet" />
                <Star label="8" y="40" x="57" size="small" color="violet" />
                <Star label="9" y="30" x="65" size="big" color="violet" />
                <Star label="10" y="27" x="75" size="small" color="violet" />
                <Star label="11" y="12" x="78" size="medium" color="violet" />
                <Star label="12" y="16" x="83" size="medium" color="violet" />
                <Star label="13" y="22" x="89" size="medium" color="violet" />
              </Constellation>
            </div>

            <div className="flex gap-y-6 flex-wrap justify-evenly">
              <Constellation
                label="sagittarius"
                width="300"
                height="280"
                horoscope={findHoroscope("sagittarius")}
              >
                <Star label="1" y="10" x="30" size="small" color="green" />
                <Star label="2" y="20" x="25" size="small" color="green" />
                <Star label="3" y="40" x="30" size="big" color="green" />
                <Star label="4" y="50" x="20" size="small" color="green" />
                <Star label="5" y="65" x="25" size="medium" color="green" />
                <Star label="6" y="50" x="50" size="small" color="green" />
                <Star label="7" y="45" x="65" size="medium" color="green" />
                <Star label="8" y="25" x="75" size="small" color="green" />
                <Star label="9" y="60" x="80" size="small" color="green" />
                <Star label="10" y="75" x="75" size="big" color="green" />
                <Star label="11" y="85" x="85" size="small" color="green" />
              </Constellation>

              <Constellation
                label="capricorn"
                width="300"
                height="280"
                horoscope={findHoroscope("capricorn")}
              >
                <Star label="1" y="30" x="15" size="big" color="lime" />
                <Star label="2" y="40" x="28" size="medium" color="lime" />
                <Star label="3" y="38" x="40" size="small" color="lime" />
                <Star label="4" y="44" x="49" size="small" color="lime" />
                <Star label="5" y="65" x="30" size="medium" color="lime" />
                <Star label="6" y="85" x="56" size="small" color="lime" />
                <Star label="7" y="75" x="65" size="small" color="lime" />
                <Star label="8" y="55" x="75" size="small" color="lime" />
                <Star label="9" y="30" x="78" size="big" color="lime" />
                <Star label="10" y="15" x="85" size="medium" color="lime" />
              </Constellation>

              <Constellation
                label="aquarius"
                width="300"
                height="280"
                horoscope={findHoroscope("aquarius")}
              >
                <Star label="1" y="80" x="15" size="big" color="purple" />
                <Star label="2" y="67" x="25" size="big" color="purple" />
                <Star label="3" y="60" x="30" size="small" color="purple" />
                <Star label="4" y="50" x="20" size="small" color="purple" />
                <Star label="5" y="25" x="25" size="small" color="purple" />
                <Star label="6" y="24" x="34" size="small" color="purple" />
                <Star label="7" y="30" x="43" size="small" color="purple" />
                <Star label="8" y="25" x="50" size="big" color="purple" />
                <Star label="9" y="40" x="67" size="big" color="purple" />
                <Star label="10" y="53" x="87" size="medium" color="purple" />
              </Constellation>

              <Constellation
                label="pisces"
                width="300"
                height="280"
                horoscope={findHoroscope("pisces")}
              >
                <Star label="1" y="5" x="40" size="small" color="blue" />
                <Star label="2" y="10" x="35" size="small" color="blue" />
                <Star label="3" y="15" x="38" size="small" color="blue" />
                <Star label="4" y="20" x="45" size="small" color="blue" />
                <Star label="5" y="34" x="25" size="big" color="blue" />
                <Star label="6" y="55" x="15" size="medium" color="blue" />
                <Star label="7" y="70" x="10" size="big" color="blue" />
                <Star label="8" y="70" x="25" size="small" color="blue" />
                <Star label="9" y="65" x="30" size="small" color="blue" />
                <Star label="10" y="63" x="35" size="small" color="blue" />
                <Star label="11" y="61" x="40" size="medium" color="blue" />
                <Star label="12" y="59" x="46" size="medium" color="blue" />
                <Star label="13" y="57" x="50" size="small" color="blue" />
                <Star label="14" y="58" x="55" size="small" color="blue" />
                <Star label="15" y="63" x="57" size="small" color="blue" />
                <Star label="16" y="66" x="53" size="small" color="blue" />
                <Star label="17" y="64" x="49" size="small" color="blue" />
                <Star label="18" y="62" x="62" size="small" color="blue" />
              </Constellation>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
