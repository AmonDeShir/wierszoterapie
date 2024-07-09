import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../button/button";

export type PostalAddress = {
  name: string,
  surname: string,
  areaCode: string,
  phone: string,
  contry: string,
  street: string,
  building: string,
  apartment: string,
  postalCode: string,
  city: string,
  paczkomat?: string,
}

type Props = {
  paczkomat?: boolean,
  onChange?: (value: PostalAddress) => void;
}

const Label = styled.label<{ full?: boolean, mid?: boolean, margin?: boolean, marginLeft?: boolean }>`
  display: block;
  font-size: 3.2rem;
  text-align: left;
  font-weight: normal;
  cursor: pointer;
  margin: ${({ margin, marginLeft }) => margin ? "0 6rem" : marginLeft ? "0 0 0 6rem" : "0px"};

  ${({ full, mid }) => full ? css`width: 100%;` : mid ? css`width: 73%;` : ""}
`;

const Input = styled.input<{full?: boolean, mid?: boolean, mb?: boolean}>`
  display: block;
  border: 0px;
  border-bottom: 1px solid black;
  transition: border-color 0.25s;
  font-size: 3rem;
  padding: 2rem 1rem;
  width: ${({ full, mid }) => full ? "100%" : mid ? "45rem" : "50rem"};
  margin-bottom: ${({ mb }) => mb ? "2.5rem" : "0px"};

  &:hover, &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary}; 
  }
`;

const Select = styled.select<{ small?: boolean, full?: boolean, mb?: boolean}>`
  display: block;
  border: 0px;
  border-bottom: 1px solid black;
  transition: border-color 0.25s;
  font-size: 3rem;
  padding: 2rem 1rem;
  width: ${({ small, full }) => small ? "22rem" : full ? "100%" : "50rem" };
  margin-bottom: ${({ mb }) => mb ? "2.5rem" : "0px"};
  background-color: transparent;

  &:hover, &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary}; 
  }
`;

const FindPaczkomat = styled.a`
  display: block;
  font-size: 2.5rem;
  text-align: left;
  font-weight: normal;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 1rem;
  width: 100%;
`;

export const Delivery = ({ paczkomat, onChange }: Props) => {
  const { register, handleSubmit } = useForm<PostalAddress>();
  const onSubmit = (data: PostalAddress) => {
    if (onChange) {
      onChange(data);
    }
  } 

  const Line = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 105rem;
  `;

  const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const DotedBorder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    border: 1px dashed black;
    border-radius: 1rem;
    margin: 3rem 0;
  `;

  return (
    <div>
      {!paczkomat && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <DotedBorder>
            <Line>
              <Label>
                Imie <Input type="text" mb placeholder="Imię" {...register("name")} />
              </Label>

              <Label>
                Nazwisko <Input type="text" mb placeholder="Nazwisko" {...register("surname")} />
              </Label>
            </Line>

            <Line>
              <Label>
                kierunkowy 
                <Select small mb defaultValue="48" {...register("areaCode")} >
                  <option value="48" selected>PL (+48)</option>
                  <option value="44">GB (+44)</option>
                  <option value="41">CH (+41)</option>
                  <option value="355">AL (+355)</option>
                  <option value="213">DZ (+213)</option>
                  <option value="1">AS (+1)</option>
                  <option value="376">AD (+376)</option>
                  <option value="244">AO (+244)</option>
                  <option value="1">AI (+1)</option>
                  <option value="1">AG (+1)</option>
                  <option value="54">AR (+54)</option>
                  <option value="374">AM (+374)</option>
                  <option value="297">AW (+297)</option>
                  <option value="61">AU (+61)</option>
                  <option value="43">AT (+43)</option>
                  <option value="994">AZ (+994)</option>
                  <option value="1">BS (+1)</option>
                  <option value="973">BH (+973)</option>
                  <option value="880">BD (+880)</option>
                  <option value="1">BB (+1)</option>
                  <option value="375">BY (+375)</option>
                  <option value="32">BE (+32)</option>
                  <option value="501">BZ (+501)</option>
                  <option value="229">BJ (+229)</option>
                  <option value="1">BM (+1)</option>
                  <option value="975">BT (+975)</option>
                  <option value="591">BO (+591)</option>
                  <option value="387">BA (+387)</option>
                  <option value="267">BW (+267)</option>
                  <option value="55">BR (+55)</option>
                  <option value="1">VG (+1)</option>
                  <option value="673">BN (+673)</option>
                  <option value="359">BG (+359)</option>
                  <option value="226">BF (+226)</option>
                  <option value="95">MM (+95)</option>
                  <option value="257">BI (+257)</option>
                  <option value="855">KH (+855)</option>
                  <option value="237">CM (+237)</option>
                  <option value="238">CV (+238)</option>
                  <option value="1">KY (+1)</option>
                  <option value="236">CF (+236)</option>
                  <option value="235">TD (+235)</option>
                  <option value="56">CL (+56)</option>
                  <option value="86">CN (+86)</option>
                  <option value="57">CO (+57)</option>
                  <option value="269">KM (+269)</option>
                  <option value="243">CD (+243)</option>
                  <option value="242">CG (+242)</option>
                  <option value="682">CK (+682)</option>
                  <option value="506">CR (+506)</option>
                  <option value="225">CI (+225)</option>
                  <option value="385">HR (+385)</option>
                  <option value="357">CY (+357)</option>
                  <option value="420">CZ (+420)</option>
                  <option value="45">DK (+45)</option>
                  <option value="253">DJ (+253)</option>
                  <option value="1">DM (+1)</option>
                  <option value="1">DO (+1)</option>
                  <option value="593">EC (+593)</option>
                  <option value="20">EG (+20)</option>
                  <option value="503">SV (+503)</option>
                  <option value="240">GQ (+240)</option>
                  <option value="291">ER (+291)</option>
                  <option value="372">EE (+372)</option>
                  <option value="251">ET (+251)</option>
                  <option value="500">FK (+500)</option>
                  <option value="679">FJ (+679)</option>
                  <option value="358">FI (+358)</option>
                  <option value="33">FR (+33)</option>
                  <option value="594">GF (+594)</option>
                  <option value="241">GA (+241)</option>
                  <option value="220">GM (+220)</option>
                  <option value="995">GE (+995)</option>
                  <option value="49">DE (+49)</option>
                  <option value="233">GH (+233)</option>
                  <option value="350">GI (+350)</option>
                  <option value="30">GR (+30)</option>
                  <option value="299">GL (+299)</option>
                  <option value="1">GD (+1)</option>
                  <option value="590">GP (+590)</option>
                  <option value="1">GU (+1)</option>
                  <option value="502">GT (+502)</option>
                  <option value="44">GG (+44)</option>
                  <option value="224">GN (+224)</option>
                  <option value="245">GW (+245)</option>
                  <option value="592">GY (+592)</option>
                  <option value="509">HT (+509)</option>
                  <option value="504">HN (+504)</option>
                  <option value="852">HK (+852)</option>
                  <option value="36">HU (+36)</option>
                  <option value="354">IS (+354)</option>
                  <option value="91">IN (+91)</option>
                  <option value="62">ID (+62)</option>
                  <option value="353">IE (+353)</option>
                  <option value="972">IL (+972)</option>
                  <option value="39">IT (+39)</option>
                  <option value="1">JM (+1)</option>
                  <option value="81">JP (+81)</option>
                  <option value="44">JE (+44)</option>
                  <option value="962">JO (+962)</option>
                  <option value="7">KZ (+7)</option>
                  <option value="254">KE (+254)</option>
                  <option value="686">KI (+686)</option>
                  <option value="82">KR (+82)</option>
                  <option value="965">KW (+965)</option>
                  <option value="996">KG (+996)</option>
                  <option value="856">LA (+856)</option>
                  <option value="371">LV (+371)</option>
                  <option value="218">LY (+218)</option>
                  <option value="423">LI (+423)</option>
                  <option value="370">LT (+370)</option>
                  <option value="352">LU (+352)</option>
                  <option value="853">MO (+853)</option>
                  <option value="389">MK (+389)</option>
                  <option value="261">MG (+261)</option>
                  <option value="265">MW (+265)</option>
                  <option value="60">MY (+60)</option>
                  <option value="960">MV (+960)</option>
                  <option value="223">ML (+223)</option>
                  <option value="356">MT (+356)</option>
                  <option value="692">MH (+692)</option>
                  <option value="596">MQ (+596)</option>
                  <option value="222">MR (+222)</option>
                  <option value="230">MU (+230)</option>
                  <option value="262">YT (+262)</option>
                  <option value="52">MX (+52)</option>
                  <option value="373">MD (+373)</option>
                  <option value="377">MC (+377)</option>
                  <option value="976">MN (+976)</option>
                  <option value="1">MS (+1)</option>
                  <option value="212">MA (+212)</option>
                  <option value="258">MZ (+258)</option>
                  <option value="264">NA (+264)</option>
                  <option value="674">NR (+674)</option>
                  <option value="977">NP (+977)</option>
                  <option value="31">NL (+31)</option>
                  <option value="599">AN (+599)</option>
                  <option value="687">NC (+687)</option>
                  <option value="64">NZ (+64)</option>
                  <option value="505">NI (+505)</option>
                  <option value="227">NE (+227)</option>
                  <option value="234">NG (+234)</option>
                  <option value="683">NU (+683)</option>
                  <option value="47">NO (+47)</option>
                  <option value="968">OM (+968)</option>
                  <option value="92">PK (+92)</option>
                  <option value="680">PW (+680)</option>
                  <option value="507">PA (+507)</option>
                  <option value="675">PG (+675)</option>
                  <option value="595">PY (+595)</option>
                  <option value="51">PE (+51)</option>
                  <option value="63">PH (+63)</option>
                  <option value="1">US (+1)</option>
                  <option value="351">PT (+351)</option>
                  <option value="1">PR (+1)</option>
                  <option value="974">QA (+974)</option>
                  <option value="40">RO (+40)</option>
                  <option value="7">RU (+7)</option>
                  <option value="250">RW (+250)</option>
                  <option value="290">SH (+290)</option>
                  <option value="1">KN (+1)</option>
                  <option value="1">LC (+1)</option>
                  <option value="508">PM (+508)</option>
                  <option value="1">VC (+1)</option>
                  <option value="378">SM (+378)</option>
                  <option value="966">SA (+966)</option>
                  <option value="221">SN (+221)</option>
                  <option value="248">SC (+248)</option>
                  <option value="232">SL (+232)</option>
                  <option value="65">SG (+65)</option>
                  <option value="421">SK (+421)</option>
                  <option value="386">SI (+386)</option>
                  <option value="677">SB (+677)</option>
                  <option value="252">SO (+252)</option>
                  <option value="27">ZA (+27)</option>
                  <option value="34">ES (+34)</option>
                  <option value="94">LK (+94)</option>
                  <option value="597">SR (+597)</option>
                  <option value="47">SJ (+47)</option>
                  <option value="268">SZ (+268)</option>
                  <option value="46">SE (+46)</option>
                  <option value="1">CA (+1)</option>
                  <option value="963">SY (+963)</option>
                  <option value="689">PF (+689)</option>
                  <option value="886">TW (+886)</option>
                  <option value="992">TJ (+992)</option>
                  <option value="255">TZ (+255)</option>
                  <option value="66">TH (+66)</option>
                  <option value="228">TG (+228)</option>
                  <option value="676">TO (+676)</option>
                  <option value="1">TT (+1)</option>
                  <option value="216">TN (+216)</option>
                  <option value="90">TR (+90)</option>
                  <option value="993">TM (+993)</option>
                  <option value="1">TC (+1)</option>
                  <option value="688">TV (+688)</option>
                  <option value="256">UG (+256)</option>
                  <option value="971">AE (+971)</option>
                  <option value="380">UA (+380)</option>
                  <option value="598">UY (+598)</option>
                  <option value="998">UZ (+998)</option>
                  <option value="678">VU (+678)</option>
                  <option value="39">VA (+39)</option>
                  <option value="58">VE (+58)</option>
                  <option value="84">VN (+84)</option>
                  <option value="1">VI (+1)</option>
                  <option value="681">WF (+681)</option>
                  <option value="212">EH (+212)</option>
                  <option value="685">WS (+685)</option>
                  <option value="967">YE (+967)</option>
                  <option value="381">RS (+381)</option>
                  <option value="260">ZM (+260)</option>
                  <option value="263">ZW (+263)</option>
                  <option value="691">FM (+691)</option>
                  <option value="93">AF (+93)</option>
                  <option value="382">ME (+382)</option>
                  <option value="98">IR (+98)</option>
                  <option value="964">IQ (+964)</option>
                  <option value="599">BQ (+599)</option>
                  <option value="246">IO (+246)</option>
                  <option value="599">CW (+599)</option>
                  <option value="262">TF (+262)</option>
                  <option value="500">GS (+500)</option>
                  <option value="850">KP (+850)</option>
                  <option value="53">CU (+53)</option>
                  <option value="266">LS (+266)</option>
                  <option value="961">LB (+961)</option>
                  <option value="231">LR (+231)</option>
                  <option value="1">MP (+1)</option>
                  <option value="64">PN (+64)</option>
                  <option value="262">RE (+262)</option>
                  <option value="590">BL (+590)</option>
                  <option value="590">MF (+590)</option>
                  <option value="1">SX (+1)</option>
                  <option value="249">SD (+249)</option>
                  <option value="211">SS (+211)</option>
                  <option value="670">TL (+670)</option>
                  <option value="690">TK (+690)</option>
                  <option value="61">CX (+61)</option>
                  <option value="44">IM (+44)</option>
                  <option value="672">NF (+672)</option>
                  <option value="358">AX (+358)</option>
                  <option value="61">CC (+61)</option>
                  <option value="298">FO (+298)</option>
                  <option value="239">ST (+239)</option>
                  <option value="383">XK (+383)</option>
                </Select>
              </Label>

              <Label mid>
                telefon komorkowy <Input type="tel" placeholder="Numer telefonu" mb full {...register("phone")} />
              </Label>
            </Line>

            <Label full>
              kraj
              <Select full mb defaultValue="Polska" {...register("contry")}>
                <option value="Afganistan">Afganistan</option>
                <option value="Albania">Albania</option>
                <option value="Algieria">Algieria</option>
                <option value="Andora">Andora</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antigua i Barbuda">Antigua i Barbuda</option>
                <option value="Arabia Saudyjska">Arabia Saudyjska</option>
                <option value="Argentyna">Argentyna</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbejdżan">Azerbejdżan</option>
                <option value="Bahamy">Bahamy</option>
                <option value="Bahrajn">Bahrajn</option>
                <option value="Bangladesz">Bangladesz</option>
                <option value="Barbados">Barbados</option>
                <option value="Belgia">Belgia</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermudy">Bermudy</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Białoruś">Białoruś</option>
                <option value="Boliwia">Boliwia</option>
                <option value="Bośnia i Hercegowina">Bośnia i Hercegowina</option>
                <option value="Botswana">Botswana</option>
                <option value="Brazylia">Brazylia</option>
                <option value="Brunei">Brunei</option>
                <option value="Brytyjskie Terytorium Oceanu Indyjskiego">Brytyjskie Terytorium Oceanu Indyjskiego</option>
                <option value="Brytyjskie Wyspy Dziewicze">Brytyjskie Wyspy Dziewicze</option>
                <option value="Bułgaria">Bułgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Chile">Chile</option>
                <option value="Chiny">Chiny</option>
                <option value="Chorwacja">Chorwacja</option>
                <option value="Côte d’Ivoire">Côte d’Ivoire</option>
                <option value="Curaçao">Curaçao</option>
                <option value="Curaçao">Curaçao</option>
                <option value="Cypr">Cypr</option>
                <option value="Czad">Czad</option>
                <option value="Czarnogóra">Czarnogóra</option>
                <option value="Czechy">Czechy</option>
                <option value="Dania">Dania</option>
                <option value="Demokratyczna Republika Konga">Demokratyczna Republika Konga</option>
                <option value="Dominika">Dominika</option>
                <option value="Dominikana">Dominikana</option>
                <option value="Dżibuti">Dżibuti</option>
                <option value="Egipt">Egipt</option>
                <option value="Ekwador">Ekwador</option>
                <option value="Erytrea">Erytrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Eswatini">Eswatini</option>
                <option value="Etiopia">Etiopia</option>
                <option value="Falklandy">Falklandy</option>
                <option value="Fidżi">Fidżi</option>
                <option value="Filipiny">Filipiny</option>
                <option value="Finlandia">Finlandia</option>
                <option value="Francja">Francja</option>
                <option value="Francuskie Terytoria Południowe i Antarktyczne">Francuskie Terytoria Południowe i Antarktyczne</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia Południowa i Sandwich Południowy">Georgia Południowa i Sandwich Południowy</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Grecja">Grecja</option>
                <option value="Grenada">Grenada</option>
                <option value="Grenlandia">Grenlandia</option>
                <option value="Gruzja">Gruzja</option>
                <option value="Guam">Guam</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Gujana">Gujana</option>
                <option value="Gujana Francuska">Gujana Francuska</option>
                <option value="Gwadelupa">Gwadelupa</option>
                <option value="Gwatemala">Gwatemala</option>
                <option value="Gwinea">Gwinea</option>
                <option value="Gwinea Bissau">Gwinea Bissau</option>
                <option value="Gwinea Równikowa">Gwinea Równikowa</option>
                <option value="Haiti">Haiti</option>
                <option value="Hiszpania">Hiszpania</option>
                <option value="Holandia">Holandia</option>
                <option value="Honduras">Honduras</option>
                <option value="Indie">Indie</option>
                <option value="Indonezja">Indonezja</option>
                <option value="Irak">Irak</option>
                <option value="Iran">Iran</option>
                <option value="Irlandia">Irlandia</option>
                <option value="Islandia">Islandia</option>
                <option value="Izrael">Izrael</option>
                <option value="Jamajka">Jamajka</option>
                <option value="Japonia">Japonia</option>
                <option value="Jemen">Jemen</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordania">Jordania</option>
                <option value="Kajmany">Kajmany</option>
                <option value="Kambodża">Kambodża</option>
                <option value="Kamerun">Kamerun</option>
                <option value="Kanada">Kanada</option>
                <option value="Katar">Katar</option>
                <option value="Kazachstan">Kazachstan</option>
                <option value="Kenia">Kenia</option>
                <option value="Kirgistan">Kirgistan</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Kolumbia">Kolumbia</option>
                <option value="Komory">Komory</option>
                <option value="Kongo">Kongo</option>
                <option value="Korea Południowa">Korea Południowa</option>
                <option value="Korea Północna">Korea Północna</option>
                <option value="Kostaryka">Kostaryka</option>
                <option value="Kuba">Kuba</option>
                <option value="Kuwejt">Kuwejt</option>
                <option value="Laos">Laos</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liban">Liban</option>
                <option value="Liberia">Liberia</option>
                <option value="Libia">Libia</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Litwa">Litwa</option>
                <option value="Luksemburg">Luksemburg</option>
                <option value="Łotwa">Łotwa</option>
                <option value="Macedonia Północna">Macedonia Północna</option>
                <option value="Madagaskar">Madagaskar</option>
                <option value="Majotta">Majotta</option>
                <option value="Malawi">Malawi</option>
                <option value="Malediwy">Malediwy</option>
                <option value="Malezja">Malezja</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Mariany Północne">Mariany Północne</option>
                <option value="Maroko">Maroko</option>
                <option value="Martynika">Martynika</option>
                <option value="Mauretania">Mauretania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Meksyk">Meksyk</option>
                <option value="Mikronezja">Mikronezja</option>
                <option value="Mjanma (Birma)">Mjanma (Birma)</option>
                <option value="Mołdawia">Mołdawia</option>
                <option value="Monako">Monako</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Mozambik">Mozambik</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Niderlandy Karaibskie">Niderlandy Karaibskie</option>
                <option value="Niemcy">Niemcy</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Nikaragua">Nikaragua</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk">Norfolk</option>
                <option value="Norwegia">Norwegia</option>
                <option value="Nowa Kaledonia">Nowa Kaledonia</option>
                <option value="Nowa Zelandia">Nowa Zelandia</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Panama">Panama</option>
                <option value="Papua-Nowa Gwinea">Papua-Nowa Gwinea</option>
                <option value="Paragwaj">Paragwaj</option>
                <option value="Peru">Peru</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Polinezja Francuska">Polinezja Francuska</option>
                <option value="Polska">Polska</option>
                <option value="Portoryko">Portoryko</option>
                <option value="Portugalia">Portugalia</option>
                <option value="Republika Południowej Afryki">Republika Południowej Afryki</option>
                <option value="Republika Środkowoafrykańska">Republika Środkowoafrykańska</option>
                <option value="Republika Zielonego Przylądka">Republika Zielonego Przylądka</option>
                <option value="Reunion">Reunion</option>
                <option value="Rosja">Rosja</option>
                <option value="Rumunia">Rumunia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Sahara Zachodnia">Sahara Zachodnia</option>
                <option value="Saint Kitts i Nevis">Saint Kitts i Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Vincent i Grenadyny">Saint Vincent i Grenadyny</option>
                <option value="Saint-Barthélemy">Saint-Barthélemy</option>
                <option value="Saint-Martin">Saint-Martin</option>
                <option value="Saint-Pierre i Miquelon">Saint-Pierre i Miquelon</option>
                <option value="Salwador">Salwador</option>
                <option value="Samoa">Samoa</option>
                <option value="Samoa Amerykańskie">Samoa Amerykańskie</option>
                <option value="San Marino">San Marino</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seszele">Seszele</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapur">Singapur</option>
                <option value="Sint Maarten">Sint Maarten</option>
                <option value="Słowacja">Słowacja</option>
                <option value="Słowenia">Słowenia</option>
                <option value="Somalia">Somalia</option>
                <option value="SRA Hongkong (Chiny)">SRA Hongkong (Chiny)</option>
                <option value="SRA Makau (Chiny)">SRA Makau (Chiny)</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Stany Zjednoczone">Stany Zjednoczone</option>
                <option value="Sudan">Sudan</option>
                <option value="Sudan Południowy">Sudan Południowy</option>
                <option value="Surinam">Surinam</option>
                <option value="Svalbard i Jan Mayen">Svalbard i Jan Mayen</option>
                <option value="Syria">Syria</option>
                <option value="Szwajcaria">Szwajcaria</option>
                <option value="Szwecja">Szwecja</option>
                <option value="Tadżykistan">Tadżykistan</option>
                <option value="Tajlandia">Tajlandia</option>
                <option value="Tajwan">Tajwan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Timor Wschodni">Timor Wschodni</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trynidad i Tobago">Trynidad i Tobago</option>
                <option value="Tunezja">Tunezja</option>
                <option value="Turcja">Turcja</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks i Caicos">Turks i Caicos</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraina">Ukraina</option>
                <option value="Urugwaj">Urugwaj</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Wallis i Futuna">Wallis i Futuna</option>
                <option value="Watykan">Watykan</option>
                <option value="Wenezuela">Wenezuela</option>
                <option value="Węgry">Węgry</option>
                <option value="Wielka Brytania">Wielka Brytania</option>
                <option value="Wietnam">Wietnam</option>
                <option value="Włochy">Włochy</option>
                <option value="Wyspa Bouveta">Wyspa Bouveta</option>
                <option value="Wyspa Bożego Narodzenia">Wyspa Bożego Narodzenia</option>
                <option value="Wyspa Man">Wyspa Man</option>
                <option value="Wyspa Świętej Heleny">Wyspa Świętej Heleny</option>
                <option value="Wyspy Alandzkie">Wyspy Alandzkie</option>
                <option value="Wyspy Cooka">Wyspy Cooka</option>
                <option value="Wyspy Dziewicze Stanów Zjednoczonych">Wyspy Dziewicze Stanów Zjednoczonych</option>
                <option value="Wyspy Kokosowe">Wyspy Kokosowe</option>
                <option value="Wyspy Marshalla">Wyspy Marshalla</option>
                <option value="Wyspy Owcze">Wyspy Owcze</option>
                <option value="Wyspy Salomona">Wyspy Salomona</option>
                <option value="Wyspy Świętego Tomasza i Książęca">Wyspy Świętego Tomasza i Książęca</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
                <option value="Zjednoczone Emiraty Arabskie">Zjednoczone Emiraty Arabskie</option>
              </Select>
            </Label>

            <Line>
              <Label>
                ulica <Input mid type="text" placeholder="np. Kolejowa" mb {...register("street")} />
              </Label>

              <Label mid margin>
                nr budynku <Input full type="text" placeholder="np. 10" mb {...register("building")} />
              </Label>

              <Label mid>
                nr mieszkania <Input full type="text" placeholder="np. 5" mb {...register("apartment")} />
              </Label>
            </Line>

            <Line>
              <Label>
                kod pocztowy <Input mid type="text" placeholder="np. 00-000" {...register("postalCode")} />
              </Label>

              <Label mid marginLeft>
                miejscowość <Input full type="text" placeholder="np. Legnica" {...register("city")}/>
              </Label>
            </Line>
          </DotedBorder>

          <Buttons>
            <div>
              <SubmitButton type="submit" style={{ margin: 0 }}>Generuj</SubmitButton>
            </div>
          </Buttons>
        </form>
      )}

      {paczkomat && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <DotedBorder>
            <Line>
              <Label>
                Imie <Input type="text" mb placeholder="Imię" {...register("name")} />
              </Label>

              <Label>
                Nazwisko <Input type="text" mb placeholder="Nazwisko" {...register("surname")} />
              </Label>
            </Line>

            <Line>
              <Label>
                kierunkowy 
                <Select small mb defaultValue="48" {...register("areaCode")} >
                  <option value="48" selected>PL (+48)</option>
                  <option value="44">GB (+44)</option>
                  <option value="41">CH (+41)</option>
                  <option value="355">AL (+355)</option>
                  <option value="213">DZ (+213)</option>
                  <option value="1">AS (+1)</option>
                  <option value="376">AD (+376)</option>
                  <option value="244">AO (+244)</option>
                  <option value="1">AI (+1)</option>
                  <option value="1">AG (+1)</option>
                  <option value="54">AR (+54)</option>
                  <option value="374">AM (+374)</option>
                  <option value="297">AW (+297)</option>
                  <option value="61">AU (+61)</option>
                  <option value="43">AT (+43)</option>
                  <option value="994">AZ (+994)</option>
                  <option value="1">BS (+1)</option>
                  <option value="973">BH (+973)</option>
                  <option value="880">BD (+880)</option>
                  <option value="1">BB (+1)</option>
                  <option value="375">BY (+375)</option>
                  <option value="32">BE (+32)</option>
                  <option value="501">BZ (+501)</option>
                  <option value="229">BJ (+229)</option>
                  <option value="1">BM (+1)</option>
                  <option value="975">BT (+975)</option>
                  <option value="591">BO (+591)</option>
                  <option value="387">BA (+387)</option>
                  <option value="267">BW (+267)</option>
                  <option value="55">BR (+55)</option>
                  <option value="1">VG (+1)</option>
                  <option value="673">BN (+673)</option>
                  <option value="359">BG (+359)</option>
                  <option value="226">BF (+226)</option>
                  <option value="95">MM (+95)</option>
                  <option value="257">BI (+257)</option>
                  <option value="855">KH (+855)</option>
                  <option value="237">CM (+237)</option>
                  <option value="238">CV (+238)</option>
                  <option value="1">KY (+1)</option>
                  <option value="236">CF (+236)</option>
                  <option value="235">TD (+235)</option>
                  <option value="56">CL (+56)</option>
                  <option value="86">CN (+86)</option>
                  <option value="57">CO (+57)</option>
                  <option value="269">KM (+269)</option>
                  <option value="243">CD (+243)</option>
                  <option value="242">CG (+242)</option>
                  <option value="682">CK (+682)</option>
                  <option value="506">CR (+506)</option>
                  <option value="225">CI (+225)</option>
                  <option value="385">HR (+385)</option>
                  <option value="357">CY (+357)</option>
                  <option value="420">CZ (+420)</option>
                  <option value="45">DK (+45)</option>
                  <option value="253">DJ (+253)</option>
                  <option value="1">DM (+1)</option>
                  <option value="1">DO (+1)</option>
                  <option value="593">EC (+593)</option>
                  <option value="20">EG (+20)</option>
                  <option value="503">SV (+503)</option>
                  <option value="240">GQ (+240)</option>
                  <option value="291">ER (+291)</option>
                  <option value="372">EE (+372)</option>
                  <option value="251">ET (+251)</option>
                  <option value="500">FK (+500)</option>
                  <option value="679">FJ (+679)</option>
                  <option value="358">FI (+358)</option>
                  <option value="33">FR (+33)</option>
                  <option value="594">GF (+594)</option>
                  <option value="241">GA (+241)</option>
                  <option value="220">GM (+220)</option>
                  <option value="995">GE (+995)</option>
                  <option value="49">DE (+49)</option>
                  <option value="233">GH (+233)</option>
                  <option value="350">GI (+350)</option>
                  <option value="30">GR (+30)</option>
                  <option value="299">GL (+299)</option>
                  <option value="1">GD (+1)</option>
                  <option value="590">GP (+590)</option>
                  <option value="1">GU (+1)</option>
                  <option value="502">GT (+502)</option>
                  <option value="44">GG (+44)</option>
                  <option value="224">GN (+224)</option>
                  <option value="245">GW (+245)</option>
                  <option value="592">GY (+592)</option>
                  <option value="509">HT (+509)</option>
                  <option value="504">HN (+504)</option>
                  <option value="852">HK (+852)</option>
                  <option value="36">HU (+36)</option>
                  <option value="354">IS (+354)</option>
                  <option value="91">IN (+91)</option>
                  <option value="62">ID (+62)</option>
                  <option value="353">IE (+353)</option>
                  <option value="972">IL (+972)</option>
                  <option value="39">IT (+39)</option>
                  <option value="1">JM (+1)</option>
                  <option value="81">JP (+81)</option>
                  <option value="44">JE (+44)</option>
                  <option value="962">JO (+962)</option>
                  <option value="7">KZ (+7)</option>
                  <option value="254">KE (+254)</option>
                  <option value="686">KI (+686)</option>
                  <option value="82">KR (+82)</option>
                  <option value="965">KW (+965)</option>
                  <option value="996">KG (+996)</option>
                  <option value="856">LA (+856)</option>
                  <option value="371">LV (+371)</option>
                  <option value="218">LY (+218)</option>
                  <option value="423">LI (+423)</option>
                  <option value="370">LT (+370)</option>
                  <option value="352">LU (+352)</option>
                  <option value="853">MO (+853)</option>
                  <option value="389">MK (+389)</option>
                  <option value="261">MG (+261)</option>
                  <option value="265">MW (+265)</option>
                  <option value="60">MY (+60)</option>
                  <option value="960">MV (+960)</option>
                  <option value="223">ML (+223)</option>
                  <option value="356">MT (+356)</option>
                  <option value="692">MH (+692)</option>
                  <option value="596">MQ (+596)</option>
                  <option value="222">MR (+222)</option>
                  <option value="230">MU (+230)</option>
                  <option value="262">YT (+262)</option>
                  <option value="52">MX (+52)</option>
                  <option value="373">MD (+373)</option>
                  <option value="377">MC (+377)</option>
                  <option value="976">MN (+976)</option>
                  <option value="1">MS (+1)</option>
                  <option value="212">MA (+212)</option>
                  <option value="258">MZ (+258)</option>
                  <option value="264">NA (+264)</option>
                  <option value="674">NR (+674)</option>
                  <option value="977">NP (+977)</option>
                  <option value="31">NL (+31)</option>
                  <option value="599">AN (+599)</option>
                  <option value="687">NC (+687)</option>
                  <option value="64">NZ (+64)</option>
                  <option value="505">NI (+505)</option>
                  <option value="227">NE (+227)</option>
                  <option value="234">NG (+234)</option>
                  <option value="683">NU (+683)</option>
                  <option value="47">NO (+47)</option>
                  <option value="968">OM (+968)</option>
                  <option value="92">PK (+92)</option>
                  <option value="680">PW (+680)</option>
                  <option value="507">PA (+507)</option>
                  <option value="675">PG (+675)</option>
                  <option value="595">PY (+595)</option>
                  <option value="51">PE (+51)</option>
                  <option value="63">PH (+63)</option>
                  <option value="1">US (+1)</option>
                  <option value="351">PT (+351)</option>
                  <option value="1">PR (+1)</option>
                  <option value="974">QA (+974)</option>
                  <option value="40">RO (+40)</option>
                  <option value="7">RU (+7)</option>
                  <option value="250">RW (+250)</option>
                  <option value="290">SH (+290)</option>
                  <option value="1">KN (+1)</option>
                  <option value="1">LC (+1)</option>
                  <option value="508">PM (+508)</option>
                  <option value="1">VC (+1)</option>
                  <option value="378">SM (+378)</option>
                  <option value="966">SA (+966)</option>
                  <option value="221">SN (+221)</option>
                  <option value="248">SC (+248)</option>
                  <option value="232">SL (+232)</option>
                  <option value="65">SG (+65)</option>
                  <option value="421">SK (+421)</option>
                  <option value="386">SI (+386)</option>
                  <option value="677">SB (+677)</option>
                  <option value="252">SO (+252)</option>
                  <option value="27">ZA (+27)</option>
                  <option value="34">ES (+34)</option>
                  <option value="94">LK (+94)</option>
                  <option value="597">SR (+597)</option>
                  <option value="47">SJ (+47)</option>
                  <option value="268">SZ (+268)</option>
                  <option value="46">SE (+46)</option>
                  <option value="1">CA (+1)</option>
                  <option value="963">SY (+963)</option>
                  <option value="689">PF (+689)</option>
                  <option value="886">TW (+886)</option>
                  <option value="992">TJ (+992)</option>
                  <option value="255">TZ (+255)</option>
                  <option value="66">TH (+66)</option>
                  <option value="228">TG (+228)</option>
                  <option value="676">TO (+676)</option>
                  <option value="1">TT (+1)</option>
                  <option value="216">TN (+216)</option>
                  <option value="90">TR (+90)</option>
                  <option value="993">TM (+993)</option>
                  <option value="1">TC (+1)</option>
                  <option value="688">TV (+688)</option>
                  <option value="256">UG (+256)</option>
                  <option value="971">AE (+971)</option>
                  <option value="380">UA (+380)</option>
                  <option value="598">UY (+598)</option>
                  <option value="998">UZ (+998)</option>
                  <option value="678">VU (+678)</option>
                  <option value="39">VA (+39)</option>
                  <option value="58">VE (+58)</option>
                  <option value="84">VN (+84)</option>
                  <option value="1">VI (+1)</option>
                  <option value="681">WF (+681)</option>
                  <option value="212">EH (+212)</option>
                  <option value="685">WS (+685)</option>
                  <option value="967">YE (+967)</option>
                  <option value="381">RS (+381)</option>
                  <option value="260">ZM (+260)</option>
                  <option value="263">ZW (+263)</option>
                  <option value="691">FM (+691)</option>
                  <option value="93">AF (+93)</option>
                  <option value="382">ME (+382)</option>
                  <option value="98">IR (+98)</option>
                  <option value="964">IQ (+964)</option>
                  <option value="599">BQ (+599)</option>
                  <option value="246">IO (+246)</option>
                  <option value="599">CW (+599)</option>
                  <option value="262">TF (+262)</option>
                  <option value="500">GS (+500)</option>
                  <option value="850">KP (+850)</option>
                  <option value="53">CU (+53)</option>
                  <option value="266">LS (+266)</option>
                  <option value="961">LB (+961)</option>
                  <option value="231">LR (+231)</option>
                  <option value="1">MP (+1)</option>
                  <option value="64">PN (+64)</option>
                  <option value="262">RE (+262)</option>
                  <option value="590">BL (+590)</option>
                  <option value="590">MF (+590)</option>
                  <option value="1">SX (+1)</option>
                  <option value="249">SD (+249)</option>
                  <option value="211">SS (+211)</option>
                  <option value="670">TL (+670)</option>
                  <option value="690">TK (+690)</option>
                  <option value="61">CX (+61)</option>
                  <option value="44">IM (+44)</option>
                  <option value="672">NF (+672)</option>
                  <option value="358">AX (+358)</option>
                  <option value="61">CC (+61)</option>
                  <option value="298">FO (+298)</option>
                  <option value="239">ST (+239)</option>
                  <option value="383">XK (+383)</option>
                </Select>
              </Label>

              <Label mid>
                telefon komorkowy <Input type="tel" placeholder="Numer telefonu" mb full {...register("phone")} />
              </Label>
            </Line>

            <Line>
              <Label>
                Paczkomat <Input mid type="text" placeholder="np. LEG01L" {...register("paczkomat")} />
              </Label>

              <Label mid marginLeft>
                miejscowość <Input full type="text" placeholder="np. Legnica" {...register("city")}/>
              </Label>
            </Line>

            <FindPaczkomat href="https://inpost.pl/znajdz-paczkomat" target="_blank">Znajdź paczkomat</FindPaczkomat>
          </DotedBorder>
          <Buttons>
            <div>
              <SubmitButton type="submit" style={{ margin: 0 }}>Generuj</SubmitButton>
            </div>
          </Buttons>
        </form>
      )}
    </div>
  );
}