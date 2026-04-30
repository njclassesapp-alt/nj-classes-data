var njMathsTheory= {
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 1: સંખ્યા પદ્ધતિ
    // ------------------------------------
    "1": {
        "chapterName": "પ્રકરણ 1",
        "chapterTitle": "સંખ્યા પદ્ધતિ",
        "qa_list": [
            { 
                question: "વિવિધ સંખ્યાગણનો પરિચય (Introduction to Number Sets)", 
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; margin-bottom:15px;'>
                    <ul style='line-height:1.8; color:#1e3a8a;'>
                        <li><b>૧. પ્રાકૃતિક સંખ્યાઓ (Natural Numbers - N):</b> ગણતરીની સંખ્યાઓ. દા.ત. 1, 2, 3, 4... <br><span style='color:#ca8a04; font-size:14px;'>N = {1, 2, 3, ...}</span></li>
                        <li><b>૨. પૂર્ણ સંખ્યાઓ (Whole Numbers - W):</b> પ્રાકૃતિક સંખ્યાઓ શૂન્ય (0) સાથે મળીને પૂર્ણ સંખ્યાઓ બનાવે છે. <br><span style='color:#ca8a04; font-size:14px;'>W = {0, 1, 2, 3, ...}</span></li>
                        <li><b>૩. પૂર્ણાંક સંખ્યાઓ (Integers - Z):</b> બધી પૂર્ણ સંખ્યાઓ અને ઋણ સંખ્યાઓનો સમૂહ. <br><span style='color:#ca8a04; font-size:14px;'>Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}</span></li>
                        <li><b>૪. સંમેય સંખ્યાઓ (Rational Numbers - Q):</b> જે સંખ્યાઓને p/q સ્વરૂપમાં દર્શાવી શકાય.</li>
                        <li><b>૫. વાસ્તવિક સંખ્યાઓ (Real Numbers - R):</b> સંમેય અને અસંમેય તમામ સંખ્યાઓનો સમૂહ.</li>
                    </ul>
                </div>
                
                <div style='text-align:center; margin: 20px 0; overflow-x:auto;'>
                    <h4 style='color:#1e3a8a; margin-bottom:10px;'>સંખ્યાગણનો સંબંધ દર્શાવતી આકૃતિ</h4>
                    <svg width="320" height="220" viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="300" height="200" rx="15" fill="#f0f9ff" stroke="#1e3a8a" stroke-width="2"/>
                        <text x="20" y="35" fill="#1e3a8a" font-weight="bold" font-size="16">R (વાસ્તવિક)</text>
                        
                        <ellipse cx="120" cy="115" rx="100" ry="85" fill="#fef3c7" stroke="#ca8a04" stroke-width="2"/>
                        <text x="40" y="65" fill="#ca8a04" font-weight="bold" font-size="14">Q (સંમેય)</text>
                        
                        <ellipse cx="130" cy="125" rx="75" ry="65" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
                        <text x="70" y="95" fill="#ea580c" font-weight="bold" font-size="14">Z (પૂર્ણાંક)</text>
                        
                        <ellipse cx="140" cy="135" rx="55" ry="45" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                        <text x="100" y="115" fill="#0284c7" font-weight="bold" font-size="14">W (પૂર્ણ)</text>
                        
                        <ellipse cx="150" cy="145" rx="35" ry="25" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
                        <text x="142" y="150" fill="#1d4ed8" font-weight="bold" font-size="14">N</text>
                        
                        <rect x="230" y="60" width="70" height="110" rx="10" fill="#fce7f3" stroke="#be123c" stroke-width="2"/>
                        <text x="235" y="85" fill="#be123c" font-weight="bold" font-size="12">અસંમેય</text>
                        <text x="250" y="110" fill="#be123c" font-size="14">√2</text>
                        <text x="250" y="135" fill="#be123c" font-size="14">π</text>
                    </svg>
                    <p style='font-size:12px; color:#6b7280; margin-top:5px;'>આકૃતિ 1.1: વાસ્તવિક સંખ્યાઓનું વર્ગીકરણ</p>
                </div>`
            },
            { 
                question: "સંમેય અને અસંમેય સંખ્યાઓ (Rational and Irrational Numbers)", 
                answer: `
                <div style='display:flex; flex-direction:column; gap:10px;'>
                    <div style='border:1px solid #1e3a8a; padding:10px; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 5px 0;'>🔹 સંમેય સંખ્યાઓ (Rational):</h4>
                        <p style='margin:0; font-size:15px;'>જે સંખ્યાને <b>p/q</b> સ્વરૂપમાં દર્શાવી શકાય, જ્યાં p અને q પૂર્ણાંક હોય અને <b>q ≠ 0</b> હોય.<br>
                        <b>ઉદાહરણ:</b> 1/2, -5/3, 4 (કારણ કે 4/1 લખી શકાય), 0.</p>
                    </div>
                    <div style='border:1px solid #ea580c; padding:10px; border-radius:8px;'>
                        <h4 style='color:#ea580c; margin:0 0 5px 0;'>🔸 અસંમેય સંખ્યાઓ (Irrational):</h4>
                        <p style='margin:0; font-size:15px;'>જે સંખ્યાને p/q સ્વરૂપમાં ન દર્શાવી શકાય.<br>
                        <b>ઉદાહરણ:</b> √2, √3, √15, π (પાઇ), 0.101101110... <br>
                        <i>(નોંધ: જે અવિભાજ્ય સંખ્યાઓ વર્ગમૂળની અંદર હોય તે બધી અસંમેય છે.)</i></p>
                    </div>
                </div>` 
            },
            { 
                question: "વાસ્તવિક સંખ્યાઓનું દશાંશ નિરૂપણ (Decimal Expansion)", 
                answer: `
                <p>કોઈપણ વાસ્તવિક સંખ્યાનું દશાંશ નિરૂપણ મુખ્યત્વે ત્રણ પ્રકારનું હોય છે:</p>
                <div style='overflow-x:auto;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:300px;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:8px; border:1px solid #cbd5e1;'>પ્રકાર</th>
                            <th style='padding:8px; border:1px solid #cbd5e1;'>સમજૂતી</th>
                            <th style='padding:8px; border:1px solid #cbd5e1;'>સંખ્યાનો પ્રકાર</th>
                        </tr>
                        <tr>
                            <td style='padding:8px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>શાંત (Terminating)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1;'>ભાગાકાર કરતાં શેષ શૂન્ય થઈ જાય અને દશાંશ પછી અમુક અંકો જ આવે. (દા.ત. 7/8 = 0.875)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#16a34a;'>સંમેય</td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:8px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>અનંત આવૃત<br>(Non-terminating Recurring)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1;'>શેષ ક્યારેય શૂન્ય ન થાય, પરંતુ અંકોનું પુનરાવર્તન થાય. (દા.ત. 1/3 = 0.333... = 0.3̄)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#16a34a;'>સંમેય</td>
                        </tr>
                        <tr>
                            <td style='padding:8px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>અનંત અનાવૃત<br>(Non-terminating Non-recurring)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1;'>શેષ શૂન્ય પણ ન થાય અને અંકોનું ચોક્કસ જૂથ પુનરાવર્તન પણ ન પામે. (દા.ત. π = 3.14159...)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#dc2626;'>અસંમેય</td>
                        </tr>
                    </table>
                </div>` 
            },
            { 
                question: "વર્ગમૂળ વાળી વાસ્તવિક સંખ્યાઓ પરની પ્રક્રિયાઓ (નિત્યસમ)", 
                answer: `
                <p>ધારો કે <b>a</b> અને <b>b</b> ધન વાસ્તવિક સંખ્યાઓ છે. તો નીચેના સૂત્રો (નિત્યસમ) યાદ રાખવા:</p>
                <div style='background-color:#f0fdf4; padding:15px; border-radius:10px; border:2px dashed #16a34a; overflow-x:auto; white-space:nowrap;'>
                    <ul style='list-style-type:none; padding-left:0; margin:0; font-size:16px; font-weight:bold; color:#1e3a8a; line-height:2;'>
                        <li>૧) &nbsp; <span style='color:#ea580c;'>&radic;(ab)</span> = &radic;a &times; &radic;b</li>
                        <li>૨) &nbsp; <span style='color:#ea580c;'>&radic;(a/b)</span> = &radic;a / &radic;b</li>
                        <li>૩) &nbsp; <span style='color:#ea580c;'>( &radic;a + &radic;b )( &radic;a - &radic;b )</span> = a - b</li>
                        <li>૪) &nbsp; <span style='color:#ea580c;'>( a + &radic;b )( a - &radic;b )</span> = a&sup2; - b</li>
                        <li>૫) &nbsp; <span style='color:#ea580c;'>( &radic;a + &radic;b )&sup2;</span> = a + 2&radic;(ab) + b</li>
                    </ul>
                </div>
                <p style='margin-top:10px; font-size:14px;'><i>ઉદાહરણ: ( &radic;5 + &radic;2 )( &radic;5 - &radic;2 ) = 5 - 2 = 3</i></p>` 
            },
            { 
                question: "છેદનું સંમેયીકરણ (Rationalization of Denominator)", 
                answer: `
                <p>જ્યારે કોઈ સંખ્યાના છેદમાં વર્ગમૂળવાળું પદ હોય, ત્યારે તેને દૂર કરવાની પ્રક્રિયાને <b>છેદનું સંમેયીકરણ</b> કહે છે.</p>
                <div style='background-color:#f8fafc; padding:10px; border-left:4px solid #ca8a04; margin-top:10px;'>
                    <b style='color:#1e3a8a;'>કેવી રીતે કરવું?</b>
                    <p style='margin-bottom:5px;'>જો છેદમાં <b>( &radic;a + &radic;b )</b> હોય, તો અંશ અને છેદ બંનેને તેના અનુબદ્ધ કરણી <b>( &radic;a - &radic;b )</b> વડે ગુણવા.</p>
                </div>
                <div style='overflow-x:auto; margin-top:10px;'>
                    <b>દાખલો:</b> 1 / (2 + &radic;3) નું સંમેયીકરણ કરો.<br>
                    <div style='font-size:16px; font-weight:bold; color:#ea580c; margin-top:5px;'>
                        = [ 1 / (2 + &radic;3) ] &times; [ (2 - &radic;3) / (2 - &radic;3) ] <br>
                        = (2 - &radic;3) / (2&sup2; - (&radic;3)&sup2;) <br>
                        = (2 - &radic;3) / (4 - 3) <br>
                        = 2 - &radic;3
                    </div>
                </div>` 
            },
            { 
                question: "વાસ્તવિક સંખ્યાઓ માટે ઘાતાંકના નિયમો (Laws of Exponents)", 
                answer: `
                <p>જો <b>a > 0</b> (આધાર) એક વાસ્તવિક સંખ્યા હોય અને <b>m, n</b> સંમેય સંખ્યાઓ (ઘાતાંક) હોય, તો:</p>
                <div style='background-color:#fffbeb; padding:15px; border-radius:10px; border:2px solid #ca8a04; overflow-x:auto; white-space:nowrap;'>
                    <table style='width:100%; text-align:left; font-size:16px;'>
                        <tr style='color:#1e3a8a; font-weight:bold;'>
                            <td style='padding:8px;'>૧. ગુણાકારનો નિયમ:</td>
                            <td style='padding:8px; color:#ea580c;'>a<sup>m</sup> &times; a<sup>n</sup> = a<sup>m + n</sup></td>
                        </tr>
                        <tr style='color:#1e3a8a; font-weight:bold;'>
                            <td style='padding:8px;'>૨. ભાગાકારનો નિયમ:</td>
                            <td style='padding:8px; color:#ea580c;'>a<sup>m</sup> / a<sup>n</sup> = a<sup>m - n</sup></td>
                        </tr>
                        <tr style='color:#1e3a8a; font-weight:bold;'>
                            <td style='padding:8px;'>૩. ઘાતની ઘાતનો નિયમ:</td>
                            <td style='padding:8px; color:#ea580c;'>(a<sup>m</sup>)<sup>n</sup> = a<sup>m &times; n</sup></td>
                        </tr>
                        <tr style='color:#1e3a8a; font-weight:bold;'>
                            <td style='padding:8px;'>૪. સમાન ઘાતનો નિયમ:</td>
                            <td style='padding:8px; color:#ea580c;'>a<sup>m</sup> &times; b<sup>m</sup> = (ab)<sup>m</sup></td>
                        </tr>
                        <tr style='color:#1e3a8a; font-weight:bold;'>
                            <td style='padding:8px;'>૫. ઋણ ઘાતાંક:</td>
                            <td style='padding:8px; color:#ea580c;'>a<sup>-n</sup> = 1 / a<sup>n</sup></td>
                        </tr>
                    </table>
                </div>
                <div style='margin-top:10px; color:#b45309; font-weight:bold; font-size:14px;'>
                    💡 ખાસ યાદ રાખો: <br>
                    • કોઈપણ સંખ્યાની શૂન્ય ઘાત હંમેશા 1 થાય. (a<sup>0</sup> = 1)<br>
                    • a<sup>m/n</sup> = (<sup>n</sup>&radic;a)<sup>m</sup> = <sup>n</sup>&radic;(a<sup>m</sup>)
                </div>` 
            }
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 2: બહુપદીઓ
    // ------------------------------------
    "2": {
        "chapterName": "પ્રકરણ 2",
        "chapterTitle": "બહુપદીઓ",
        "qa_list": [
            { 
                question: "બહુપદીનો પરિચય (ચલ, અચળ અને પદ)", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <ul style='line-height:1.8; color:#1e3a8a;'>
                        <li><b style='color:#ea580c;'>ચલ (Variables):</b> જેની કિંમત બદલાઈ શકે તેવી ભિન્ન કિંમતો ધારણ કરી શકતી સંજ્ઞા. (દા.ત. x, y, z).</li>
                        <li><b style='color:#ea580c;'>અચળ (Constants):</b> જેની કિંમત ચોક્કસ અને નિશ્ચિત હોય. (દા.ત. 5, -7, 1/2).</li>
                        <li><b style='color:#ea580c;'>બૈજિક પદાવલિ:</b> અચળ અને ચલના ગુણાકાર કે સરવાળા-બાદબાકીથી બનતી રચના.</li>
                    </ul>
                    <div style='background-color:#fff; padding:10px; border-radius:5px; margin-top:10px; border:1px solid #bae6fd;'>
                        <b>નોંધ:</b> બહુપદીમાં ચલનો ઘાતાંક હંમેશા <b>પૂર્ણ સંખ્યા (0, 1, 2, 3...)</b> જ હોવો જોઈએ. જો ઘાતાંક ઋણ હોય અથવા અપૂર્ણાંક (વર્ગમૂળ વગેરે) હોય, તો તેને બહુપદી કહેવાય નહીં.
                    </div>
                </div>` 
            },
            { 
                question: "બહુપદીના પ્રકારો (વર્ગીકરણનો ચાર્ટ)", 
                answer: `
                <p style='color:#1e3a8a; font-weight:bold; text-align:center;'>બહુપદીનું વર્ગીકરણ બે રીતે થાય છે: પદોની સંખ્યા મુજબ અને ઘાત મુજબ.</p>
                <div style='text-align:center; margin: 20px 0; overflow-x:auto;'>
                    <svg width="340" height="280" viewBox="0 0 340 280" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto;">
                        <rect x="100" y="10" width="140" height="40" rx="10" fill="#1e3a8a" />
                        <text x="170" y="35" fill="white" font-weight="bold" font-size="16" text-anchor="middle">બહુપદીના પ્રકારો</text>
                        
                        <path d="M 170 50 L 170 70 L 85 70 L 85 90" fill="none" stroke="#6b7280" stroke-width="2"/>
                        <path d="M 170 50 L 170 70 L 255 70 L 255 90" fill="none" stroke="#6b7280" stroke-width="2"/>
                        
                        <rect x="25" y="90" width="120" height="30" rx="5" fill="#ea580c" />
                        <text x="85" y="110" fill="white" font-weight="bold" font-size="14" text-anchor="middle">પદોની સંખ્યા આધારે</text>
                        
                        <rect x="195" y="90" width="120" height="30" rx="5" fill="#ca8a04" />
                        <text x="255" y="110" fill="white" font-weight="bold" font-size="14" text-anchor="middle">ઘાતની સંખ્યા આધારે</text>
                        
                        <path d="M 85 120 L 85 140" fill="none" stroke="#6b7280" stroke-width="1.5"/>
                        <path d="M 85 130 L 40 130 L 40 150" fill="none" stroke="#6b7280" stroke-width="1.5"/>
                        <path d="M 85 130 L 130 130 L 130 150" fill="none" stroke="#6b7280" stroke-width="1.5"/>
                        
                        <rect x="10" y="150" width="60" height="45" rx="5" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
                        <text x="40" y="168" fill="#9a3412" font-size="12" font-weight="bold" text-anchor="middle">એકપદી</text>
                        <text x="40" y="185" fill="#6b7280" font-size="11" text-anchor="middle">દા.ત. 3x</text>
                        
                        <rect x="55" y="205" width="60" height="45" rx="5" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
                        <path d="M 85 140 L 85 205" fill="none" stroke="#6b7280" stroke-width="1.5"/>
                        <text x="85" y="223" fill="#9a3412" font-size="12" font-weight="bold" text-anchor="middle">દ્વિપદી</text>
                        <text x="85" y="240" fill="#6b7280" font-size="11" text-anchor="middle">x + 5</text>
                        
                        <rect x="100" y="150" width="60" height="45" rx="5" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
                        <text x="130" y="168" fill="#9a3412" font-size="12" font-weight="bold" text-anchor="middle">ત્રિપદી</text>
                        <text x="130" y="185" fill="#6b7280" font-size="11" text-anchor="middle">x² + x + 1</text>
                        
                        <path d="M 255 120 L 255 140" fill="none" stroke="#6b7280" stroke-width="1.5"/>
                        <path d="M 255 130 L 210 130 L 210 150" fill="none" stroke="#6b7280" stroke-width="1.5"/>
                        <path d="M 255 130 L 300 130 L 300 150" fill="none" stroke="#6b7280" stroke-width="1.5"/>
                        
                        <rect x="180" y="150" width="60" height="45" rx="5" fill="#fef3c7" stroke="#ca8a04" stroke-width="1.5"/>
                        <text x="210" y="168" fill="#854d0e" font-size="12" font-weight="bold" text-anchor="middle">સુરેખ</text>
                        <text x="210" y="185" fill="#6b7280" font-size="11" text-anchor="middle">(1 ઘાત)</text>
                        
                        <rect x="225" y="205" width="60" height="45" rx="5" fill="#fef3c7" stroke="#ca8a04" stroke-width="1.5"/>
                        <path d="M 255 140 L 255 205" fill="none" stroke="#6b7280" stroke-width="1.5"/>
                        <text x="255" y="223" fill="#854d0e" font-size="12" font-weight="bold" text-anchor="middle">દ્વિઘાત</text>
                        <text x="255" y="240" fill="#6b7280" font-size="11" text-anchor="middle">(2 ઘાત)</text>
                        
                        <rect x="270" y="150" width="60" height="45" rx="5" fill="#fef3c7" stroke="#ca8a04" stroke-width="1.5"/>
                        <text x="300" y="168" fill="#854d0e" font-size="12" font-weight="bold" text-anchor="middle">ત્રિઘાત</text>
                        <text x="300" y="185" fill="#6b7280" font-size="11" text-anchor="middle">(3 ઘાત)</text>
                    </svg>
                </div>` 
            },
            { 
                question: "બહુપદીની ઘાત (Degree of Polynomial) અને પ્રમાણિત સ્વરૂપ", 
                answer: `
                <div style='display:flex; flex-direction:column; gap:10px;'>
                    <div style='border:1px solid #1e3a8a; padding:10px; border-radius:8px;'>
                        <p style='margin:0; font-size:15px;'><b>વ્યાખ્યા:</b> બહુપદીમાં ચલના <b>મહત્તમ (સૌથી મોટા) ઘાતાંક</b> ને બહુપદીની ઘાત કહે છે.<br>
                        <i>ઉદાહરણ:</i> p(x) = 5x³ - 2x² + x - 7 માં મહત્તમ ઘાત 3 હોવાથી, આ 3 ઘાતવાળી બહુપદી છે.</p>
                    </div>
                    
                    <div style='overflow-x:auto;'>
                        <table style='width:100%; border-collapse: collapse; text-align:left; min-width:300px; font-size:14px;'>
                            <tr style='background-color:#ea580c; color:white;'>
                                <th style='padding:8px; border:1px solid #cbd5e1;'>ઘાત</th>
                                <th style='padding:8px; border:1px solid #cbd5e1;'>બહુપદીનું નામ</th>
                                <th style='padding:8px; border:1px solid #cbd5e1;'>પ્રમાણિત સ્વરૂપ</th>
                                <th style='padding:8px; border:1px solid #cbd5e1;'>શરત</th>
                            </tr>
                            <tr>
                                <td style='padding:8px; border:1px solid #cbd5e1; text-align:center;'><b>1</b></td>
                                <td style='padding:8px; border:1px solid #cbd5e1; color:#1e3a8a; font-weight:bold;'>સુરેખ બહુપદી</td>
                                <td style='padding:8px; border:1px solid #cbd5e1;'>ax + b</td>
                                <td style='padding:8px; border:1px solid #cbd5e1;'>a ≠ 0</td>
                            </tr>
                            <tr style='background-color:#fff7ed;'>
                                <td style='padding:8px; border:1px solid #cbd5e1; text-align:center;'><b>2</b></td>
                                <td style='padding:8px; border:1px solid #cbd5e1; color:#1e3a8a; font-weight:bold;'>દ્વિઘાત બહુપદી</td>
                                <td style='padding:8px; border:1px solid #cbd5e1;'>ax² + bx + c</td>
                                <td style='padding:8px; border:1px solid #cbd5e1;'>a ≠ 0</td>
                            </tr>
                            <tr>
                                <td style='padding:8px; border:1px solid #cbd5e1; text-align:center;'><b>3</b></td>
                                <td style='padding:8px; border:1px solid #cbd5e1; color:#1e3a8a; font-weight:bold;'>ત્રિઘાત બહુપદી</td>
                                <td style='padding:8px; border:1px solid #cbd5e1;'>ax³ + bx² + cx + d</td>
                                <td style='padding:8px; border:1px solid #cbd5e1;'>a ≠ 0</td>
                            </tr>
                        </table>
                    </div>
                </div>` 
            },
            { 
                question: "બહુપદીના શૂન્યો (Zeroes of a Polynomial)", 
                answer: `
                <div style='background-color:#fefce8; border-left:4px solid #ca8a04; padding:12px; margin-bottom:10px;'>
                    <b style='color:#b45309;'>વ્યાખ્યા:</b> ચલ x ની જે કિંમત માટે બહુપદી p(x) નું મૂલ્ય શૂન્ય (0) થાય, તે કિંમતને બહુપદી p(x) નું શૂન્ય કહે છે.<br>
                    એટલે કે જો <b>p(k) = 0</b> થાય, તો વાસ્તવિક સંખ્યા 'k' એ બહુપદીનું શૂન્ય છે.
                </div>
                <div style='font-size:14px; padding:10px; border:1px dashed #ca8a04; border-radius:5px;'>
                    <b>સુરેખ બહુપદી (ax + b) નું શૂન્ય કેવી રીતે શોધવું?</b><br>
                    ax + b = 0 લેતાં,<br>
                    ax = -b<br>
                    <b>x = -b / a</b>
                </div>` 
            },
            { 
                question: "અવયવ પ્રમેય (Factor Theorem)", 
                answer: `
                <div style='background-color:#f0fdf4; padding:15px; border:2px solid #16a34a; border-radius:8px;'>
                    <h4 style='color:#166534; margin:0 0 10px 0; border-bottom:1px solid #166534; padding-bottom:5px;'>પ્રમેય:</h4>
                    <p style='margin:0 0 10px 0; font-size:15px;'>જો બહુપદી p(x) ની ઘાત n ≥ 1 હોય અને 'a' કોઈ વાસ્તવિક સંખ્યા હોય, તો:</p>
                    <ul style='color:#15803d; font-weight:bold; margin-bottom:0;'>
                        <li>જો <b>p(a) = 0</b> હોય, તો <b>(x - a)</b> એ p(x) નો એક અવયવ છે.</li>
                        <li>તેનાથી ઉલટું: જો <b>(x - a)</b> એ p(x) નો અવયવ હોય, તો <b>p(a) = 0</b> થાય.</li>
                    </ul>
                </div>
                <p style='font-size:13px; color:#6b7280; margin-top:8px;'>ઉપયોગ: આ પ્રમેયનો ઉપયોગ આપેલ બહુપદીના અવયવ છે કે નહિ તે ચકાસવા માટે થાય છે.</p>` 
            },
            { 
                question: "🌟 મોસ્ટ IMP: બૈજિક નિત્યસમો (Algebraic Identities)", 
                answer: `
                <p style='color:#be123c; font-weight:bold; margin-bottom:10px;'>આ પ્રકરણના દાખલા ગણવા માટે નીચેના તમામ નિત્યસમો યાદ રાખવા ખૂબ જ જરૂરી છે:</p>
                
                <div style='overflow-x:auto; background-color:#ffffff; border-radius:10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border:1px solid #e2e8f0;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:400px; font-size:16px;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:12px; border-bottom:2px solid #cbd5e1;'>ક્રમ</th>
                            <th style='padding:12px; border-bottom:2px solid #cbd5e1;'>નિત્યસમ (સૂત્ર)</th>
                        </tr>
                        
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; text-align:center;'>૧</td>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; color:#ea580c; font-weight:bold;'>
                                (x + y)² = x² + 2xy + y²
                            </td>
                        </tr>
                        <tr>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; text-align:center;'>૨</td>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; color:#ea580c; font-weight:bold;'>
                                (x - y)² = x² - 2xy + y²
                            </td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; text-align:center;'>૩</td>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; color:#ea580c; font-weight:bold;'>
                                x² - y² = (x - y)(x + y) <span style='font-size:12px; color:#64748b;'>(પૂર્ણવર્ગ તફાવત)</span>
                            </td>
                        </tr>
                        <tr>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; text-align:center;'>૪</td>
                            <td style='padding:12px; border-bottom:1px solid #e2e8f0; color:#ea580c; font-weight:bold;'>
                                (x + a)(x + b) = x² + (a + b)x + ab
                            </td>
                        </tr>
                        
                        <tr style='background-color:#fef3c7;'>
                            <td style='padding:12px; border-bottom:1px solid #fde68a; text-align:center;'>૫</td>
                            <td style='padding:12px; border-bottom:1px solid #fde68a; color:#b45309; font-weight:bold;'>
                                (x + y + z)² = x² + y² + z² + 2xy + 2yz + 2zx
                            </td>
                        </tr>
                        
                        <tr style='background-color:#f0f9ff;'>
                            <td style='padding:12px; border-bottom:1px solid #bae6fd; text-align:center;'>૬</td>
                            <td style='padding:12px; border-bottom:1px solid #bae6fd; color:#0369a1; font-weight:bold;'>
                                (x + y)³ = x³ + y³ + 3xy(x + y)
                            </td>
                        </tr>
                        <tr style='background-color:#f0f9ff;'>
                            <td style='padding:12px; border-bottom:1px solid #bae6fd; text-align:center;'>૭</td>
                            <td style='padding:12px; border-bottom:1px solid #bae6fd; color:#0369a1; font-weight:bold;'>
                                (x - y)³ = x³ - y³ - 3xy(x - y)
                            </td>
                        </tr>
                        
                        <tr style='background-color:#fce7f3;'>
                            <td style='padding:12px; border-bottom:1px solid #fbcfe8; text-align:center;'>૮</td>
                            <td style='padding:12px; border-bottom:1px solid #fbcfe8; color:#be123c; font-weight:bold;'>
                                x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx)
                            </td>
                        </tr>
                    </table>
                </div>
                <p style='margin-top:10px; font-size:13px; color:#1e3a8a;'><b>વિશેષ શરત (નિત્યસમ ૮ માટે):</b> જો x + y + z = 0 થાય, તો <b>x³ + y³ + z³ = 3xyz</b> થઈ જાય છે. આ શરત આધારિત દાખલા વારંવાર પૂછાય છે.</p>` 
            }
        ]
    },

    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 3: યામ ભૂમિતિ
    // ------------------------------------
    "3": {
        "chapterName": "પ્રકરણ 3",
        "chapterTitle": "યામ ભૂમિતિ",
        "qa_list": [
            { 
                question: "કાર્તેઝિય યામ પદ્ધતિ (Cartesian System) અને અક્ષો", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#1e3a8a;'>ફ્રેન્ચ ગણિતશાસ્ત્રી <b>રેને દકાર્તે (Rene Descartes)</b> એ સમતલમાં કોઈ બિંદુનું સ્થાન દર્શાવવા માટે જે પદ્ધતિ વિકસાવી, તેને કાર્તેઝિય યામ પદ્ધતિ કહે છે.</p>
                    <ul style='line-height:1.8; color:#334155; margin-bottom:0;'>
                        <li><b>ક્ષિતિજ સમાંતર (આડી) રેખા:</b> આ રેખાને <b>X-અક્ષ (X-axis)</b> કહે છે. (XOX')</li>
                        <li><b>શિરોલંબ (ઊભી) રેખા:</b> આ રેખાને <b>Y-અક્ષ (Y-axis)</b> કહે છે. (YOY')</li>
                        <li><b>ઉગમબિંદુ (Origin - O):</b> X-અક્ષ અને Y-અક્ષ જે બિંદુમાં એકબીજાને છેદે છે, તેને ઉગમબિંદુ કહે છે.</li>
                    </ul>
                </div>
                <div style='background-color:#fefce8; padding:10px; border-radius:5px; border:1px dashed #ca8a04;'>
                    💡 <b>શોર્ટકટ ટ્રીક:</b> "આડી રેખા એટલે X, અને ઊભી રેખા એટલે Y" આટલું મગજમાં ફિટ કરી લેવું. 
                </div>` 
            },
            { 
                question: "યામ સમતલના ચરણ (Quadrants) અને નિશાનીઓ", 
                answer: `
                <p>X-અક્ષ અને Y-અક્ષ સમતલનું <b>ચાર ભાગમાં</b> વિભાજન કરે છે. આ દરેક ભાગને <b>ચરણ (Quadrant)</b> અથવા પાદ કહે છે.</p>
                
                <div style='text-align:center; margin: 20px 0; overflow-x:auto;'>
                    <svg width="320" height="320" viewBox="-160 -160 320 320" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background-color:#ffffff; border-radius:10px; border:1px solid #cbd5e1;">
                        <g stroke="#f1f5f9" stroke-width="1">
                            <line x1="-150" y1="-100" x2="150" y2="-100"/>
                            <line x1="-150" y1="-50" x2="150" y2="-50"/>
                            <line x1="-150" y1="50" x2="150" y2="50"/>
                            <line x1="-150" y1="100" x2="150" y2="100"/>
                            <line x1="-100" y1="-150" x2="-100" y2="150"/>
                            <line x1="-50" y1="-150" x2="-50" y2="150"/>
                            <line x1="50" y1="-150" x2="50" y2="150"/>
                            <line x1="100" y1="-150" x2="100" y2="150"/>
                        </g>

                        <rect x="0" y="-150" width="150" height="150" fill="#ecfdf5" opacity="0.6"/> <rect x="-150" y="-150" width="150" height="150" fill="#eff6ff" opacity="0.6"/> <rect x="-150" y="0" width="150" height="150" fill="#fef2f2" opacity="0.6"/> <rect x="0" y="0" width="150" height="150" fill="#fff7ed" opacity="0.6"/> <line x1="-150" y1="0" x2="150" y2="0" stroke="#1e3a8a" stroke-width="2.5" marker-end="url(#arrowhead)"/>
                        <line x1="0" y1="150" x2="0" y2="-150" stroke="#1e3a8a" stroke-width="2.5" marker-end="url(#arrowhead)"/>
                        
                        <text x="135" y="-10" fill="#1e3a8a" font-weight="bold" font-size="14">X</text>
                        <text x="-145" y="-10" fill="#1e3a8a" font-weight="bold" font-size="14">X'</text>
                        <text x="10" y="-135" fill="#1e3a8a" font-weight="bold" font-size="14">Y</text>
                        <text x="10" y="145" fill="#1e3a8a" font-weight="bold" font-size="14">Y'</text>
                        
                        <circle cx="0" cy="0" r="4" fill="#ea580c"/>
                        <text x="5" y="15" fill="#ea580c" font-weight="bold" font-size="12">O(0,0)</text>

                        <text x="75" y="-80" fill="#047857" font-weight="bold" font-size="16" text-anchor="middle">પ્રથમ ચરણ (I)</text>
                        <rect x="45" y="-65" width="60" height="25" rx="5" fill="#047857"/>
                        <text x="75" y="-48" fill="white" font-weight="bold" font-size="16" text-anchor="middle">(+, +)</text>

                        <text x="-75" y="-80" fill="#1d4ed8" font-weight="bold" font-size="16" text-anchor="middle">દ્વિતીય ચરણ (II)</text>
                        <rect x="-105" y="-65" width="60" height="25" rx="5" fill="#1d4ed8"/>
                        <text x="-75" y="-48" fill="white" font-weight="bold" font-size="16" text-anchor="middle">(-, +)</text>

                        <text x="-75" y="60" fill="#be123c" font-weight="bold" font-size="16" text-anchor="middle">તૃતીય ચરણ (III)</text>
                        <rect x="-105" y="75" width="60" height="25" rx="5" fill="#be123c"/>
                        <text x="-75" y="92" fill="white" font-weight="bold" font-size="16" text-anchor="middle">(-, -)</text>

                        <text x="75" y="60" fill="#b45309" font-weight="bold" font-size="16" text-anchor="middle">ચતુર્થ ચરણ (IV)</text>
                        <rect x="45" y="75" width="60" height="25" rx="5" fill="#ea580c"/>
                        <text x="75" y="92" fill="white" font-weight="bold" font-size="16" text-anchor="middle">(+, -)</text>
                    </svg>
                    <p style='font-size:12px; color:#6b7280; margin-top:5px;'>આકૃતિ 3.1: યામ સમતલના ચરણ અને નિશાનીઓ</p>
                </div>
                
                <div style='background-color:#fffbeb; padding:12px; border-left:4px solid #ca8a04; margin-top:10px;'>
                    <b>🧠 ટ્રીક ટાઈમ:</b> અંગ્રેજીનો <b>'C'</b> અક્ષર યાદ રાખો. ઉપર જમણી બાજુથી (પ્રથમ ચરણથી) શરૂ કરી ઘડિયાળના કાંટાની <u>વિરુદ્ધ દિશામાં</u> (Anti-clockwise) 'C' બનાવો. બસ, એ જ ક્રમમાં ચરણ 1, 2, 3 અને 4 આવે!
                </div>` 
            },
            { 
                question: "બિંદુના યામ (Coordinates): કોટિ અને ભુજ", 
                answer: `
                <p>સમતલમાં કોઈપણ બિંદુનું સ્થાન દર્શાવવા માટે બે કિંમતોની જરૂર પડે છે, જેને યામની જોડ <b>(x, y)</b> સ્વરૂપે લખાય છે.</p>
                
                <div style='display:flex; flex-direction:column; gap:10px;'>
                    <div style='border:1px solid #1e3a8a; padding:10px; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 5px 0;'>1. x-યામ (કોટિ - Abscissa):</h4>
                        <p style='margin:0; font-size:15px;'>બિંદુનું Y-અક્ષથી લંબ અંતર. (આ હંમેશા પહેલા લખાય છે).</p>
                    </div>
                    <div style='border:1px solid #ea580c; padding:10px; border-radius:8px;'>
                        <h4 style='color:#ea580c; margin:0 0 5px 0;'>2. y-યામ (ભુજ - Ordinate):</h4>
                        <p style='margin:0; font-size:15px;'>બિંદુનું X-અક્ષથી લંબ અંતર. (આ હંમેશા બીજા ક્રમે લખાય છે).</p>
                    </div>
                </div>
                
                <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border:1px dashed #16a34a; margin-top:15px;'>
                    💡 <b>યાદ રાખવાની ટ્રીક:</b> 
                    <br>1. આલ્ફાબેટ (ABCD) માં પહેલા <b>x</b> આવે, પછી <b>y</b> આવે. એટલે કૌંસમાં હંમેશા <b>(x, y)</b> જ લખાય. 
                    <br>2. <b>"કોટિ-ભુજ"</b> શબ્દ યાદ રાખો. પહેલો શબ્દ કોટિ (x), બીજો શબ્દ ભુજ (y). 
                </div>` 
            },
            { 
                question: "અક્ષ પર આવેલા બિંદુઓના યામ", 
                answer: `
                <p>જે બિંદુઓ કોઈ ચરણમાં નહિ, પણ સીધા અક્ષની લાઇન પર જ આવેલા હોય, તેમના યામ નીચે મુજબ હોય છે:</p>
                <div style='overflow-x:auto;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:300px; font-size:15px;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>સ્થાન</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>યામનું સ્વરૂપ</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>ઉદાહરણ</th>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>X-અક્ષ પર</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'><b>(x, 0)</b> <br><span style='font-size:12px; color:#64748b;'>(કારણ કે y-યામ હંમેશા 0 હોય)</span></td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>(5, 0), (-3, 0)</td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>Y-અક્ષ પર</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'><b>(0, y)</b> <br><span style='font-size:12px; color:#64748b;'>(કારણ કે x-યામ હંમેશા 0 હોય)</span></td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>(0, 4), (0, -7)</td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>ઉગમબિંદુ</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'><b>(0, 0)</b></td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>O(0, 0)</td>
                        </tr>
                    </table>
                </div>
                
                <div style='background-color:#fffbeb; padding:12px; border-left:4px solid #ca8a04; margin-top:12px;'>
                    <b>🎯 એક્ઝામ ટ્રીક:</b> જો પ્રશ્નમાં પૂછાય કે બિંદુ (0, -5) ક્યાં આવેલું છે? <br>
                    -> જુઓ, અહીં x ની જગ્યાએ શૂન્ય (0) છે. <b>જે શૂન્ય હોય તેને ભૂલી જાઓ, જે સંખ્યા દેખાય તે અક્ષ પર બિંદુ હોય!</b> અહીં y ની જગ્યાએ -5 છે, એટલે બિંદુ Y-અક્ષ પર (નીચેની તરફ) આવેલું છે.
                </div>` 
            }
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 4: દ્વિચલ સુરેખ સમીકરણો
    // ------------------------------------
    "4": {
        "chapterName": "પ્રકરણ 4",
        "chapterTitle": "દ્વિચલ સુરેખ સમીકરણો",
        "qa_list": [
            { 
                question: "દ્વિચલ સુરેખ સમીકરણનો અર્થ અને પ્રમાણિત સ્વરૂપ", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <h4 style='color:#1e3a8a; margin-top:0;'>નામની સમજૂતી:</h4>
                    <ul style='color:#334155; margin-bottom:10px;'>
                        <li><b>દ્વિચલ:</b> જેમાં બે ચલ (સામાન્ય રીતે x અને y) હોય.</li>
                        <li><b>સુરેખ:</b> જેમાં બંને ચલની મહત્તમ ઘાત ૧ જ હોય (કોઈ વર્ગ કે ઘન ન હોય).</li>
                    </ul>
                    
                    <div style='background-color:#fff; padding:10px; border:1px solid #bae6fd; border-radius:5px;'>
                        <b style='color:#ea580c;'>પ્રમાણિત સ્વરૂપ (Standard Form):</b><br>
                        <div style='font-size:18px; font-weight:bold; color:#be123c; text-align:center; margin:10px 0;'>ax + by + c = 0</div>
                        <p style='margin:0; font-size:14px; color:#64748b;'>જ્યાં a, b અને c વાસ્તવિક સંખ્યાઓ છે.<br>
                        <b>શરત:</b> a અને b એકસાથે શૂન્ય ન હોવા જોઈએ. આ શરતને ગણિતની ભાષામાં <b>a² + b² ≠ 0</b> લખાય છે.</p>
                    </div>
                </div>` 
            },
            { 
                question: "સમીકરણના ઉકેલ (Solutions of an Equation)", 
                answer: `
                <p>ચલ x અને y ની એવી કિંમતોની જોડ <b>(x, y)</b> જે સમીકરણનું સમાધાન કરે (એટલે કે ડાબી બાજુ = જમણી બાજુ થાય), તેને સમીકરણનો ઉકેલ કહે છે.</p>
                
                <div style='display:flex; flex-direction:column; gap:10px;'>
                    <div style='border:1px solid #16a34a; padding:10px; border-radius:8px; background-color:#f0fdf4;'>
                        <h4 style='color:#166534; margin:0 0 5px 0;'>કેટલા ઉકેલ મળે?</h4>
                        <p style='margin:0; font-size:15px;'>કોઈપણ દ્વિચલ સુરેખ સમીકરણને <b>અનંત (અસંખ્ય) ઉકેલો</b> મળે છે. કારણ કે x ની દરેક કિંમત માટે y ની કોઈ ચોક્કસ કિંમત મળે જ છે.</p>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:12px; border-left:4px solid #ca8a04; margin-top:15px;'>
                    💡 <b>ઉકેલ શોધવાની સૌથી સરળ ટ્રીક:</b> 
                    <br>કોઈપણ સમીકરણના બે ઉકેલ ફટાફટ શોધવા માટે વારાફરતી શૂન્ય (0) નો ઉપયોગ કરો.
                    <br>૧. પહેલા <b>x = 0</b> મૂકો અને y ની કિંમત શોધો.
                    <br>૨. પછી <b>y = 0</b> મૂકો અને x ની કિંમત શોધો.
                </div>` 
            },
            { 
                question: "દ્વિચલ સુરેખ સમીકરણનો આલેખ (Graph of Linear Equation)", 
                answer: `
                <p>દ્વિચલ સુરેખ સમીકરણ (ax + by + c = 0) નો આલેખ હંમેશા <b>એક સીધી રેખા (Straight Line)</b> મળે છે.</p>
                
                <div style='text-align:center; margin: 20px 0; overflow-x:auto;'>
                    <svg width="300" height="300" viewBox="-50 -50 250 250" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background-color:#f8fafc; border-radius:10px; border:1px solid #cbd5e1;">
                        
                        <g stroke="#e2e8f0" stroke-width="1">
                            <line x1="-50" y1="50" x2="200" y2="50"/>
                            <line x1="-50" y1="100" x2="200" y2="100"/>
                            <line x1="-50" y1="150" x2="200" y2="150"/>
                            <line x1="50" y1="-50" x2="50" y2="200"/>
                            <line x1="100" y1="-50" x2="100" y2="200"/>
                            <line x1="150" y1="-50" x2="150" y2="200"/>
                        </g>

                        <line x1="-50" y1="150" x2="200" y2="150" stroke="#1e3a8a" stroke-width="2"/> <line x1="0" y1="200" x2="0" y2="-50" stroke="#1e3a8a" stroke-width="2"/> <text x="180" y="165" fill="#1e3a8a" font-weight="bold" font-size="12">X</text>
                        <text x="-15" y="-35" fill="#1e3a8a" font-weight="bold" font-size="12">Y</text>
                        
                        <text x="45" y="165" fill="#64748b" font-size="10">1</text>
                        <text x="95" y="165" fill="#64748b" font-size="10">2</text>
                        <text x="145" y="165" fill="#64748b" font-size="10">3</text>
                        <text x="-15" y="105" fill="#64748b" font-size="10">1</text>
                        <text x="-15" y="55" fill="#64748b" font-size="10">2</text>
                        <text x="-15" y="5" fill="#64748b" font-size="10">3</text>
                        
                        <text x="-12" y="165" fill="#ea580c" font-weight="bold" font-size="12">O</text>

                        <line x1="-20" y1="170" x2="170" y2="-20" stroke="#be123c" stroke-width="3"/>
                        
                        <circle cx="0" cy="0" r="4" fill="#047857"/> <text x="10" y="-5" fill="#047857" font-weight="bold" font-size="12">(0, 3)</text>
                        
                        <circle cx="150" cy="150" r="4" fill="#047857"/> <text x="130" y="140" fill="#047857" font-weight="bold" font-size="12">(3, 0)</text>

                        <rect x="70" y="20" width="70" height="20" rx="4" fill="#ffffff" stroke="#be123c"/>
                        <text x="78" y="34" fill="#be123c" font-weight="bold" font-size="12">x + y = 3</text>
                        
                    </svg>
                    <p style='font-size:12px; color:#6b7280; margin-top:5px;'>આકૃતિ 4.1: સમીકરણનો આલેખ સીધી રેખા છે</p>
                </div>` 
            },
            { 
                question: "🌟 મોસ્ટ IMP: વિશિષ્ટ રેખાઓના સમીકરણ અને આલેખ", 
                answer: `
                <p>બોર્ડની પરીક્ષામાં હેતુલક્ષી પ્રશ્નો માટે નીચેનું કોષ્ટક ખૂબ જ અગત્યનું છે:</p>
                <div style='overflow-x:auto;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:320px; font-size:15px;'>
                        <tr style='background-color:#ea580c; color:white;'>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>સમીકરણનું સ્વરૂપ</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>આલેખની સ્થિતિ (રેખા કેવી મળે?)</th>
                        </tr>
                        <tr style='background-color:#fff7ed;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>x = a<br><span style='font-size:12px; font-weight:normal;'>(દા.ત. x = 5)</span></td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>આ રેખા <b>Y-અક્ષને સમાંતર</b> અને X-અક્ષને લંબ હોય છે.</td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>y = b<br><span style='font-size:12px; font-weight:normal;'>(દા.ત. y = -3)</span></td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>આ રેખા <b>X-અક્ષને સમાંતર</b> અને Y-અક્ષને લંબ હોય છે.</td>
                        </tr>
                        <tr style='background-color:#fefce8;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>y = mx<br><span style='font-size:12px; font-weight:normal;'>(દા.ત. y = 2x)</span></td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#b45309; font-weight:bold;'>આ રેખા હંમેશા <b>ઉગમબિંદુ (0,0)</b> માંથી પસાર થાય છે. (અહીં અચળ પદ 'c' શૂન્ય છે).</td>
                        </tr>
                        <tr style='background-color:#f0fdf4;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#166534;'>x = 0</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>પોતે <b>Y-અક્ષ</b> જ છે.</td>
                        </tr>
                        <tr style='background-color:#f0fdf4;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#166534;'>y = 0</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>પોતે <b>X-અક્ષ</b> જ છે.</td>
                        </tr>
                    </table>
                </div>
                
                <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #1e3a8a; margin-top:12px;'>
                    <b>🎯 એક્ઝામ ટ્રીક:</b> જો પ્રશ્નમાં પૂછાય કે <b>"x = 5 નો આલેખ કયા અક્ષને સમાંતર છે?"</b> <br>
                    -> સીધો જવાબ: જે અક્ષનું નામ સમીકરણમાં <b>નથી</b> આપ્યું તેને સમાંતર હોય! (અહીં 'x' આપ્યો છે, એટલે આલેખ 'Y' અક્ષને સમાંતર હોય).
                </div>` 
            }
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 5: યુક્લિડની ભૂમિતિનો પરિચય
    // ------------------------------------
    "5": {
        "chapterName": "પ્રકરણ 5",
        "chapterTitle": "યુક્લિડની ભૂમિતિનો પરિચય",
        "qa_list": [
            { 
                question: "ભૂમિતિનો ઇતિહાસ અને પરિમાણ (Dimensions)", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <ul style='line-height:1.8; color:#1e3a8a; margin-top:0;'>
                        <li><b>ભૂમિતિ (Geometry):</b> ગ્રીક શબ્દ 'Geo' (પૃથ્વી) અને 'Metrein' (માપન) પરથી ઉતરી આવ્યો છે.</li>
                        <li><b>થેલ્સ:</b> ભૂમિતિના પ્રણેતા મનાય છે. તેમણે સૌપ્રથમ સાબિતી આપી કે <i>"વર્તુળનો વ્યાસ વર્તુળને બે સમાન ભાગમાં વિભાજિત કરે છે."</i></li>
                        <li><b>યુક્લિડ:</b> ઇજિપ્તના એલેક્ઝાન્ડ્રિયાના ગણિત શિક્ષક. તેમણે ભૂમિતિના તમામ જ્ઞાનને એકત્રિત કરી <b>'એલિમેન્ટ્સ' (Elements)</b> નામનું પ્રસિદ્ધ પુસ્તક લખ્યું, જે 13 પ્રકરણોમાં વહેંચાયેલું છે.</li>
                    </ul>
                </div>
                
                <p style='color:#ea580c; font-weight:bold; text-align:center;'>વસ્તુઓનું પરિમાણ (Dimensions) સમજવાની આકૃતિ:</p>
                <div style='text-align:center; margin: 15px 0; overflow-x:auto;'>
                    <svg width="340" height="150" viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto;">
                        <path d="M 20 40 L 60 40 L 75 25 L 35 25 Z" fill="#ca8a04"/>
                        <rect x="20" y="40" width="40" height="40" fill="#ea580c"/>
                        <path d="M 60 40 L 75 25 L 75 65 L 60 80 Z" fill="#b45309"/>
                        <text x="45" y="105" fill="#1e3a8a" font-weight="bold" font-size="12" text-anchor="middle">ઘન (Solid)</text>
                        <text x="45" y="125" fill="#be123c" font-weight="bold" font-size="14" text-anchor="middle">3 પરિમાણ</text>
                        
                        <path d="M 85 60 L 105 60 L 100 55 M 105 60 L 100 65" fill="none" stroke="#64748b" stroke-width="2"/>

                        <rect x="115" y="30" width="50" height="50" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
                        <text x="140" y="105" fill="#1e3a8a" font-weight="bold" font-size="12" text-anchor="middle">સપાટી (Surface)</text>
                        <text x="140" y="125" fill="#be123c" font-weight="bold" font-size="14" text-anchor="middle">2 પરિમાણ</text>

                        <path d="M 175 60 L 195 60 L 190 55 M 195 60 L 190 65" fill="none" stroke="#64748b" stroke-width="2"/>

                        <line x1="205" y1="55" x2="265" y2="55" stroke="#10b981" stroke-width="4"/>
                        <text x="235" y="105" fill="#1e3a8a" font-weight="bold" font-size="12" text-anchor="middle">રેખા (Line)</text>
                        <text x="235" y="125" fill="#be123c" font-weight="bold" font-size="14" text-anchor="middle">1 પરિમાણ</text>

                        <path d="M 275 60 L 295 60 L 290 55 M 295 60 L 290 65" fill="none" stroke="#64748b" stroke-width="2"/>

                        <circle cx="315" cy="55" r="4" fill="#1e3a8a"/>
                        <text x="315" y="105" fill="#1e3a8a" font-weight="bold" font-size="12" text-anchor="middle">બિંદુ (Point)</text>
                        <text x="315" y="125" fill="#be123c" font-weight="bold" font-size="14" text-anchor="middle">0 પરિમાણ</text>
                    </svg>
                </div>
                
                <div style='background-color:#fffbeb; padding:10px; border-left:4px solid #ca8a04; margin-top:10px;'>
                    <b>🧠 શોર્ટકટ ટ્રીક:</b> "ઘ-સ-રે-બિ" (ઘન -> સપાટી -> રેખા -> બિંદુ). ઘનથી બિંદુ તરફ જઈએ તેમ પરિમાણ <b>3-2-1-0</b> એમ એક-એક ઘટતું જાય છે.
                </div>` 
            },
            { 
                question: "યુક્લિડનાં સ્વયંસિદ્ધ સત્યો (Axioms)", 
                answer: `
                <p>જે વિધાનોને સાબિતીની જરૂર નથી અને જે સર્વવ્યાપી સત્ય છે, તેને <b>સ્વયંસિદ્ધ સત્યો</b> કહેવાય છે. (આ નિયમો ગણિતના દરેક ભાગમાં લાગુ પડે છે).</p>
                
                <div style='overflow-x:auto; background-color:#ffffff; border-radius:10px; border:1px solid #e2e8f0;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:320px; font-size:15px;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:10px; border:1px solid #cbd5e1; width:10%; text-align:center;'>ક્રમ</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>સ્વયંસિદ્ધ સત્યનું વિધાન</th>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; text-align:center; font-weight:bold; color:#ea580c;'>૧</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>એક વસ્તુને સમાન હોય તેવી વસ્તુઓ એકબીજાને સમાન થાય. <br><span style='font-size:12px; color:#64748b;'>(જો a = c અને b = c, તો a = b થાય.)</span></td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; text-align:center; font-weight:bold; color:#ea580c;'>૨</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>સરખામાં સરખું ઉમેરીએ તો સરવાળા સરખા રહે.</td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; text-align:center; font-weight:bold; color:#ea580c;'>૩</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>સરખામાંથી સરખું બાદ કરીએ તો બાદબાકી સરખી રહે.</td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; text-align:center; font-weight:bold; color:#ea580c;'>૪</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>એકબીજા પર બંધબેસતી આવતી વસ્તુઓ એકબીજાને સરખી થાય.</td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; text-align:center; font-weight:bold; color:#ea580c;'>૫</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>આખું તેના ભાગ કરતાં મોટું હોય છે. <span style='font-size:12px; color:#64748b;'>(સૌથી IMP)</span></td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; text-align:center; font-weight:bold; color:#ea580c;'>૬</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>સરખી વસ્તુઓના બમણા એકબીજાને સમાન હોય છે.</td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; text-align:center; font-weight:bold; color:#ea580c;'>૭</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>સરખી વસ્તુઓના અડધા એકબીજાને સમાન હોય છે.</td>
                        </tr>
                    </table>
                </div>` 
            },
            { 
                question: "યુક્લિડની ૫ પૂર્વધારણાઓ (Postulates) - ભાગ ૧", 
                answer: `
                <div style='background-color:#fefce8; padding:15px; border-left:5px solid #ca8a04; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#854d0e;'><b>પૂર્વધારણા એટલે શું?</b> જે વિધાનો માત્ર ભૂમિતિ સાથે જ સંકળાયેલા છે અને જેને સાબિતી વિના સત્ય સ્વીકારી લેવામાં આવ્યા છે, તેને પૂર્વધારણાઓ કહે છે.</p>
                </div>

                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='border:1px solid #1e3a8a; padding:12px; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>🔹 પૂર્વધારણા ૧:</h4>
                        <p style='margin:0 0 10px 0; font-size:15px; font-weight:bold;'>"કોઈપણ એક બિંદુમાંથી બીજા કોઈ બિંદુ સુધી એક સીધી રેખા દોરી શકાય છે."</p>
                        <p style='margin:0; font-size:13px; color:#ea580c;'><b>તારણ (પ્રમેય 5.1):</b> આપેલા બે ભિન્ન બિંદુઓમાંથી પસાર થતી <u>અનન્ય (એક અને માત્ર એક જ)</u> રેખા હોય છે.</p>
                        <div style='text-align:center; margin-top:10px;'>
                            <svg width="200" height="40" xmlns="http://www.w3.org/2000/svg">
                                <line x1="20" y1="20" x2="180" y2="20" stroke="#1d4ed8" stroke-width="2" />
                                <circle cx="50" cy="20" r="4" fill="#ea580c"/>
                                <circle cx="150" cy="20" r="4" fill="#ea580c"/>
                                <text x="45" y="12" fill="#1d4ed8" font-size="12" font-weight="bold">P</text>
                                <text x="145" y="12" fill="#1d4ed8" font-size="12" font-weight="bold">Q</text>
                            </svg>
                        </div>
                    </div>

                    <div style='border:1px solid #1e3a8a; padding:12px; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>🔹 પૂર્વધારણા ૨:</h4>
                        <p style='margin:0; font-size:15px;'>"શાંત રેખા (રેખાખંડ) ને અનંત સુધી લંબાવી શકાય છે."</p>
                    </div>

                    <div style='border:1px solid #1e3a8a; padding:12px; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>🔹 પૂર્વધારણા ૩:</h4>
                        <p style='margin:0; font-size:15px;'>"કોઈપણ બિંદુને કેન્દ્ર લઈ તથા કોઈપણ લંબાઈની ત્રિજ્યા લઈ વર્તુળ દોરી શકાય છે."</p>
                    </div>

                    <div style='border:1px solid #1e3a8a; padding:12px; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>🔹 પૂર્વધારણા ૪:</h4>
                        <p style='margin:0; font-size:15px;'>"બધા જ કાટખૂણા એકબીજાને સમાન હોય છે." (બધાનું માપ 90° જ હોય છે).</p>
                    </div>
                </div>` 
            },
            { 
                question: "🌟 મોસ્ટ IMP: યુક્લિડની ૫મી પૂર્વધારણા (વિસ્તૃત સમજૂતી)", 
                answer: `
                <div style='border:2px dashed #be123c; padding:15px; border-radius:10px; background-color:#fff1f2;'>
                    <h3 style='color:#9f1239; margin-top:0; text-align:center;'>પૂર્વધારણા ૫</h3>
                    <p style='font-size:15px; line-height:1.6; color:#881337; font-weight:bold;'>
                        "જો બે રેખાઓને કોઈ ત્રીજી રેખા છેદે, અને છેદિકાની કોઈ એક બાજુ તરફના બે અંતઃકોણોનો સરવાળો <b>બે કાટખૂણા (180°) કરતાં ઓછો</b> હોય, તો તે બે રેખાઓને અનંત સુધી લંબાવતા, જે બાજુ ખૂણાઓનો સરવાળો 180° થી ઓછો હોય <b>તે જ બાજુ તરફ તે એકબીજાને છેદે છે.</b>"
                    </p>

                    <div style='text-align:center; margin: 15px 0; overflow-x:auto;'>
                        <svg width="280" height="200" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto;">
                            <line x1="20" y1="40" x2="260" y2="70" stroke="#1d4ed8" stroke-width="2"/>
                            <line x1="20" y1="160" x2="260" y2="130" stroke="#1d4ed8" stroke-width="2"/>
                            <line x1="80" y1="10" x2="160" y2="190" stroke="#047857" stroke-width="2"/>
                            
                            <path d="M 103 62 A 20 20 0 0 0 115 45" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="120" y="52" fill="#ea580c" font-size="12" font-weight="bold">∠1</text>
                            
                            <path d="M 136 137 A 20 20 0 0 1 146 158" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="150" y="152" fill="#ea580c" font-size="12" font-weight="bold">∠2</text>
                            
                            <line x1="260" y1="70" x2="350" y2="81.25" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <line x1="260" y1="130" x2="350" y2="118.75" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <text x="240" y="105" fill="#be123c" font-size="12" font-weight="bold">અહીં છેદશે -></text>
                        </svg>
                        <p style='font-size:13px; color:#9f1239;'>આકૃતિમાં: ∠1 + ∠2 &lt; 180°, તેથી રેખાઓ જમણી બાજુ છેદશે.</p>
                    </div>
                </div>

                <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; margin-top:15px;'>
                    <b>🎯 એક્ઝામ ટ્રીક (પૂર્વધારણા 5 નું સમકક્ષ વિધાન):</b> <br>
                    જો છેદિકાની એક તરફના અંતઃકોણોનો <b>સરવાળો બરાબર 180°</b> થાય, તો તે રેખાઓ ક્યારેય છેદતી નથી (એટલે કે તે <b>સમાંતર રેખાઓ</b> હોય છે). આને <b>'પ્લેફેરની પૂર્વધારણા' (Playfair's Axiom)</b> પણ કહેવાય છે.
                </div>` 
            }
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 6: રેખાઓ અને ખૂણાઓ
    // ------------------------------------
    "6": {
        "chapterName": "પ્રકરણ 6",
        "chapterTitle": "રેખાઓ અને ખૂણાઓ",
        "qa_list": [
            { 
                question: "મૂળભૂત પદો અને વ્યાખ્યાઓ", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <ul style='line-height:1.8; color:#1e3a8a; margin:0;'>
                        <li><b style='color:#ea580c;'>રેખાખંડ (Line Segment):</b> બે અંત્યબિંદુઓ વાળા રેખાના ભાગને રેખાખંડ કહે છે. (દર્શાવવા: $\\overline{AB}$)</li>
                        <li><b style='color:#ea580c;'>કિરણ (Ray):</b> એક જ અંત્યબિંદુ વાળા રેખાના ભાગને કિરણ કહે છે. (દર્શાવવા: $\\overrightarrow{AB}$)</li>
                        <li><b style='color:#ea580c;'>સમરેખ બિંદુઓ (Collinear Points):</b> જો ત્રણ કે તેથી વધુ બિંદુઓ એક જ રેખા પર આવેલા હોય, તો તેને સમરેખ બિંદુઓ કહેવાય. નહીંતર તેને અસમરેખ બિંદુઓ કહેવાય.</li>
                    </ul>
                </div>` 
            },
            { 
                question: "ખૂણાઓના ૫ મુખ્ય પ્રકારો (આકૃતિ સાથે સમજૂતી)", 
                answer: `
                <p style='color:#be123c; font-weight:bold;'>ખૂણાના માપ (અંશ) ના આધારે તેના ૫ પ્રકાર પડે છે:</p>
                <div style='display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin:15px 0;'>
                    
                    <div style='width:140px; text-align:center; padding:10px; border:1px solid #bae6fd; border-radius:8px; background-color:#f8fafc;'>
                        <svg width="100" height="80" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 20 60 L 80 60 L 40 20" fill="none" stroke="#0284c7" stroke-width="3" stroke-linejoin="round"/>
                            <path d="M 45 60 A 25 25 0 0 0 35 45" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="50" y="45" fill="#ea580c" font-size="12">x°</text>
                        </svg>
                        <h4 style='color:#0369a1; margin:5px 0;'>૧. લઘુકોણ</h4>
                        <p style='margin:0; font-size:12px; color:#64748b;'>0° &lt; x &lt; 90°<br>(90° થી નાનો)</p>
                    </div>

                    <div style='width:140px; text-align:center; padding:10px; border:1px solid #bae6fd; border-radius:8px; background-color:#f8fafc;'>
                        <svg width="100" height="80" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 30 20 L 30 60 L 80 60" fill="none" stroke="#0284c7" stroke-width="3" stroke-linejoin="round"/>
                            <rect x="30" y="45" width="15" height="15" fill="none" stroke="#ea580c" stroke-width="2"/>
                        </svg>
                        <h4 style='color:#0369a1; margin:5px 0;'>૨. કાટકોણ</h4>
                        <p style='margin:0; font-size:12px; color:#64748b;'>y = 90°<br>(ફિક્સ 90°)</p>
                    </div>

                    <div style='width:140px; text-align:center; padding:10px; border:1px solid #bae6fd; border-radius:8px; background-color:#f8fafc;'>
                        <svg width="100" height="80" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 20 20 L 50 60 L 90 60" fill="none" stroke="#0284c7" stroke-width="3" stroke-linejoin="round"/>
                            <path d="M 70 60 A 20 20 0 0 0 40 45" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="65" y="45" fill="#ea580c" font-size="12">z°</text>
                        </svg>
                        <h4 style='color:#0369a1; margin:5px 0;'>૩. ગુરુકોણ</h4>
                        <p style='margin:0; font-size:12px; color:#64748b;'>90° &lt; z &lt; 180°<br>(90° થી મોટો)</p>
                    </div>

                    <div style='width:140px; text-align:center; padding:10px; border:1px solid #bae6fd; border-radius:8px; background-color:#f8fafc;'>
                        <svg width="100" height="80" xmlns="http://www.w3.org/2000/svg">
                            <line x1="10" y1="50" x2="90" y2="50" stroke="#0284c7" stroke-width="3"/>
                            <circle cx="50" cy="50" r="3" fill="#1e3a8a"/>
                            <path d="M 70 50 A 20 20 0 0 0 30 50" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="50" y="25" fill="#ea580c" font-size="12" text-anchor="middle">180°</text>
                        </svg>
                        <h4 style='color:#0369a1; margin:5px 0;'>૪. સરળકોણ</h4>
                        <p style='margin:0; font-size:12px; color:#64748b;'>s = 180°<br>(સીધી રેખા)</p>
                    </div>

                    <div style='width:140px; text-align:center; padding:10px; border:1px solid #bae6fd; border-radius:8px; background-color:#fef3c7;'>
                        <svg width="100" height="80" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 20 60 L 50 40 L 90 40" fill="none" stroke="#b45309" stroke-width="3" stroke-linejoin="round"/>
                            <path d="M 75 40 A 25 25 0 1 1 35 50" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="50" y="75" fill="#ea580c" font-size="12" font-weight="bold">t°</text>
                        </svg>
                        <h4 style='color:#b45309; margin:5px 0;'>૫. વિપરીતકોણ</h4>
                        <p style='margin:0; font-size:12px; color:#64748b;'>180° &lt; t &lt; 360°<br>(બહારનો ખૂણો)</p>
                    </div>

                </div>
                
                <div style='background-color:#fffbeb; padding:10px; border-left:4px solid #ca8a04; margin-top:10px;'>
                    <b>🧠 વિપરીતકોણ શોધવાની ટ્રીક:</b> જો તમને કોઈ ખૂણો 60° આપ્યો હોય અને તેનો વિપરીતકોણ પૂછે, તો સીધું જ <b>360° માંથી બાદ કરો</b>. <br>(દા.ત. વિપરીતકોણ = 360° - 60° = 300°).
                </div>` 
            },
            { 
                question: "ખૂણાઓની જોડો (Pairs of Angles)", 
                answer: `
                <div style='overflow-x:auto; background-color:#ffffff; border-radius:10px; border:1px solid #e2e8f0;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:320px; font-size:14px;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>જોડનું નામ</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>વ્યાખ્યા / નિયમ</th>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0369a1;'>કોટિકોણ<br>(Complementary)</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>જે બે ખૂણાઓનાં માપનો <b>સરવાળો 90°</b> થાય, તેને એકબીજાના કોટિકોણ કહે છે. <br><i>(દા.ત. 40° અને 50°)</i></td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0369a1;'>પૂરકકોણ<br>(Supplementary)</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>જે બે ખૂણાઓનાં માપનો <b>સરવાળો 180°</b> થાય, તેને એકબીજાના પૂરકકોણ કહે છે. <br><i>(દા.ત. 110° અને 70°)</i></td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0369a1;'>આસન્નકોણ<br>(Adjacent)</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>જે બે ખૂણાઓનું <b>શિરોબિંદુ એક જ હોય</b> અને <b>એક ભુજ (બાજુ) સામાન્ય હોય</b>, તથા સામાન્ય ન હોય તેવી ભુજ સામસામી બાજુએ હોય. (એટલે કે પાસપાસેના ખૂણા).</td>
                        </tr>
                    </table>
                </div>` 
            },
            { 
                question: "🌟 રૈખિક જોડના ખૂણા અને અભિકોણ (IMP Concepts)", 
                answer: `
                <div style='display:flex; flex-direction:column; gap:15px; margin-top:10px;'>
                    
                    <div style='border:2px solid #16a34a; padding:15px; border-radius:10px; background-color:#f0fdf4;'>
                        <h4 style='color:#166534; margin:0 0 10px 0;'>1. રૈખિક જોડના ખૂણા (Linear Pair):</h4>
                        <p style='margin:0 0 10px 0; font-size:14px;'>જો બે આસન્નકોણોની સામાન્ય ન હોય તેવી બાજુઓ એક સીધી રેખા બનાવે, તો તેને રૈખિક જોડ કહે છે. <br><b style='color:#be123c;'>નિયમ: રૈખિક જોડના ખૂણાઓનો સરવાળો હંમેશા 180° થાય છે.</b> (આ ખૂબ જ IMP પૂર્વધારણા 6.1 છે).</p>
                        <div style='text-align:center;'>
                            <svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
                                <line x1="20" y1="60" x2="180" y2="60" stroke="#166534" stroke-width="3"/>
                                <line x1="100" y1="60" x2="140" y2="10" stroke="#166534" stroke-width="3"/>
                                <path d="M 125 60 A 25 25 0 0 0 115 40" fill="none" stroke="#ea580c" stroke-width="2"/>
                                <path d="M 115 40 A 25 25 0 0 0 75 60" fill="none" stroke="#0284c7" stroke-width="2"/>
                                <text x="135" y="55" fill="#ea580c" font-size="12" font-weight="bold">y</text>
                                <text x="85" y="50" fill="#0284c7" font-size="12" font-weight="bold">x</text>
                            </svg>
                            <p style='margin:0; font-size:14px; font-weight:bold; color:#166534;'>અહીં x + y = 180°</p>
                        </div>
                    </div>

                    <div style='border:2px solid #1d4ed8; padding:15px; border-radius:10px; background-color:#eff6ff;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>2. અભિકોણ (Vertically Opposite Angles):</h4>
                        <p style='margin:0 0 10px 0; font-size:14px;'>જ્યારે બે રેખાઓ એકબીજાને છેદે, ત્યારે <b>સામસામે બનતા ખૂણાઓને</b> અભિકોણ કહે છે.<br><b style='color:#be123c;'>પ્રમેય 6.1: અભિકોણો હંમેશા સમાન હોય છે.</b> (એટલે કે સામસામેના ખૂણા સરખા હોય).</p>
                        <div style='text-align:center;'>
                            <svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
                                <line x1="40" y1="20" x2="160" y2="100" stroke="#1d4ed8" stroke-width="3"/>
                                <line x1="160" y1="20" x2="40" y2="100" stroke="#1d4ed8" stroke-width="3"/>
                                
                                <path d="M 115 50 A 20 20 0 0 0 85 50" fill="none" stroke="#ea580c" stroke-width="3"/>
                                <path d="M 85 70 A 20 20 0 0 0 115 70" fill="none" stroke="#ea580c" stroke-width="3"/>
                                
                                <text x="95" y="45" fill="#ea580c" font-size="14" font-weight="bold">a</text>
                                <text x="95" y="85" fill="#ea580c" font-size="14" font-weight="bold">c</text>
                                <text x="70" y="65" fill="#047857" font-size="14" font-weight="bold">d</text>
                                <text x="120" y="65" fill="#047857" font-size="14" font-weight="bold">b</text>
                            </svg>
                            <p style='margin:0; font-size:14px; font-weight:bold; color:#1e3a8a;'>અહીં a = c અને b = d થાય.</p>
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "🌟 છેદિકાથી બનતા ખૂણાઓ (સૌથી પાવરફુલ શોર્ટકટ ટ્રીક)", 
                answer: `
                <p style='color:#334155;'>જ્યારે બે સમાંતર રેખાઓને કોઈ ત્રીજી રેખા (છેદિકા) કાપે, ત્યારે 8 ખૂણા બને છે. તેને યાદ રાખવા ગોખણપટ્ટી કરવાની જરૂર નથી, બસ અંગ્રેજીના <b>Z, F અને C</b> આલ્ફાબેટ યાદ રાખો!</p>
                
                <div style='display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-top:15px;'>
                    
                    <div style='width:280px; padding:15px; border:2px dashed #b45309; border-radius:10px; background-color:#fffbeb;'>
                        <h4 style='color:#b45309; margin:0 0 5px 0; text-align:center;'>'Z' આકાર = અંતઃયુગ્મકોણ</h4>
                        <div style='display:flex; align-items:center; justify-content:center; gap:15px;'>
                            <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 10 20 L 70 20 L 20 60 L 80 60" fill="none" stroke="#b45309" stroke-width="4" stroke-linejoin="round"/>
                                <path d="M 45 20 A 15 15 0 0 1 35 30" fill="none" stroke="#ea580c" stroke-width="2"/>
                                <path d="M 55 50 A 15 15 0 0 1 45 60" fill="none" stroke="#ea580c" stroke-width="2"/>
                            </svg>
                            <p style='font-size:13px; color:#854d0e; margin:0;'>સમાંતર રેખાઓ વચ્ચે બનતો <b>Z</b> આકાર (સીધો કે ઉલટો). <br><br><b style='color:#be123c;'>યુગ્મકોણો હંમેશા સમાન (Equal) હોય છે.</b></p>
                        </div>
                    </div>

                    <div style='width:280px; padding:15px; border:2px dashed #0369a1; border-radius:10px; background-color:#f0f9ff;'>
                        <h4 style='color:#0369a1; margin:0 0 5px 0; text-align:center;'>'F' આકાર = અનુકોણ</h4>
                        <div style='display:flex; align-items:center; justify-content:center; gap:15px;'>
                            <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 30 10 L 30 70 M 30 25 L 70 25 M 30 55 L 70 55" fill="none" stroke="#0369a1" stroke-width="4" stroke-linejoin="round"/>
                                <path d="M 45 25 A 15 15 0 0 1 30 40" fill="none" stroke="#ea580c" stroke-width="2"/>
                                <path d="M 45 55 A 15 15 0 0 1 30 70" fill="none" stroke="#ea580c" stroke-width="2"/>
                            </svg>
                            <p style='font-size:13px; color:#0c4a6e; margin:0;'>સમાંતર રેખાઓ અને છેદિકાથી બનતો <b>F</b> આકાર (સીધો, ઉલટો કે આડો). <br><br><b style='color:#be123c;'>અનુકોણો હંમેશા સમાન (Equal) હોય છે.</b></p>
                        </div>
                    </div>

                    <div style='width:280px; padding:15px; border:2px dashed #15803d; border-radius:10px; background-color:#f0fdf4;'>
                        <h4 style='color:#15803d; margin:0 0 5px 0; text-align:center;'>'C' આકાર = છેદિકાની એક જ તરફના અંતઃકોણો</h4>
                        <div style='display:flex; align-items:center; justify-content:center; gap:15px;'>
                            <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 70 20 L 20 20 L 20 60 L 70 60" fill="none" stroke="#15803d" stroke-width="4" stroke-linejoin="round"/>
                                <path d="M 40 20 A 20 20 0 0 0 20 40" fill="none" stroke="#ea580c" stroke-width="2"/>
                                <path d="M 40 60 A 20 20 0 0 1 20 40" fill="none" stroke="#ea580c" stroke-width="2"/>
                            </svg>
                            <p style='font-size:13px; color:#14532d; margin:0;'>બે સમાંતર રેખાઓની અંદરની બાજુએ બનતો <b>C</b> આકાર (સીધો કે ઉલટો). <br><br><b style='color:#be123c;'>આ બે ખૂણાઓ પૂરક હોય છે. (સરવાળો = 180°).</b></p>
                        </div>
                    </div>

                </div>` 
            },
            { 
                question: "ત્રિકોણના ખૂણાઓના સરવાળાનો ગુણધર્મ અને બહિષ્કોણ", 
                answer: `
                <div style='background-color:#fff7ed; padding:12px; border-left:4px solid #ea580c; margin-bottom:15px;'>
                    <b style='color:#c2410c;'>પ્રમેય 6.7:</b> ત્રિકોણના ત્રણેય ખૂણાઓનો સરવાળો <b>180°</b> થાય છે.<br>
                    (∠A + ∠B + ∠C = 180°)
                </div>
                
                <div style='border:1px solid #cbd5e1; padding:15px; border-radius:8px; background-color:#f8fafc;'>
                    <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>બહિષ્કોણ (Exterior Angle) નો પ્રમેય (પ્રમેય 6.8):</h4>
                    <p style='margin:0 0 10px 0; font-size:14px;'>જો ત્રિકોણની કોઈ એક બાજુને લંબાવવામાં આવે, તો તેથી બનતા બહારના ખૂણા (બહિષ્કોણ) નું માપ <b>બે અંતઃસંમુખકોણોના સરવાળા જેટલું</b> હોય છે.</p>
                    
                    <div style='text-align:center;'>
                        <svg width="250" height="120" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,100 150,100 100,20" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                            <line x1="150" y1="100" x2="220" y2="100" stroke="#1d4ed8" stroke-width="2"/>
                            
                            <path d="M 165 100 A 15 15 0 0 0 137 80" fill="none" stroke="#be123c" stroke-width="2"/>
                            <text x="165" y="80" fill="#be123c" font-size="12" font-weight="bold">x</text>
                            
                            <path d="M 90 40 A 20 20 0 0 0 110 40" fill="none" stroke="#047857" stroke-width="2"/>
                            <text x="100" y="55" fill="#047857" font-size="12" font-weight="bold">a</text>
                            
                            <path d="M 70 100 A 20 20 0 0 1 62 82" fill="none" stroke="#047857" stroke-width="2"/>
                            <text x="75" y="95" fill="#047857" font-size="12" font-weight="bold">b</text>
                        </svg>
                        <p style='margin:0; font-size:16px; font-weight:bold; color:#be123c;'>સૂત્ર: x = a + b</p>
                    </div>
                </div>` 
            }
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 7: ત્રિકોણ
    // ------------------------------------
    "7": {
        "chapterName": "પ્રકરણ 7",
        "chapterTitle": "ત્રિકોણ",
        "qa_list": [
            { 
                question: "એકરૂપ આકૃતિઓ અને ત્રિકોણની એકરૂપતા", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <ul style='line-height:1.8; color:#1e3a8a; margin:0;'>
                        <li><b style='color:#ea580c;'>એકરૂપ આકૃતિઓ (Congruent Figures):</b> જે આકૃતિઓના <b>આકાર અને કદ (માપ) બંને સમાન</b> હોય તેને એકરૂપ આકૃતિઓ કહે છે. (નિશાની: $\\cong$)</li>
                        <li><b>ત્રિકોણની એકરૂપતા:</b> જો બે ત્રિકોણના સંગત ખૂણાઓ અને સંગત બાજુઓ સમાન હોય, તો તે બે ત્રિકોણો એકરૂપ છે તેમ કહેવાય.</li>
                        <li>જો $\\Delta ABC$ અને $\\Delta PQR$ એકરૂપ હોય, તો તેને ગણિતની ભાષામાં <b>$\\Delta ABC \\cong \\Delta PQR$</b> લખાય છે.</li>
                    </ul>
                </div>
                
                <div style='background-color:#fffbeb; padding:12px; border-radius:5px; border:1px dashed #ca8a04;'>
                    💡 <b>CPCT નો નિયમ (મોસ્ટ IMP):</b> 
                    <br><b>CPCT</b> = Congruent Parts of Congruent Triangles (એકરૂપ ત્રિકોણોના અનુરૂપ અંગો).
                    <br>જ્યારે સાબિત થઈ જાય કે બે ત્રિકોણ એકરૂપ છે, ત્યારે તેના <b>બાકીના બધા જ અનુરૂપ ખૂણા અને બાજુઓ પણ આપોઆપ સમાન થઈ જાય છે.</b> આ દર્શાવવા માટે દાખલામાં કારણ તરીકે કૌંસમાં (CPCT) લખવામાં આવે છે.
                </div>` 
            },
            { 
                question: "🌟 ત્રિકોણની એકરૂપતા માટેની શરતો (મોસ્ટ IMP શોર્ટકટ ચાર્ટ)", 
                answer: `
                <p style='color:#be123c; font-weight:bold;'>બે ત્રિકોણોને એકરૂપ સાબિત કરવા માટે બધી 6 વસ્તુઓ (3 બાજુ અને 3 ખૂણા) સમાન બતાવવી જરૂરી નથી. નીચેની શરતોમાંથી કોઈ એકનું પાલન થાય તો પણ ત્રિકોણો એકરૂપ કહેવાય:</p>
                
                <div style='display:flex; flex-direction:column; gap:15px; margin-top:10px;'>
                    
                    <div style='padding:12px; border:2px solid #1e3a8a; border-radius:8px; background-color:#ffffff; overflow-x:auto;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>૧. બાખૂબા શરત (SAS - Side Angle Side):</h4>
                        <div style='display:flex; align-items:center; flex-wrap:wrap; gap:15px;'>
                            <svg width="160" height="90" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,80 70,80 40,20" fill="#f0f9ff" stroke="#1e3a8a" stroke-width="2"/>
                                <polygon points="90,80 150,80 120,20" fill="#f0f9ff" stroke="#1e3a8a" stroke-width="2"/>
                                <line x1="20" y1="50" x2="30" y2="50" stroke="#ea580c" stroke-width="2"/> <line x1="50" y1="50" x2="60" y2="50" stroke="#047857" stroke-width="2"/> <line x1="52" y1="52" x2="62" y2="52" stroke="#047857" stroke-width="2"/> <path d="M 33 35 A 15 15 0 0 1 47 35" fill="none" stroke="#be123c" stroke-width="2"/> <line x1="100" y1="50" x2="110" y2="50" stroke="#ea580c" stroke-width="2"/> <line x1="130" y1="50" x2="140" y2="50" stroke="#047857" stroke-width="2"/> <line x1="132" y1="52" x2="142" y2="52" stroke="#047857" stroke-width="2"/> <path d="M 113 35 A 15 15 0 0 1 127 35" fill="none" stroke="#be123c" stroke-width="2"/> </svg>
                            <div style='flex:1; min-width:150px;'>
                                <p style='margin:0; font-size:13px; color:#334155;'>જો બે ત્રિકોણો માટે એક ત્રિકોણની <b>બે બાજુઓ અને અંતર્ગત ખૂણો (વચ્ચેનો ખૂણો)</b> બીજા ત્રિકોણની અનુરૂપ બાજુઓ અને અંતર્ગત ખૂણાને સમાન હોય.</p>
                            </div>
                        </div>
                    </div>

                    <div style='padding:12px; border:2px solid #ea580c; border-radius:8px; background-color:#ffffff; overflow-x:auto;'>
                        <h4 style='color:#ea580c; margin:0 0 10px 0;'>૨. ખૂબાખૂ શરત (ASA - Angle Side Angle):</h4>
                        <div style='display:flex; align-items:center; flex-wrap:wrap; gap:15px;'>
                            <svg width="160" height="90" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,80 70,80 40,20" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
                                <polygon points="90,80 150,80 120,20" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
                                <path d="M 25 80 A 15 15 0 0 0 17 65" fill="none" stroke="#1e3a8a" stroke-width="2"/>
                                <path d="M 55 80 A 15 15 0 0 1 63 65" fill="none" stroke="#be123c" stroke-width="2"/>
                                <line x1="40" y1="75" x2="40" y2="85" stroke="#047857" stroke-width="2"/> <path d="M 105 80 A 15 15 0 0 0 97 65" fill="none" stroke="#1e3a8a" stroke-width="2"/>
                                <path d="M 135 80 A 15 15 0 0 1 143 65" fill="none" stroke="#be123c" stroke-width="2"/>
                                <line x1="120" y1="75" x2="120" y2="85" stroke="#047857" stroke-width="2"/> </svg>
                            <div style='flex:1; min-width:150px;'>
                                <p style='margin:0; font-size:13px; color:#334155;'>જો એક ત્રિકોણના <b>બે ખૂણા અને અંતર્ગત બાજુ (વચ્ચેની બાજુ)</b> બીજા ત્રિકોણના બે ખૂણા અને અંતર્ગત બાજુને સમાન હોય.</p>
                            </div>
                        </div>
                    </div>

                    <div style='padding:12px; border:2px solid #047857; border-radius:8px; background-color:#ffffff; overflow-x:auto;'>
                        <h4 style='color:#047857; margin:0 0 10px 0;'>૩. બાબાબા શરત (SSS - Side Side Side):</h4>
                        <div style='display:flex; align-items:center; flex-wrap:wrap; gap:15px;'>
                            <svg width="160" height="90" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,80 70,80 40,20" fill="#f0fdf4" stroke="#047857" stroke-width="2"/>
                                <polygon points="90,80 150,80 120,20" fill="#f0fdf4" stroke="#047857" stroke-width="2"/>
                                <line x1="20" y1="50" x2="30" y2="50" stroke="#1e3a8a" stroke-width="2"/> 
                                <line x1="50" y1="50" x2="60" y2="50" stroke="#be123c" stroke-width="2"/> <line x1="52" y1="52" x2="62" y2="52" stroke="#be123c" stroke-width="2"/>
                                <line x1="38" y1="75" x2="38" y2="85" stroke="#ea580c" stroke-width="2"/> <line x1="40" y1="75" x2="40" y2="85" stroke="#ea580c" stroke-width="2"/> <line x1="42" y1="75" x2="42" y2="85" stroke="#ea580c" stroke-width="2"/>
                                <line x1="100" y1="50" x2="110" y2="50" stroke="#1e3a8a" stroke-width="2"/> 
                                <line x1="130" y1="50" x2="140" y2="50" stroke="#be123c" stroke-width="2"/> <line x1="132" y1="52" x2="142" y2="52" stroke="#be123c" stroke-width="2"/>
                                <line x1="118" y1="75" x2="118" y2="85" stroke="#ea580c" stroke-width="2"/> <line x1="120" y1="75" x2="120" y2="85" stroke="#ea580c" stroke-width="2"/> <line x1="122" y1="75" x2="122" y2="85" stroke="#ea580c" stroke-width="2"/>
                            </svg>
                            <div style='flex:1; min-width:150px;'>
                                <p style='margin:0; font-size:13px; color:#334155;'>જો એક ત્રિકોણની <b>ત્રણેય બાજુઓ</b> બીજા ત્રિકોણની અનુરૂપ ત્રણેય બાજુઓને સમાન હોય.</p>
                            </div>
                        </div>
                    </div>

                    <div style='padding:12px; border:2px solid #b45309; border-radius:8px; background-color:#ffffff; overflow-x:auto;'>
                        <h4 style='color:#b45309; margin:0 0 10px 0;'>૪. કાકબા શરત (RHS - Right angle Hypotenuse Side):</h4>
                        <div style='display:flex; align-items:center; flex-wrap:wrap; gap:15px;'>
                            <svg width="160" height="90" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="20,80 70,80 20,20" fill="#fffbeb" stroke="#b45309" stroke-width="2"/>
                                <polygon points="100,80 150,80 100,20" fill="#fffbeb" stroke="#b45309" stroke-width="2"/>
                                <rect x="20" y="70" width="10" height="10" fill="none" stroke="#be123c" stroke-width="2"/> <line x1="42" y1="48" x2="52" y2="58" stroke="#1e3a8a" stroke-width="2"/> <line x1="40" y1="46" x2="50" y2="56" stroke="#1e3a8a" stroke-width="2"/> <line x1="40" y1="75" x2="40" y2="85" stroke="#047857" stroke-width="2"/> <rect x="100" y="70" width="10" height="10" fill="none" stroke="#be123c" stroke-width="2"/> <line x1="122" y1="48" x2="132" y2="58" stroke="#1e3a8a" stroke-width="2"/> <line x1="120" y1="46" x2="130" y2="56" stroke="#1e3a8a" stroke-width="2"/> <line x1="120" y1="75" x2="120" y2="85" stroke="#047857" stroke-width="2"/> </svg>
                            <div style='flex:1; min-width:150px;'>
                                <p style='margin:0; font-size:13px; color:#334155;'>બે <b>કાટકોણ ત્રિકોણમાં</b>, જો એક ત્રિકોણનો <b>કર્ણ અને એક બાજુ</b> બીજા ત્રિકોણના કર્ણ અને અનુરૂપ બાજુને સમાન હોય.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; margin-top:15px;'>
                    <b>🎯 ગોખણપટ્ટી ટાળવાની ટ્રીક:</b> 
                    <br>નામમાં જ નિયમ છુપાયેલો છે! 
                    <br>• <b>બાખૂબા:</b> બાજુ + ખૂણો + બાજુ (ખૂણો વચ્ચે જ આવવો જોઈએ)
                    <br>• <b>ખૂબાખૂ:</b> ખૂણો + બાજુ + ખૂણો (બાજુ વચ્ચે જ આવવી જોઈએ)
                    <br>• <b>ખૂખૂબા (AAS):</b> આ ખૂબાખૂ નો જ એક પ્રકાર છે. જો સળંગ બે ખૂણા અને ત્યારપછીની બાજુ સમાન હોય તો પણ ચાલે.
                    <br><b style='color:#be123c;'>નોંધ: 'બાબાખૂ' (SSA) કે 'ખૂખૂખૂ' (AAA) નામની કોઈ એકરૂપતાની શરત નથી!</b>
                </div>` 
            },
            { 
                question: "સમદ્વિબાજુ ત્રિકોણના ગુણધર્મો (પ્રમેય 7.2 અને 7.3)", 
                answer: `
                <div style='display:flex; flex-wrap:wrap; gap:15px; justify-content:center;'>
                    
                    <div style='flex:1; min-width:260px; border:1px solid #cbd5e1; padding:15px; border-radius:8px; background-color:#f8fafc;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>પ્રમેય 7.2</h4>
                        <p style='margin:0 0 10px 0; font-size:14px;'>સમદ્વિબાજુ ત્રિકોણની <b>બે સમાન બાજુઓની સામેના ખૂણાઓ સમાન</b> હોય છે.</p>
                        <div style='text-align:center;'>
                            <svg width="120" height="100" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="60,20 20,90 100,90" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                                <line x1="30" y1="55" x2="45" y2="55" stroke="#ea580c" stroke-width="2"/>
                                <line x1="75" y1="55" x2="90" y2="55" stroke="#ea580c" stroke-width="2"/>
                                <path d="M 35 90 A 15 15 0 0 0 27 75" fill="none" stroke="#047857" stroke-width="2"/>
                                <path d="M 85 90 A 15 15 0 0 1 93 75" fill="none" stroke="#047857" stroke-width="2"/>
                            </svg>
                            <p style='margin:0; font-size:12px; color:#1e3a8a;'>જો AB = AC, તો ∠B = ∠C</p>
                        </div>
                    </div>

                    <div style='flex:1; min-width:260px; border:1px solid #cbd5e1; padding:15px; border-radius:8px; background-color:#f8fafc;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>પ્રમેય 7.3 (પ્રતીપ પ્રમેય)</h4>
                        <p style='margin:0 0 10px 0; font-size:14px;'>ત્રિકોણના <b>સમાન ખૂણાની સામેની બાજુઓ સમાન</b> હોય છે.</p>
                        <div style='text-align:center;'>
                            <svg width="120" height="100" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="60,20 20,90 100,90" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                                <path d="M 35 90 A 15 15 0 0 0 27 75" fill="none" stroke="#ea580c" stroke-width="2"/>
                                <path d="M 85 90 A 15 15 0 0 1 93 75" fill="none" stroke="#ea580c" stroke-width="2"/>
                                <line x1="30" y1="55" x2="45" y2="55" stroke="#047857" stroke-width="2"/>
                                <line x1="75" y1="55" x2="90" y2="55" stroke="#047857" stroke-width="2"/>
                            </svg>
                            <p style='margin:0; font-size:12px; color:#1e3a8a;'>જો ∠B = ∠C, તો AB = AC</p>
                        </div>
                    </div>

                </div>
                
                <p style='font-size:13px; color:#64748b; margin-top:10px; text-align:center;'><i>નોંધ: સમબાજુ ત્રિકોણમાં ત્રણેય બાજુઓ સમાન હોય છે, તેથી તેના ત્રણેય ખૂણાઓ પણ સમાન (દરેક 60°) થાય છે.</i></p>` 
            }
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 8: ચતુષ્કોણ
    // ------------------------------------
    "8": {
        "chapterName": "પ્રકરણ 8",
        "chapterTitle": "ચતુષ્કોણ",
        "qa_list": [
            { 
                question: "ચતુષ્કોણનો પરિચય અને ખૂણાના સરવાળાનો ગુણધર્મ", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <ul style='line-height:1.8; color:#1e3a8a; margin:0;'>
                        <li><b>વ્યાખ્યા:</b> ચાર સમતલીય બિંદુઓ (જેમાંથી કોઈપણ ત્રણ સમરેખ ન હોય) ને ક્રમમાં જોડવાથી બનતી બંધ આકૃતિને ચતુષ્કોણ કહે છે.</li>
                        <li><b>અંગો:</b> ચતુષ્કોણને 4 બાજુઓ, 4 ખૂણાઓ અને 4 શિરોબિંદુઓ હોય છે. (કુલ 12 અંગો). વધુમાં તેને 2 વિકર્ણો (Diagonals) હોય છે.</li>
                    </ul>
                </div>
                
                <div style='border:2px dashed #ea580c; padding:12px; border-radius:8px; background-color:#fff7ed; text-align:center;'>
                    <h4 style='color:#c2410c; margin:0 0 10px 0;'>ખૂણાના સરવાળાનો ગુણધર્મ (Angle Sum Property)</h4>
                    <svg width="150" height="100" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="20,80 120,80 140,20 40,30" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
                        <line x1="20" y1="80" x2="140" y2="20" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,4"/>
                        <text x="50" y="65" fill="#c2410c" font-size="12" font-weight="bold">180°</text>
                        <text x="90" y="45" fill="#c2410c" font-size="12" font-weight="bold">180°</text>
                    </svg>
                    <p style='margin:10px 0 0 0; font-size:15px; font-weight:bold; color:#9a3412;'>ચતુષ્કોણના ચારેય ખૂણાઓનો સરવાળો 360° થાય છે.</p>
                    <p style='margin:0; font-size:13px; color:#c2410c;'>(∠A + ∠B + ∠C + ∠D = 360°)</p>
                </div>
                <div style='background-color:#fefce8; padding:8px; margin-top:10px; border-radius:5px;'>
                    💡 <b>ટ્રીક:</b> આકૃતિમાં જોયું તેમ, 1 ચતુષ્કોણ = 2 ત્રિકોણ. (તેથી 180° + 180° = 360°).
                </div>` 
            },
            { 
                question: "🌟 ચતુષ્કોણના પ્રકારો (Types of Quadrilaterals)", 
                answer: `
                <p style='color:#1e3a8a; font-weight:bold; margin-bottom:10px;'>બાજુઓ અને ખૂણાઓના આધારે ચતુષ્કોણના મુખ્ય ૫ પ્રકાર પડે છે:</p>
                
                <div style='display:flex; flex-wrap:wrap; gap:12px; justify-content:center;'>
                    
                    <div style='flex:1; min-width:140px; text-align:center; padding:12px; border:1px solid #cbd5e1; border-radius:8px; background-color:#f8fafc;'>
                        <svg width="100" height="70" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="10,60 90,60 70,20 30,20" fill="none" stroke="#0284c7" stroke-width="2"/>
                            <path d="M 45 20 L 50 15 M 45 20 L 50 25" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <path d="M 45 60 L 50 55 M 45 60 L 50 65" fill="none" stroke="#ea580c" stroke-width="2"/>
                        </svg>
                        <h4 style='color:#0369a1; margin:8px 0 4px 0;'>૧. સમલંબ ચતુષ્કોણ</h4>
                        <p style='margin:0; font-size:12px; color:#475569;'>સામસામેની બાજુઓની <b>માત્ર એક જ જોડ</b> સમાંતર હોય.</p>
                    </div>

                    <div style='flex:1; min-width:140px; text-align:center; padding:12px; border:1px solid #cbd5e1; border-radius:8px; background-color:#f8fafc;'>
                        <svg width="100" height="70" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="20,60 90,60 70,20 0,20" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                        </svg>
                        <h4 style='color:#0369a1; margin:8px 0 4px 0;'>૨. સમાંતરબાજુ ચતુષ્કોણ</h4>
                        <p style='margin:0; font-size:12px; color:#475569;'>સામસામેની બાજુઓની <b>બંને જોડ</b> સમાંતર હોય.</p>
                    </div>

                    <div style='flex:1; min-width:140px; text-align:center; padding:12px; border:1px solid #cbd5e1; border-radius:8px; background-color:#f8fafc;'>
                        <svg width="100" height="70" xmlns="http://www.w3.org/2000/svg">
                            <rect x="10" y="20" width="80" height="40" fill="none" stroke="#0284c7" stroke-width="2"/>
                            <rect x="10" y="20" width="6" height="6" fill="none" stroke="#ea580c"/>
                        </svg>
                        <h4 style='color:#0369a1; margin:8px 0 4px 0;'>૩. લંબચોરસ</h4>
                        <p style='margin:0; font-size:12px; color:#475569;'>જે સમાંતરબાજુ ચતુષ્કોણનો <b>એક ખૂણો કાટખૂણો</b> (90°) હોય. (તેથી બધા ખૂણા 90° થાય).</p>
                    </div>

                    <div style='flex:1; min-width:140px; text-align:center; padding:12px; border:1px solid #cbd5e1; border-radius:8px; background-color:#f8fafc;'>
                        <svg width="100" height="70" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,10 90,35 50,60 10,35" fill="none" stroke="#0284c7" stroke-width="2"/>
                            <rect x="45" y="35" width="5" height="5" fill="none" stroke="#ea580c"/>
                        </svg>
                        <h4 style='color:#0369a1; margin:8px 0 4px 0;'>૪. સમબાજુ ચતુષ્કોણ</h4>
                        <p style='margin:0; font-size:12px; color:#475569;'>જે સમાંતરબાજુ ચતુષ્કોણની <b>બધી જ બાજુઓ સમાન</b> હોય.</p>
                    </div>

                    <div style='flex:1; min-width:140px; text-align:center; padding:12px; border:2px solid #ca8a04; border-radius:8px; background-color:#fefce8;'>
                        <svg width="100" height="70" xmlns="http://www.w3.org/2000/svg">
                            <rect x="25" y="10" width="50" height="50" fill="#fef3c7" stroke="#ca8a04" stroke-width="2"/>
                        </svg>
                        <h4 style='color:#b45309; margin:8px 0 4px 0;'>૫. ચોરસ (Square)</h4>
                        <p style='margin:0; font-size:12px; color:#854d0e;'>જેની બધી બાજુઓ સમાન હોય અને <b>બધા ખૂણા કાટખૂણા</b> હોય. (તે લંબચોરસ + સમબાજુ બંને છે).</p>
                    </div>

                </div>` 
            },
            { 
                question: "સમાંતરબાજુ ચતુષ્કોણના ગુણધર્મો (પ્રમેય 8.1 થી 8.8)", 
                answer: `
                <p>આ પ્રકરણના મોટાભાગના દાખલાઓ અને રાઇડર (સાબિતી) <b>સમાંતરબાજુ ચતુષ્કોણ (Parallelogram)</b> ના ગુણધર્મો પર આધારિત છે.</p>
                
                <div style='background-color:#f0fdf4; padding:15px; border-radius:10px; border:2px solid #16a34a;'>
                    <h4 style='color:#166534; margin:0 0 10px 0;'>કોને કહેવાય સમાંતરબાજુ ચતુષ્કોણ?</h4>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#14532d;'>જેના સામસામેના બાજુઓની બંને જોડ સમાંતર હોય.</p>
                    
                    <ul style='list-style-type:square; color:#166534; font-weight:bold; line-height:1.8;'>
                        <li><b>પ્રમેય 8.1:</b> તેનો કોઈપણ વિકર્ણ તેનું બે એકરૂપ ત્રિકોણોમાં વિભાજન કરે છે.</li>
                        <li><b>પ્રમેય 8.2 (બાજુઓ):</b> સામસામેની બાજુઓ સમાન હોય છે.</li>
                        <li><b>પ્રમેય 8.4 (ખૂણાઓ):</b> સામસામેના ખૂણાઓ સમાન હોય છે.</li>
                        <li><b>પાસપાસેના ખૂણા:</b> પાસપાસેના ખૂણા હંમેશા પૂરક હોય છે. (સરવાળો 180°).</li>
                        <li><b>પ્રમેય 8.6 (વિકર્ણો):</b> તેના વિકર્ણો <b>એકબીજાને દુભાગે છે.</b> (એટલે કે જ્યાં છેદે ત્યાંથી બંનેના અડધા-અડધા સરખા ભાગ થાય).</li>
                    </ul>
                </div>
                
                <div style='background-color:#fffbeb; padding:12px; border-left:4px solid #ea580c; margin-top:15px;'>
                    <b>🧠 શોર્ટકટ ટ્રીક (યાદ રાખવાનો મંત્ર):</b>
                    <br><i style='color:#be123c; font-size:16px;'>"સામસામેનું બધું સરખું (બાજુ અને ખૂણા), પાસપાસેનું 180 (ખૂણા), અને વિકર્ણોના અડધા-અડધા ટુકડા સરખા!"</i>
                </div>` 
            },
            { 
                question: "🌟 મોસ્ટ IMP: મધ્યબિંદુ પ્રમેય (Mid-point Theorem)", 
                answer: `
                <div style='border:1px solid #1e3a8a; padding:15px; border-radius:8px; background-color:#ffffff;'>
                    <h4 style='color:#be123c; margin:0 0 10px 0; border-bottom:1px dashed #be123c; padding-bottom:5px;'>પ્રમેય 8.9: મધ્યબિંદુ પ્રમેય</h4>
                    <p style='margin:0 0 10px 0; font-size:15px; font-weight:bold; color:#1e3a8a;'>
                        "ત્રિકોણની બે બાજુઓના મધ્યબિંદુઓને જોડતો રેખાખંડ, ત્રીજી બાજુને સમાંતર હોય છે અને તેના કરતા અડધા માપનો હોય છે."
                    </p>
                    
                    <div style='text-align:center; margin:15px 0;'>
                        <svg width="220" height="150" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="110,20 20,130 200,130" fill="#f8fafc" stroke="#1d4ed8" stroke-width="2"/>
                            
                            <circle cx="65" cy="75" r="4" fill="#ea580c"/>
                            <circle cx="155" cy="75" r="4" fill="#ea580c"/>
                            
                            <line x1="65" y1="75" x2="155" y2="75" stroke="#ea580c" stroke-width="3"/>
                            
                            <text x="105" y="15" fill="#1d4ed8" font-weight="bold">A</text>
                            <text x="5" y="135" fill="#1d4ed8" font-weight="bold">B</text>
                            <text x="205" y="135" fill="#1d4ed8" font-weight="bold">C</text>
                            <text x="45" y="70" fill="#ea580c" font-weight="bold">D</text>
                            <text x="165" y="70" fill="#ea580c" font-weight="bold">E</text>
                            
                            <path d="M 105 70 L 115 75 L 105 80" fill="none" stroke="#047857" stroke-width="2"/>
                            <path d="M 105 125 L 115 130 L 105 135" fill="none" stroke="#047857" stroke-width="2"/>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:10px; border-radius:5px;'>
                        <p style='margin:0; font-size:14px; color:#0369a1;'>જો D અને E અનુક્રમે AB અને AC ના મધ્યબિંદુ હોય, તો:</p>
                        <ol style='margin:5px 0 0 0; color:#0f766e; font-weight:bold;'>
                            <li>DE || BC (DE એ BC ને સમાંતર છે)</li>
                            <li>DE = &frac12; BC (DE નું માપ BC કરતા બરાબર અડધું હોય)</li>
                        </ol>
                    </div>
                </div>
                
                <p style='font-size:13px; color:#64748b; margin-top:10px;'><b>નોંધ (પ્રમેય 8.10 - પ્રતીપ):</b> જો ત્રિકોણની એક બાજુના મધ્યબિંદુમાંથી બીજી બાજુને સમાંતર દોરેલી રેખા, ત્રીજી બાજુને છેદે, તો તે ત્રીજી બાજુને દુભાગે છે (એટલે કે બરાબર મધ્યમાં છેદે છે).</p>` 
            }
        ]
    },



                

};
