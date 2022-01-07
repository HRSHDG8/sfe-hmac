import {apiKey, apiUrl} from "../const/api";
import moment from "moment";

export interface ImageOfTheDayResponse {
    copyright?: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}
const data : ImageOfTheDayResponse[]=[{"copyright":"Soumyadeep Mukherjee","date":"2022-01-01","explanation":"very Full Moon of 2021 shines in this year-spanning astrophoto project, a composite portrait of the familiar lunar nearside at each brightest lunar phase. Arranged by moonth, the year progresses in stripes beginning at the top. Taken with the same camera and lens the stripes are from Full Moon images all combined at the same pixel scale. The stripes still look mismatched, but they show that the Full Moon's angular size changes throughout the year depending on its distance from Kolkata, India, planet Earth. The calendar month, a full moon name, distance in kilometers, and angular size is indicated for each stripe. Angular size is given in minutes of arc corresponding to 1/60th of a degree. The largest Full Moon is near a perigee or closest approach in May. The smallest is near an apogee, the most distant Full Moon in December. Of course the full moons of May and November also slid into Earth's shadow during 2021's two lunar eclipses.","hdurl":"https://apod.nasa.gov/apod/image/2201/MoonstripsAnnotatedIG.jpg","media_type":"image","service_version":"v1","title":"The Full Moon of 2021","url":"https://apod.nasa.gov/apod/image/2201/MoonstripsAnnotatedIG_crop1024.jpg"},{"copyright":"Dani Caxete","date":"2022-01-02","explanation":"Sometimes falling ice crystals make the atmosphere into a giant lens causing arcs and halos to appear around the Sun or Moon. One Saturday night in 2012 was just such a time near Madrid, Spain, where a winter sky displayed not only a bright Moon but four rare lunar halos.  The brightest object, near the top of the featured image, is the Moon. Light from the Moon refracts through tumbling hexagonal ice crystals into a somewhat rare 22-degree halo seen surrounding the Moon. Elongating the 22-degree arc horizontally is a more rare circumscribed halo caused by column ice crystals. Even more rare, some moonlight refracts through more distant tumbling ice crystals to form a (third) rainbow-like arc 46 degrees from the Moon and appearing here just above a picturesque winter landscape. Furthermore, part of a whole 46-degree circular halo is also visible, so that an extremely rare -- especially for the Moon --  quadruple halo  was captured. Far in the background is a famous winter skyscape that includes Sirius, the belt of Orion, and Betelgeuse -- visible between the inner and outer arcs. Halos and arcs typically last for minutes to hours, so if you do see one there should be time to invite family, friends or neighbors to share your unusual lensed vista of the sky.","hdurl":"https://apod.nasa.gov/apod/image/2201/lunararcs_caxete_1280.jpg","media_type":"image","service_version":"v1","title":"Quadruple Lunar Halo Over Winter Road","url":"https://apod.nasa.gov/apod/image/2201/lunararcs_caxete_960.jpg"},{"copyright":"Jan Hattenbach","date":"2022-01-03","explanation":"You couldn't see Comet Leonard\u2019s extremely long tail with a telescope \u2014 it was just too long. You also couldn't see it with binoculars \u2014 still too long. Or with your eyes -- it was too dim. Or from a city \u2014 the sky was too bright. But from a dark location with a low horizon \u2014 your camera could. And still might -- if the comet survives today's closest encounter with the Sun, which occurs between the orbits of Mercury and Venus. The featured picture was created from two deep and wide-angle camera images taken from La Palma in the Canary Islands of Spain late last month.  Afterwards, if it survives, what is left of Comet Leonard's nucleus will head out of our Solar System, never to return.","hdurl":"https://apod.nasa.gov/apod/image/2201/LeonardTail_Hattenbach_1600.jpg","media_type":"image","service_version":"v1","title":"Comet Leonard's Long Tail","url":"https://apod.nasa.gov/apod/image/2201/LeonardTail_Hattenbach_960.jpg"},{"date":"2022-01-04","explanation":"What's happened to that moon of Saturn? Nothing -- Saturn's moon Rhea is just partly hidden behind Saturn's rings. In 2010, the robotic Cassini spacecraft then orbiting Saturn took this narrow-angle view looking across the Solar System's most famous rings. Rings visible in the foreground include the thin F ring on the outside and the much wider A and B rings just interior to it. Although it seems to be hovering over the rings, Saturn's moon Janus is actually far behind them.  Janus is one of Saturn's smaller moons and measures only about 180 kilometers across. Farther out from the camera is the heavily cratered Rhea, a much larger moon measuring 1,500 kilometers across. The top of Rhea is visible only through gaps in the rings. After more than a decade of exploration and discovery, the Cassini spacecraft ran low on fuel in 2017 and was directed to enter Saturn's atmosphere, where it surely melted.   Explore Your Universe: Random APOD Generator","hdurl":"https://apod.nasa.gov/apod/image/2201/RheaJanus_Cassini_1020.jpg","media_type":"image","service_version":"v1","title":"Moons Beyond Rings at Saturn","url":"https://apod.nasa.gov/apod/image/2201/RheaJanus_Cassini_1020.jpg"},{"copyright":"Luca Vanzella","date":"2022-01-05","explanation":"Does the Sun always rise in the same direction?  No.  As the months change, the direction toward the rising Sun changes, too.  The featured image shows the direction of sunrise every month during 2021 as seen from the city of Edmonton, Alberta, Canada. The camera in the image is always facing due east, with north toward the left and south toward the right.  As shown in an accompanying video, the top image was taken in 2020 December, while the bottom image was captured in 2021 December, making 13 images in total. Although the Sun always rises in the east in general, it rises furthest to the south of east on the December solstice, and furthest north of east on the June solstice. In many countries, the December Solstice is considered an official change in season: for example the first day of winter in the North.  Solar heating and stored energy in the Earth's surface and atmosphere are near their lowest during winter, making the winter season the coldest of the year.    Status Updates: Deploying the James Webb Space Telescope","hdurl":"https://apod.nasa.gov/apod/image/2201/SunriseYear_Vanzella_2400.jpg","media_type":"image","service_version":"v1","title":"A Year of Sunrises","url":"https://apod.nasa.gov/apod/image/2201/SunriseYear_Vanzella_960.jpg"}]
//mock api for local testing to avoid over hitting nasa aips
export const imageOfTheDayMock = ():Promise<ImageOfTheDayResponse[]>=>{
    return new Promise<ImageOfTheDayResponse[]>(resolve => {
       setTimeout(()=>{
           resolve(data);
       },1000)
    });

}
export const imageOfTheDay = () :Promise<ImageOfTheDayResponse[]>=>{
    const url = new URL(`${apiUrl}/planetary/apod`);
    const queryParams : Record<string, string> = {
        api_key: apiKey,
        start_date: '2022-01-01',
        end_date: moment().format('YYYY-MM-DD')
    }
    Object.keys(queryParams).forEach(key=>url.searchParams.append(key, queryParams[key]));
    return fetch(url as any)
        .then(res=>res.json())

}