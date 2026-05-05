var njMathsExercise = {
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 1: સંખ્યા પદ્ધતિ (સ્વાધ્યાય)
    // ------------------------------------
    "1": {
        "chapterName": "પ્રકરણ 1",
        "chapterTitle": "સંખ્યા પદ્ધતિ (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 1.1 - પ્રશ્ન 1",
                "marks": 2,
                "question": "શું શૂન્ય એ એક સંમેય સંખ્યા છે? શું તમે તેને p પૂર્ણાંક અને q શૂન્યેતર પૂર્ણાંક હોય તેવા p, q માટે p/q સ્વરૂપમાં લખી શકો?", 
                "answer": `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                    <h4 style='color:#14532d; margin:0 0 10px 0; font-size:18px;'>હા, શૂન્ય (0) એ એક સંમેય સંખ્યા છે.</h4>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'><b>સમજૂતી:</b> કોઈપણ સંખ્યાને જો p/q સ્વરૂપમાં દર્શાવી શકાય (જ્યાં p અને q પૂર્ણાંક હોય અને q &ne; 0), તો તેને સંમેય સંખ્યા કહેવાય.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:5px; border:1px solid #bbf7d0;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#1e3a8a;'>શૂન્યને આપણે નીચે મુજબ p/q સ્વરૂપમાં લખી શકીએ છીએ:</p>
                        <div style='display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:15px;'>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>0</div>
                                <div style='padding:0 5px; color:#1e3a8a;'>1</div>
                            </div>
                            <span style='font-size:20px; color:#64748b;'>,</span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>0</div>
                                <div style='padding:0 5px; color:#1e3a8a;'>5</div>
                            </div>
                            <span style='font-size:20px; color:#64748b;'>,</span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>0</div>
                                <div style='padding:0 5px; color:#be123c;'>-3</div>
                            </div>
                        </div>
                        <p style='margin:10px 0 0 0; font-size:14px; text-align:center; color:#64748b;'>(અહીં p = 0 છે જે પૂર્ણાંક છે, અને q અનુક્રમે 1, 5, -3 છે જે શૂન્ય નથી).</p>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.1 - પ્રશ્ન 2",
                "marks": 2,
                "question": "3 અને 4 વચ્ચેની છ સંમેય સંખ્યાઓ શોધો.", 
                "answer": `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold; font-size:16px;'>ઉકેલ:</p>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'>આપણે 3 અને 4 વચ્ચેની <b>6</b> સંમેય સંખ્યાઓ શોધવી છે.</p>
                    
                    <div style='background-color:#ffffff; padding:10px; border-radius:5px; border-left:4px solid #ea580c; margin-bottom:15px;'>
                        <b>સ્ટેપ 1:</b> જેટલી સંખ્યા શોધવી હોય તેમાં 1 ઉમેરો. (અહીં n = 6 છે, તેથી 6 + 1 = <b style='color:#be123c; font-size:18px;'>7</b>).<br>
                        <b>સ્ટેપ 2:</b> આપેલી બંને સંખ્યાઓના અંશ અને છેદને <b>7</b> વડે ગુણો.
                    </div>
                    
                    <div style='display:flex; flex-wrap:wrap; justify-content:space-around; align-items:center; background-color:#e0f2fe; padding:15px; border-radius:8px; gap:10px;'>
                        <div style='text-align:center; background-color:#ffffff; padding:10px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05);'>
                            <b style='color:#1e3a8a; font-size:18px;'>3</b><br>
                            <span style='color:#64748b; font-size:14px;'>ને 7 વડે ગુણતા અને ભાગતા</span><br>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold; margin-top:5px;'>
                                <div style='border-bottom:2px solid #ea580c; padding:0 5px; color:#ea580c;'>3 &times; 7</div>
                                <div style='padding:0 5px; color:#ea580c;'>7</div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>21</div>
                                <div style='padding:0 5px; color:#047857;'>7</div>
                            </div>
                        </div>
                        
                        <div style='font-size:20px; font-weight:bold; color:#94a3b8;'>અને</div>
                        
                        <div style='text-align:center; background-color:#ffffff; padding:10px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05);'>
                            <b style='color:#1e3a8a; font-size:18px;'>4</b><br>
                            <span style='color:#64748b; font-size:14px;'>ને 7 વડે ગુણતા અને ભાગતા</span><br>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold; margin-top:5px;'>
                                <div style='border-bottom:2px solid #ea580c; padding:0 5px; color:#ea580c;'>4 &times; 7</div>
                                <div style='padding:0 5px; color:#ea580c;'>7</div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #be123c; padding:0 5px; color:#be123c;'>28</div>
                                <div style='padding:0 5px; color:#be123c;'>7</div>
                            </div>
                        </div>
                    </div>
                    
                    <p style='margin:15px 0 10px 0; font-size:15px; color:#1e3a8a; font-weight:bold;'>હવે 21/7 અને 28/7 વચ્ચેની 6 સંખ્યાઓ ક્રમમાં લખી નાખો:</p>
                    
                    <div style='display:flex; justify-content:center; gap:10px; flex-wrap:wrap; background-color:#ffedd5; padding:12px; border-radius:8px; border:1px dashed #ea580c;'>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>22</div><div style='padding:0 5px; color:#9a3412;'>7</div></div> <span style='font-size:20px; color:#ea580c;'>,</span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>23</div><div style='padding:0 5px; color:#9a3412;'>7</div></div> <span style='font-size:20px; color:#ea580c;'>,</span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>24</div><div style='padding:0 5px; color:#9a3412;'>7</div></div> <span style='font-size:20px; color:#ea580c;'>,</span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>25</div><div style='padding:0 5px; color:#9a3412;'>7</div></div> <span style='font-size:20px; color:#ea580c;'>,</span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>26</div><div style='padding:0 5px; color:#9a3412;'>7</div></div> <span style='font-size:20px; color:#ea580c;'>,</span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>27</div><div style='padding:0 5px; color:#9a3412;'>7</div></div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:10px; border-left:4px solid #ca8a04; margin-top:15px;'>
                    <b>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> જો પરીક્ષામાં હેતુલક્ષી પ્રશ્નમાં પૂછાય, તો સીધી જ 3 અને 4 ની પાછળ એક-એક મીંડું (0) લગાવી દો (એટલે 30 અને 40). હવે 30 અને 40 વચ્ચેની સંખ્યા લખી, બધાના છેદમાં 10 મૂકી દો! (31/10, 32/10... 39/10). આ જવાબ પણ સાચો જ ગણાય!
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.1 - પ્રશ્ન 3",
                "marks": 3,
                "question": "3/5 અને 4/5 વચ્ચેની પાંચ સંમેય સંખ્યાઓ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'>અહીં છેદ સરખા (5) જ છે, પરંતુ 3 અને 4 વચ્ચે સીધી કોઈ પૂર્ણાંક સંખ્યા મળતી નથી. આપણે <b>5</b> સંમેય સંખ્યાઓ શોધવી છે.</p>
                    
                    <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #0284c7; margin-bottom:15px;'>
                        નિયમ મુજબ, n = 5 હોવાથી, (5 + 1) = <b style='color:#1e3a8a;'>6</b> વડે અંશ અને છેદને ગુણીશું.
                    </div>
                    
                    <div style='display:flex; flex-wrap:wrap; justify-content:space-around; align-items:center; background-color:#f0fdf4; padding:15px; border-radius:8px; border:1px solid #bbf7d0; gap:10px;'>
                        <div style='text-align:center; background-color:#ffffff; padding:10px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05);'>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #1e3a8a; padding:0 5px; color:#1e3a8a;'>3</div>
                                <div style='padding:0 5px; color:#1e3a8a;'>5</div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#64748b;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>3 &times; <span style='color:#be123c;'>6</span></div>
                                <div style='padding:0 5px; color:#047857;'>5 &times; <span style='color:#be123c;'>6</span></div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#64748b;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #16a34a; padding:0 5px; color:#16a34a;'>18</div>
                                <div style='padding:0 5px; color:#16a34a;'>30</div>
                            </div>
                        </div>
                        
                        <div style='font-size:20px; font-weight:bold; color:#94a3b8;'>અને</div>
                        
                        <div style='text-align:center; background-color:#ffffff; padding:10px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05);'>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #1e3a8a; padding:0 5px; color:#1e3a8a;'>4</div>
                                <div style='padding:0 5px; color:#1e3a8a;'>5</div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#64748b;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #ea580c; padding:0 5px; color:#ea580c;'>4 &times; <span style='color:#be123c;'>6</span></div>
                                <div style='padding:0 5px; color:#ea580c;'>5 &times; <span style='color:#be123c;'>6</span></div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#64748b;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #ea580c; padding:0 5px; color:#ea580c;'>24</div>
                                <div style='padding:0 5px; color:#ea580c;'>30</div>
                            </div>
                        </div>
                    </div>
                    
                    <p style='margin:15px 0 10px 0; font-size:15px; color:#1e3a8a; font-weight:bold;'>હવે અંશની સંખ્યા 18 અને 24 ની વચ્ચે આવતી સંખ્યાઓ લખી છેદમાં 30 મૂકો:</p>
                    
                    <div style='display:flex; justify-content:center; gap:12px; flex-wrap:wrap; background-color:#f5f3ff; padding:15px; border-radius:8px; border:2px dashed #8b5cf6;'>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #6d28d9; padding:0 5px; color:#6d28d9;'>19</div><div style='padding:0 5px; color:#6d28d9;'>30</div></div>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #6d28d9; padding:0 5px; color:#6d28d9;'>20</div><div style='padding:0 5px; color:#6d28d9;'>30</div></div>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #6d28d9; padding:0 5px; color:#6d28d9;'>21</div><div style='padding:0 5px; color:#6d28d9;'>30</div></div>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #6d28d9; padding:0 5px; color:#6d28d9;'>22</div><div style='padding:0 5px; color:#6d28d9;'>30</div></div>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #6d28d9; padding:0 5px; color:#6d28d9;'>23</div><div style='padding:0 5px; color:#6d28d9;'>30</div></div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.1 - પ્રશ્ન 4",
                "marks": 3,
                "question": "નીચેનાં વિધાનો સત્ય છે કે અસત્ય તે કારણ સહિત જણાવો:\n(i) દરેક પ્રાકૃતિક સંખ્યા એ પૂર્ણ સંખ્યા છે.\n(ii) દરેક પૂર્ણાંક એ પૂર્ણ સંખ્યા છે.\n(iii) દરેક સંમેય સંખ્યા એ પૂર્ણ સંખ્યા છે.", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='border-left:5px solid #16a34a; background-color:#f0fdf4; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #bbf7d0; border-right:1px solid #bbf7d0; border-bottom:1px solid #bbf7d0;'>
                        <h4 style='color:#166534; margin:0 0 8px 0; font-size:16px;'>(i) સત્ય (True)</h4>
                        <p style='margin:0; font-size:15px; color:#14532d; line-height:1.6;'><b>કારણ:</b> પ્રાકૃતિક સંખ્યાઓનો ગણ N = {1, 2, 3, ...} છે. જ્યારે પૂર્ણ સંખ્યાઓનો ગણ W = {0, 1, 2, 3, ...} છે. આથી બધી જ પ્રાકૃતિક સંખ્યાઓ પૂર્ણ સંખ્યાઓના ગણમાં આવી જાય છે.</p>
                    </div>

                    <div style='border-left:5px solid #be123c; background-color:#fff1f2; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #fecdd3; border-right:1px solid #fecdd3; border-bottom:1px solid #fecdd3;'>
                        <h4 style='color:#be123c; margin:0 0 8px 0; font-size:16px;'>(ii) અસત્ય (False)</h4>
                        <p style='margin:0; font-size:15px; color:#881337; line-height:1.6;'><b>કારણ:</b> પૂર્ણાંક સંખ્યાઓ (Z) માં ઋણ સંખ્યાઓ (જેમ કે -1, -2, -3) નો પણ સમાવેશ થાય છે. પરંતુ પૂર્ણ સંખ્યાઓ (W) માં ઋણ સંખ્યાઓ હોતી નથી.</p>
                    </div>

                    <div style='border-left:5px solid #be123c; background-color:#fff1f2; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #fecdd3; border-right:1px solid #fecdd3; border-bottom:1px solid #fecdd3;'>
                        <h4 style='color:#be123c; margin:0 0 8px 0; font-size:16px;'>(iii) અસત્ય (False)</h4>
                        <p style='margin:0; font-size:15px; color:#881337; line-height:1.6;'><b>કારણ:</b> સંમેય સંખ્યાઓ (Q) માં અપૂર્ણાંકો (દા.ત. 1/2, 3/5, 4/7) આવે છે, પરંતુ પૂર્ણ સંખ્યાઓ (W) એ આખી સંખ્યાઓ જ હોય છે, તેમાં અપૂર્ણાંક હોતા નથી.</p>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (પરીક્ષા માટે ગોલ્ડન રૂલ):</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>આ ક્રમ યાદ રાખો: <b>N &rarr; W &rarr; Z &rarr; Q &rarr; R</b></p>
                    <ul style='margin:5px 0 0 0; font-size:14px; color:#78350f; padding-left:20px;'>
                        <li>જો પ્રશ્નમાં ડાબી બાજુથી જમણી બાજુ જવાનું હોય (દા.ત. N એ W છે?), તો વિધાન હંમેશા <b>સત્ય</b>.</li>
                        <li>જો જમણી બાજુથી ડાબી બાજુ આવવાનું હોય (દા.ત. Q એ W છે?), તો વિધાન હંમેશા <b>અસત્ય</b>.</li>
                    </ul>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.2 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નીચેનાં વિધાનો સત્ય છે કે અસત્ય તે કારણ સહિત જણાવો:\n(i) દરેક અસંમેય સંખ્યા એ વાસ્તવિક સંખ્યા છે.\n(ii) સંખ્યારેખા પરનું દરેક બિંદુ કોઈક પ્રાકૃતિક સંખ્યા m માટે √m સ્વરૂપનું હોય છે.\n(iii) દરેક વાસ્તવિક સંખ્યા એ અસંમેય સંખ્યા છે.", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='border-left:5px solid #16a34a; background-color:#f0fdf4; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #bbf7d0; border-right:1px solid #bbf7d0; border-bottom:1px solid #bbf7d0;'>
                        <h4 style='color:#166534; margin:0 0 8px 0; font-size:16px;'>(i) સત્ય (True)</h4>
                        <p style='margin:0; font-size:15px; color:#14532d; line-height:1.6;'><b>કારણ:</b> વાસ્તવિક સંખ્યાઓનો ગણ (R) એ સંમેય સંખ્યાઓ અને અસંમેય સંખ્યાઓ બંનેનો બનેલો છે. આથી બધી જ અસંમેય સંખ્યાઓ વાસ્તવિક સંખ્યાઓ કહેવાય છે.</p>
                    </div>

                    <div style='border-left:5px solid #be123c; background-color:#fff1f2; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #fecdd3; border-right:1px solid #fecdd3; border-bottom:1px solid #fecdd3;'>
                        <h4 style='color:#be123c; margin:0 0 8px 0; font-size:16px;'>(ii) અસત્ય (False)</h4>
                        <p style='margin:0; font-size:15px; color:#881337; line-height:1.6;'><b>કારણ:</b> સંખ્યારેખા પર ઋણ સંખ્યાઓ (જેમ કે -2, -3) પણ આવેલી હોય છે. પરંતુ કોઈપણ પ્રાકૃતિક સંખ્યા (ધન સંખ્યા) નું વર્ગમૂળ ક્યારેય ઋણ હોઈ શકે નહીં.</p>
                    </div>

                    <div style='border-left:5px solid #be123c; background-color:#fff1f2; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #fecdd3; border-right:1px solid #fecdd3; border-bottom:1px solid #fecdd3;'>
                        <h4 style='color:#be123c; margin:0 0 8px 0; font-size:16px;'>(iii) અસત્ય (False)</h4>
                        <p style='margin:0; font-size:15px; color:#881337; line-height:1.6;'><b>કારણ:</b> વાસ્તવિક સંખ્યાઓમાં સંમેય સંખ્યાઓ (જેમ કે 2, 5, 3/4) નો પણ સમાવેશ થાય છે, જે અસંમેય નથી. ઉદાહરણ તરીકે, 2 એ વાસ્તવિક સંખ્યા છે, પરંતુ તે અસંમેય નથી.</p>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>આ સમીકરણ મગજમાં ફિટ કરી દો: <b>R (વાસ્તવિક) = Q (સંમેય) + I (અસંમેય)</b></p>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#78350f;'>આનો અર્થ એ કે સંમેય અને અસંમેય બંને ભેગા થઈને વાસ્તવિક સંખ્યા બનાવે છે. એટલે બધી અસંમેય એ વાસ્તવિક છે (સત્ય), પણ બધી વાસ્તવિક એ અસંમેય નથી (કારણ કે તેમાં સંમેય પણ હોય છે).</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.2 - પ્રશ્ન 2",
                "marks": 2,
                "question": "શું દરેક ધન પૂર્ણાંકનું વર્ગમૂળ અસંમેય હોય છે? જો ના, તો એવી એક સંખ્યાનું ઉદાહરણ આપો જેનું વર્ગમૂળ સંમેય સંખ્યા હોય.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <h4 style='color:#be123c; margin:0 0 10px 0; font-size:18px;'>ના, દરેક ધન પૂર્ણાંકનું વર્ગમૂળ અસંમેય હોતું નથી.</h4>
                    
                    <div style='background-color:#f0f9ff; padding:15px; border-radius:8px; border-left:4px solid #0284c7; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0369a1; font-weight:bold;'>ઉદાહરણ તરીકે પૂર્ણવર્ગ સંખ્યાઓ લઈએ:</p>
                        
                        <div style='display:flex; flex-wrap:wrap; gap:15px; align-items:center;'>
                            <div style='background-color:#ffffff; padding:10px 20px; border-radius:5px; border:1px solid #bae6fd; text-align:center;'>
                                <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'>&radic;4 = 2</span>
                            </div>
                            <div style='background-color:#ffffff; padding:10px 20px; border-radius:5px; border:1px solid #bae6fd; text-align:center;'>
                                <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'>&radic;9 = 3</span>
                            </div>
                            <div style='background-color:#ffffff; padding:10px 20px; border-radius:5px; border:1px solid #bae6fd; text-align:center;'>
                                <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'>&radic;16 = 4</span>
                            </div>
                        </div>
                        
                        <p style='margin:10px 0 0 0; font-size:15px; color:#334155;'>અહીં 4, 9, અને 16 એ ધન પૂર્ણાંક છે. પરંતુ તેમનાં વર્ગમૂળ (2, 3, 4) <b>સંમેય સંખ્યાઓ</b> છે, અસંમેય નથી. (કારણ કે 2 ને 2/1 સ્વરૂપે લખી શકાય છે).</p>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.2 - પ્રશ્ન 3",
                "marks": 4,
                "question": "સંખ્યારેખા પર √5 ને કેવી રીતે દર્શાવી શકાય તે બતાવો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>પાયથાગોરસના પ્રમેયનો ઉપયોગ:</h4>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>આપણે જાણીએ છીએ કે <b>5 = 4 + 1</b>. એટલે કે <b>5 = (2)&sup2; + (1)&sup2;</b>.<br>
                    તેથી, આપણે કાટકોણ ત્રિકોણનો <b>પાયો 2 એકમ</b> અને <b>લંબ 1 એકમ</b> લઈશું.</p>
                    
                    <div style='border:1px solid #bbf7d0; background-color:#f0fdf4; padding:12px; border-radius:8px; margin-bottom:15px;'>
                        <h4 style='color:#047857; margin:0 0 5px 0; font-size:15px;'>રચનાના પગલાં:</h4>
                        <ol style='margin:0; font-size:14px; color:#14532d; padding-left:20px; line-height:1.8;'>
                            <li>સંખ્યારેખા પર શૂન્ય (0) ને સંગત બિંદુ <b>O</b> લો.</li>
                            <li>O થી ધન દિશામાં 2 એકમ અંતરે બિંદુ <b>A</b> લો. (OA = 2 એકમ).</li>
                            <li>બિંદુ A આગળ સંખ્યારેખાને લંબ હોય તેવો રેખાખંડ <b>AB</b> દોરો, જેની લંબાઈ 1 એકમ હોય. (AB = 1 એકમ).</li>
                            <li>O અને B ને જોડો. કાટકોણ ત્રિકોણ OAB માં પાયથાગોરસના પ્રમેય મુજબ:<br>
                            OB&sup2; = OA&sup2; + AB&sup2; = (2)&sup2; + (1)&sup2; = 4 + 1 = 5. તેથી <b>OB = &radic;5</b> થાય.</li>
                            <li>O ને કેન્દ્ર લઈ, OB જેટલી ત્રિજ્યા લઈ પરિકરની મદદથી સંખ્યારેખા પર એક ચાપ મારો. આ ચાપ સંખ્યારેખાને જ્યાં છેદે તે બિંદુ <b>P એ &radic;5</b> દર્શાવે છે.</li>
                        </ol>
                    </div>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px solid #e2e8f0;'>
                        <svg width="340" height="180" xmlns="http://www.w3.org/2000/svg">
                            <line x1="20" y1="140" x2="320" y2="140" stroke="#1e3a8a" stroke-width="2.5"/>
                            
                            <circle cx="50" cy="140" r="5" fill="#1e3a8a"/>
                            <text x="45" y="165" fill="#1e3a8a" font-weight="bold">O (0)</text>
                            
                            <circle cx="110" cy="140" r="4" fill="#64748b"/>
                            <text x="105" y="165" fill="#64748b" font-weight="bold">1</text>
                            
                            <circle cx="170" cy="140" r="5" fill="#1e3a8a"/>
                            <text x="165" y="165" fill="#1e3a8a" font-weight="bold">A (2)</text>
                            
                            <circle cx="230" cy="140" r="4" fill="#64748b"/>
                            <text x="225" y="165" fill="#64748b" font-weight="bold">3</text>
                            
                            <line x1="170" y1="140" x2="170" y2="80" stroke="#be123c" stroke-width="2.5"/>
                            <circle cx="170" cy="80" r="5" fill="#be123c"/>
                            <text x="175" y="70" fill="#be123c" font-weight="bold">B</text>
                            
                            <rect x="160" y="130" width="10" height="10" fill="none" stroke="#be123c" stroke-width="1.5"/>
                            
                            <line x1="50" y1="140" x2="170" y2="80" stroke="#047857" stroke-width="3"/>
                            
                            <path d="M 170 80 A 134.16 134.16 0 0 1 184.16 140" fill="none" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="6,4"/>
                            <circle cx="184.16" cy="140" r="5" fill="#ea580c"/>
                            <text x="180" y="165" fill="#ea580c" font-weight="bold">P(√5)</text>
                            
                            <text x="110" y="155" fill="#1e3a8a" font-size="12" font-weight="bold">2 એકમ</text>
                            <text x="180" y="115" fill="#be123c" font-size="12" font-weight="bold">1 એકમ</text>
                            <text x="90" y="100" fill="#047857" font-weight="bold" font-size="16">√5</text>
                        </svg>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:10px; border-left:4px solid #ca8a04; margin-top:15px;'>
                    <b>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    કોઈપણ વર્ગમૂળ દર્શાવવા માટે તે સંખ્યાની નજીકનો <b>પૂર્ણવર્ગ</b> શોધી કાઢો. જેમ કે 5 ની નજીક પૂર્ણવર્ગ 4 છે (જે 2 નો વર્ગ છે). એટલે પાયામાં સીધા 2 એકમ લઈ લેવા અને ઊભી લાઈન (લંબ) હંમેશા <b>1 એકમ</b> જ લેવી. દાખલો એકદમ આસાનીથી પૂરો!
                </div>`
            },            
            { 
                "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નીચેની સંખ્યાઓને દશાંશ સ્વરૂપમાં લખો અને તે કેવા પ્રકારની દશાંશ અભિવ્યક્તિ ધરાવે છે તે જણાવો:\n(i) 36/100  (ii) 1/11", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:20px;'>
                    <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; border-top:1px solid #bbf7d0; border-right:1px solid #bbf7d0; border-bottom:1px solid #bbf7d0;'>
                        <h4 style='color:#14532d; margin:0 0 10px 0; font-size:16px;'>(i) 36 / 100</h4>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bbf7d0; display:inline-block;'>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>36</div>
                                <div style='padding:0 5px; color:#1e3a8a;'>100</div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'> = 0.36</span>
                        </div>
                        <p style='margin:10px 0 0 0; font-size:15px; color:#166534;'>અહીં શેષ શૂન્ય થઈ જાય છે, તેથી આ <b>શાંત દશાંશ અભિવ્યક્તિ</b> છે.</p>
                    </div>

                    <div style='background-color:#f8fafc; padding:15px; border-left:5px solid #0284c7; border-radius:8px; border-top:1px solid #bae6fd; border-right:1px solid #bae6fd; border-bottom:1px solid #bae6fd;'>
                        <h4 style='color:#0c4a6e; margin:0 0 10px 0; font-size:16px;'>(ii) 1 / 11</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>ચાલો 1 નો 11 વડે ભાગાકાર કરીએ (મોબાઈલમાં જોવા માટે ભાગાકારને ડાબી-જમણી બાજુ સ્ક્રોલ કરો):</p>
                        
                        <div style='overflow-x:auto; background-color:#ffffff; padding:15px; border-radius:8px; border:1px dashed #94a3b8;'>
                            <div style='min-width:250px; font-family:monospace; font-size:16px; line-height:1.5; color:#0f172a;'>
                                <div style='margin-left:45px; color:#be123c; font-weight:bold;'>&nbsp;&nbsp;0.0909...</div>
                                <div style='margin-left:45px; border-top:2px solid #0f172a; width:100px;'></div>
                                <div style='display:flex;'>
                                    <div style='width:40px; text-align:right; padding-right:5px; color:#1e3a8a; font-weight:bold;'>11</div>
                                    <div style='border-left:2px solid #0f172a; padding-left:5px;'>
                                        <div>&nbsp;1.0000</div>
                                        <div style='color:#64748b;'>-0</div>
                                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>
                                        <div>&nbsp;10</div>
                                        <div style='color:#64748b;'>-&nbsp;0</div>
                                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>
                                        <div>&nbsp;100</div>
                                        <div style='color:#be123c;'>-&nbsp;99</div>
                                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>
                                        <div>&nbsp;&nbsp;&nbsp;100</div>
                                        <div style='color:#be123c;'>&nbsp;&nbsp;-&nbsp;99</div>
                                        <div style='border-bottom:1px solid #cbd5e1; width:60px;'></div>
                                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <p style='margin:10px 0 0 0; font-size:15px; color:#0369a1;'>અહીં શેષ વારંવાર 1 આવે છે. ભાગફળમાં 09 નું પુનરાવર્તન થાય છે.<br>
                        તેથી, <b>1/11 = 0.0909... = 0.<span style='text-decoration:overline;'>09</span></b></p>
                        <p style='margin:5px 0 0 0; font-size:15px; color:#0c4a6e; font-weight:bold;'>આ અભિવ્યક્તિ <b>અનંત આવૃત દશાંશ અભિવ્યક્તિ</b> છે.</p>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>ભાગાકાર કર્યા વગર પણ દશાંશનો પ્રકાર જાણી શકાય! જો છેદના અવયવો <b>ફક્ત 2 અથવા 5</b> જ હોય (અથવા બંને હોય), તો તે હંમેશા <b>શાંત દશાંશ</b> જ હોય. જો 2 કે 5 સિવાયનો કોઈ પણ અવયવ (જેમ કે 3, 7, 11) આવે, તો તે <b>અનંત આવૃત</b> જ હોય!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 3",
                "marks": 3,
                "question": "p પૂર્ણાંક હોય અને q શૂન્યેતર પૂર્ણાંક હોય તેવા p, q માટે નીચેની સંખ્યાઓને p/q સ્વરૂપમાં દર્શાવો:\n(i) 0.6̅ \n(ii) 0.47̅", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(i) 0.<span style='text-decoration:overline;'>6</span> ને p/q સ્વરૂપમાં ફેરવવું:</h4>
                        
                        <div style='background-color:#f1f5f9; padding:12px; border-radius:5px; font-size:15px; color:#334155; line-height:1.8;'>
                            ધારો કે <b>x = 0.<span style='text-decoration:overline;'>6</span></b><br>
                            &there4; x = 0.6666... <b>--- (સમીકરણ 1)</b><br><br>
                            અહીં 1 અંક (6) નું પુનરાવર્તન થાય છે, તેથી બંને બાજુ 10 વડે ગુણતા:<br>
                            10x = 6.6666... <b>--- (સમીકરણ 2)</b><br><br>
                            સમીકરણ 2 માંથી 1 બાદ કરતા:<br>
                            <div style='font-family:monospace; margin-left:20px; font-size:16px;'>
                                &nbsp;10x = 6.6666...<br>
                                - &nbsp;x = 0.6666...<br>
                                <div style='border-top:1px solid #94a3b8; width:150px;'></div>
                                &nbsp;&nbsp;9x = 6.0000...
                            </div><br>
                            &there4; 9x = 6<br>
                            &there4; x = 6/9 <br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 2/3</b> (છેદ ઉડાડતા)
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#be123c; margin:0 0 10px 0;'>(ii) 0.4<span style='text-decoration:overline;'>7</span> ને p/q સ્વરૂપમાં ફેરવવું:</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#64748b;'>(નોંધ: અહીં માત્ર 7 પર જ બાર છે, 4 પર નથી)</p>
                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; font-size:15px; color:#881337; line-height:1.8;'>
                            ધારો કે <b>x = 0.4777...</b> <b>--- (સમીકરણ 1)</b><br><br>
                            અહીં માત્ર 1 અંક (7) નું પુનરાવર્તન થાય છે, તેથી 10 વડે ગુણતા:<br>
                            10x = 4.7777... <b>--- (સમીકરણ 2)</b><br><br>
                            સમીકરણ 2 માંથી 1 બાદ કરતા:<br>
                            <div style='font-family:monospace; margin-left:20px; font-size:16px;'>
                                &nbsp;10x = 4.777...<br>
                                - &nbsp;x = 0.477...<br>
                                <div style='border-top:1px solid #fecdd3; width:150px;'></div>
                                &nbsp;&nbsp;9x = 4.300...
                            </div><br>
                            &there4; 9x = 4.3<br>
                            &there4; 9x = 43/10<br>
                            &there4; x = 43 / (10 &times; 9)<br>
                            &there4; <b style='color:#e11d48; font-size:16px;'>x = 43/90</b>
                        </div>
                    </div>
                </div>

                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (Super Shortcut):</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>હેતુલક્ષી પ્રશ્નો માટે ગણતરી કર્યા વગર સીધો જ જવાબ લખો!</p>
                    <ul style='margin:5px 0 0 0; font-size:14px; color:#78350f; padding-left:20px; line-height:1.8;'>
                        <li><b>ટ્રીક 1:</b> પોઈન્ટ પછી જેટલા આંકડા પર બાર (રેખા) હોય, તેટલા <b>9</b> છેદમાં મૂકી દો.<br>
                        દા.ત. 0.<span style='text-decoration:overline;'>6</span> &rarr; 6/9 (છેદ ઉડાડતા 2/3)<br>
                        0.<span style='text-decoration:overline;'>001</span> &rarr; 1/999 (કારણ કે 3 અંક પર બાર છે)</li>
                        <li><b>ટ્રીક 2:</b> જો અમુક અંક પર બાર ન હોય (જેમ કે 0.4<span style='text-decoration:overline;'>7</span>):<br>
                        સ્ટેપ 1: આખી સંખ્યા (47) માંથી બાર વગરની સંખ્યા (4) <b>બાદ કરો</b> &rarr; 47 - 4 = <b>43</b> (આ તમારો અંશ).<br>
                        સ્ટેપ 2: જેટલા અંક પર બાર છે તેટલા <b>9</b> અને જેટલા પર નથી તેટલા <b>0</b> છેદમાં લખો &rarr; એક 9 અને એક 0 એટલે <b>90</b>.<br>
                        જવાબ: <b style='color:#be123c;'>43/90</b> સીધો તૈયાર!</li>
                    </ul>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 5",
                "marks": 4,
                "question": "1/17 ની દશાંશ અભિવ્યક્તિમાં પુનરાવર્તિત અંકોની સંખ્યા વધુમાં વધુ કેટલી હશે? તમારો જવાબ ભાગાકાર કરીને ચકાસો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>નિયમ:</b> કોઈપણ અપૂર્ણાંક 1/n માટે, પુનરાવર્તિત અંકોની મહત્તમ સંખ્યા હંમેશા (n - 1) કરતાં ઓછી અથવા બરાબર હોય છે.</p>
                    
                    <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; margin-bottom:15px;'>
                        <p style='margin:0; font-size:15px; color:#14532d;'>અહીં n = 17 છે. તેથી પુનરાવર્તિત અંકોની મહત્તમ સંખ્યા <b>17 - 1 = 16</b> હોઈ શકે.</p>
                    </div>
                    
                    <p style='margin:0 0 10px 0; font-size:15px; color:#1e3a8a; font-weight:bold;'>ભાગાકારની ચકાસણી (મોબાઈલમાં જોવા માટે સ્ક્રોલ કરો):</p>
                    
                    <div style='overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px solid #e2e8f0;'>
                         <div style='min-width:350px; font-family:monospace; font-size:14px; line-height:1.4; color:#0f172a;'>
                            <div style='color:#be123c; font-weight:bold; letter-spacing:1px;'>&nbsp;&nbsp;&nbsp;0.0588235294117647...</div>
                            <div style='border-top:2px solid #0f172a; width:190px; margin-left:30px;'></div>
                            <div style='display:flex;'>
                                <div style='width:30px; text-align:right; padding-right:5px; color:#1e3a8a; font-weight:bold;'>17</div>
                                <div style='border-left:2px solid #0f172a; padding-left:5px;'>
                                    <div>&nbsp;1.0000000000000000</div>
                                    <div style='color:#64748b;'>-0</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;10</div>
                                    <div style='color:#64748b;'>-&nbsp;0</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;100</div>
                                    <div style='color:#ea580c;'>-&nbsp;85</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;&nbsp;150</div>
                                    <div style='color:#ea580c;'>-&nbsp;136</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;&nbsp;&nbsp;140</div>
                                    <div style='color:#ea580c;'>&nbsp;&nbsp;-136</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40</div>
                                    <div style='color:#ea580c;'>&nbsp;&nbsp;&nbsp;&nbsp;-34</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;60</div>
                                    <div style='color:#64748b;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(આ રીતે આગળ વધતા અંતે ફરીથી 1 શેષ વધશે...)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style='background-color:#eff6ff; padding:12px; border-radius:5px; border:1px solid #bfdbfe; margin-top:15px;'>
                        <p style='margin:0; font-size:15px; color:#1e40af;'>સંપૂર્ણ ભાગાકાર કરતા આપણને ભાગફળ <b>0.<span style='text-decoration:overline;'>0588235294117647</span></b> મળે છે. અહીં 16 અંકો પછી ફરીથી પુનરાવર્તન ચાલુ થાય છે. તેથી પુનરાવર્તિત અંકોની સંખ્યા <b>16</b> છે.</p>
                    </div>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 1.4 - પ્રશ્ન 1",
                "marks": 2,
                "question": "આપેલી સંખ્યાઓ સંમેય છે કે અસંમેય તે જણાવો:\n(i) 2 - √5 \n(ii) (3 + √23) - √23 \n(iii) 2√7 / 7√7 \n(iv) 1/√2 \n(v) 2π", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <h4 style='color:#881337; margin:0 0 5px 0;'>(i) 2 - &radic;5</h4>
                        <p style='margin:0; font-size:14px; color:#be123c;'><b>અસંમેય સંખ્યા</b>. (કારણ: સંમેય સંખ્યા 2 અને અસંમેય સંખ્યા &radic;5 ની બાદબાકી હંમેશા અસંમેય જ મળે.)</p>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <h4 style='color:#14532d; margin:0 0 5px 0;'>(ii) (3 + &radic;23) - &radic;23</h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#166534;'>સાદું રૂપ: 3 + &radic;23 - &radic;23 = <b>3</b></p>
                        <p style='margin:0; font-size:14px; color:#16a34a;'><b>સંમેય સંખ્યા</b>. (કારણ: 3 ને 3/1 સ્વરૂપમાં લખી શકાય છે.)</p>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <h4 style='color:#14532d; margin:0 0 5px 0;'>(iii) (2&radic;7) / (7&radic;7)</h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#166534;'>સાદું રૂપ: અંશ અને છેદમાંથી &radic;7 ઉડી જશે, એટલે <b>2/7</b> વધશે.</p>
                        <p style='margin:0; font-size:14px; color:#16a34a;'><b>સંમેય સંખ્યા</b>. (કારણ: તે p/q સ્વરૂપમાં છે.)</p>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) 1 / &radic;2</h4>
                        <p style='margin:0; font-size:14px; color:#be123c;'><b>અસંમેય સંખ્યા</b>. (કારણ: શૂન્યેતર સંમેય અને અસંમેય સંખ્યાનો ભાગાકાર અસંમેય જ હોય.)</p>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <h4 style='color:#881337; margin:0 0 5px 0;'>(v) 2&pi;</h4>
                        <p style='margin:0; font-size:14px; color:#be123c;'><b>અસંમેય સંખ્યા</b>. (કારણ: &pi; અસંમેય છે, તેથી 2 નો તેની સાથેનો ગુણાકાર પણ અસંમેય થાય.)</p>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.4 - પ્રશ્ન 2",
                "marks": 3,
                "question": "નીચેનાં સાદું રૂપ આપો:\n(i) (3 + √3)(2 + √2)\n(ii) (3 + √3)(3 - √3)\n(iii) (√5 + √2)²\n(iv) (√5 - √2)(√5 + √2)", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(i) (3 + &radic;3)(2 + &radic;2)</h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px;'>
                            = 3(2 + &radic;2) + &radic;3(2 + &radic;2)<br>
                            = <b>6 + 3&radic;2 + 2&radic;3 + &radic;6</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(ii) (3 + &radic;3)(3 - &radic;3)</h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px;'>
                            <span style='color:#64748b; font-size:13px;'>[નિત્યસમ: (a+b)(a-b) = a&sup2; - b&sup2; નો ઉપયોગ કરતા]</span><br>
                            = (3)&sup2; - (&radic;3)&sup2;<br>
                            = 9 - 3<br>
                            = <b>6</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(iii) (&radic;5 + &radic;2)&sup2;</h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px;'>
                            <span style='color:#64748b; font-size:13px;'>[નિત્યસમ: (a+b)&sup2; = a&sup2; + 2ab + b&sup2; નો ઉપયોગ કરતા]</span><br>
                            = (&radic;5)&sup2; + 2(&radic;5)(&radic;2) + (&radic;2)&sup2;<br>
                            = 5 + 2&radic;10 + 2<br>
                            = <b>7 + 2&radic;10</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(iv) (&radic;5 - &radic;2)(&radic;5 + &radic;2)</h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px;'>
                            <span style='color:#64748b; font-size:13px;'>[નિત્યસમ: (a-b)(a+b) = a&sup2; - b&sup2; નો ઉપયોગ કરતા]</span><br>
                            = (&radic;5)&sup2; - (&radic;2)&sup2;<br>
                            = 5 - 2<br>
                            = <b>3</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.4 - પ્રશ્ન 3",
                "marks": 2,
                "question": "યાદ કરો કે π એ વર્તુળના પરિઘ (c) અને તેના વ્યાસ (d) ના ગુણોત્તર તરીકે દર્શાવવામાં આવે છે. એટલે કે π = c/d. તે એ હકીકતનો વિરોધાભાસ કરતો જણાય છે કે π એ અસંમેય છે. આ વિરોધાભાસનો ઉકેલ તમે કેવી રીતે લાવશો?", 
                "answer": `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px;'>
                    <h4 style='color:#0c4a6e; margin:0 0 10px 0; font-size:18px;'>આમાં કોઈ જ વિરોધાભાસ નથી.</h4>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'><b>સમજૂતી:</b></p>
                    <ul style='margin:0; padding-left:20px; font-size:15px; color:#1e3a8a; line-height:1.6;'>
                        <li>જ્યારે આપણે માપપટ્ટી (Scale) કે અન્ય કોઈ સાધનથી લંબાઈ માપીએ છીએ, ત્યારે આપણને માત્ર એક <b>આશરે સંમેય કિંમત</b> (Approximate Rational Value) જ મળે છે.</li>
                        <li>આથી આપણે એ ચોક્કસ જાણી શકતા નથી કે પરિઘ (c) અથવા વ્યાસ (d) બંનેમાંથી કોઈ એક અસંમેય છે કે નહીં.</li>
                        <li>હકીકતમાં, વર્તુળના કિસ્સામાં c અથવા d બે માંથી એક ચોક્કસપણે <b>અસંમેય</b> હોય છે.</li>
                        <li>તેથી, તેમનો ગુણોત્તર (c/d) પણ અસંમેય જ બને છે, એટલે જ &pi; અસંમેય સંખ્યા છે.</li>
                    </ul>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.4 - પ્રશ્ન 4",
                "marks": 4,
                "question": "સંખ્યારેખા પર √9.3 દર્શાવો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='border:1px solid #bbf7d0; background-color:#f0fdf4; padding:12px; border-radius:8px; margin-bottom:15px;'>
                        <h4 style='color:#047857; margin:0 0 5px 0; font-size:16px;'>રચનાના પગલાં:</h4>
                        <ol style='margin:0; font-size:14px; color:#14532d; padding-left:20px; line-height:1.8;'>
                            <li>એક કિરણ દોરી તેના પર બિંદુ <b>A</b> અને <b>B</b> એવા લો કે જેથી <b>AB = 9.3 એકમ</b> થાય.</li>
                            <li>બિંદુ B થી આગળ એ જ રેખા પર <b>1 એકમ</b> ના અંતરે બિંદુ <b>C</b> લો (એટલે BC = 1 એકમ). તેથી AC = 9.3 + 1 = 10.3 એકમ થશે.</li>
                            <li>રેખાખંડ AC નો લંબદ્વિભાજક દોરી તેનું મધ્યબિંદુ <b>O</b> મેળવો.</li>
                            <li>O ને કેન્દ્ર અને OA (અથવા OC) જેટલી ત્રિજ્યા લઈ <b>અર્ધવર્તુળ</b> દોરો.</li>
                            <li>બિંદુ <b>B</b> આગળથી રેખા AC ને લંબ હોય તેવી રેખા દોરો, જે અર્ધવર્તુળને <b>D</b> બિંદુમાં છેદે. અહીં <b>BD ની લંબાઈ &radic;9.3</b> થશે.</li>
                            <li>હવે B ને શૂન્ય (0) માની, B ને કેન્દ્ર લઈ BD જેટલી ત્રિજ્યા લઈ પરિકરથી ચાપ મારો, જે સંખ્યારેખાને જ્યાં છેદે તે બિંદુ <b>E એ &radic;9.3</b> દર્શાવે છે.</li>
                        </ol>
                    </div>
                    
                    <p style='text-align:center; margin:0 0 10px 0; color:#1e3a8a; font-weight:bold;'>રચનાની આકૃતિ (મોબાઈલમાં જોવા માટે સ્ક્રોલ કરો)</p>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px solid #e2e8f0;'>
                        <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
                            <line x1="20" y1="160" x2="380" y2="160" stroke="#1e3a8a" stroke-width="2"/>
                            
                            <circle cx="50" cy="160" r="4" fill="#1e3a8a"/>
                            <text x="45" y="180" fill="#1e3a8a" font-weight="bold">A</text>
                            
                            <circle cx="236" cy="160" r="4" fill="#1e3a8a"/>
                            <text x="230" y="180" fill="#1e3a8a" font-weight="bold">B (0)</text>
                            
                            <circle cx="256" cy="160" r="4" fill="#1e3a8a"/>
                            <text x="252" y="180" fill="#1e3a8a" font-weight="bold">C (1)</text>
                            
                            <path d="M 50 190 L 50 185 L 236 185 L 236 190" fill="none" stroke="#64748b" stroke-width="1"/>
                            <text x="135" y="198" fill="#64748b" font-size="12">9.3 એકમ</text>
                            
                            <circle cx="153" cy="160" r="4" fill="#ea580c"/>
                            <text x="148" y="180" fill="#ea580c" font-weight="bold">O</text>
                            
                            <path d="M 50 160 A 103 103 0 0 1 256 160" fill="none" stroke="#047857" stroke-width="2"/>
                            
                            <line x1="236" y1="160" x2="236" y2="99" stroke="#be123c" stroke-width="2.5"/>
                            <circle cx="236" cy="99" r="4" fill="#be123c"/>
                            <text x="225" y="90" fill="#be123c" font-weight="bold">D</text>
                            <text x="242" y="130" fill="#be123c" font-weight="bold">√9.3</text>
                            
                            <path d="M 236 99 A 61 61 0 0 1 297 160" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,5"/>
                            <circle cx="297" cy="160" r="4" fill="#ea580c"/>
                            <text x="285" y="180" fill="#ea580c" font-weight="bold">E (√9.3)</text>
                        </svg>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.4 - પ્રશ્ન 5",
                "marks": 4,
                "question": "નીચે આપેલી સંખ્યાઓના છેદનું સંમેયીકરણ કરો:\n(i) 1/√7\n(ii) 1/(√7 - √6)\n(iii) 1/(√5 + √2)\n(iv) 1/(√7 - 2)", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 10px 0;'>(i) 1 / &radic;7</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#475569;'>અંશ અને છેદ બંનેને <b>&radic;7</b> વડે ગુણતા:</p>
                        <div style='background-color:#f1f5f9; padding:10px; border-radius:5px;'>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>1</div>
                                <div style='padding:0 5px;'>&radic;7</div>
                            </div>
                            &times;
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px; color:#be123c;'>&radic;7</div>
                                <div style='padding:0 5px; color:#be123c;'>&radic;7</div>
                            </div>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center; font-weight:bold; font-size:16px;'>
                                <div style='border-bottom:2px solid #16a34a; padding:0 5px;'>&radic;7</div>
                                <div style='padding:0 5px; color:#16a34a;'>7</div>
                            </div>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 10px 0;'>(ii) 1 / (&radic;7 - &radic;6)</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#475569;'>અહીં છેદમાં માઇનસ (-) છે, તેથી વિરોધી ચિહ્ન <b>(&radic;7 + &radic;6)</b> વડે અંશ-છેદને ગુણતા:</p>
                        <div style='background-color:#f1f5f9; padding:10px; border-radius:5px;'>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>1</div>
                                <div style='padding:0 5px;'>(&radic;7 - &radic;6)</div>
                            </div>
                            &times;
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px; color:#be123c;'>(&radic;7 + &radic;6)</div>
                                <div style='padding:0 5px; color:#be123c;'>(&radic;7 + &radic;6)</div>
                            </div><br><br>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>&radic;7 + &radic;6</div>
                                <div style='padding:0 5px;'>(&radic;7)&sup2; - (&radic;6)&sup2;</div>
                            </div>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>&radic;7 + &radic;6</div>
                                <div style='padding:0 5px;'>7 - 6</div>
                            </div>
                            = <b style='color:#16a34a; font-size:16px;'>&radic;7 + &radic;6</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 10px 0;'>(iii) 1 / (&radic;5 + &radic;2)</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#475569;'>અહીં છેદમાં પ્લસ (+) છે, તેથી <b>(&radic;5 - &radic;2)</b> વડે અંશ-છેદને ગુણતા:</p>
                        <div style='background-color:#f1f5f9; padding:10px; border-radius:5px;'>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>1</div>
                                <div style='padding:0 5px;'>(&radic;5 + &radic;2)</div>
                            </div>
                            &times;
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px; color:#be123c;'>(&radic;5 - &radic;2)</div>
                                <div style='padding:0 5px; color:#be123c;'>(&radic;5 - &radic;2)</div>
                            </div><br><br>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>&radic;5 - &radic;2</div>
                                <div style='padding:0 5px;'>(&radic;5)&sup2; - (&radic;2)&sup2;</div>
                            </div>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center; font-weight:bold; font-size:16px;'>
                                <div style='border-bottom:2px solid #16a34a; padding:0 5px;'>&radic;5 - &radic;2</div>
                                <div style='padding:0 5px; color:#16a34a;'>3</div>
                            </div>
                        </div>
                    </div>

            <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 10px 0;'>(iv) 1 / (&radic;7 - 2)</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#475569;'>વિરોધી ચિહ્ન <b>(&radic;7 + 2)</b> વડે અંશ-છેદને ગુણતા:</p>
                        <div style='background-color:#f1f5f9; padding:10px; border-radius:5px;'>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>1</div>
                                <div style='padding:0 5px;'>(&radic;7 - 2)</div>
                            </div>
                            &times;
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px; color:#be123c;'>(&radic;7 + 2)</div>
                                <div style='padding:0 5px; color:#be123c;'>(&radic;7 + 2)</div>
                            </div><br><br>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>&radic;7 + 2</div>
                                <div style='padding:0 5px;'>(&radic;7)&sup2; - (2)&sup2;</div>
                            </div>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center; font-weight:bold; font-size:16px;'>
                                <div style='border-bottom:2px solid #16a34a; padding:0 5px;'>&radic;7 + 2</div>
                                <div style='padding:0 5px; color:#16a34a;'>3</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (Shortcut):</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>જ્યારે અંશમાં 1 હોય અને છેદમાં <b>&radic;a &plusmn; &radic;b</b> જેવું પદ હોય, ત્યારે હેતુલક્ષી પ્રશ્નમાં સીધો જવાબ લખવા માટે:</p>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#78350f;'><b>સ્ટેપ 1:</b> છેદનું ચિહ્ન બદલીને પદને ઉપર (અંશમાં) મૂકી દો.<br><b>સ્ટેપ 2:</b> છેદમાં બંને સંખ્યાઓના વર્ગની બાદબાકી (મોટામાંથી નાનું) મૂકી દો.</p>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#b45309; font-weight:bold;'>ઉદાહરણ તરીકે: 1 / (&radic;5 + &radic;2) &rarr; ચિહ્ન બદલો: &radic;5 - &radic;2 (આ અંશ છે). નીચે 5 - 2 = 3 મૂકો. જવાબ: (&radic;5 - &radic;2) / 3</p>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 1.5 - પ્રશ્ન 1",
                "marks": 2,
                "question": "કિંમત શોધો:\n(i) 64<sup>1/2</sup>\n(ii) 32<sup>1/5</sup>\n(iii) 125<sup>1/3</sup>", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                        <h4 style='color:#14532d; margin:0 0 8px 0; font-size:16px;'>(i) 64<sup>1/2</sup></h4>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bbf7d0;'>
                            <p style='margin:0; font-size:15px; color:#166534; line-height:1.6;'>
                                આપણે જાણીએ છીએ કે 64 એ 8 નો વર્ગ છે. એટલે કે 64 = 8<sup>2</sup><br>
                                &there4; (8<sup>2</sup>)<sup>1/2</sup><br>
                                <span style='color:#64748b; font-size:13px;'>[નિયમ: (a<sup>m</sup>)<sup>n</sup> = a<sup>m &times; n</sup> મુજબ ઘાતોનો ગુણાકાર થશે]</span><br>
                                = 8<sup>2 &times; (1/2)</sup><br>
                                = 8<sup>1</sup><br>
                                = <b style='font-size:18px; color:#15803d;'>8</b>
                            </p>
                        </div>
                    </div>

                    <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 8px 0; font-size:16px;'>(ii) 32<sup>1/5</sup></h4>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd;'>
                            <p style='margin:0; font-size:15px; color:#0369a1; line-height:1.6;'>
                                32 ના અવયવો પાડીએ તો: 32 = 2 &times; 2 &times; 2 &times; 2 &times; 2 = 2<sup>5</sup><br>
                                &there4; (2<sup>5</sup>)<sup>1/5</sup><br>
                                = 2<sup>5 &times; (1/5)</sup><br>
                                = 2<sup>1</sup><br>
                                = <b style='font-size:18px; color:#1d4ed8;'>2</b>
                            </p>
                        </div>
                    </div>

                    <div style='background-color:#fff1f2; padding:15px; border-left:5px solid #be123c; border-radius:8px;'>
                        <h4 style='color:#881337; margin:0 0 8px 0; font-size:16px;'>(iii) 125<sup>1/3</sup></h4>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #fecdd3;'>
                            <p style='margin:0; font-size:15px; color:#be123c; line-height:1.6;'>
                                125 એ 5 નો ઘન છે. એટલે કે 125 = 5<sup>3</sup><br>
                                &there4; (5<sup>3</sup>)<sup>1/3</sup><br>
                                = 5<sup>3 &times; (1/3)</sup><br>
                                = 5<sup>1</sup><br>
                                = <b style='font-size:18px; color:#b91c1c;'>5</b>
                            </p>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.5 - પ્રશ્ન 2",
                "marks": 3,
                "question": "કિંમત શોધો:\n(i) 9<sup>3/2</sup>\n(ii) 32<sup>2/5</sup>\n(iii) 16<sup>3/4</sup>\n(iv) 125<sup>-1/3</sup>", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(i) 9<sup>3/2</sup></h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px; color:#334155;'>
                            અહીં 9 = 3<sup>2</sup><br>
                            &there4; (3<sup>2</sup>)<sup>3/2</sup><br>
                            = 3<sup>2 &times; (3/2)</sup> <span style='color:#64748b; font-size:13px;'>(2 અને 2 ઊડી જશે)</span><br>
                            = 3<sup>3</sup><br>
                            = 3 &times; 3 &times; 3 = <b style='color:#047857; font-size:18px;'>27</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(ii) 32<sup>2/5</sup></h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px; color:#334155;'>
                            અહીં 32 = 2<sup>5</sup><br>
                            &there4; (2<sup>5</sup>)<sup>2/5</sup><br>
                            = 2<sup>5 &times; (2/5)</sup> <span style='color:#64748b; font-size:13px;'>(5 અને 5 ઊડી જશે)</span><br>
                            = 2<sup>2</sup><br>
                            = 2 &times; 2 = <b style='color:#047857; font-size:18px;'>4</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(iii) 16<sup>3/4</sup></h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px; color:#334155;'>
                            અહીં 16 = 2<sup>4</sup><br>
                            &there4; (2<sup>4</sup>)<sup>3/4</sup><br>
                            = 2<sup>4 &times; (3/4)</sup> <span style='color:#64748b; font-size:13px;'>(4 અને 4 ઊડી જશે)</span><br>
                            = 2<sup>3</sup><br>
                            = 2 &times; 2 &times; 2 = <b style='color:#047857; font-size:18px;'>8</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#be123c; margin:0 0 8px 0;'>(iv) 125<sup>-1/3</sup></h4>
                        <div style='background-color:#fff1f2; padding:10px; border-radius:5px; color:#881337;'>
                            અહીં 125 = 5<sup>3</sup><br>
                            &there4; (5<sup>3</sup>)<sup>-1/3</sup><br>
                            = 5<sup>3 &times; (-1/3)</sup> <span style='color:#64748b; font-size:13px;'>(3 અને 3 ઊડી જશે)</span><br>
                            = 5<sup>-1</sup><br>
                            <span style='color:#64748b; font-size:13px;'>[નિયમ: a<sup>-n</sup> = 1/a<sup>n</sup> મુજબ]</span><br>
                            = <b style='color:#be123c; font-size:18px;'>1 / 5</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>આવા દાખલામાં હંમેશા ઘાતાંકનો <b>છેદ</b> જુઓ. જેમ કે 32<sup>2/5</sup> માં છેદમાં <b>5</b> છે. તો સમજી લેવું કે કૌંસની અંદર આપેલી સંખ્યા કોઈકની <b>5 ઘાત</b> જ હશે! (અહીં 32 એ 2 ની 5 ઘાત છે). આ ટ્રીકથી દાખલો કઈ દિશામાં ગણવો તેનો સીધો આઇડિયા આવી જશે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.5 - પ્રશ્ન 3",
                "marks": 4,
                "question": "સાદું રૂપ આપો:\n(i) 2<sup>2/3</sup> &cdot; 2<sup>1/5</sup>\n(ii) (1 / 3<sup>3</sup>)<sup>7</sup>\n(iii) 11<sup>1/2</sup> / 11<sup>1/4</sup>\n(iv) 7<sup>1/2</sup> &cdot; 8<sup>1/2</sup>", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#f4f4f5; padding:15px; border-left:4px solid #52525b; border-radius:5px;'>
                        <h4 style='color:#27272a; margin:0 0 8px 0;'>(i) 2<sup>2/3</sup> &cdot; 2<sup>1/5</sup></h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#52525b;'><b>નિયમ:</b> આધાર સરખો હોય અને ગુણાકાર હોય, તો ઘાતાંકનો સરવાળો થાય. (a<sup>m</sup> &cdot; a<sup>n</sup> = a<sup>m+n</sup>)</p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                            = 2<sup>(2/3 + 1/5)</sup><br>
                            <span style='color:#64748b; font-size:13px;'>(લ.સા.અ. 15 લેતા)</span><br>
                            = 2<sup>(10 + 3) / 15</sup><br>
                            = <b style='color:#1e3a8a; font-size:16px;'>2<sup>13/15</sup></b>
                        </div>
                    </div>

                    <div style='background-color:#f4f4f5; padding:15px; border-left:4px solid #52525b; border-radius:5px;'>
                        <h4 style='color:#27272a; margin:0 0 8px 0;'>(ii) (1 / 3<sup>3</sup>)<sup>7</sup></h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#52525b;'><b>નિયમ:</b> (a/b)<sup>m</sup> = a<sup>m</sup> / b<sup>m</sup></p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                            = 1<sup>7</sup> / (3<sup>3</sup>)<sup>7</sup><br>
                            = 1 / 3<sup>(3 &times; 7)</sup><br>
                            = 1 / 3<sup>21</sup> <br>
                            = <b style='color:#1e3a8a; font-size:16px;'>3<sup>-21</sup></b>
                        </div>
                    </div>

                    <div style='background-color:#f4f4f5; padding:15px; border-left:4px solid #52525b; border-radius:5px;'>
                        <h4 style='color:#27272a; margin:0 0 8px 0;'>(iii) 11<sup>1/2</sup> / 11<sup>1/4</sup></h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#52525b;'><b>નિયમ:</b> આધાર સરખો હોય અને ભાગાકાર હોય, તો ઘાતાંકની બાદબાકી થાય. (a<sup>m</sup> / a<sup>n</sup> = a<sup>m-n</sup>)</p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                            = 11<sup>(1/2 - 1/4)</sup><br>
                            <span style='color:#64748b; font-size:13px;'>(અડધામાંથી પા બાદ જાય તો પા વધે, અથવા લ.સા.અ. 4 લેતા)</span><br>
                            = 11<sup>(2 - 1) / 4</sup><br>
                            = <b style='color:#1e3a8a; font-size:16px;'>11<sup>1/4</sup></b>
                        </div>
                    </div>

                    <div style='background-color:#f4f4f5; padding:15px; border-left:4px solid #52525b; border-radius:5px;'>
                        <h4 style='color:#27272a; margin:0 0 8px 0;'>(iv) 7<sup>1/2</sup> &cdot; 8<sup>1/2</sup></h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#52525b;'><b>નિયમ:</b> આધાર અલગ હોય પરંતુ ઘાતાંક સરખો હોય, તો આધારનો ગુણાકાર થાય. (a<sup>m</sup> &cdot; b<sup>m</sup> = (ab)<sup>m</sup>)</p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                            = (7 &times; 8)<sup>1/2</sup><br>
                            = <b style='color:#1e3a8a; font-size:16px;'>56<sup>1/2</sup></b>
                        </div>
                    </div>
                </div>`
            }
            
            
        ]
    }
};

