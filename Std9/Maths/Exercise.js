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
  "question": "નીચેની સંખ્યાઓને દશાંશ સ્વરૂપમાં લખો અને તે કેવા પ્રકારની દશાંશ અભિવ્યક્તિ ધરાવે છે તે જણાવો:\n(i) 36/100\n(ii) 1/11\n(iii) 4 1/8\n(iv) 3/13\n(v) 2/11\n(vi) 329/400", 
  "answer": "<div style='display:flex; flex-direction:column; gap:20px;'>\n\n    \n    <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; border-top:1px solid #bbf7d0; border-right:1px solid #bbf7d0; border-bottom:1px solid #bbf7d0;'>\n        <h4 style='color:#14532d; margin:0 0 10px 0; font-size:16px;'>(i) 36 / 100</h4>\n        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bbf7d0; display:inline-block;'>\n            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>\n                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>36</div>\n                <div style='padding:0 5px; color:#1e3a8a;'>100</div>\n            </div>\n            <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'> = 0.36</span>\n        </div>\n        <p style='margin:10px 0 0 0; font-size:15px; color:#166534;'>અહીં શેષ શૂન્ય થઈ જાય છે, તેથી આ <b>શાંત દશાંશ અભિવ્યક્તિ</b> છે.</p>\n    </div>\n\n    \n    <div style='background-color:#f8fafc; padding:15px; border-left:5px solid #0284c7; border-radius:8px; border-top:1px solid #bae6fd; border-right:1px solid #bae6fd; border-bottom:1px solid #bae6fd;'>\n        <h4 style='color:#0c4a6e; margin:0 0 10px 0; font-size:16px;'>(ii) 1 / 11</h4>\n        <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>ભાગાકાર (મોબાઈલમાં જોવા માટે ડાબી-જમણી બાજુ સ્ક્રોલ કરો):</p>\n        <div style='overflow-x:auto; background-color:#ffffff; padding:15px; border-radius:8px; border:1px dashed #94a3b8;'>\n            <div style='min-width:250px; font-family:monospace; font-size:16px; line-height:1.5; color:#0f172a;'>\n                <div style='margin-left:45px; color:#be123c; font-weight:bold;'>&nbsp;&nbsp;0.0909...</div>\n                <div style='margin-left:45px; border-top:2px solid #0f172a; width:100px;'></div>\n                <div style='display:flex;'>\n                    <div style='width:40px; text-align:right; padding-right:5px; color:#1e3a8a; font-weight:bold;'>11</div>\n                    <div style='border-left:2px solid #0f172a; padding-left:5px;'>\n                        <div>&nbsp;1.0000</div>\n                        <div style='color:#64748b;'>-0</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>\n                        <div>&nbsp;10</div>\n                        <div style='color:#64748b;'>-&nbsp;0</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>\n                        <div>&nbsp;100</div>\n                        <div style='color:#be123c;'>-&nbsp;99</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;100</div>\n                        <div style='color:#be123c;'>&nbsp;&nbsp;-&nbsp;99</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:60px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <p style='margin:10px 0 0 0; font-size:15px; color:#0369a1;'>અહીં શેષ વારંવાર 1 આવે છે. ભાગફળમાં 09 નું પુનરાવર્તન થાય છે.<br>\n        તેથી, <b>1/11 = 0.0909... = 0.<span style='text-decoration:overline;'>09</span></b></p>\n        <p style='margin:5px 0 0 0; font-size:15px; color:#0c4a6e; font-weight:bold;'>આ <b>અનંત આવૃત દશાંશ અભિવ્યક્તિ</b> છે.</p>\n    </div>\n\n    \n    <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; border-top:1px solid #bbf7d0; border-right:1px solid #bbf7d0; border-bottom:1px solid #bbf7d0;'>\n        <h4 style='color:#14532d; margin:0 0 10px 0; font-size:16px;'>(iii) 4 &frac18; = 33 / 8</h4>\n        <div style='overflow-x:auto; background-color:#ffffff; padding:15px; border-radius:8px; border:1px dashed #94a3b8;'>\n            <div style='min-width:250px; font-family:monospace; font-size:16px; line-height:1.5; color:#0f172a;'>\n                <div style='margin-left:45px; color:#16a34a; font-weight:bold;'>&nbsp;&nbsp;4.125</div>\n                <div style='margin-left:45px; border-top:2px solid #0f172a; width:100px;'></div>\n                <div style='display:flex;'>\n                    <div style='width:40px; text-align:right; padding-right:5px; color:#1e3a8a; font-weight:bold;'>8</div>\n                    <div style='border-left:2px solid #0f172a; padding-left:5px;'>\n                        <div>&nbsp;33.000</div>\n                        <div style='color:#be123c;'>-32</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>\n                        <div>&nbsp;&nbsp;10</div>\n                        <div style='color:#be123c;'>&nbsp;&nbsp;-8</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;20</div>\n                        <div style='color:#be123c;'>&nbsp;&nbsp;-16</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:60px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;&nbsp;40</div>\n                        <div style='color:#be123c;'>&nbsp;&nbsp;&nbsp;-40</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:70px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <p style='margin:10px 0 0 0; font-size:15px; color:#166534;'>અહીં શેષ શૂન્ય થઈ જાય છે, તેથી <b>33/8 = 4.125</b></p>\n        <p style='margin:5px 0 0 0; font-size:15px; color:#14532d; font-weight:bold;'>આ <b>શાંત દશાંશ અભિવ્યક્તિ</b> છે.</p>\n    </div>\n\n    \n    <div style='background-color:#f8fafc; padding:15px; border-left:5px solid #0284c7; border-radius:8px; border-top:1px solid #bae6fd; border-right:1px solid #bae6fd; border-bottom:1px solid #bae6fd;'>\n        <h4 style='color:#0c4a6e; margin:0 0 10px 0; font-size:16px;'>(iv) 3 / 13</h4>\n        <div style='overflow-x:auto; background-color:#ffffff; padding:15px; border-radius:8px; border:1px dashed #94a3b8;'>\n            <div style='min-width:250px; font-family:monospace; font-size:16px; line-height:1.5; color:#0f172a;'>\n                <div style='margin-left:45px; color:#be123c; font-weight:bold;'>&nbsp;&nbsp;0.230769...</div>\n                <div style='margin-left:45px; border-top:2px solid #0f172a; width:130px;'></div>\n                <div style='display:flex;'>\n                    <div style='width:40px; text-align:right; padding-right:5px; color:#1e3a8a; font-weight:bold;'>13</div>\n                    <div style='border-left:2px solid #0f172a; padding-left:5px;'>\n                        <div>&nbsp;3.000000</div>\n                        <div style='color:#64748b;'>-0</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>\n                        <div>&nbsp;30</div>\n                        <div style='color:#be123c;'>-26</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>\n                        <div>&nbsp;&nbsp;40</div>\n                        <div style='color:#be123c;'>&nbsp;-39</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:60px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;10</div>\n                        <div style='color:#64748b;'>&nbsp;&nbsp;&nbsp;-0</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:70px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;100</div>\n                        <div style='color:#be123c;'>&nbsp;&nbsp;&nbsp;-91</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:70px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;90</div>\n                        <div style='color:#be123c;'>&nbsp;&nbsp;&nbsp;&nbsp;-78</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:80px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;120</div>\n                        <div style='color:#be123c;'>&nbsp;&nbsp;&nbsp;&nbsp;-117</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:90px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <p style='margin:10px 0 0 0; font-size:15px; color:#0369a1;'>અહીં 6 અંકો પછી શેષ 3 પાછી ફરે છે, એટલે 230769 નું પુનરાવર્તન થશે.<br>\n        તેથી, <b>3/13 = 0.<span style='text-decoration:overline;'>230769</span></b></p>\n        <p style='margin:5px 0 0 0; font-size:15px; color:#0c4a6e; font-weight:bold;'>આ <b>અનંત આવૃત દશાંશ અભિવ્યક્તિ</b> છે.</p>\n    </div>\n\n    \n    <div style='background-color:#f8fafc; padding:15px; border-left:5px solid #0284c7; border-radius:8px; border-top:1px solid #bae6fd; border-right:1px solid #bae6fd; border-bottom:1px solid #bae6fd;'>\n        <h4 style='color:#0c4a6e; margin:0 0 10px 0; font-size:16px;'>(v) 2 / 11</h4>\n        <div style='overflow-x:auto; background-color:#ffffff; padding:15px; border-radius:8px; border:1px dashed #94a3b8;'>\n            <div style='min-width:250px; font-family:monospace; font-size:16px; line-height:1.5; color:#0f172a;'>\n                <div style='margin-left:45px; color:#be123c; font-weight:bold;'>&nbsp;&nbsp;0.1818...</div>\n                <div style='margin-left:45px; border-top:2px solid #0f172a; width:100px;'></div>\n                <div style='display:flex;'>\n                    <div style='width:40px; text-align:right; padding-right:5px; color:#1e3a8a; font-weight:bold;'>11</div>\n                    <div style='border-left:2px solid #0f172a; padding-left:5px;'>\n                        <div>&nbsp;2.0000</div>\n                        <div style='color:#64748b;'>-0</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>\n                        <div>&nbsp;20</div>\n                        <div style='color:#be123c;'>-11</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>\n                        <div>&nbsp;&nbsp;90</div>\n                        <div style='color:#be123c;'>&nbsp;-88</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:60px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;20</div>\n                        <div style='color:#be123c;'>&nbsp;&nbsp;-11</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:60px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;&nbsp;90</div>\n                        <div style='color:#be123c;'>&nbsp;&nbsp;&nbsp;-88</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:70px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <p style='margin:10px 0 0 0; font-size:15px; color:#0369a1;'>અહીં 18 નું પુનરાવર્તન થાય છે.<br>\n        તેથી, <b>2/11 = 0.<span style='text-decoration:overline;'>18</span></b></p>\n        <p style='margin:5px 0 0 0; font-size:15px; color:#0c4a6e; font-weight:bold;'>આ <b>અનંત આવૃત દશાંશ અભિવ્યક્તિ</b> છે.</p>\n    </div>\n\n    \n    <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; border-top:1px solid #bbf7d0; border-right:1px solid #bbf7d0; border-bottom:1px solid #bbf7d0;'>\n        <h4 style='color:#14532d; margin:0 0 10px 0; font-size:16px;'>(vi) 329 / 400</h4>\n        <div style='overflow-x:auto; background-color:#ffffff; padding:15px; border-radius:8px; border:1px dashed #94a3b8;'>\n            <div style='min-width:250px; font-family:monospace; font-size:16px; line-height:1.5; color:#0f172a;'>\n                <div style='margin-left:55px; color:#16a34a; font-weight:bold;'>&nbsp;&nbsp;0.8225</div>\n                <div style='margin-left:55px; border-top:2px solid #0f172a; width:120px;'></div>\n                <div style='display:flex;'>\n                    <div style='width:50px; text-align:right; padding-right:5px; color:#1e3a8a; font-weight:bold;'>400</div>\n                    <div style='border-left:2px solid #0f172a; padding-left:5px;'>\n                        <div>&nbsp;329.0000</div>\n                        <div style='color:#64748b;'>&nbsp;&nbsp;-0</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:70px;'></div>\n                        <div>&nbsp;3290</div>\n                        <div style='color:#be123c;'>-3200</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:70px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;900</div>\n                        <div style='color:#be123c;'>&nbsp;&nbsp;-800</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:80px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;&nbsp;1000</div>\n                        <div style='color:#be123c;'>&nbsp;&nbsp;&nbsp;&nbsp;-800</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:90px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2000</div>\n                        <div style='color:#be123c;'>&nbsp;&nbsp;&nbsp;&nbsp;-2000</div>\n                        <div style='border-bottom:1px solid #cbd5e1; width:100px;'></div>\n                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <p style='margin:10px 0 0 0; font-size:15px; color:#166534;'>અહીં શેષ શૂન્ય થઈ જાય છે, તેથી <b>329/400 = 0.8225</b></p>\n        <p style='margin:5px 0 0 0; font-size:15px; color:#14532d; font-weight:bold;'>આ <b>શાંત દશાંશ અભિવ્યક્તિ</b> છે.</p>\n    </div>\n\n</div>\n\n<div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>\n    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> \n    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>ભાગાકાર કર્યા વગર પણ દશાંશનો પ્રકાર જાણી શકાય! જો છેદના અવયવો <b>ફક્ત 2 અથવા 5</b> જ હોય (અથવા બંને હોય), તો તે હંમેશા <b>શાંત દશાંશ</b> જ હોય. જો 2 કે 5 સિવાયનો કોઈ પણ અવયવ (જેમ કે 3, 7, 11, 13) આવે, તો તે <b>અનંત આવૃત</b> જ હોય!</p>\n    <ul style='margin:5px 0 0 0; font-size:14px; color:#78350f; padding-left:20px; line-height:1.8;'>\n        <li><b>100</b> ના અવયવ = 2 &times; 2 &times; 5 &times; 5 &rarr; <b>શાંત</b></li>\n        <li><b>11</b> નો અવયવ = 11 &rarr; <b>અનંત આવૃત</b></li>\n        <li><b>8</b> ના અવયવ = 2 &times; 2 &times; 2 &rarr; <b>શાંત</b></li>\n        <li><b>13</b> નો અવયવ = 13 &rarr; <b>અનંત આવૃત</b></li>\n        <li><b>400</b> ના અવયવ = 2 &times; 2 &times; 2 &times; 2 &times; 5 &times; 5 &rarr; <b>શાંત</b></li>\n    </ul>\n</div>"
            },
            
    
            { 
  "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 2",
  "marks": 3,
  "question": "તમે જાણો છો કે 1/7 = 0.142857̅ છે. શું તમે ખરેખર લાંબા ભાગાકારની પ્રક્રિયા કર્યા વગર 2/7, 3/7, 4/7, 5/7, 6/7 ની દશાંશ અભિવ્યક્તિ શું મળશે તેનું અનુમાન કરી શકો છો? જો હા, તો કેવી રીતે?", 
  "answer": "<div style='display:flex; flex-direction:column; gap:15px;'>\n    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>\n        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>વિગતવાર ઉકેલ અને ગણતરી:</h4>\n        \n        <div style='background-color:#f1f5f9; padding:12px; border-radius:5px; font-size:15px; color:#334155; line-height:1.8;'>\n            અહીં આપણને આપેલું છે કે, <b>1/7 = 0.<span style='text-decoration:overline;'>142857</span></b><br><br>\n            હા, આપણે લાંબા ભાગાકારની પ્રક્રિયા કર્યા વગર અન્ય અપૂર્ણાંકોની દશાંશ અભિવ્યક્તિનું અનુમાન કરી શકીએ છીએ. આ માટે આપણે આપેલી સંખ્યાઓને 1/7 ના ગુણક (મલ્ટિપલ) તરીકે લખીશું અને તેનો ગુણાકાર કરીશું:<br><br>\n            <div style='font-family:monospace; margin-left:10px; font-size:16px; background-color:#e2e8f0; padding:10px; border-radius:5px;'>\n                <b>2/7</b> = 2 &times; (1/7) = 2 &times; 0.<span style='text-decoration:overline;'>142857</span> = <b style='color:#16a34a;'>0.<span style='text-decoration:overline;'>285714</span></b><br><br>\n                <b>3/7</b> = 3 &times; (1/7) = 3 &times; 0.<span style='text-decoration:overline;'>142857</span> = <b style='color:#16a34a;'>0.<span style='text-decoration:overline;'>428571</span></b><br><br>\n                <b>4/7</b> = 4 &times; (1/7) = 4 &times; 0.<span style='text-decoration:overline;'>142857</span> = <b style='color:#16a34a;'>0.<span style='text-decoration:overline;'>571428</span></b><br><br>\n                <b>5/7</b> = 5 &times; (1/7) = 5 &times; 0.<span style='text-decoration:overline;'>142857</span> = <b style='color:#16a34a;'>0.<span style='text-decoration:overline;'>714285</span></b><br><br>\n                <b>6/7</b> = 6 &times; (1/7) = 6 &times; 0.<span style='text-decoration:overline;'>142857</span> = <b style='color:#16a34a;'>0.<span style='text-decoration:overline;'>857142</span></b>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>\n    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (Cyclic Number Magic):</b> \n    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>મોટો ગુણાકાર કરવાની પણ જરૂર નથી! <b>142857</b> એક જાદુઈ ચક્રીય સંખ્યા (Cyclic Number) છે. બસ આ ગોળાકાર ક્રમ યાદ રાખો: <b>1 &rarr; 4 &rarr; 2 &rarr; 8 &rarr; 5 &rarr; 7</b></p>\n    <ul style='margin:5px 0 0 0; font-size:14px; color:#78350f; padding-left:20px; line-height:1.8;'>\n        <li>જવાબમાં આ 6 અંકો હંમેશા આ જ ક્રમમાં આવે છે. તમારે માત્ર જવાબનો <b>પ્રથમ અંક</b> જ શોધવાનો છે! (14 નો ઘડિયો બોલો)</li>\n        <li><b>2/7 માટે:</b> 14 &times; 2 = <b>28</b>. એટલે જવાબ <b>2</b> થી શરૂ થશે. 2 પછી ચક્ર મુજબ 85714 આવે. &rarr; <b style='color:#be123c;'>0.285714</b></li>\n        <li><b>3/7 માટે:</b> 14 &times; 3 = <b>42</b>. એટલે જવાબ <b>4</b> થી શરૂ થશે. 4 પછી ચક્ર મુજબ 28571 આવે. &rarr; <b style='color:#be123c;'>0.428571</b></li>\n        <li><b>4/7 માટે:</b> 14 &times; 4 = 56 (જે <b>57</b> ની નજીક છે). એટલે જવાબ <b>5</b> થી શરૂ થશે. &rarr; <b style='color:#be123c;'>0.571428</b></li>\n        <li><b>5/7 માટે:</b> 14 &times; 5 = 70 (જે <b>71</b> ની નજીક છે). એટલે જવાબ <b>7</b> થી શરૂ થશે. &rarr; <b style='color:#be123c;'>0.714285</b></li>\n        <li><b>6/7 માટે:</b> 14 &times; 6 = 84 (જે <b>85</b> ની નજીક છે). એટલે જવાબ <b>8</b> થી શરૂ થશે. &rarr; <b style='color:#be123c;'>0.857142</b></li>\n    </ul>\n</div>"
            },
            
            { 
  "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 3",
  "marks": 3,
  "question": "p પૂર્ણાંક હોય અને q શૂન્યેતર પૂર્ણાંક હોય તેવા p, q માટે નીચેની સંખ્યાઓને p/q સ્વરૂપમાં દર્શાવો:\n(i) 0.6̅ \n(ii) 0.47̅ \n(iii) 0.001̅", 
  "answer": "<div style='display:flex; flex-direction:column; gap:15px;'>\n    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>\n        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(i) 0.<span style='text-decoration:overline;'>6</span> ને p/q સ્વરૂપમાં ફેરવવું:</h4>\n        \n        <div style='background-color:#f1f5f9; padding:12px; border-radius:5px; font-size:15px; color:#334155; line-height:1.8;'>\n            ધારો કે <b>x = 0.<span style='text-decoration:overline;'>6</span></b><br>\n            &there4; x = 0.6666... <b>--- (સમીકરણ 1)</b><br><br>\n            અહીં 1 અંક (6) નું પુનરાવર્તન થાય છે, તેથી બંને બાજુ 10 વડે ગુણતા:<br>\n            10x = 6.6666... <b>--- (સમીકરણ 2)</b><br><br>\n            સમીકરણ 2 માંથી 1 બાદ કરતા:<br>\n            <div style='font-family:monospace; margin-left:20px; font-size:16px;'>\n                &nbsp;10x = 6.6666...<br>\n                - &nbsp;x = 0.6666...<br>\n                <div style='border-top:1px solid #94a3b8; width:150px;'></div>\n                &nbsp;&nbsp;9x = 6.0000...\n            </div><br>\n            &there4; 9x = 6<br>\n            &there4; x = 6/9 <br>\n            &there4; <b style='color:#16a34a; font-size:16px;'>x = 2/3</b> (છેદ ઉડાડતા)\n        </div>\n    </div>\n\n    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>\n        <h4 style='color:#be123c; margin:0 0 10px 0;'>(ii) 0.4<span style='text-decoration:overline;'>7</span> ને p/q સ્વરૂપમાં ફેરવવું:</h4>\n        <p style='margin:0 0 10px 0; font-size:14px; color:#64748b;'>(નોંધ: અહીં માત્ર 7 પર જ બાર છે, 4 પર નથી)</p>\n        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; font-size:15px; color:#881337; line-height:1.8;'>\n            ધારો કે <b>x = 0.4777...</b> <b>--- (સમીકરણ 1)</b><br><br>\n            અહીં માત્ર 1 અંક (7) નું પુનરાવર્તન થાય છે, તેથી 10 વડે ગુણતા:<br>\n            10x = 4.7777... <b>--- (સમીકરણ 2)</b><br><br>\n            સમીકરણ 2 માંથી 1 બાદ કરતા:<br>\n            <div style='font-family:monospace; margin-left:20px; font-size:16px;'>\n                &nbsp;10x = 4.777...<br>\n                - &nbsp;x = 0.477...<br>\n                <div style='border-top:1px solid #fecdd3; width:150px;'></div>\n                &nbsp;&nbsp;9x = 4.300...\n            </div><br>\n            &there4; 9x = 4.3<br>\n            &there4; 9x = 43/10<br>\n            &there4; x = 43 / (10 &times; 9)<br>\n            &there4; <b style='color:#e11d48; font-size:16px;'>x = 43/90</b>\n        </div>\n    </div>\n\n    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>\n        <h4 style='color:#047857; margin:0 0 10px 0;'>(iii) 0.<span style='text-decoration:overline;'>001</span> ને p/q સ્વરૂપમાં ફેરવવું:</h4>\n        <div style='background-color:#ecfdf5; padding:12px; border-radius:5px; font-size:15px; color:#064e3b; line-height:1.8;'>\n            ધારો કે <b>x = 0.<span style='text-decoration:overline;'>001</span></b><br>\n            &there4; x = 0.001001001... <b>--- (સમીકરણ 1)</b><br><br>\n            અહીં 3 અંકો (001) નું પુનરાવર્તન થાય છે, તેથી બંને બાજુ 1000 વડે ગુણતા:<br>\n            1000x = 1.001001001... <b>--- (સમીકરણ 2)</b><br><br>\n            સમીકરણ 2 માંથી 1 બાદ કરતા:<br>\n            <div style='font-family:monospace; margin-left:20px; font-size:16px;'>\n                &nbsp;1000x = 1.001001...<br>\n                - &nbsp;&nbsp;&nbsp;x = 0.001001...<br>\n                <div style='border-top:1px solid #6ee7b7; width:180px;'></div>\n                &nbsp;&nbsp;&nbsp;999x = 1.000000...\n            </div><br>\n            &there4; 999x = 1<br>\n            &there4; <b style='color:#059669; font-size:16px;'>x = 1/999</b>\n        </div>\n    </div>\n</div>\n\n<div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>\n    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (Super Shortcut):</b> \n    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>હેતુલક્ષી પ્રશ્નો માટે ગણતરી કર્યા વગર સીધો જ જવાબ લખો!</p>\n    <ul style='margin:5px 0 0 0; font-size:14px; color:#78350f; padding-left:20px; line-height:1.8;'>\n        <li><b>ટ્રીક 1:</b> પોઈન્ટ પછી જેટલા આંકડા પર બાર (રેખા) હોય, તેટલા <b>9</b> છેદમાં મૂકી દો.<br>\n        દા.ત. 0.<span style='text-decoration:overline;'>6</span> &rarr; 6/9 (છેદ ઉડાડતા 2/3)<br>\n        0.<span style='text-decoration:overline;'>001</span> &rarr; 1/999 (કારણ કે 3 અંક પર બાર છે)</li>\n        <li><b>ટ્રીક 2:</b> જો અમુક અંક પર બાર ન હોય (જેમ કે 0.4<span style='text-decoration:overline;'>7</span>):<br>\n        સ્ટેપ 1: આખી સંખ્યા (47) માંથી બાર વગરની સંખ્યા (4) <b>બાદ કરો</b> &rarr; 47 - 4 = <b>43</b> (આ તમારો અંશ).<br>\n        સ્ટેપ 2: જેટલા અંક પર બાર છે તેટલા <b>9</b> અને જેટલા પર નથી તેટલા <b>0</b> છેદમાં લખો &rarr; એક 9 અને એક 0 એટલે <b>90</b>.<br>\n        જવાબ: <b style='color:#be123c;'>43/90</b> સીધો તૈયાર!</li>\n    </ul>\n</div>"
            },
    { 
  "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 4",
  "marks": 3,
  "question": "0.99999... ને p/q સ્વરૂપમાં દર્શાવો. શું તમને તમારા જવાબથી આશ્ચર્ય થાય છે? તમારા શિક્ષક અને વર્ગના મિત્રો સાથે ચર્ચા કરો કે જવાબ સાર્થક છે કે નહીં.", 
  "answer": "<div style='display:flex; flex-direction:column; gap:15px;'>\n    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>\n        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>0.99999... ને p/q સ્વરૂપમાં ફેરવવું:</h4>\n        \n        <div style='background-color:#f1f5f9; padding:12px; border-radius:5px; font-size:15px; color:#334155; line-height:1.8;'>\n            ધારો કે <b>x = 0.99999...</b> <b>--- (સમીકરણ 1)</b><br><br>\n            અહીં માત્ર 1 અંક (9) નું પુનરાવર્તન થાય છે, તેથી બંને બાજુ 10 વડે ગુણતા:<br>\n            10x = 9.99999... <b>--- (સમીકરણ 2)</b><br><br>\n            સમીકરણ 2 માંથી 1 બાદ કરતા:<br>\n            <div style='font-family:monospace; margin-left:20px; font-size:16px;'>\n                &nbsp;10x = 9.99999...<br>\n                - &nbsp;x = 0.99999...<br>\n                <div style='border-top:1px solid #94a3b8; width:150px;'></div>\n                &nbsp;&nbsp;9x = 9.00000...\n            </div><br>\n            &there4; 9x = 9<br>\n            &there4; x = 9/9 <br>\n            &there4; <b style='color:#16a34a; font-size:16px;'>x = 1</b>\n        </div>\n    </div>\n\n    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>\n        <h4 style='color:#be123c; margin:0 0 10px 0;'>શું જવાબથી આશ્ચર્ય થયું? (ચર્ચા અને સમજૂતી):</h4>\n        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; font-size:15px; color:#881337; line-height:1.8;'>\n            હા, પ્રથમ નજરે આશ્ચર્ય થાય કે 0.99999... નો જવાબ સીધો જ પૂર્ણાંક '1' કેવી રીતે આવી શકે!<br><br>\n            <b>આ જવાબ કેમ સાર્થક છે?</b><br>\n            0.99999... અનંત સુધી વિસ્તરે છે. 1 અને 0.99999... વચ્ચેનો તફાવત 0.0000...1 છે. અહીં શૂન્ય પણ અનંત છે, તેથી આ તફાવત એટલો બધો સૂક્ષ્મ (નાનો) છે કે તેને ગણતરીમાં અવગણી શકાય. ગાણિતિક રીતે, આ બે સંખ્યાઓ વચ્ચે કોઈ અંતર રહેતું નથી, તેથી <b>0.99999... અને 1 સમાન છે.</b>\n        </div>\n    </div>\n</div>\n\n<div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>\n    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> \n    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>આપણી જૂની ટ્રીક અહીં પણ 100% કામ કરે છે!</p>\n    <ul style='margin:5px 0 0 0; font-size:14px; color:#78350f; padding-left:20px; line-height:1.8;'>\n        <li>0.99999... એટલે કે <b>0.<span style='text-decoration:overline;'>9</span></b> થાય.</li>\n        <li>ટ્રીક મુજબ: પોઈન્ટ પછી જેટલા આંકડા પર બાર (રેખા) હોય, તેટલા <b>9</b> છેદમાં મૂકી દો.</li>\n        <li>અહીં 9 પર બાર છે, એટલે છેદમાં પણ 9 આવશે.</li>\n        <li>તેથી સીધો જવાબ: <b style='color:#be123c;'>9/9 = 1</b> તૈયાર! ગણતરી કરવાની કોઈ જ જરૂર નથી.</li>\n    </ul>\n</div>"
    },
            
{ 
  "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 5",
  "marks": 4,
  "question": "1/17 ની દશાંશ અભિવ્યક્તિમાં પુનરાવર્તિત અંકોની સંખ્યા વધુમાં વધુ કેટલી હશે? તમારો જવાબ ભાગાકાર કરીને ચકાસો.", 
  "answer": "<div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>\n    <p style='margin-top:0; font-size:15px; color:#334155;'><b>નિયમ:</b> કોઈપણ અપૂર્ણાંક 1/n માટે, દશાંશ અભિવ્યક્તિમાં પુનરાવર્તિત અંકોની મહત્તમ સંખ્યા હંમેશા <b>(n - 1)</b> કરતાં ઓછી અથવા બરાબર હોય છે.</p>\n    \n    <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; margin-bottom:15px;'>\n        <p style='margin:0; font-size:15px; color:#14532d;'>અહીં n = 17 છે. તેથી પુનરાવર્તિત અંકોની મહત્તમ સંખ્યા <b>17 - 1 = 16</b> હોઈ શકે.</p>\n    </div>\n    \n    <p style='margin:0 0 10px 0; font-size:15px; color:#1e3a8a; font-weight:bold;'>સંપૂર્ણ ભાગાકારની ચકાસણી (મોબાઈલમાં જોવા માટે ડાબી-જમણી બાજુ સ્ક્રોલ કરો):</p>\n    \n    <div style='overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px solid #e2e8f0;'>\n         <div style='min-width:350px; font-family:monospace; font-size:15px; line-height:1.5; color:#0f172a;'>\n            <div style='color:#be123c; font-weight:bold; letter-spacing:2px;'>&nbsp;&nbsp;&nbsp;0.0588235294117647...</div>\n            <div style='border-top:2px solid #0f172a; width:280px; margin-left:30px;'></div>\n            <div style='display:flex;'>\n                <div style='width:30px; text-align:right; padding-right:5px; color:#1e3a8a; font-weight:bold;'>17</div>\n                <div style='border-left:2px solid #0f172a; padding-left:5px;'>\n                    <div>&nbsp;1.00</div>\n                    <div style='color:#64748b;'>-0</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:50px;'></div>\n                    <div>&nbsp;10</div>\n                    <div style='color:#64748b;'>-&nbsp;0</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:50px;'></div>\n                    <div>&nbsp;100</div>\n                    <div style='color:#ea580c;'>-&nbsp;85</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:60px;'></div>\n                    <div>&nbsp;&nbsp;150</div>\n                    <div style='color:#ea580c;'>-&nbsp;136</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:60px;'></div>\n                    <div>&nbsp;&nbsp;&nbsp;140</div>\n                    <div style='color:#ea580c;'>&nbsp;&nbsp;-136</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:70px;'></div>\n                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40</div>\n                    <div style='color:#ea580c;'>&nbsp;&nbsp;&nbsp;&nbsp;-34</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:80px;'></div>\n                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;60</div>\n                    <div style='color:#ea580c;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-51</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:90px;'></div>\n                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;90</div>\n                    <div style='color:#ea580c;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-85</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:100px;'></div>\n                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50</div>\n                    <div style='color:#ea580c;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-34</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:110px;'></div>\n                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;160</div>\n                    <div style='color:#ea580c;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-153</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:120px;'></div>\n                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;70</div>\n                    <div style='color:#ea580c;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-68</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:130px;'></div>\n                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20</div>\n                    <div style='color:#ea580c;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-17</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:140px;'></div>\n                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30</div>\n                    <div style='color:#ea580c;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-17</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>\n                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;130</div>\n                    <div style='color:#ea580c;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-119</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:160px;'></div>\n                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;110</div>\n                    <div style='color:#ea580c;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-102</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:170px;'></div>\n                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;80</div>\n                    <div style='color:#ea580c;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-68</div>\n                    <div style='border-bottom:1px dashed #cbd5e1; width:180px;'></div>\n                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;120</div>\n                    <div style='color:#ea580c;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-119</div>\n                    <div style='border-bottom:2px solid #0f172a; width:190px;'></div>\n                    <div style='color:#16a34a; font-weight:bold;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 (અહીંથી ફરી શરૂઆત થશે)</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <div style='background-color:#eff6ff; padding:12px; border-radius:5px; border:1px solid #bfdbfe; margin-top:15px;'>\n        <p style='margin:0; font-size:15px; color:#1e40af;'>અંતે શેષ 1 પાછી આવે છે, જ્યાંથી આપણે શરૂઆત કરી હતી. <br>\n        તેથી સંપૂર્ણ ભાગાકાર કરતા આપણને ભાગફળ <b>0.<span style='text-decoration:overline;'>0588235294117647</span></b> મળે છે.<br>\n        આમ, 1/17 ની દશાંશ અભિવ્યક્તિમાં પુનરાવર્તિત <b>અંકોની સંખ્યા 16 છે</b>.</p>\n    </div>\n</div>\n\n<div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>\n    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (Midy's Theorem Magic):</b> \n    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>આટલો મોટો ભાગાકાર કરતી વખતે ભૂલ ન થાય તે માટેની જાદુઈ ટ્રીક!</p>\n    <ul style='margin:5px 0 0 0; font-size:14px; color:#78350f; padding-left:20px; line-height:1.8;'>\n        <li><b>નિયમ 1:</b> જ્યારે છેદમાં કોઈ અવિભાજ્ય સંખ્યા (Prime Number) 'p' હોય, ત્યારે પુનરાવર્તિત અંકો મહત્તમ (p - 1) જ હોય. (અહીં 17 - 1 = 16)</li>\n        <li><b>સુપર જાદુ (Midy's Theorem):</b> જવાબના જે 16 અંકો આવ્યા છે, તેના બે સરખા ભાગ કરો (8 અંકો અને 8 અંકો).<br>\n        પ્રથમ ભાગ: <b>05882352</b><br>\n        બીજો ભાગ: <b>94117647</b><br>\n        હવે આ બંનેનો સરવાળો કરી જુઓ:<br>\n        <div style='font-family:monospace; margin-top:5px; margin-bottom:5px; background-color:#fde68a; display:inline-block; padding:5px 10px; border-radius:5px;'>\n        &nbsp;&nbsp;05882352<br>\n        + 94117647<br>\n        ----------<br>\n        &nbsp;&nbsp;99999999\n        </div><br>\n        જોયું? <b>બધા જ અંકોનો સરવાળો 9 થાય છે!</b> એટલે કે જો તમે અડધો ભાગાકાર (8 અંકો સુધી) સાચો કરો, તો બાકીના 8 અંકો શોધવા માટે ભાગાકાર કરવાની જરૂર નથી, માત્ર આગળના અંકોને 9 માંથી બાદ કરી દો! છે ને કમાલ! 🚀</li>\n    </ul>\n</div>"
},
            
       { 
  "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 6",
  "marks": 2,
  "question": "p અને q (q ≠ 0) ને 1 સિવાય કોઈ સામાન્ય અવયવ ન હોય તથા જેની દશાંશ અભિવ્યક્તિ શાંત હોય તેવા p/q સ્વરૂપના સંમેય સંખ્યાઓના કેટલાક ઉદાહરણ લો. શું તમે અનુમાન લગાવી શકો છો કે q એ કયા ગુણધર્મનું પાલન કરવું જોઈએ?", 
  "answer": "<div style='display:flex; flex-direction:column; gap:15px;'>\n    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>\n        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>શાંત દશાંશ અભિવ્યક્તિ ધરાવતા p/q ના ઉદાહરણો:</h4>\n        <p style='margin:0 0 10px 0; font-size:14px; color:#64748b;'>અહીં આપણે એવા અપૂર્ણાંકો લઈશું જેમાં અંશ અને છેદ વચ્ચે 1 સિવાય કોઈ સામાન્ય અવયવ ન હોય અને તેમનો ભાગાકાર શાંત (પૂર્ણ) થઈ જતો હોય.</p>\n        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0;'>\n            <ul style='margin:0; font-size:15px; color:#334155; line-height:1.8;'>\n                <li><b>1/2</b> = 0.5 <span style='color:#059669;'>(અહીં છેદ q = 2 છે)</span></li>\n                <li><b>3/4</b> = 0.75 <span style='color:#059669;'>(અહીં છેદ q = 4 = 2 &times; 2)</span></li>\n                <li><b>4/5</b> = 0.8 <span style='color:#059669;'>(અહીં છેદ q = 5 છે)</span></li>\n                <li><b>7/8</b> = 0.875 <span style='color:#059669;'>(અહીં છેદ q = 8 = 2 &times; 2 &times; 2)</span></li>\n                <li><b>11/10</b> = 1.1 <span style='color:#059669;'>(અહીં છેદ q = 10 = 2 &times; 5)</span></li>\n                <li><b>9/20</b> = 0.45 <span style='color:#059669;'>(અહીં છેદ q = 20 = 2 &times; 2 &times; 5)</span></li>\n            </ul>\n        </div>\n    </div>\n\n    <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>\n        <h4 style='color:#14532d; margin:0 0 10px 0;'>અનુમાન (q નો ગુણધર્મ):</h4>\n        <p style='margin:0; font-size:15px; color:#166534; line-height:1.6;'>\n            ઉપરના ઉદાહરણો પરથી આપણે સ્પષ્ટ જોઈ શકીએ છીએ કે જ્યારે છેદ (q) ના અવિભાજ્ય અવયવો માત્ર <b>2</b> હોય, માત્ર <b>5</b> હોય અથવા <b>2 અને 5 બંને</b> હોય, ત્યારે જ દશાંશ અભિવ્યક્તિ શાંત મળે છે.<br><br>\n            <b>ગાણિતિક સ્વરૂપમાં:</b> q ના અવિભાજ્ય અવયવીકરણમાં માત્ર 2, 5 અથવા બંને હોવા જોઈએ. એટલે કે છેદ <b>q = 2<sup>m</sup> &times; 5<sup>n</sup></b> ના સ્વરૂપમાં હોવો જોઈએ, જ્યાં m અને n એ અનૃણ પૂર્ણાંકો (શૂન્ય અથવા ધન પૂર્ણાંકો) છે.\n        </p>\n    </div>\n</div>\n\n<div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>\n    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (2 અને 5 ની મિત્રતા):</b> \n    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>હેતુલક્ષી પ્રશ્નોમાં શાંત દશાંશ છે કે નહિ તે માત્ર 1 સેકન્ડમાં ઓળખો!</p>\n    <ul style='margin:5px 0 0 0; font-size:14px; color:#78350f; padding-left:20px; line-height:1.8;'>\n        <li>ગણિતમાં માત્ર <b>2 અને 5</b> જ એવા \"શાંત\" અંકો છે જે ભાગાકારને પૂરો કરી શકે છે (શાંત કરી શકે છે).</li>\n        <li>તમારે માત્ર છેદ (નીચેની સંખ્યા) ના અવયવ પાડવાના છે. જો તેમાં 2 અને 5 સિવાયનો કોઈ પણ બીજો અંક (જેમ કે 3, 7, 11) \"ઘૂસણખોરી\" કરે, તો સમજી લેવું કે એ દશાંશ ક્યારેય શાંત નહિ થાય (તે અનંત આવૃત બની જશે)!</li>\n        <li><b>દા.ત. 17/15</b> &rarr; છેદ 15 = 3 &times; 5 (અહીં 3 આવી ગયો, એટલે આ શાંત <b>નથી</b>).</li>\n        <li><b>દા.ત. 13/40</b> &rarr; છેદ 40 = 2 &times; 2 &times; 2 &times; 5 (અહીં ફક્ત 2 અને 5 જ છે, બીજું કોઈ નથી, એટલે આ <b>શાંત</b> છે).</li>\n    </ul>\n</div>"
       },
            { 
  "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 7",
  "marks": 2,
  "question": "જેની દશાંશ અભિવ્યક્તિ અનંત અનાવૃત હોય તેવી ત્રણ સંખ્યાઓ લખો.", 
  "answer": "<div style='display:flex; flex-direction:column; gap:15px;'>\n    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>\n        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>અનંત અનાવૃત દશાંશ અભિવ્યક્તિ ધરાવતી 3 સંખ્યાઓ:</h4>\n        <p style='margin:0 0 10px 0; font-size:14px; color:#64748b;'>અનંત અનાવૃત (Non-terminating Non-recurring) દશાંશ અભિવ્યક્તિ એટલે એવી સંખ્યાઓ જે ક્યારેય પૂરી થતી નથી (અનંત) અને તેમાં કોઈ ચોક્કસ અંકોના સમૂહનું પુનરાવર્તન પણ થતું નથી. આ બધી <b>અસંમેય સંખ્યાઓ</b> છે.</p>\n        <div style='background-color:#f1f5f9; padding:15px; border-radius:5px; border-left:4px solid #3b82f6;'>\n            <ol style='margin:0; font-size:16px; color:#334155; line-height:2; font-family:monospace; font-weight:bold;'>\n                <li>0.01001000100001...</li>\n                <li>0.202002000200002...</li>\n                <li>0.150150015000150000...</li>\n            </ol>\n        </div>\n    </div>\n    <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border:1px solid #bbf7d0;'>\n        <p style='margin:0; font-size:15px; color:#166534;'>અન્ય જાણીતા ઉદાહરણોમાં <b>&radic;2</b> (1.41421356...), <b>&radic;3</b> (1.73205081...), અને <b>&pi; (પાઈ)</b> (3.14159265...) નો પણ સમાવેશ થાય છે.</p>\n    </div>\n</div>\n\n<div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>\n    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> \n    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>પરીક્ષામાં આવી સંખ્યાઓ જાતે જ બનાવવી હોય તો આ સૌથી સહેલી ટ્રીક છે:</p>\n    <ul style='margin:5px 0 0 0; font-size:14px; color:#78350f; padding-left:20px; line-height:1.8;'>\n        <li><b>0.</b> પછી તમારો મનપસંદ કોઈ પણ એક અંક લખો (દા.ત. 7).</li>\n        <li>પછી એક વાર 0 મૂકો (0.70).</li>\n        <li>ફરીથી એ જ અંક લખો અને બે વાર 0 મૂકો (0.70700).</li>\n        <li>ફરીથી એ જ અંક અને ત્રણ વાર 0 મૂકો (0.707007000).</li>\n        <li>બસ આ જ રીતે આગળ વધારતા જાવ અને છેલ્લે ત્રણ ટપકા (...) કરવાનું ભૂલતા નહિ! તૈયાર છે તમારી અનંત અનાવૃત સંખ્યા!</li>\n        <li><b>બીજી ટ્રીક:</b> જેનું પૂર્ણ વર્ગમૂળ ન નીકળતું હોય તેવી સંખ્યાને ટોપી (વર્ગમૂળ) પહેરાવી દો, જેમ કે &radic;5, &radic;6, &radic;7. આ બધી જ અનંત અનાવૃત કહેવાય!</li>\n    </ul>\n</div>"
            },
            { 
  "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 8",
  "marks": 3,
  "question": "સંમેય સંખ્યાઓ 5/7 અને 9/11 ની વચ્ચે આવેલી ત્રણ ભિન્ન અસંમેય સંખ્યાઓ શોધો.", 
  "answer": "<div style='display:flex; flex-direction:column; gap:15px;'>\n    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>\n        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>પગલું 1: આપેલી સંખ્યાઓને દશાંશ સ્વરૂપમાં ફેરવવી</h4>\n        <p style='margin:0 0 10px 0; font-size:14px; color:#64748b;'>સૌપ્રથમ આપણે 5/7 અને 9/11 ની અંદાજિત કિંમત જાણવી પડશે, જેથી તેમની વચ્ચેની સંખ્યાઓ શોધી શકાય.</p>\n        \n        <div style='display:flex; flex-direction:column; gap:10px;'>\n            <div style='background-color:#f1f5f9; padding:12px; border-radius:5px; border-left:4px solid #3b82f6;'>\n                <b style='color:#1e40af;'>5/7 માટે:</b><br>\n                5 નો 7 વડે ભાગાકાર કરતા,<br>\n                <span style='font-size:16px; font-weight:bold; color:#0f172a;'>5/7 = 0.71428571... = 0.<span style='text-decoration:overline;'>714285</span></span>\n            </div>\n            \n            <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border-left:4px solid #16a34a;'>\n                <b style='color:#14532d;'>9/11 માટે:</b><br>\n                9 નો 11 વડે ભાગાકાર કરતા,<br>\n                <span style='font-size:16px; font-weight:bold; color:#0f172a;'>9/11 = 0.818181... = 0.<span style='text-decoration:overline;'>81</span></span>\n            </div>\n        </div>\n    </div>\n\n    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>\n        <h4 style='color:#be123c; margin:0 0 10px 0;'>પગલું 2: વચ્ચેની ત્રણ અસંમેય સંખ્યાઓ લખવી</h4>\n        <p style='margin:0 0 10px 0; font-size:14px; color:#64748b;'>હવે આપણે <b>0.71</b> અને <b>0.81</b> ની વચ્ચે આવતી કોઈપણ ત્રણ અસંમેય (અનંત અનાવૃત) સંખ્યાઓ લખવાની છે.</p>\n        <div style='background-color:#fff1f2; padding:15px; border-radius:5px; border-left:4px solid #e11d48;'>\n            <p style='margin:0 0 10px 0; color:#881337; font-weight:bold;'>જવાબ (કોઈપણ ત્રણ લખી શકાય):</p>\n            <ol style='margin:0; font-size:16px; color:#4c0519; line-height:2; font-family:monospace; font-weight:bold;'>\n                <li>0.720720072000720000...</li>\n                <li>0.750750075000750000...</li>\n                <li>0.801800180001800001...</li>\n            </ol>\n        </div>\n    </div>\n</div>\n\n<div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>\n    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> \n    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>બે સંખ્યાઓ વચ્ચે અસંમેય સંખ્યાઓ શોધવી એ રમત વાત છે!</p>\n    <ul style='margin:5px 0 0 0; font-size:14px; color:#78350f; padding-left:20px; line-height:1.8;'>\n        <li><b>સ્ટેપ 1:</b> બંને અપૂર્ણાંકોનો માત્ર શરૂઆતનો ભાગાકાર કરો (પોઈન્ટ પછીના બે અંકો જ પૂરતા છે). જેમ કે અહી 0.71 અને 0.81 મળ્યા.</li>\n        <li><b>સ્ટેપ 2:</b> હવે 71 અને 81 ની વચ્ચે આવતો કોઈપણ નંબર ધારી લો (દા.ત. 72, 73, 75, 79).</li>\n        <li><b>સ્ટેપ 3:</b> પ્રશ્ન 7 વાળી ટ્રીક લગાવો! 0. પછી તમારો ધારેલો નંબર લખો, પછી એક 0, પછી ફરી એ જ નંબર, પછી બે 00... અને અંતે ટપકાં (...) મૂકી દો.</li>\n        <li>ગોખવાની કોઈ જ જરૂર નથી, તમે તમારી જાતે આવી હજારો સંખ્યાઓ બનાવી શકો છો!</li>\n    </ul>\n</div>"
            },
            
            { 
  "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 9",
  "marks": 3,
  "question": "નીચે આપેલી સંખ્યાઓનું સંમેય અને અસંમેય સંખ્યાઓમાં વર્ગીકરણ કરો:\n(i) √23\n(ii) √225\n(iii) 0.3796\n(iv) 7.478478...\n(v) 1.101001000100001...", 
  "answer": "<div style='display:flex; flex-direction:column; gap:15px;'>\n    \n    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>\n        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>વિગતવાર વર્ગીકરણ અને સમજૂતી:</h4>\n        \n        <div style='display:flex; flex-direction:column; gap:10px;'>\n            \n            \n            <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border-left:4px solid #e11d48;'>\n                <b style='color:#be123c; font-size:16px;'>(i) &radic;23</b>\n                <p style='margin:5px 0 0 0; font-size:15px; color:#881337;'>અહીં 23 એ પૂર્ણવર્ગ સંખ્યા નથી (કોઈપણ પૂર્ણાંકનો વર્ગ 23 થતો નથી). તેથી તેનું વર્ગમૂળ કાઢી શકાય નહિ.<br>\n                <b>નિષ્કર્ષ:</b> આ <b style='background-color:#fecdd3; padding:2px 5px; border-radius:3px;'>અસંમેય સંખ્યા</b> છે.</p>\n            </div>\n\n            \n            <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border-left:4px solid #16a34a;'>\n                <b style='color:#14532d; font-size:16px;'>(ii) &radic;225</b>\n                <p style='margin:5px 0 0 0; font-size:15px; color:#166534;'>225 એ પૂર્ણવર્ગ સંખ્યા છે. (15 &times; 15 = 225). તેથી, &radic;225 = 15. <br>\n                અહીં 15 ને p/q સ્વરૂપમાં (15/1) લખી શકાય છે.<br>\n                <b>નિષ્કર્ષ:</b> આ <b style='background-color:#bbf7d0; padding:2px 5px; border-radius:3px;'>સંમેય સંખ્યા</b> છે.</p>\n            </div>\n\n            \n            <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border-left:4px solid #16a34a;'>\n                <b style='color:#14532d; font-size:16px;'>(iii) 0.3796</b>\n                <p style='margin:5px 0 0 0; font-size:15px; color:#166534;'>આ એક <b>શાંત દશાંશ અભિવ્યક્તિ</b> છે (દશાંશ પછી અંકો પૂરા થઈ જાય છે). તેને 3796/10000 સ્વરૂપમાં લખી શકાય.<br>\n                <b>નિષ્કર્ષ:</b> આ <b style='background-color:#bbf7d0; padding:2px 5px; border-radius:3px;'>સંમેય સંખ્યા</b> છે.</p>\n            </div>\n\n            \n            <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border-left:4px solid #16a34a;'>\n                <b style='color:#14532d; font-size:16px;'>(iv) 7.478478...</b>\n                <p style='margin:5px 0 0 0; font-size:15px; color:#166534;'>આ સંખ્યામાં '478' અંકોનું વારંવાર પુનરાવર્તન થાય છે. એટલે કે આ <b>અનંત આવૃત દશાંશ અભિવ્યક્તિ</b> (7.<span style='text-decoration:overline;'>478</span>) છે.<br>\n                <b>નિષ્કર્ષ:</b> આ <b style='background-color:#bbf7d0; padding:2px 5px; border-radius:3px;'>સંમેય સંખ્યા</b> છે.</p>\n            </div>\n\n            \n            <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border-left:4px solid #e11d48;'>\n                <b style='color:#be123c; font-size:16px;'>(v) 1.101001000100001...</b>\n                <p style='margin:5px 0 0 0; font-size:15px; color:#881337;'>અહીં અંકો ક્યારેય પૂરા થતા નથી અને કોઈ ચોક્કસ સમૂહનું પુનરાવર્તન પણ થતું નથી. આ <b>અનંત અનાવૃત દશાંશ અભિવ્યક્તિ</b> છે.<br>\n                <b>નિષ્કર્ષ:</b> આ <b style='background-color:#fecdd3; padding:2px 5px; border-radius:3px;'>અસંમેય સંખ્યા</b> છે.</p>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>\n    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (ચપટીમાં ઓળખો):</b> \n    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>પરીક્ષામાં વર્ગીકરણ માટે આ ત્રણ ગોલ્ડન રૂલ યાદ રાખો:</p>\n    <ul style='margin:5px 0 0 0; font-size:14px; color:#78350f; padding-left:20px; line-height:1.8;'>\n        <li><b>રૂલ 1 (ટોપી વાળા):</b> જેની પર વર્ગમૂળ (&radic;) ની નિશાની હોય અને તે કોઈનો વર્ગ ન હોય (જેમ કે &radic;2, &radic;3, &radic;5, &radic;23) તો એ આંખો બંધ કરીને <b>અસંમેય</b> જ લખી દેવું! (જો &radic;4, &radic;9, &radic;25 હોય તો પાછા સંમેય થઈ જાય હો!)</li>\n        <li><b>રૂલ 2 (ટપકાં વાળા):</b> પાછળ <b>...</b> આવતું હોય અને કોઈ પેટર્ન ન બનતી હોય (જેમ કે 0.101001000...) તો તે હંમેશા <b>અસંમેય</b>!</li>\n        <li><b>રૂલ 3 (બાકીના બધા):</b> આ બે સિવાયની કોઈ પણ સંખ્યા દેખાય... જેમ કે સાદો અપૂર્ણાંક (2/3), પોઈન્ટ વાળી સાદી સંખ્યા (1.25), કે પછી એક જ અંક વારંવાર રિપીટ થતો હોય (0.333... કે 0.<span style='text-decoration:overline;'>4</span>) તો તે હંમેશા <b>સંમેય</b> જ હોય!</li>\n    </ul>\n</div>"
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
    },
                
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 2: બહુપદીઓ (સ્વાધ્યાય)
    // ------------------------------------
    "2": {
        "chapterName": "પ્રકરણ 2",
        "chapterTitle": "બહુપદીઓ (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 2.1 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નીચે આપેલી અભિવ્યક્તિઓ પૈકી કઈ બહુપદી એક ચલવાળી છે અને કઈ નથી? તમારા જવાબ માટે કારણ આપો.\n(i) 4x² - 3x + 7\n(ii) y² + √2\n(iii) 3√t + t√2\n(iv) y + 2/y\n(v) x¹⁰ + y³ + t⁵⁰", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>નિયમ: જો અભિવ્યક્તિમાં માત્ર એક જ પ્રકારનો અક્ષર (ચલ) હોય અને તેની ઘાત હંમેશા 'પૂર્ણ સંખ્યા' (0, 1, 2, 3...) હોય, તો જ તેને એક ચલવાળી બહુપદી કહેવાય.</p>
                    
                    <div style='overflow-x:auto;'>
                        <div style='display:flex; flex-direction:column; gap:10px; min-width:300px;'>
                            <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <h4 style='color:#14532d; margin:0 0 5px 0;'>(i) 4x<sup>2</sup> - 3x + 7</h4>
                                <p style='margin:0; font-size:14px; color:#166534;'><b>હા</b>, આ એક ચલવાળી બહુપદી છે. કારણ કે તેમાં માત્ર એક જ ચલ '$x$' છે અને તેની તમામ ઘાત (2 અને 1) પૂર્ણ સંખ્યાઓ છે.</p>
                            </div>

                            <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <h4 style='color:#14532d; margin:0 0 5px 0;'>(ii) y<sup>2</sup> + &radic;2</h4>
                                <p style='margin:0; font-size:14px; color:#166534;'><b>હા</b>, આ એક ચલવાળી બહુપદી છે. ચલ '$y$' ની ઘાત 2 છે જે પૂર્ણ સંખ્યા છે. (અચળ પદ &radic;2 હોય તેનાથી કોઈ ફરક પડતો નથી).</p>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(iii) 3&radic;t + t&radic;2</h4>
                                <p style='margin:0; font-size:14px; color:#be123c;'><b>ના</b>, આ બહુપદી નથી. કારણ કે &radic;t એટલે t ની 1/2 ઘાત. અહીં ઘાત 1/2 એ પૂર્ણ સંખ્યા નથી.</p>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) y + <div style='display:inline-block; vertical-align:middle; text-align:center;'><div style='border-bottom:1px solid #be123c; padding:0 2px;'>2</div><div>y</div></div></h4>
                                <p style='margin:0; font-size:14px; color:#be123c;'><b>ના</b>, આ બહુપદી નથી. કારણ કે છેદમાં રહેલા y ને અંશમાં લાવતા તેની ઘાત -1 (ઋણ) થઈ જાય છે, જે પૂર્ણ સંખ્યા નથી.</p>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(v) x<sup>10</sup> + y<sup>3</sup> + t<sup>50</sup></h4>
                                <p style='margin:0; font-size:14px; color:#be123c;'><b>ના</b>, આ 'એક ચલવાળી' બહુપદી નથી. આ બહુપદી છે, પરંતુ તેમાં ત્રણ અલગ અલગ ચલ (x, y, અને t) આવેલા છે.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>કોઈપણ પદાવલિને જોતાં જ ઓળખી જાવ કે તે બહુપદી છે કે નહિ! બસ આ 3 વસ્તુ ચકાસો:<br>
                    1️⃣ ચલ (x કે y) ક્યારેય <b>છેદમાં</b> ન હોવો જોઈએ.<br>
                    2️⃣ ચલ ક્યારેય <b>વર્ગમૂળ (કે ઘનમૂળ)</b> માં ન હોવો જોઈએ.<br>
                    3️⃣ ચલની ઘાત ક્યારેય <b>માઇનસ (-)</b> કે <b>અપૂર્ણાંક</b> ન હોવી જોઈએ.<br>
                    જો આ ત્રણેય વસ્તુ પાસ થાય, તો તે બહુપદી કહેવાય!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.1 - પ્રશ્ન 2",
                "marks": 2,
                "question": "નીચેનામાં x² નો સહગુણક લખો:\n(i) 2 + x² + x\n(ii) 2 - x² + x³\n(iii) (π/2)x² + x\n(iv) √2x - 1", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:14px;'>સમજૂતી આકૃતિ (બહુપદીના અંગો):</p>
                        <svg width="250" height="100" xmlns="http://www.w3.org/2000/svg">
                            <text x="60" y="60" fill="#be123c" font-size="24" font-weight="bold">- 5</text>
                            <text x="100" y="60" fill="#1e3a8a" font-size="24" font-weight="bold">x</text>
                            <text x="115" y="45" fill="#047857" font-size="16" font-weight="bold">2</text>
                            
                            <line x1="75" y1="65" x2="75" y2="85" stroke="#be123c" stroke-width="2"/>
                            <text x="50" y="98" fill="#be123c" font-size="12" font-weight="bold">સહગુણક</text>
                            
                            <line x1="105" y1="65" x2="105" y2="85" stroke="#1e3a8a" stroke-width="2"/>
                            <text x="95" y="98" fill="#1e3a8a" font-size="12" font-weight="bold">ચલ</text>
                            
                            <line x1="120" y1="30" x2="120" y2="15" stroke="#047857" stroke-width="2"/>
                            <text x="105" y="10" fill="#047857" font-size="12" font-weight="bold">ઘાતાંક</text>
                        </svg>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:10px;'>
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:15px;'>(i) 2 + <b>x<sup>2</sup></b> + x</h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>અહીં x<sup>2</sup> ની આગળ કોઈ સંખ્યા નથી, એટલે 1 ગણાય. તેથી x<sup>2</sup> નો સહગુણક = <b style='color:#16a34a; font-size:18px;'>1</b></p>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:15px;'>(ii) 2 <b>- x<sup>2</sup></b> + x<sup>3</sup></h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>અહીં x<sup>2</sup> ની આગળ માઇનસ (-) ની નિશાની છે. તેથી x<sup>2</sup> નો સહગુણક = <b style='color:#be123c; font-size:18px;'>-1</b></p>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:15px;'>(iii) <b>(&pi;/2)x<sup>2</sup></b> + x</h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>અહીં x<sup>2</sup> ની સાથે ગુણાકારમાં &pi;/2 છે. તેથી x<sup>2</sup> નો સહગુણક = <b style='color:#1e3a8a; font-size:18px;'>&pi;/2</b></p>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:15px;'>(iv) &radic;2x - 1</h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>અહીં x<sup>2</sup> વાળું પદ <b>આપેલું જ નથી</b>. તેથી x<sup>2</sup> નો સહગુણક = <b style='color:#ea580c; font-size:18px;'>0</b></p>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>જેનો પણ સહગુણક પૂછ્યો હોય (દા.ત. x<sup>2</sup>), તેની પર આંગળી મૂકી દો! હવે તેની <b>બરાબર આગળ</b> (ડાબી બાજુ) નિશાની સહિત જે દેખાય તે તમારો જવાબ. અને જો તે પદ હોય જ નહિ, તો સીધો ઝીરો (0) મૂકી દેવો!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.1 - પ્રશ્ન 3",
                "marks": 2,
                "question": "35 ઘાતવાળી દ્વિપદીનું કોઈ પણ એક ઉદાહરણ અને 100 ઘાતવાળી એકપદીનું કોઈ પણ એક ઉદાહરણ આપો.", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 8px 0; font-size:16px;'>(1) 35 ઘાતવાળી દ્વિપદી:</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'><b>સમજૂતી:</b> દ્વિપદી એટલે જેમાં બે પદ હોય (વત્તા કે ઓછાથી જોડાયેલા). અને મોટી ઘાત 35 હોવી જોઈએ.</p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-size:18px;'>
                            <b>ઉદાહરણ:</b> <span style='color:#1d4ed8;'>3x<sup>35</sup> - 4</span><br>
                            <span style='font-size:14px; color:#64748b;'>(અન્ય ઉદાહરણ: y<sup>35</sup> + 10, 5t<sup>35</sup> - t<sup>2</sup> વગેરે લખી શકાય.)</span>
                        </div>
                    </div>

                    <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                        <h4 style='color:#14532d; margin:0 0 8px 0; font-size:16px;'>(2) 100 ઘાતવાળી એકપદી:</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'><b>સમજૂતી:</b> એકપદી એટલે જેમાં માત્ર એક જ પદ હોય. અને તેની ઘાત 100 હોવી જોઈએ.</p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bbf7d0; font-size:18px;'>
                            <b>ઉદાહરણ:</b> <span style='color:#15803d;'>&radic;2y<sup>100</sup></span><br>
                            <span style='font-size:14px; color:#64748b;'>(અન્ય ઉદાહરણ: 5x<sup>100</sup>, -t<sup>100</sup> વગેરે લખી શકાય.)</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.1 - પ્રશ્ન 4",
                "marks": 2,
                "question": "નીચે આપેલી બહુપદીઓની ઘાત જણાવો:\n(i) 5x³ + 4x² + 7x\n(ii) 4 - y²\n(iii) 5t - √7\n(iv) 3", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:10px;'>
                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0; font-size:15px;'>(i) 5x<sup>3</sup> + 4x<sup>2</sup> + 7x</h4>
                            <p style='margin:0; font-size:15px; color:#3f3f46;'>અહીં ચલ x ની સૌથી મોટી ઘાત 3 છે. તેથી બહુપદીની ઘાત = <b style='color:#1e3a8a; font-size:18px;'>3</b></p>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0; font-size:15px;'>(ii) 4 - y<sup>2</sup></h4>
                            <p style='margin:0; font-size:15px; color:#3f3f46;'>અહીં ચલ y ની સૌથી મોટી ઘાત 2 છે. તેથી બહુપદીની ઘાત = <b style='color:#1e3a8a; font-size:18px;'>2</b></p>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0; font-size:15px;'>(iii) 5t - &radic;7</h4>
                            <p style='margin:0; font-size:15px; color:#3f3f46;'>અહીં ચલ t ની ઉપર કોઈ ઘાત નથી દેખાતી, એટલે 1 હોય. તેથી બહુપદીની ઘાત = <b style='color:#1e3a8a; font-size:18px;'>1</b></p>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0; font-size:15px;'>(iv) 3</h4>
                            <p style='margin:0; font-size:15px; color:#3f3f46;'>અહીં કોઈ ચલ જ નથી (આ અચળ પદ છે). તેથી અચળ બહુપદીની ઘાત = <b style='color:#be123c; font-size:18px;'>0</b></p>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>બહુપદીની ઘાત એટલે <b>"ક્લાસનો ડોન (Don)"</b>! આખી રકમમાં ચલના માથા પર જે આંકડો <b>સૌથી મોટો</b> દેખાય, એ જ આખી બહુપદીની ઘાત. અને જો ચલ હોય જ નહિ માત્ર આંકડો હોય, તો તેની ઘાત હંમેશા <b>ઝીરો (0)</b> લખી દેવી.</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.1 - પ્રશ્ન 5",
                "marks": 3,
                "question": "નીચે આપેલી બહુપદીઓને સુરેખ, દ્વિઘાત કે ત્રિઘાત બહુપદીમાં વર્ગીકૃત કરો:\n(i) x² + x  (ii) x - x³  (iii) y + y² + 4  (iv) 1 + x  (v) 3t  (vi) r²  (vii) 7x³", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='overflow-x:auto;'>
                        <table style='width:100%; min-width:400px; border-collapse:collapse; text-align:left; font-size:15px;'>
                            <thead>
                                <tr style='background-color:#1e3a8a; color:#ffffff;'>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>ક્રમ</th>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>બહુપદી</th>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>મહત્તમ ઘાત</th>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>બહુપદીનો પ્રકાર</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(i)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>x<sup>2</sup> + x</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#16a34a; font-weight:bold;'>દ્વિઘાત બહુપદી</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(ii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>x - x<sup>3</sup></td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>3</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>ત્રિઘાત બહુપદી</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(iii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>y + y<sup>2</sup> + 4</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#16a34a; font-weight:bold;'>દ્વિઘાત બહુપદી</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(iv)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>1 + x</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>1</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#0284c7; font-weight:bold;'>સુરેખ બહુપદી</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(v)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>3t</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>1</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#0284c7; font-weight:bold;'>સુરેખ બહુપદી</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(vi)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>r<sup>2</sup></td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#16a34a; font-weight:bold;'>દ્વિઘાત બહુપદી</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(vii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>7x<sup>3</sup></td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>3</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>ત્રિઘાત બહુપદી</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>બહુપદીના પ્રકાર ઓળખવા માટે માત્ર તેની <b>સૌથી મોટી ઘાત</b> જ જોવાની, પદોની સંખ્યા નહિ!<br>
                    &bull; જો <b>1 ઘાત</b> હોય (કે કોઈ ઘાત ન દેખાય) &rarr; સુરેખ<br>
                    &bull; જો <b>2 ઘાત</b> હોય &rarr; દ્વિઘાત<br>
                    &bull; જો <b>3 ઘાત</b> હોય &rarr; ત્રિઘાત</p>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 2.2 - પ્રશ્ન 1",
                "marks": 3,
                "question": "x ની નીચેની કિંમતો માટે 5x - 4x² + 3 બહુપદીનું મૂલ્ય શોધો:\n(i) x = 0\n(ii) x = -1\n(iii) x = 2", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>સમજૂતી: બહુપદી p(x) = 5x - 4x<sup>2</sup> + 3 માં જ્યાં પણ 'x' દેખાય, ત્યાં આપેલી કિંમત મૂકવાની છે.</p>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg width="280" height="120" xmlns="http://www.w3.org/2000/svg">
                            <rect x="10" y="40" width="40" height="40" rx="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            <text x="30" y="65" fill="#0284c7" font-size="16" font-weight="bold" text-anchor="middle">x</text>
                            
                            <line x1="50" y1="60" x2="80" y2="60" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)"/>
                            
                            <rect x="80" y="20" width="120" height="80" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            <text x="140" y="55" fill="#14532d" font-size="14" font-weight="bold" text-anchor="middle">p(x) મશીન</text>
                            <text x="140" y="80" fill="#166534" font-size="12" font-weight="bold" text-anchor="middle">5x - 4x&sup2; + 3</text>
                            
                            <line x1="200" y1="60" x2="230" y2="60" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)"/>
                            
                            <rect x="230" y="40" width="40" height="40" rx="5" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
                            <text x="250" y="65" fill="#ea580c" font-size="16" font-weight="bold" text-anchor="middle">જવાબ</text>
                            
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                    <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:12px;'>
                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0; font-size:15px;'>(i) x = 0 મૂકતાં:</h4>
                            <div style='background-color:#ffffff; padding:8px; border-radius:5px; border:1px solid #bae6fd; font-size:15px; line-height:1.6;'>
                                p(0) = 5(0) - 4(0)<sup>2</sup> + 3<br>
                                p(0) = 0 - 4(0) + 3<br>
                                <b>p(0) = <span style='color:#0284c7; font-size:18px;'>3</span></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#881337; margin:0 0 8px 0; font-size:15px;'>(ii) x = -1 મૂકતાં:</h4>
                            <div style='background-color:#ffffff; padding:8px; border-radius:5px; border:1px solid #fecdd3; font-size:15px; line-height:1.6;'>
                                p(-1) = 5(-1) - 4(-1)<sup>2</sup> + 3<br>
                                <span style='color:#64748b; font-size:13px;'>(નોંધ: માઇનસ સંખ્યાનો વર્ગ હંમેશા પ્લસ થાય, એટલે (-1)<sup>2</sup> = 1)</span><br>
                                p(-1) = -5 - 4(1) + 3<br>
                                p(-1) = -5 - 4 + 3<br>
                                p(-1) = -9 + 3<br>
                                <b>p(-1) = <span style='color:#be123c; font-size:18px;'>-6</span></b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#14532d; margin:0 0 8px 0; font-size:15px;'>(iii) x = 2 મૂકતાં:</h4>
                            <div style='background-color:#ffffff; padding:8px; border-radius:5px; border:1px solid #bbf7d0; font-size:15px; line-height:1.6;'>
                                p(2) = 5(2) - 4(2)<sup>2</sup> + 3<br>
                                p(2) = 10 - 4(4) + 3<br>
                                p(2) = 10 - 16 + 3<br>
                                p(2) = 13 - 16<br>
                                <b>p(2) = <span style='color:#16a34a; font-size:18px;'>-3</span></b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.2 - પ્રશ્ન 2",
                "marks": 4,
                "question": "નીચે આપેલ દરેક બહુપદી માટે p(0), p(1) અને p(2) શોધો:\n(i) p(y) = y² - y + 1\n(ii) p(t) = 2 + t + 2t² - t³\n(iii) p(x) = x³\n(iv) p(x) = (x - 1)(x + 1)", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:12px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(i) p(y) = y<sup>2</sup> - y + 1</h4>
                        <div style='display:flex; flex-wrap:wrap; gap:10px; font-size:14px;'>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #0284c7;'>
                                <b>y = 0 મૂકતાં:</b><br>
                                p(0) = (0)<sup>2</sup> - 0 + 1<br>
                                <b>p(0) = 1</b>
                            </div>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #16a34a;'>
                                <b>y = 1 મૂકતાં:</b><br>
                                p(1) = (1)<sup>2</sup> - 1 + 1<br>
                                p(1) = 1 - 1 + 1<br>
                                <b>p(1) = 1</b>
                            </div>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #ea580c;'>
                                <b>y = 2 મૂકતાં:</b><br>
                                p(2) = (2)<sup>2</sup> - 2 + 1<br>
                                p(2) = 4 - 2 + 1<br>
                                <b>p(2) = 3</b>
                            </div>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:12px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(ii) p(t) = 2 + t + 2t<sup>2</sup> - t<sup>3</sup></h4>
                        <div style='display:flex; flex-wrap:wrap; gap:10px; font-size:14px;'>
                            <div style='flex:1; min-width:150px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #0284c7;'>
                                <b>t = 0 મૂકતાં:</b><br>
                                p(0) = 2 + 0 + 0 - 0<br>
                                <b>p(0) = 2</b>
                            </div>
                            <div style='flex:1; min-width:150px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #16a34a;'>
                                <b>t = 1 મૂકતાં:</b><br>
                                p(1) = 2 + 1 + 2(1)<sup>2</sup> - (1)<sup>3</sup><br>
                                p(1) = 3 + 2 - 1<br>
                                <b>p(1) = 4</b>
                            </div>
                            <div style='flex:1; min-width:150px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #ea580c;'>
                                <b>t = 2 મૂકતાં:</b><br>
                                p(2) = 2 + 2 + 2(2)<sup>2</sup> - (2)<sup>3</sup><br>
                                p(2) = 4 + 2(4) - 8<br>
                                p(2) = 4 + 8 - 8<br>
                                <b>p(2) = 4</b>
                            </div>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:12px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(iii) p(x) = x<sup>3</sup></h4>
                        <div style='display:flex; flex-wrap:wrap; gap:10px; font-size:14px;'>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #0284c7;'>
                                p(0) = (0)<sup>3</sup> = <b>0</b>
                            </div>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #16a34a;'>
                                p(1) = (1)<sup>3</sup> = <b>1</b>
                            </div>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #ea580c;'>
                                p(2) = (2)<sup>3</sup> = <b>8</b>
                            </div>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:12px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(iv) p(x) = (x - 1)(x + 1)</h4>
                        <div style='display:flex; flex-wrap:wrap; gap:10px; font-size:14px;'>
                            <div style='flex:1; min-width:120px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #0284c7;'>
                                <b>x = 0 મૂકતાં:</b><br>
                                p(0) = (0 - 1)(0 + 1)<br>
                                p(0) = (-1)(1) = <b>-1</b>
                            </div>
                            <div style='flex:1; min-width:120px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #16a34a;'>
                                <b>x = 1 મૂકતાં:</b><br>
                                p(1) = (1 - 1)(1 + 1)<br>
                                p(1) = (0)(2) = <b>0</b>
                            </div>
                            <div style='flex:1; min-width:120px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #ea580c;'>
                                <b>x = 2 મૂકતાં:</b><br>
                                p(2) = (2 - 1)(2 + 1)<br>
                                p(2) = (1)(3) = <b>3</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.2 - પ્રશ્ન 3",
                "marks": 4,
                "question": "નીચેની બહુપદીની સામે દર્શાવેલ x ની કિંમતો એ આપેલ બહુપદીનાં શૂન્યો છે કે નહિ તે ચકાસો:", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>નિયમ:</b> x ની કિંમત બહુપદીમાં મૂકતાં જો છેલ્લો જવાબ <b>શૂન્ય (0)</b> આવે, તો તે બહુપદીનું શૂન્ય <b>છે</b>. જો શૂન્ય સિવાય કોઈ પણ સંખ્યા આવે, તો તે શૂન્ય <b>નથી</b>.</p>
                    
                    <div style='overflow-x:auto;'>
                        <div style='display:flex; flex-direction:column; gap:10px; min-width:350px;'>
                            
                            <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <b>(i) p(x) = 3x + 1; x = -1/3</b><br>
                                p(-1/3) = 3(-1/3) + 1 = -1 + 1 = 0<br>
                                <span style='color:#16a34a; font-weight:bold;'>જવાબ: હા, શૂન્ય છે.</span>
                            </div>

                            <div style='background-color:#fff1f2; padding:10px; border-left:4px solid #be123c; border-radius:5px;'>
                                <b>(ii) p(x) = 5x - &pi;; x = 4/5</b><br>
                                p(4/5) = 5(4/5) - &pi; = 4 - &pi; (&ne; 0)<br>
                                <span style='color:#be123c; font-weight:bold;'>જવાબ: ના, શૂન્ય નથી.</span>
                            </div>

                            <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <b>(iii) p(x) = x<sup>2</sup> - 1; x = 1, -1</b><br>
                                x = 1 લેતાં: p(1) = (1)<sup>2</sup> - 1 = 1 - 1 = 0 (હા)<br>
                                x = -1 લેતાં: p(-1) = (-1)<sup>2</sup> - 1 = 1 - 1 = 0 (હા)<br>
                                <span style='color:#16a34a; font-weight:bold;'>જવાબ: હા, 1 અને -1 બંને શૂન્ય છે.</span>
                            </div>

                            <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <b>(iv) p(x) = (x + 1)(x - 2); x = -1, 2</b><br>
                                x = -1 લેતાં: p(-1) = (-1 + 1)(-1 - 2) = (0)(-3) = 0 (હા)<br>
                                x = 2 લેતાં: p(2) = (2 + 1)(2 - 2) = (3)(0) = 0 (હા)<br>
                                <span style='color:#16a34a; font-weight:bold;'>જવાબ: હા, બંને શૂન્ય છે.</span>
                            </div>

                            <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <b>(v) p(x) = x<sup>2</sup>; x = 0</b><br>
                                p(0) = (0)<sup>2</sup> = 0<br>
                                <span style='color:#16a34a; font-weight:bold;'>જવાબ: હા, શૂન્ય છે.</span>
                            </div>

                            <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <b>(vi) p(x) = lx + m; x = -m/l</b><br>
                                p(-m/l) = l(-m/l) + m = -m + m = 0<br>
                                <span style='color:#16a34a; font-weight:bold;'>જવાબ: હા, શૂન્ય છે.</span>
                            </div>

                            <div style='background-color:#f8fafc; padding:10px; border-left:4px solid #0284c7; border-radius:5px;'>
                                <b>(vii) p(x) = 3x<sup>2</sup> - 1; x = -1/&radic;3, 2/&radic;3</b><br>
                                x = -1/&radic;3 લેતાં: p(-1/&radic;3) = 3(-1/&radic;3)<sup>2</sup> - 1 = 3(1/3) - 1 = 1 - 1 = 0 <span style='color:#16a34a; font-weight:bold;'>(હા)</span><br>
                                x = 2/&radic;3 લેતાં: p(2/&radic;3) = 3(2/&radic;3)<sup>2</sup> - 1 = 3(4/3) - 1 = 4 - 1 = 3 <span style='color:#be123c; font-weight:bold;'>(ના)</span><br>
                                <span style='color:#0284c7; font-weight:bold;'>જવાબ: -1/&radic;3 શૂન્ય છે, પરંતુ 2/&radic;3 શૂન્ય નથી.</span>
                            </div>

                            <div style='background-color:#fff1f2; padding:10px; border-left:4px solid #be123c; border-radius:5px;'>
                                <b>(viii) p(x) = 2x + 1; x = 1/2</b><br>
                                p(1/2) = 2(1/2) + 1 = 1 + 1 = 2 (&ne; 0)<br>
                                <span style='color:#be123c; font-weight:bold;'>જવાબ: ના, શૂન્ય નથી.</span>
                            </div>
                            
                        </div>
                    </div>
                </div>`
            },
                  { 
                "questionNumber": "સ્વાધ્યાય 2.2 - પ્રશ્ન 4",
                "marks": 3,
                "question": "નીચે આપેલી દરેક બહુપદીનાં શૂન્યો શોધો:", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>બહુપદીનું શૂન્ય શોધવા માટે આપણે હંમેશા p(x) = 0 લઈશું.</p>
                    
                    <div style='display:flex; flex-wrap:wrap; gap:12px;'>
                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(i) p(x) = x + 5</h4>
                            <p style='margin:0; font-size:14px;'>x + 5 = 0<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = -5</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(ii) p(x) = x - 5</h4>
                            <p style='margin:0; font-size:14px;'>x - 5 = 0<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 5</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iii) p(x) = 2x + 5</h4>
                            <p style='margin:0; font-size:14px;'>2x + 5 = 0<br>
                            &there4; 2x = -5<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = -5/2</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iv) p(x) = 3x - 2</h4>
                            <p style='margin:0; font-size:14px;'>3x - 2 = 0<br>
                            &there4; 3x = 2<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 2/3</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(v) p(x) = 3x</h4>
                            <p style='margin:0; font-size:14px;'>3x = 0<br>
                            &there4; x = 0/3<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 0</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(vi) p(x) = ax (a &ne; 0)</h4>
                            <p style='margin:0; font-size:14px;'>ax = 0<br>
                            &there4; x = 0/a<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 0</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(vii) p(x) = cx + d (c &ne; 0)</h4>
                            <p style='margin:0; font-size:14px;'>cx + d = 0<br>
                            &there4; cx = -d<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = -d/c</b></p>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>કોઈપણ <b>સુરેખ બહુપદી (ax + b)</b> નું શૂન્ય ગણતરી કર્યા વગર સીધું જ શોધવું હોય, તો બસ આ 2 સ્ટેપ ફોલો કરો:<br>
                    <b>સ્ટેપ 1:</b> અચળ પદ (b) ની નિશાની બદલી નાખો (પ્લસ હોય તો માઇનસ, માઇનસ હોય તો પ્લસ). આ તમારો <b>અંશ</b> બનશે.<br>
                    <b>સ્ટેપ 2:</b> x ની સાથે જે સંખ્યા ગુણાયેલી હોય (a), તેને છેદમાં મૂકી દો.<br>
                    <b>ઉદાહરણ:</b> 3x - 2 નું શૂન્ય &rarr; -2 નું નિશાન બદલતા +2 થાય, અને 3 છેદમાં જાય. સીધો જવાબ: <b>2/3</b> !</p>
                </div>`
                  },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 2.3 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નક્કી કરો કે નીચે આપેલી બહુપદીઓમાંથી કઈ બહુપદીનો અવયવ (x + 1) છે:\n(i) x³ + x² + x + 1\n(ii) x⁴ + x³ + x² + x + 1\n(iii) x⁴ + 3x³ + 3x² + x + 1\n(iv) x³ - x² - (2 + √2)x + √2", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>અવયવ પ્રમેય મુજબ:</b> જો (x + 1) એ આપેલ બહુપદી p(x) નો અવયવ હોય, તો <b>x = -1</b> મૂકવાથી p(-1) નો જવાબ <b>શૂન્ય (0)</b> આવવો જોઈએ.</p>
                    
                    <div style='overflow-x:auto;'>
                        <div style='display:flex; flex-direction:column; gap:12px; min-width:350px;'>
                            <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <h4 style='color:#14532d; margin:0 0 5px 0;'>(i) p(x) = x<sup>3</sup> + x<sup>2</sup> + x + 1</h4>
                                <div style='font-size:14px; color:#166534;'>
                                    p(-1) = (-1)<sup>3</sup> + (-1)<sup>2</sup> + (-1) + 1<br>
                                    p(-1) = -1 + 1 - 1 + 1<br>
                                    p(-1) = 0<br>
                                    <b style='font-size:15px;'>&there4; (x + 1) એ આ બહુપદીનો અવયવ છે.</b>
                                </div>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(ii) p(x) = x<sup>4</sup> + x<sup>3</sup> + x<sup>2</sup> + x + 1</h4>
                                <div style='font-size:14px; color:#9f1239;'>
                                    p(-1) = (-1)<sup>4</sup> + (-1)<sup>3</sup> + (-1)<sup>2</sup> + (-1) + 1<br>
                                    p(-1) = 1 - 1 + 1 - 1 + 1<br>
                                    p(-1) = 1 (&ne; 0)<br>
                                    <b style='font-size:15px;'>&there4; (x + 1) એ આ બહુપદીનો અવયવ નથી.</b>
                                </div>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(iii) p(x) = x<sup>4</sup> + 3x<sup>3</sup> + 3x<sup>2</sup> + x + 1</h4>
                                <div style='font-size:14px; color:#9f1239;'>
                                    p(-1) = (-1)<sup>4</sup> + 3(-1)<sup>3</sup> + 3(-1)<sup>2</sup> + (-1) + 1<br>
                                    p(-1) = 1 + 3(-1) + 3(1) - 1 + 1<br>
                                    p(-1) = 1 - 3 + 3 - 1 + 1<br>
                                    p(-1) = 1 (&ne; 0)<br>
                                    <b style='font-size:15px;'>&there4; (x + 1) એ આ બહુપદીનો અવયવ નથી.</b>
                                </div>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) p(x) = x<sup>3</sup> - x<sup>2</sup> - (2 + &radic;2)x + &radic;2</h4>
                                <div style='font-size:14px; color:#9f1239;'>
                                    p(-1) = (-1)<sup>3</sup> - (-1)<sup>2</sup> - (2 + &radic;2)(-1) + &radic;2<br>
                                    p(-1) = -1 - (1) + (2 + &radic;2) + &radic;2<br>
                                    p(-1) = -2 + 2 + &radic;2 + &radic;2<br>
                                    p(-1) = 2&radic;2 (&ne; 0)<br>
                                    <b style='font-size:15px;'>&there4; (x + 1) એ આ બહુપદીનો અવયવ નથી.</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>હેતુલક્ષી પ્રશ્નો માટે ગણતરી વગર સીધું ચેક કરો! <br>જો બહુપદીના <b>એકી ઘાતવાળા પદોના સહગુણકોનો સરવાળો</b> અને <b>બેકી ઘાતવાળા પદોના સહગુણકોનો સરવાળો</b> સરખો થાય, તો જ <b>(x + 1)</b> તેનો અવયવ હોય!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.3 - પ્રશ્ન 2",
                "marks": 3,
                "question": "બહુપદી g(x) એ આપેલ બહુપદી p(x) નો એક અવયવ છે કે નહિ તે અવયવ પ્રમેય પરથી નક્કી કરો:\n(i) p(x) = 2x³ + x² - 2x - 1, g(x) = x + 1\n(ii) p(x) = x³ + 3x² + 3x + 1, g(x) = x + 2\n(iii) p(x) = x³ - 4x² + x + 6, g(x) = x - 3", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #1e3a8a;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(i) g(x) = x + 1 હોવાથી, x = -1 લઈશું.</h4>
                            <div style='font-size:14px; color:#334155; line-height:1.6;'>
                                p(-1) = 2(-1)<sup>3</sup> + (-1)<sup>2</sup> - 2(-1) - 1<br>
                                = 2(-1) + 1 + 2 - 1<br>
                                = -2 + 1 + 2 - 1<br>
                                = 0<br>
                                <b style='color:#16a34a;'>અહીં શેષ 0 છે, તેથી g(x) એ p(x) નો અવયવ છે.</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #1e3a8a;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(ii) g(x) = x + 2 હોવાથી, x = -2 લઈશું.</h4>
                            <div style='font-size:14px; color:#334155; line-height:1.6;'>
                                p(-2) = (-2)<sup>3</sup> + 3(-2)<sup>2</sup> + 3(-2) + 1<br>
                                = -8 + 3(4) - 6 + 1<br>
                                = -8 + 12 - 6 + 1<br>
                                = 13 - 14 = -1 (&ne; 0)<br>
                                <b style='color:#be123c;'>અહીં શેષ 0 નથી, તેથી g(x) એ p(x) નો અવયવ નથી.</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #1e3a8a;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(iii) g(x) = x - 3 હોવાથી, x = 3 લઈશું.</h4>
                            <div style='font-size:14px; color:#334155; line-height:1.6;'>
                                p(3) = (3)<sup>3</sup> - 4(3)<sup>2</sup> + (3) + 6<br>
                                = 27 - 4(9) + 3 + 6<br>
                                = 27 - 36 + 9<br>
                                = 36 - 36 = 0<br>
                                <b style='color:#16a34a;'>અહીં શેષ 0 છે, તેથી g(x) એ p(x) નો અવયવ છે.</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.3 - પ્રશ્ન 3",
                "marks": 3,
                "question": "નીચેના દરેકમાં જો (x - 1) એ p(x) નો એક અવયવ હોય, તો k ની કિંમત શોધો:\n(i) p(x) = x² + x + k\n(ii) p(x) = 2x² + kx + √2\n(iii) p(x) = kx² - √2x + 1\n(iv) p(x) = kx² - 3x + k", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#ffedd5; padding:10px; border-radius:5px; margin-bottom:15px; border-left:4px solid #ea580c;'>
                        <p style='margin:0; font-size:14px; color:#9a3412;'><b>નિયમ:</b> જો (x - 1) એ અવયવ હોય, તો અવયવ પ્રમેય મુજબ <b>p(1) = 0</b> થાય જ. આ સમીકરણનો ઉપયોગ કરી આપણે <b>k</b> શોધીશું.</p>
                    </div>

                    <div style='display:flex; flex-wrap:wrap; gap:15px;'>
                        <div style='flex:1; min-width:250px; background-color:#f0f9ff; padding:12px; border-radius:5px; border:1px solid #bae6fd;'>
                            <h4 style='color:#0369a1; margin:0 0 8px 0;'>(i) p(x) = x<sup>2</sup> + x + k</h4>
                            <div style='font-size:14px; color:#0c4a6e;'>
                                p(1) = 0<br>
                                &there4; (1)<sup>2</sup> + (1) + k = 0<br>
                                &there4; 1 + 1 + k = 0<br>
                                &there4; 2 + k = 0<br>
                                &there4; <b style='color:#be123c; font-size:16px;'>k = -2</b>
                            </div>
                        </div>

                        <div style='flex:1; min-width:250px; background-color:#f0f9ff; padding:12px; border-radius:5px; border:1px solid #bae6fd;'>
                            <h4 style='color:#0369a1; margin:0 0 8px 0;'>(ii) p(x) = 2x<sup>2</sup> + kx + &radic;2</h4>
                            <div style='font-size:14px; color:#0c4a6e;'>
                                p(1) = 0<br>
                                &there4; 2(1)<sup>2</sup> + k(1) + &radic;2 = 0<br>
                                &there4; 2 + k + &radic;2 = 0<br>
                                &there4; <b style='color:#be123c; font-size:16px;'>k = -(2 + &radic;2)</b>
                            </div>
                        </div>

                        <div style='flex:1; min-width:250px; background-color:#f0f9ff; padding:12px; border-radius:5px; border:1px solid #bae6fd;'>
                            <h4 style='color:#0369a1; margin:0 0 8px 0;'>(iii) p(x) = kx<sup>2</sup> - &radic;2x + 1</h4>
                            <div style='font-size:14px; color:#0c4a6e;'>
                                p(1) = 0<br>
                                &there4; k(1)<sup>2</sup> - &radic;2(1) + 1 = 0<br>
                                &there4; k - &radic;2 + 1 = 0<br>
                                &there4; <b style='color:#be123c; font-size:16px;'>k = &radic;2 - 1</b>
                            </div>
                        </div>

                        <div style='flex:1; min-width:250px; background-color:#f0f9ff; padding:12px; border-radius:5px; border:1px solid #bae6fd;'>
                            <h4 style='color:#0369a1; margin:0 0 8px 0;'>(iv) p(x) = kx<sup>2</sup> - 3x + k</h4>
                            <div style='font-size:14px; color:#0c4a6e;'>
                                p(1) = 0<br>
                                &there4; k(1)<sup>2</sup> - 3(1) + k = 0<br>
                                &there4; k - 3 + k = 0<br>
                                &there4; 2k - 3 = 0<br>
                                &there4; 2k = 3 &nbsp; &there4; <b style='color:#be123c; font-size:16px;'>k = 3/2</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.3 - પ્રશ્ન 4",
                "marks": 4,
                "question": "અવયવ પાડો:\n(i) 12x² - 7x + 1\n(ii) 2x² + 7x + 3\n(iii) 6x² + 5x - 6\n(iv) 3x² - x - 4", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:20px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>મધ્યમ પદનું વિભાજન (Splitting the Middle Term)</p>
                        <svg width="300" height="100" xmlns="http://www.w3.org/2000/svg">
                            <text x="20" y="40" fill="#16a34a" font-size="20" font-weight="bold">12x²</text>
                            <text x="80" y="40" fill="#0f172a" font-size="20">-</text>
                            <text x="110" y="40" fill="#be123c" font-size="20" font-weight="bold">7x</text>
                            <text x="160" y="40" fill="#0f172a" font-size="20">+</text>
                            <text x="190" y="40" fill="#16a34a" font-size="20" font-weight="bold">1</text>
                            
                            <path d="M 40 20 Q 115 -20 195 20" fill="none" stroke="#16a34a" stroke-width="2" marker-end="url(#arrowGreen)"/>
                            <text x="70" y="10" fill="#16a34a" font-size="12" font-weight="bold">ગુણાકાર (12 × 1 = 12)</text>
                            
                            <line x1="120" y1="50" x2="90" y2="80" stroke="#be123c" stroke-width="2"/>
                            <line x1="120" y1="50" x2="150" y2="80" stroke="#be123c" stroke-width="2"/>
                            <text x="65" y="95" fill="#be123c" font-size="14" font-weight="bold">- 4x</text>
                            <text x="145" y="95" fill="#be123c" font-size="14" font-weight="bold">- 3x</text>
                            
                            <defs>
                                <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <path d="M0,0 L0,6 L9,3 z" fill="#16a34a" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(i) 12x<sup>2</sup> - 7x + 1</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર 12 અને સરવાળો -7 લાવવાનો છે. (અવયવો: -4 અને -3)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                                = 12x<sup>2</sup> - 4x - 3x + 1<br>
                                = 4x(3x - 1) - 1(3x - 1)<br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(3x - 1)(4x - 1)</b>
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(ii) 2x<sup>2</sup> + 7x + 3</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર 6 (2&times;3) અને સરવાળો 7 લાવવાનો છે. (અવયવો: 6 અને 1)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                                = 2x<sup>2</sup> + 6x + 1x + 3<br>
                                = 2x(x + 3) + 1(x + 3)<br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(x + 3)(2x + 1)</b>
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(iii) 6x<sup>2</sup> + 5x - 6</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર -36 (6&times;-6) અને બાદબાકી 5 લાવવાની છે. (અવયવો: 9 અને -4)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                                = 6x<sup>2</sup> + 9x - 4x - 6<br>
                                = 3x(2x + 3) - 2(2x + 3)<br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(2x + 3)(3x - 2)</b>
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(iv) 3x<sup>2</sup> - x - 4</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર -12 (3&times;-4) અને બાદબાકી -1 લાવવાની છે. (અવયવો: -4 અને 3)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                                = 3x<sup>2</sup> - 4x + 3x - 4<br>
                                = x(3x - 4) + 1(3x - 4)<br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(3x - 4)(x + 1)</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
               { 
                "questionNumber": "સ્વાધ્યાય 2.3 - પ્રશ્ન 5",
                "marks": 4,
                "question": "અવયવ પાડો (ત્રિઘાત બહુપદી):\n(i) x³ - 2x² - x + 2\n(ii) x³ - 3x² - 9x - 5\n(iii) x³ + 13x² + 32x + 20\n(iv) 2y³ + y² - 2y - 1", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:20px;'>
                        
                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(i) x<sup>3</sup> - 2x<sup>2</sup> - x + 2</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>અહીં પહેલા બે અને છેલ્લા બે પદોની સીધી જોડ બનાવી સામાન્ય કાઢીશું:</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-family:monospace; font-size:15px;'>
                                = x<sup>2</sup>(x - 2) - 1(x - 2)<br>
                                = (x - 2)(x<sup>2</sup> - 1)<br>
                                <span style='color:#64748b; font-size:12px;'>[(a<sup>2</sup>-b<sup>2</sup>) નું નિત્યસમ વાપરતા]</span><br>
                                = <b style='color:#0369a1; font-size:16px;'>(x - 2)(x - 1)(x + 1)</b>
                            </div>
                        </div>

                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(ii) x<sup>3</sup> - 3x<sup>2</sup> - 9x - 5</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>અહીં p(-1) = 0 થાય છે, તેથી (x + 1) એક અવયવ છે. બહુપદીને (x + 1) વડે ભાગતા અથવા પદોની ગોઠવણી કરતા:</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-family:monospace; font-size:15px;'>
                                = x<sup>3</sup> + x<sup>2</sup> - 4x<sup>2</sup> - 4x - 5x - 5<br>
                                = x<sup>2</sup>(x + 1) - 4x(x + 1) - 5(x + 1)<br>
                                = (x + 1)(x<sup>2</sup> - 4x - 5)<br>
                                <span style='color:#64748b; font-size:12px;'>[હવે કૌંસના મધ્યમ પદનું વિભાજન કરતા]</span><br>
                                = (x + 1)(x<sup>2</sup> - 5x + 1x - 5)<br>
                                = (x + 1)[x(x - 5) + 1(x - 5)]<br>
                                = <b style='color:#0369a1; font-size:16px;'>(x + 1)(x + 1)(x - 5)</b>
                            </div>
                        </div>

                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(iii) x<sup>3</sup> + 13x<sup>2</sup> + 32x + 20</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>અહીં બધા પદો ધન છે, p(-1) = 0 થાય છે. તેથી (x + 1) એક અવયવ છે.</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-family:monospace; font-size:15px;'>
                                = x<sup>3</sup> + x<sup>2</sup> + 12x<sup>2</sup> + 12x + 20x + 20<br>
                                = x<sup>2</sup>(x + 1) + 12x(x + 1) + 20(x + 1)<br>
                                = (x + 1)(x<sup>2</sup> + 12x + 20)<br>
                                <span style='color:#64748b; font-size:12px;'>[20 ના અવયવો 10 અને 2]</span><br>
                                = (x + 1)(x<sup>2</sup> + 10x + 2x + 20)<br>
                                = (x + 1)[x(x + 10) + 2(x + 10)]<br>
                                = <b style='color:#0369a1; font-size:16px;'>(x + 1)(x + 2)(x + 10)</b>
                            </div>
                        </div>

                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(iv) 2y<sup>3</sup> + y<sup>2</sup> - 2y - 1</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>આ દાખલામાં દાખલા (i) ની જેમ પદોની જોડ બનાવી સીધું જ સામાન્ય કાઢી શકાશે:</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-family:monospace; font-size:15px;'>
                                = y<sup>2</sup>(2y + 1) - 1(2y + 1)<br>
                                = (2y + 1)(y<sup>2</sup> - 1)<br>
                                <span style='color:#64748b; font-size:12px;'>[(y<sup>2</sup> - 1) = (y-1)(y+1)]</span><br>
                                = <b style='color:#0369a1; font-size:16px;'>(2y + 1)(y - 1)(y + 1)</b>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (ત્રિઘાત માટે):</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>ત્રિઘાત બહુપદીમાં પહેલો અવયવ શોધવો એ જ સૌથી મોટું કામ છે! એના માટે 2 નિયમો મગજમાં ફિટ કરી દો:<br>
                    <b>નિયમ 1:</b> જો બહુપદીના બધા જ સહગુણકોનો સરવાળો <b>0 (શૂન્ય)</b> થાય, તો તેનો પહેલો અવયવ હંમેશા <b>(x - 1)</b> હોય.<br>
                    <b>નિયમ 2:</b> જો એકી પદોના સહગુણકોનો સરવાળો અને બેકી પદોના સહગુણકોનો સરવાળો સરખો થાય, તો પહેલો અવયવ હંમેશા <b>(x + 1)</b> હોય.<br>
                    પછી તો બસ તેને 3 વાર લખીને પદો સેટ જ કરવાના રહે છે!</p>
                </div>`
               },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 1",
                "marks": 3,
                "question": "યોગ્ય નિત્યસમનો ઉપયોગ કરીને નીચેના ગુણાકાર મેળવો:\n(i) (x + 4)(x + 10)\n(ii) (x + 8)(x - 10)\n(iii) (3x + 4)(3x - 5)\n(iv) (y² + 3/2)(y² - 3/2)\n(v) (3 - 2x)(3 + 2x)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f0fdf4; padding:10px; border-radius:8px; border:2px dashed #16a34a; margin-bottom:15px;'>
                        <p style='margin:0 0 5px 0; color:#14532d; font-weight:bold; font-size:15px;'>ઉપયોગમાં લેવાતા નિત્યસમો (સૂત્રો):</p>
                        <div style='font-size:16px; color:#166534; font-weight:bold; font-family:monospace;'>
                            1) (x + a)(x + b) = x<sup>2</sup> + (a + b)x + ab<br>
                            2) (x + y)(x - y) = x<sup>2</sup> - y<sup>2</sup>
                        </div>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(i) (x + 4)(x + 10)</h4>
                            <div style='font-size:15px; color:#334155; line-height:1.6;'>
                                અહી a = 4 અને b = 10 છે.<br>
                                = (x)<sup>2</sup> + (4 + 10)x + (4)(10)<br>
                                = <b style='color:#0284c7; font-size:16px;'>x<sup>2</sup> + 14x + 40</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(ii) (x + 8)(x - 10)</h4>
                            <div style='font-size:15px; color:#334155; line-height:1.6;'>
                                અહી a = 8 અને b = -10 છે.<br>
                                = (x)<sup>2</sup> + (8 - 10)x + (8)(-10)<br>
                                = x<sup>2</sup> + (-2)x - 80<br>
                                = <b style='color:#0284c7; font-size:16px;'>x<sup>2</sup> - 2x - 80</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iii) (3x + 4)(3x - 5)</h4>
                            <div style='font-size:15px; color:#334155; line-height:1.6;'>
                                અહી પ્રથમ પદ 3x છે, a = 4 અને b = -5 છે.<br>
                                = (3x)<sup>2</sup> + (4 - 5)(3x) + (4)(-5)<br>
                                = 9x<sup>2</sup> + (-1)(3x) - 20<br>
                                = <b style='color:#0284c7; font-size:16px;'>9x<sup>2</sup> - 3x - 20</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iv) (y<sup>2</sup> + 3/2)(y<sup>2</sup> - 3/2)</h4>
                            <div style='font-size:15px; color:#334155; line-height:1.6;'>
                                <span style='color:#be123c; font-size:13px;'>[નિત્યસમ 2: (a+b)(a-b) = a<sup>2</sup> - b<sup>2</sup> મુજબ]</span><br>
                                = (y<sup>2</sup>)<sup>2</sup> - (3/2)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:16px;'>y<sup>4</sup> - 9/4</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(v) (3 - 2x)(3 + 2x)</h4>
                            <div style='font-size:15px; color:#334155; line-height:1.6;'>
                                <span style='color:#be123c; font-size:13px;'>[નિત્યસમ 2 મુજબ]</span><br>
                                = (3)<sup>2</sup> - (2x)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:16px;'>9 - 4x<sup>2</sup></b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 2",
                "marks": 3,
                "question": "સીધો ગુણાકાર કર્યા સિવાય નિત્યસમોનો ઉપયોગ કરીને નીચેના ગુણાકારની કિંમતો મેળવો:\n(i) 103 × 107\n(ii) 95 × 96\n(iii) 104 × 96", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(i) 103 &times; 107</h4>
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px;'>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#475569;'>બંને સંખ્યાઓ 100 ની નજીક છે.</p>
                            = (100 + 3)(100 + 7)<br>
                            <span style='color:#64748b; font-size:13px;'>[(x+a)(x+b) = x<sup>2</sup> + (a+b)x + ab મુજબ]</span><br>
                            = (100)<sup>2</sup> + (3 + 7)(100) + (3)(7)<br>
                            = 10000 + (10)(100) + 21<br>
                            = 10000 + 1000 + 21<br>
                            = <b style='color:#047857; font-size:18px;'>11021</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(ii) 95 &times; 96</h4>
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px;'>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#475569;'>બંને સંખ્યાઓ 100 માંથી અમુક બાદ કરવાથી મળે છે.</p>
                            = (100 - 5)(100 - 4)<br>
                            = (100)<sup>2</sup> + (-5 - 4)(100) + (-5)(-4)<br>
                            = 10000 + (-9)(100) + 20<br>
                            = 10000 - 900 + 20<br>
                            = 9100 + 20<br>
                            = <b style='color:#047857; font-size:18px;'>9120</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(iii) 104 &times; 96</h4>
                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px;'>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#881337;'>એક 100 કરતા વધુ છે અને એક 100 કરતા ઓછી છે.</p>
                            = (100 + 4)(100 - 4)<br>
                            <span style='color:#be123c; font-size:13px;'>[(a+b)(a-b) = a<sup>2</sup> - b<sup>2</sup> મુજબ]</span><br>
                            = (100)<sup>2</sup> - (4)<sup>2</sup><br>
                            = 10000 - 16<br>
                            = <b style='color:#be123c; font-size:18px;'>9984</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવા દાખલામાં હંમેશા <b>100</b> નો જ આધાર લેવો (જેમ કે 100+3 અથવા 100-5). કારણ કે 100 નો વર્ગ 10000 સીધો જ લખી શકાય છે અને ગણતરીમાં ભૂલ પડવાની શક્યતા સાવ નહિવત્ થઈ જાય છે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 3",
                "marks": 3,
                "question": "યોગ્ય નિત્યસમનો ઉપયોગ કરીને અવયવ પાડો:\n(i) 9x² + 6xy + y²\n(ii) 4y² - 4y + 1\n(iii) x² - y²/100", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 8px 0;'>(i) 9x<sup>2</sup> + 6xy + y<sup>2</sup></h4>
                            <div style='font-size:15px; color:#3f3f46;'>
                                <p style='margin:0 0 5px 0; font-size:13px; color:#71717a;'>આ પૂર્ણવર્ગ ત્રિપદી છે. [a<sup>2</sup> + 2ab + b<sup>2</sup> = (a+b)<sup>2</sup>]</p>
                                = (3x)<sup>2</sup> + 2(3x)(y) + (y)<sup>2</sup><br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(3x + y)<sup>2</sup></b><br>
                                = (3x + y)(3x + y)
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 8px 0;'>(ii) 4y<sup>2</sup> - 4y + 1</h4>
                            <div style='font-size:15px; color:#3f3f46;'>
                                <p style='margin:0 0 5px 0; font-size:13px; color:#71717a;'>વચ્ચે માઇનસ છે. [a<sup>2</sup> - 2ab + b<sup>2</sup> = (a-b)<sup>2</sup>]</p>
                                = (2y)<sup>2</sup> - 2(2y)(1) + (1)<sup>2</sup><br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(2y - 1)<sup>2</sup></b><br>
                                = (2y - 1)(2y - 1)
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 8px 0;'>(iii) x<sup>2</sup> - y<sup>2</sup> / 100</h4>
                            <div style='font-size:15px; color:#3f3f46;'>
                                <p style='margin:0 0 5px 0; font-size:13px; color:#be123c;'>બે પૂર્ણવર્ગનો તફાવત. [a<sup>2</sup> - b<sup>2</sup> = (a-b)(a+b)]</p>
                                = (x)<sup>2</sup> - (y/10)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:16px;'>(x - y/10)(x + y/10)</b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>ત્રિપદીના અવયવમાં ફક્ત <b>પહેલા અને છેલ્લા પદનું વર્ગમૂળ</b> કાઢો, અને <b>વચ્ચેના પદની નિશાની</b> મૂકીને આખા કૌંસ પર વર્ગ લગાવી દો!<br>
                    જેમ કે: 9x<sup>2</sup> નું વર્ગમૂળ 3x, 1 નું વર્ગમૂળ 1, અને વચ્ચે - ની નિશાની. સીધો જવાબ (3x - 1)<sup>2</sup>!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 4",
                "marks": 4,
                "question": "યોગ્ય નિત્યસમનો ઉપયોગ કરીને વિસ્તરણ કરો:\n(i) (x + 2y + 4z)²\n(ii) (2x - y + z)²\n(iii) (-2x + 3y + 2z)²\n(iv) (3a - 7b - c)²\n(v) (-2x + 5y - 3z)²\n(vi) [(1/4)a - (1/2)b + 1]²", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border:1px solid #bbf7d0; margin-bottom:15px; text-align:center;'>
                        <p style='margin:0; font-size:16px; color:#14532d; font-weight:bold;'>મૂળભૂત સૂત્ર: (a + b + c)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + 2ab + 2bc + 2ca</p>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:12px; font-size:14px; overflow-x:auto;'>
                        
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(i) (x + 2y + 4z)<sup>2</sup></h4>
                            = (x)<sup>2</sup> + (2y)<sup>2</sup> + (4z)<sup>2</sup> + 2(x)(2y) + 2(2y)(4z) + 2(4z)(x)<br>
                            = <b style='color:#0284c7; font-size:15px;'>x<sup>2</sup> + 4y<sup>2</sup> + 16z<sup>2</sup> + 4xy + 16yz + 8zx</b>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(ii) (2x - y + z)<sup>2</sup></h4>
                            = (2x)<sup>2</sup> + (-y)<sup>2</sup> + (z)<sup>2</sup> + 2(2x)(-y) + 2(-y)(z) + 2(z)(2x)<br>
                            = <b style='color:#0284c7; font-size:15px;'>4x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - 4xy - 2yz + 4zx</b>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iii) (-2x + 3y + 2z)<sup>2</sup></h4>
                            = (-2x)<sup>2</sup> + (3y)<sup>2</sup> + (2z)<sup>2</sup> + 2(-2x)(3y) + 2(3y)(2z) + 2(2z)(-2x)<br>
                            = <b style='color:#0284c7; font-size:15px;'>4x<sup>2</sup> + 9y<sup>2</sup> + 4z<sup>2</sup> - 12xy + 12yz - 8zx</b>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iv) (3a - 7b - c)<sup>2</sup></h4>
                            = (3a)<sup>2</sup> + (-7b)<sup>2</sup> + (-c)<sup>2</sup> + 2(3a)(-7b) + 2(-7b)(-c) + 2(-c)(3a)<br>
                            = <b style='color:#0284c7; font-size:15px;'>9a<sup>2</sup> + 49b<sup>2</sup> + c<sup>2</sup> - 42ab + 14bc - 6ca</b>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(v) (-2x + 5y - 3z)<sup>2</sup></h4>
                            = (-2x)<sup>2</sup> + (5y)<sup>2</sup> + (-3z)<sup>2</sup> + 2(-2x)(5y) + 2(5y)(-3z) + 2(-3z)(-2x)<br>
                            = <b style='color:#0284c7; font-size:15px;'>4x<sup>2</sup> + 25y<sup>2</sup> + 9z<sup>2</sup> - 20xy - 30yz + 12zx</b>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border:1px solid #fecdd3; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(vi) [(1/4)a - (1/2)b + 1]<sup>2</sup></h4>
                            = (a/4)<sup>2</sup> + (-b/2)<sup>2</sup> + (1)<sup>2</sup> + 2(a/4)(-b/2) + 2(-b/2)(1) + 2(1)(a/4)<br>
                            = a<sup>2</sup>/16 + b<sup>2</sup>/4 + 1 - 2ab/8 - 2b/2 + 2a/4<br>
                            <span style='color:#be123c; font-size:13px;'>[છેદ ઉડાડતાં]</span><br>
                            = <b style='color:#be123c; font-size:15px;'>a<sup>2</sup>/16 + b<sup>2</sup>/4 + 1 - ab/4 - b + a/2</b>
                        </div>
                    </div>
                </div>`
            },
           { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 5",
                "marks": 4,
                "question": "અવયવ પાડો:\n(i) 4x² + 9y² + 16z² + 12xy - 24yz - 16xz\n(ii) 2x² + y² + 8z² - 2√2xy + 4√2yz - 8xz", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>સમજૂતી: આ દાખલાઓ ઉપરના પ્રશ્ન 4 થી બિલકુલ ઊંધા છે. વિસ્તરણ આપેલું છે, આપણે કૌંસનો વર્ગ શોધવાનો છે.</p>

                    <div style='display:flex; flex-direction:column; gap:20px; overflow-x:auto;'>
                        <div style='background-color:#f0f9ff; padding:15px; border-left:4px solid #0284c7; border-radius:5px; min-width:350px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 10px 0;'>(i) 4x<sup>2</sup> + 9y<sup>2</sup> + 16z<sup>2</sup> + 12xy - 24yz - 16xz</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#0369a1;'>અહીં yz અને xz વાળા પદો માઇનસ (-) છે. બંનેમાં <b>z</b> સામાન્ય છે, તેથી <b>z વાળું પદ માઇનસ</b> હશે.</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-family:monospace; font-size:14px;'>
                                = (2x)<sup>2</sup> + (3y)<sup>2</sup> + (-4z)<sup>2</sup> + 2(2x)(3y) + 2(3y)(-4z) + 2(-4z)(2x)<br>
                                <span style='color:#64748b; font-size:12px;'>[નિત્યસમ a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + 2ab + 2bc + 2ca = (a+b+c)<sup>2</sup>]</span><br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(2x + 3y - 4z)<sup>2</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:15px; border-left:4px solid #be123c; border-radius:5px; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 10px 0;'>(ii) 2x<sup>2</sup> + y<sup>2</sup> + 8z<sup>2</sup> - 2&radic;2xy + 4&radic;2yz - 8xz</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#be123c;'>અહીં xy અને xz વાળા પદો માઇનસ (-) છે. બંનેમાં <b>x</b> સામાન્ય છે, તેથી <b>x વાળું પદ માઇનસ</b> હશે.<br>
                            (નોંધ: 2 નું વર્ગમૂળ &radic;2 અને 8 નું વર્ગમૂળ 2&radic;2 થાય.)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #fecdd3; font-family:monospace; font-size:14px;'>
                                = (-&radic;2x)<sup>2</sup> + (y)<sup>2</sup> + (2&radic;2z)<sup>2</sup> + 2(-&radic;2x)(y) + 2(y)(2&radic;2z) + 2(2&radic;2z)(-&radic;2x)<br>
                                = <b style='color:#9f1239; font-size:16px;'>(-&radic;2x + y + 2&radic;2z)<sup>2</sup></b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>માઇનસ (-) ની નિશાની કોને આપવી તેમાં કન્ફ્યુઝન થાય છે ને? <br>
                    બસ રકમમાં જે <b>બે પદ માઇનસ વાળા</b> દેખાય તેમાં <b>કયો અક્ષર (ચલ) સમાન (Common)</b> છે તે પકડી લો. એ સમાન અક્ષર વાળા પદને જ માઇનસની નિશાની આપી દેવાની, બાકી બધા પ્લસ!</p>
                </div>`
               },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 6",
                "marks": 3,
                "question": "નીચેના ઘનનું વિસ્તરણ કરો:\n(i) (2x + 1)³\n(ii) (2a - 3b)³\n(iii) [(3/2)x + 1]³\n(iv) [x - (2/3)y]³", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='background-color:#f8fafc; padding:10px; border-radius:5px; border:2px dashed #0284c7; margin-bottom:15px; text-align:center;'>
                        <p style='margin:0 0 5px 0; color:#0c4a6e; font-weight:bold; font-size:15px;'>ઘનના વિસ્તરણના સૂત્રો:</p>
                        <div style='font-size:15px; color:#0369a1; font-weight:bold;'>
                            (x + y)<sup>3</sup> = x<sup>3</sup> + y<sup>3</sup> + 3xy(x + y)<br>
                            (x - y)<sup>3</sup> = x<sup>3</sup> - y<sup>3</sup> - 3xy(x - y)
                        </div>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border-left:4px solid #16a34a; min-width:350px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(i) (2x + 1)<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#166534;'>
                                = (2x)<sup>3</sup> + (1)<sup>3</sup> + 3(2x)(1)(2x + 1)<br>
                                = 8x<sup>3</sup> + 1 + 6x(2x + 1)<br>
                                = 8x<sup>3</sup> + 1 + 12x<sup>2</sup> + 6x<br>
                                <span style='color:#64748b; font-size:12px;'>[ઘાતના ઉતરતા ક્રમમાં ગોઠવતા]</span><br>
                                = <b style='color:#15803d; font-size:15px;'>8x<sup>3</sup> + 12x<sup>2</sup> + 6x + 1</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border-left:4px solid #be123c; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(ii) (2a - 3b)<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (2a)<sup>3</sup> - (3b)<sup>3</sup> - 3(2a)(3b)(2a - 3b)<br>
                                = 8a<sup>3</sup> - 27b<sup>3</sup> - 18ab(2a - 3b)<br>
                                = 8a<sup>3</sup> - 27b<sup>3</sup> - 36a<sup>2</sup>b + 54ab<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:15px;'>8a<sup>3</sup> - 36a<sup>2</sup>b + 54ab<sup>2</sup> - 27b<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border-left:4px solid #16a34a; min-width:350px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(iii) [(3/2)x + 1]<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#166534;'>
                                = (3x/2)<sup>3</sup> + (1)<sup>3</sup> + 3(3x/2)(1)[(3x/2) + 1]<br>
                                = 27x<sup>3</sup>/8 + 1 + (9x/2)[(3x/2) + 1]<br>
                                = 27x<sup>3</sup>/8 + 1 + 27x<sup>2</sup>/4 + 9x/2<br>
                                = <b style='color:#15803d; font-size:15px;'>27x<sup>3</sup>/8 + 27x<sup>2</sup>/4 + 9x/2 + 1</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border-left:4px solid #be123c; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) [x - (2/3)y]<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (x)<sup>3</sup> - (2y/3)<sup>3</sup> - 3(x)(2y/3)[x - 2y/3]<br>
                                <span style='color:#64748b; font-size:12px;'>[અહીં 3 અને છેદનો 3 ઉડી જશે]</span><br>
                                = x<sup>3</sup> - 8y<sup>3</sup>/27 - 2xy[x - 2y/3]<br>
                                = x<sup>3</sup> - 8y<sup>3</sup>/27 - 2x<sup>2</sup>y + 4xy<sup>2</sup>/3<br>
                                = <b style='color:#be123c; font-size:15px;'>x<sup>3</sup> - 2x<sup>2</sup>y + 4xy<sup>2</sup>/3 - 8y<sup>3</sup>/27</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 7",
                "marks": 3,
                "question": "યોગ્ય નિત્યસમનો ઉપયોગ કરીને કિંમત મેળવો:\n(i) (99)³\n(ii) (102)³\n(iii) (998)³", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #334155; min-width:300px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(i) (99)<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#334155;'>
                                = (100 - 1)<sup>3</sup><br>
                                = (100)<sup>3</sup> - (1)<sup>3</sup> - 3(100)(1)(100 - 1)<br>
                                = 1000000 - 1 - 300(99)<br>
                                = 1000000 - 1 - 29700<br>
                                = 1000000 - 29701<br>
                                = <b style='color:#0f172a; font-size:16px;'>970299</b>
                            </div>
                        </div>

                        <div style='background-color:#f0f9ff; padding:12px; border-radius:5px; border-left:4px solid #0284c7; min-width:300px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(ii) (102)<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#0369a1;'>
                                = (100 + 2)<sup>3</sup><br>
                                = (100)<sup>3</sup> + (2)<sup>3</sup> + 3(100)(2)(100 + 2)<br>
                                = 1000000 + 8 + 600(102)<br>
                                = 1000000 + 8 + 61200<br>
                                = <b style='color:#0284c7; font-size:16px;'>1061208</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #334155; min-width:300px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(iii) (998)<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#334155;'>
                                = (1000 - 2)<sup>3</sup><br>
                                = (1000)<sup>3</sup> - (2)<sup>3</sup> - 3(1000)(2)(1000 - 2)<br>
                                = 1000000000 - 8 - 6000(998)<br>
                                = 1000000000 - 8 - 5988000<br>
                                = 1000000000 - 5988008<br>
                                = <b style='color:#0f172a; font-size:16px;'>994011992</b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>મીંડા (0) નો ઘન કરવામાં ક્યારેય ભૂલ ન કરો! <b>જેટલા મીંડા હોય, તેના 3 ગણા મીંડા કરી નાખવા.</b> <br>
                    દા.ત. 100 નો ઘન &rarr; બે મીંડાના 6 મીંડા (1000000). <br>
                    1000 નો ઘન &rarr; ત્રણ મીંડાના 9 મીંડા (1000000000). આ ટ્રીકથી શૂન્ય ગણવામાં ભૂલ નહિ પડે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 8",
                "marks": 4,
                "question": "નીચેના પૈકી દરેકના અવયવ પાડો:\n(i) 8a³ + b³ + 12a²b + 6ab²\n(ii) 8a³ - b³ - 12a²b + 6ab²\n(iii) 27 - 125a³ - 135a + 225a²\n(iv) 64a³ - 27b³ - 144a²b + 108ab²\n(v) 27p³ - 1/216 - 9/2p² + 1/4p", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>સમજૂતી:</b> આ દાખલા પ્રશ્ન 6 ની બિલકુલ ઊલટી પ્રક્રિયા છે. અહીં આપણે (a + b)<sup>3</sup> અથવા (a - b)<sup>3</sup> નિત્યસમ મુજબ પદોને ગોઠવવાના છે.</p>

                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border:1px solid #bbf7d0; min-width:380px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(i) 8a<sup>3</sup> + b<sup>3</sup> + 12a<sup>2</sup>b + 6ab<sup>2</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#166534;'>
                                = (2a)<sup>3</sup> + (b)<sup>3</sup> + 3(2a)<sup>2</sup>(b) + 3(2a)(b)<sup>2</sup><br>
                                = <b style='color:#15803d; font-size:15px;'>(2a + b)<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border:1px solid #fecdd3; min-width:380px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(ii) 8a<sup>3</sup> - b<sup>3</sup> - 12a<sup>2</sup>b + 6ab<sup>2</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (2a)<sup>3</sup> - (b)<sup>3</sup> - 3(2a)<sup>2</sup>(b) + 3(2a)(b)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:15px;'>(2a - b)<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border:1px solid #fecdd3; min-width:380px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(iii) 27 - 125a<sup>3</sup> - 135a + 225a<sup>2</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (3)<sup>3</sup> - (5a)<sup>3</sup> - 3(3)<sup>2</sup>(5a) + 3(3)(5a)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:15px;'>(3 - 5a)<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border:1px solid #fecdd3; min-width:380px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) 64a<sup>3</sup> - 27b<sup>3</sup> - 144a<sup>2</sup>b + 108ab<sup>2</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (4a)<sup>3</sup> - (3b)<sup>3</sup> - 3(4a)<sup>2</sup>(3b) + 3(4a)(3b)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:15px;'>(4a - 3b)<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border:1px solid #fecdd3; min-width:380px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(v) 27p<sup>3</sup> - 1/216 - 9/2p<sup>2</sup> + 1/4p</h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (3p)<sup>3</sup> - (1/6)<sup>3</sup> - 3(3p)<sup>2</sup>(1/6) + 3(3p)(1/6)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:15px;'>(3p - 1/6)<sup>3</sup></b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવા મોટા દાખલા જોઈને ડરવાનું બિલકુલ નહિ! <b>ફક્ત પહેલા બે પદ પકડી લો.</b> <br>
                    પહેલા પદનું ઘનમૂળ કાઢો અને બીજા પદનું ઘનમૂળ કાઢો. જો રકમમાં માઇનસ હોય તો વચ્ચે માઇનસ મૂકી આખા કૌંસનો ઘન (Cube) કરી દો! જવાબ તમારા હાથમાં!<br>
                    દા.ત. (v) માં: 27p<sup>3</sup> નું ઘનમૂળ <b>3p</b> અને 1/216 નું ઘનમૂળ <b>1/6</b>. વચ્ચે માઇનસ. સીધો જવાબ (3p - 1/6)<sup>3</sup> !</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 9",
                "marks": 3,
                "question": "ચકાસો:\n(i) x³ + y³ = (x + y)(x² - xy + y²)\n(ii) x³ - y³ = (x - y)(x² + xy + y²)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>ચકાસણી માટે આપણે જમણી બાજુ (RHS) નો ગુણાકાર કરી ડાબી બાજુ (LHS) લાવીશું.</p>

                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f0f9ff; padding:12px; border-radius:5px; border-left:4px solid #0284c7; min-width:350px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(i) x<sup>3</sup> + y<sup>3</sup> = (x + y)(x<sup>2</sup> - xy + y<sup>2</sup>)</h4>
                            <div style='font-family:monospace; font-size:14px; color:#0369a1; line-height:1.6;'>
                                જ.બા. = (x + y)(x<sup>2</sup> - xy + y<sup>2</sup>)<br>
                                <span style='color:#64748b; font-size:12px;'>[કૌંસ છૂટા પાડતા]</span><br>
                                = x(x<sup>2</sup> - xy + y<sup>2</sup>) + y(x<sup>2</sup> - xy + y<sup>2</sup>)<br>
                                = x<sup>3</sup> - x<sup>2</sup>y + xy<sup>2</sup> + x<sup>2</sup>y - xy<sup>2</sup> + y<sup>3</sup><br>
                                <span style='color:#64748b; font-size:12px;'>[-x<sup>2</sup>y અને +x<sup>2</sup>y તેમજ +xy<sup>2</sup> અને -xy<sup>2</sup> ઉડી જશે]</span><br>
                                = <b style='color:#0284c7;'>x<sup>3</sup> + y<sup>3</sup></b> = ડા.બા.
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border-left:4px solid #be123c; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 8px 0;'>(ii) x<sup>3</sup> - y<sup>3</sup> = (x - y)(x<sup>2</sup> + xy + y<sup>2</sup>)</h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239; line-height:1.6;'>
                                જ.બા. = (x - y)(x<sup>2</sup> + xy + y<sup>2</sup>)<br>
                                <span style='color:#64748b; font-size:12px;'>[કૌંસ છૂટા પાડતા]</span><br>
                                = x(x<sup>2</sup> + xy + y<sup>2</sup>) - y(x<sup>2</sup> + xy + y<sup>2</sup>)<br>
                                = x<sup>3</sup> + x<sup>2</sup>y + xy<sup>2</sup> - x<sup>2</sup>y - xy<sup>2</sup> - y<sup>3</sup><br>
                                <span style='color:#64748b; font-size:12px;'>[સરખા અને વિરુદ્ધ નિશાન વાળા પદો ઉડી જશે]</span><br>
                                = <b style='color:#be123c;'>x<sup>3</sup> - y<sup>3</sup></b> = ડા.બા.
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 10",
                "marks": 3,
                "question": "નીચેના પૈકી દરેકના અવયવ પાડો:\n(i) 27y³ + 125z³\n(ii) 64m³ - 343n³\n[સૂચન: પ્રશ્ન 9 જુઓ]", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>ઉપરના પ્રશ્ન 9 માં સાબિત કરેલા સૂત્રોનો સીધો ઉપયોગ કરવાનો છે.</p>

                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border-left:4px solid #16a34a; min-width:350px;'>
                            <h4 style='color:#14532d; margin:0 0 8px 0;'>(i) 27y<sup>3</sup> + 125z<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#166534; line-height:1.6;'>
                                = (3y)<sup>3</sup> + (5z)<sup>3</sup><br>
                                <span style='color:#64748b; font-size:12px;'>[સૂત્ર: a<sup>3</sup> + b<sup>3</sup> = (a+b)(a<sup>2</sup> - ab + b<sup>2</sup>)]</span><br>
                                = (3y + 5z) [ (3y)<sup>2</sup> - (3y)(5z) + (5z)<sup>2</sup> ]<br>
                                = <b style='color:#15803d; font-size:15px;'>(3y + 5z)(9y<sup>2</sup> - 15yz + 25z<sup>2</sup>)</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border-left:4px solid #be123c; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 8px 0;'>(ii) 64m<sup>3</sup> - 343n<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239; line-height:1.6;'>
                                = (4m)<sup>3</sup> - (7n)<sup>3</sup><br>
                                <span style='color:#64748b; font-size:12px;'>[સૂત્ર: a<sup>3</sup> - b<sup>3</sup> = (a-b)(a<sup>2</sup> + ab + b<sup>2</sup>)]</span><br>
                                = (4m - 7n) [ (4m)<sup>2</sup> + (4m)(7n) + (7n)<sup>2</sup> ]<br>
                                = <b style='color:#be123c; font-size:15px;'>(4m - 7n)(16m<sup>2</sup> + 28mn + 49n<sup>2</sup>)</b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવા દાખલામાં બીજા કૌંસમાં નિશાનીની બહુ ભૂલ પડે છે! તેને યાદ રાખવાનો સિમ્પલ રસ્તો:<br>
                    <b>SOAP નો નિયમ!</b><br>
                    <b>S</b> = Same (પહેલા કૌંસમાં રકમ જેવી જ નિશાની)<br>
                    <b>O</b> = Opposite (બીજા કૌંસના પહેલા પદમાં વિરુદ્ધ નિશાની)<br>
                    <b>AP</b> = Always Positive (બીજા કૌંસનું છેલ્લું પદ હંમેશા પ્લસ જ હોય!)</p>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 11",
                "marks": 3,
                "question": "અવયવ પાડો:\n27x³ + y³ + z³ - 9xyz", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0f9ff; padding:10px; border-radius:5px; border:2px dashed #0284c7; margin-bottom:15px; text-align:center;'>
                        <p style='margin:0 0 5px 0; color:#0c4a6e; font-weight:bold; font-size:14px;'>નિત્યસમનો ઉપયોગ:</p>
                        <div style='font-size:15px; color:#0369a1; font-weight:bold;'>
                            a<sup>3</sup> + b<sup>3</sup> + c<sup>3</sup> - 3abc = (a + b + c)(a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> - ab - bc - ca)
                        </div>
                    </div>

                    <div style='overflow-x:auto; font-family:monospace; font-size:15px; color:#334155; line-height:1.8; background-color:#f8fafc; padding:15px; border-radius:5px; border-left:4px solid #1e3a8a;'>
                        = (3x)<sup>3</sup> + (y)<sup>3</sup> + (z)<sup>3</sup> - 3(3x)(y)(z)<br>
                        <span style='color:#64748b; font-size:12px;'>[અહીં a = 3x, b = y, અને c = z લેતાં]</span><br>
                        = (3x + y + z)[ (3x)<sup>2</sup> + (y)<sup>2</sup> + (z)<sup>2</sup> - (3x)(y) - (y)(z) - (z)(3x) ]<br>
                        = <b style='color:#1e3a8a; font-size:16px;'>(3x + y + z)(9x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - 3xy - yz - 3zx)</b>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 12",
                "marks": 4,
                "question": "ચકાસો:\nx³ + y³ + z³ - 3xyz = (1/2)(x + y + z)[(x - y)² + (y - z)² + (z - x)²]", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>જમણી બાજુ (RHS) પરથી ગણતરી શરૂ કરીશું:</p>

                    <div style='overflow-x:auto; font-family:monospace; font-size:14px; color:#0f172a; line-height:1.8; background-color:#f0fdf4; padding:15px; border-radius:5px; border-left:4px solid #16a34a;'>
                        જ.બા. = <span style='color:#166534;'>(1/2)(x + y + z) [ (x - y)<sup>2</sup> + (y - z)<sup>2</sup> + (z - x)<sup>2</sup> ]</span><br><br>
                        <span style='color:#64748b; font-size:12px;'>[કૌંસમાં રહેલા વર્ગોનું વિસ્તરણ કરતા: (a-b)<sup>2</sup> = a<sup>2</sup> - 2ab + b<sup>2</sup>]</span><br>
                        = (1/2)(x + y + z) [ (x<sup>2</sup> - 2xy + y<sup>2</sup>) + (y<sup>2</sup> - 2yz + z<sup>2</sup>) + (z<sup>2</sup> - 2zx + x<sup>2</sup>) ]<br><br>
                        <span style='color:#64748b; font-size:12px;'>[સમાન પદોનો સરવાળો કરતા (દા.ત. x<sup>2</sup> + x<sup>2</sup> = 2x<sup>2</sup>)]</span><br>
                        = (1/2)(x + y + z) [ 2x<sup>2</sup> + 2y<sup>2</sup> + 2z<sup>2</sup> - 2xy - 2yz - 2zx ]<br><br>
                        <span style='color:#64748b; font-size:12px;'>[બીજા કૌંસમાંથી 2 સામાન્ય (Common) કાઢતા]</span><br>
                        = (1/2) &times; 2 &times; (x + y + z) [ x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - xy - yz - zx ]<br><br>
                        <span style='color:#64748b; font-size:12px;'>[1/2 અને 2 ઉડી જશે]</span><br>
                        = (x + y + z)(x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - xy - yz - zx)<br><br>
                        <span style='color:#64748b; font-size:12px;'>[આ તો પ્રશ્ન 11 વાળું મુખ્ય નિત્યસમ જ બની ગયું!]</span><br>
                        = <b style='color:#15803d; font-size:16px;'>x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> - 3xyz</b><br>
                        = ડા.બા. <b>(ચકાસણી પૂર્ણ)</b>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 13",
                "marks": 3,
                "question": "જો x + y + z = 0 હોય, તો સાબિત કરો કે x³ + y³ + z³ = 3xyz.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#fff1f2; padding:15px; border-radius:5px; border-left:4px solid #be123c;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'>આપણે જાણીએ છીએ કે,<br>
                        <b>x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> - 3xyz = (x + y + z)(x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - xy - yz - zx)</b></p>
                        
                        <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'>પરંતુ પ્રશ્નમાં આપેલું છે કે <b>x + y + z = 0</b>. તેથી આ કિંમત સૂત્રમાં મૂકતાં:</p>
                        
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #fecdd3; font-family:monospace; font-size:15px;'>
                            x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> - 3xyz = <b>(0)</b> &times; (x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - xy - yz - zx)<br><br>
                            <span style='color:#64748b; font-size:13px;'>[કોઈપણ સંખ્યાનો શૂન્ય સાથેનો ગુણાકાર શૂન્ય જ થાય]</span><br>
                            &there4; x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> - 3xyz = 0<br><br>
                            <span style='color:#64748b; font-size:13px;'>[-3xyz ને બરાબરની જમણી બાજુ લઈ જતા તે પ્લસ (+) થઈ જશે]</span><br>
                            &there4; <b style='color:#be123c; font-size:16px;'>x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> = 3xyz</b> <span style='color:#881337;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ નિયમ ગોખી જ લો! જ્યારે પણ 3 સંખ્યાઓનો <b>સરવાળો 0 (શૂન્ય)</b> થતો હોય, ત્યારે તેમના ઘનનો સરવાળો હંમેશા તેમના <b>ગુણાકારથી 3 ગણો (3xyz)</b> જ થાય! આ શોર્ટકટ હવે પછીના પ્રશ્નમાં ડાયરેક્ટ વાપરવાનો છે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 14",
                "marks": 3,
                "question": "ઘનનું મૂલ્ય મેળવ્યા સિવાય નીચેના દરેકની કિંમત મેળવો:\n(i) (-12)³ + (7)³ + (5)³\n(ii) (28)³ + (-15)³ + (-13)³", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        
                        <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border-left:4px solid #16a34a; min-width:350px;'>
                            <h4 style='color:#14532d; margin:0 0 8px 0;'>(i) (-12)<sup>3</sup> + (7)<sup>3</sup> + (5)<sup>3</sup></h4>
                            <div style='font-size:14px; color:#334155; line-height:1.6;'>
                                ધારો કે x = -12, y = 7, z = 5<br>
                                અહીં x + y + z = -12 + 7 + 5 = -12 + 12 = <b>0</b><br>
                                <span style='color:#15803d; font-weight:bold;'>સરવાળો 0 હોવાથી પ્રશ્ન 13 ના નિયમ મુજબ: x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> = 3xyz થાય.</span><br>
                                = 3 &times; (-12) &times; (7) &times; (5)<br>
                                = -36 &times; 35<br>
                                = <b style='color:#16a34a; font-size:18px;'>-1260</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #0284c7; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(ii) (28)<sup>3</sup> + (-15)<sup>3</sup> + (-13)<sup>3</sup></h4>
                            <div style='font-size:14px; color:#334155; line-height:1.6;'>
                                ધારો કે x = 28, y = -15, z = -13<br>
                                અહીં x + y + z = 28 + (-15) + (-13) = 28 - 28 = <b>0</b><br>
                                <span style='color:#0284c7; font-weight:bold;'>સરવાળો 0 હોવાથી: x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> = 3xyz થાય.</span><br>
                                = 3 &times; (28) &times; (-15) &times; (-13)<br>
                                <span style='color:#64748b; font-size:12px;'>[બે માઇનસ નો ગુણાકાર પ્લસ થાય: (-15 &times; -13) = 195]</span><br>
                                = 84 &times; 195<br>
                                = <b style='color:#0284c7; font-size:18px;'>16380</b>
                            </div>
                        </div>
                        
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 15",
                "marks": 3,
                "question": "નીચે લંબચોરસનાં ક્ષેત્રફળ આપેલ છે, તેમની સંભવિત લંબાઈ અને પહોળાઈ શોધો:\n(i) ક્ષેત્રફળ: 25a² - 35a + 12\n(ii) ક્ષેત્રફળ: 35y² + 13y - 12", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#ffedd5; padding:15px; border-radius:8px; border:1px dashed #ea580c; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#9a3412; font-weight:bold; font-size:15px;'>લંબચોરસનું ક્ષેત્રફળ = લંબાઈ &times; પહોળાઈ</p>
                        <svg width="240" height="120" xmlns="http://www.w3.org/2000/svg">
                            <rect x="20" y="20" width="200" height="80" fill="#fefce8" stroke="#ca8a04" stroke-width="3"/>
                            <text x="120" y="65" fill="#a16207" font-size="16" font-weight="bold" text-anchor="middle">ક્ષેત્રફળ</text>
                            <text x="120" y="115" fill="#ca8a04" font-size="14" font-weight="bold" text-anchor="middle">લંબાઈ (l)</text>
                            <text x="10" y="65" fill="#ca8a04" font-size="14" font-weight="bold" transform="rotate(-90 10,65)" text-anchor="middle">પહોળાઈ (b)</text>
                        </svg>
                        <p style='margin:10px 0 0 0; font-size:14px; color:#c2410c;'>આથી આપણે આપેલી દ્વિઘાત બહુપદીના બે અવયવ (લંબાઈ અને પહોળાઈ) પાડવા પડશે.</p>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(i) 25a<sup>2</sup> - 35a + 12</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર: 25 &times; 12 = 300, સરવાળો: -35 (અવયવો: -20 અને -15)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7; font-family:monospace; font-size:14px;'>
                                = 25a<sup>2</sup> - 20a - 15a + 12<br>
                                = 5a(5a - 4) - 3(5a - 4)<br>
                                = (5a - 4)(5a - 3)<br>
                                <span style='color:#16a34a; font-weight:bold;'>&there4; લંબાઈ = (5a - 3) અને પહોળાઈ = (5a - 4) </span><br>
                                <span style='color:#64748b; font-size:12px;'>(નોંધ: મોટા પદને લંબાઈ ગણી શકાય).</span>
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(ii) 35y<sup>2</sup> + 13y - 12</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર: 35 &times; -12 = -420, બાદબાકી: 13 (અવયવો: 28 અને -15)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7; font-family:monospace; font-size:14px;'>
                                = 35y<sup>2</sup> + 28y - 15y - 12<br>
                                = 7y(5y + 4) - 3(5y + 4)<br>
                                = (5y + 4)(7y - 3)<br>
                                <span style='color:#16a34a; font-weight:bold;'>&there4; લંબાઈ = (5y + 4) અને પહોળાઈ = (7y - 3)</span>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 16",
                "marks": 3,
                "question": "નીચે લંબઘનનાં ઘનફળ આપેલ છે, તેમનાં શક્ય પરિમાણ (લંબાઈ, પહોળાઈ અને ઊંચાઈ) શોધો:\n(i) ઘનફળ: 3x² - 12x\n(ii) ઘનફળ: 12ky² + 8ky - 20k", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#e0f2fe; padding:15px; border-radius:8px; border:1px dashed #0284c7; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#0369a1; font-weight:bold; font-size:15px;'>લંબઘનનું ઘનફળ = લંબાઈ &times; પહોળાઈ &times; ઊંચાઈ</p>
                        <svg width="200" height="140" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="60,30 160,30 160,90 60,90" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <line x1="20" y1="60" x2="60" y2="30" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <line x1="20" y1="120" x2="60" y2="90" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <polygon points="20,60 120,60 120,120 20,120" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            <line x1="120" y1="60" x2="160" y2="30" stroke="#0284c7" stroke-width="2"/>
                            <line x1="120" y1="120" x2="160" y2="90" stroke="#0284c7" stroke-width="2"/>
                            <polygon points="120,60 160,30 160,90 120,120" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
                            <polygon points="20,60 60,30 160,30 120,60" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            
                            <text x="70" y="95" fill="#0369a1" font-size="14" font-weight="bold">ઘનફળ</text>
                            <text x="70" y="135" fill="#0284c7" font-size="12" font-weight="bold">લંબાઈ</text>
                            <text x="-5" y="95" fill="#0284c7" font-size="12" font-weight="bold">ઊંચાઈ</text>
                            <text x="145" y="120" fill="#0284c7" font-size="12" font-weight="bold">પહોળાઈ</text>
                        </svg>
                        <p style='margin:10px 0 0 0; font-size:14px; color:#0c4a6e;'>આથી આપણે આપેલી બહુપદીમાંથી 3 અવયવો (l, b અને h) છૂટા પાડવાના છે.</p>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(i) 3x<sup>2</sup> - 12x</h4>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bbf7d0; font-family:monospace; font-size:14px;'>
                                <span style='color:#64748b; font-size:12px;'>[બંને પદોમાંથી 3x સામાન્ય કાઢતાં]</span><br>
                                = 3x (x - 4)<br>
                                = (3) &times; (x) &times; (x - 4)<br>
                                <span style='color:#16a34a; font-weight:bold;'>&there4; શક્ય પરિમાણો: 3, x અને (x - 4) છે.</span>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(ii) 12ky<sup>2</sup> + 8ky - 20k</h4>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bbf7d0; font-family:monospace; font-size:14px;'>
                                <span style='color:#64748b; font-size:12px;'>[બધા પદોમાંથી 4k સામાન્ય કાઢતાં]</span><br>
                                = 4k [ 3y<sup>2</sup> + 2y - 5 ]<br>
                                <span style='color:#64748b; font-size:12px;'>[હવે કૌંસના અવયવ પાડો: ગુણાકાર -15, બાદબાકી 2]</span><br>
                                = 4k [ 3y<sup>2</sup> + 5y - 3y - 5 ]<br>
                                = 4k [ y(3y + 5) - 1(3y + 5) ]<br>
                                = 4k [ (3y + 5)(y - 1) ]<br>
                                = (4k) &times; (3y + 5) &times; (y - 1)<br>
                                <span style='color:#16a34a; font-weight:bold;'>&there4; શક્ય પરિમાણો: 4k, (3y + 5) અને (y - 1) છે.</span>
                            </div>
                        </div>
                    </div>
                </div>`
                }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 3: યામ ભૂમિતિ (સ્વાધ્યાય)
    // ------------------------------------
    "3": {
        "chapterName": "પ્રકરણ 3",
        "chapterTitle": "યામ ભૂમિતિ (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 3.1 - પ્રશ્ન 1",
                "marks": 2,
                "question": "બીજી કોઈ વ્યક્તિને તમારા અભ્યાસ કરવાના ટેબલ પર મૂકેલા ટેબલ લૅમ્પનું સ્થાન કેવી રીતે વર્ણવશો?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>સમજૂતી:</b> ટેબલને આપણે એક <b>સમતલ (Plane)</b> તરીકે અને ટેબલ લૅમ્પને એક <b>બિંદુ (Point)</b> તરીકે લઈશું.</p>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>ટેબલ અને લૅમ્પની આકૃતિ</p>
                        <svg viewBox="0 0 400 250" style="width:100%; min-width:320px; max-width:400px;" xmlns="http://www.w3.org/2000/svg">
                            <rect x="40" y="20" width="320" height="180" fill="#fef3c7" stroke="#d97706" stroke-width="4" rx="10"/>
                            <text x="200" y="18" fill="#b45309" font-size="14" font-weight="bold" text-anchor="middle">લાંબી ધાર (x-અક્ષ)</text>
                            <text x="25" y="110" fill="#b45309" font-size="14" font-weight="bold" transform="rotate(-90 25,110)" text-anchor="middle">ટૂંકી ધાર (y-અક્ષ)</text>
                            
                            <circle cx="40" cy="200" r="5" fill="#1e3a8a"/>
                            <text x="20" y="215" fill="#1e3a8a" font-size="14" font-weight="bold">O</text>
                            
                            <circle cx="160" cy="110" r="12" fill="#ef4444"/>
                            <circle cx="160" cy="110" r="6" fill="#fca5a5"/>
                            <text x="175" y="105" fill="#b91c1c" font-size="14" font-weight="bold">લૅમ્પ P (25, 30)</text>
                            
                            <line x1="40" y1="110" x2="160" y2="110" stroke="#0284c7" stroke-width="2" stroke-dasharray="5,5"/>
                            <line x1="160" y1="200" x2="160" y2="110" stroke="#16a34a" stroke-width="2" stroke-dasharray="5,5"/>
                            
                            <text x="100" y="100" fill="#0284c7" font-size="14" font-weight="bold" text-anchor="middle">30 cm</text>
                            <text x="170" y="160" fill="#16a34a" font-size="14" font-weight="bold">25 cm</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <ul style='margin:0; padding-left:20px; font-size:15px; color:#14532d; line-height:1.6;'>
                            <li>ટેબલની કોઈપણ બે લંબ (કાટખૂણે રહેલી) ધાર પસંદ કરો. દા.ત. ડાબી બાજુની ટૂંકી ધાર અને નીચેની લાંબી ધાર.</li>
                            <li>ધારો કે લૅમ્પનું ડાબી બાજુની ટૂંકી ધારથી અંતર માપતાં <b>30 cm</b> મળે છે.</li>
                            <li>અને લૅમ્પનું નીચેની લાંબી ધારથી અંતર માપતાં <b>25 cm</b> મળે છે.</li>
                            <li>આથી, જો આપણે નીચેની ધારને x-અક્ષ અને ડાબી ધારને y-અક્ષ માનીએ, તો લૅમ્પનું સ્થાન <b>(25, 30)</b> અથવા (30, 25) કહી શકાય (કઈ ધારને x-અક્ષ માની છે તેના પર આધાર રાખે છે).</li>
                        </ul>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ બીજું કઈ નહિ પણ <b>GPS લોકેશન</b> જ છે! જેમ નકશામાં અક્ષાંશ અને રેખાંશથી ચોક્કસ જગ્યા મળે, તેમ ટેબલ પર બે લાઈનોથી લૅમ્પનું ચોક્કસ લોકેશન (યામ) મળી જાય. (x, y) એટલે (નીચેથી અંતર, ડાબી બાજુથી અંતર).</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 3.1 - પ્રશ્ન 2",
                "marks": 4,
                "question": "શેરીનો નકશો (Street Plan): એક શહેરના બે મુખ્ય રસ્તાઓ શહેરના કેન્દ્ર આગળ એકબીજાને છેદે છે. આ બે રસ્તાઓ ઉત્તર-દક્ષિણ દિશાઓ અને પૂર્વ-પશ્ચિમ દિશાઓમાં છે. શહેરની બાકીની બધી શેરીઓ આ રસ્તાઓની સમાંતરે છે અને પરસ્પર 200 મીટર દૂર છે. દરેક દિશામાં 5 શેરીઓ છે. 1 cm = 200 m માપ લઈ તમારી નોટબુકમાં શહેરનું આદર્શ ચિત્ર દોરો.\n(i) કેટલી છેદતી શેરીઓનું નામાભિધાન (4, 3) તરીકે થઈ શકે?\n(ii) કેટલી છેદતી શેરીઓનું નામાભિધાન (3, 4) તરીકે થઈ શકે?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>શહેરનો નકશો (Street Plan Model)</p>
                        <svg viewBox="-20 -20 380 380" style="width:100%; min-width:320px; max-width:400px; background-color:#ffffff; border:1px solid #e2e8f0;" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                    <path d="M0,0 L0,6 L9,3 z" fill="#0f172a" />
                                </marker>
                            </defs>
                            
                            <line x1="0" y1="300" x2="350" y2="300" stroke="#0f172a" stroke-width="3" marker-end="url(#arrow)"/>
                            <line x1="50" y1="350" x2="50" y2="0" stroke="#0f172a" stroke-width="3" marker-end="url(#arrow)"/>
                            
                            <text x="320" y="320" fill="#0f172a" font-size="12" font-weight="bold">પૂર્વ (E)</text>
                            <text x="-15" y="305" fill="#0f172a" font-size="12" font-weight="bold">પશ્ચિમ (W)</text>
                            <text x="55" y="10" fill="#0f172a" font-size="12" font-weight="bold">ઉત્તર (N)</text>
                            <text x="55" y="360" fill="#0f172a" font-size="12" font-weight="bold">દક્ષિણ (S)</text>
                            <text x="35" y="315" fill="#0f172a" font-size="12" font-weight="bold">C</text>
                            
                            <line x1="50" y1="250" x2="350" y2="250" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="50" y1="200" x2="350" y2="200" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="50" y1="150" x2="350" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="50" y1="100" x2="350" y2="100" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="50" y1="50" x2="350" y2="50" stroke="#94a3b8" stroke-width="1.5"/>
                            
                            <text x="15" y="254" fill="#64748b" font-size="10">શેરી 1</text>
                            <text x="15" y="204" fill="#64748b" font-size="10">શેરી 2</text>
                            <text x="15" y="154" fill="#64748b" font-size="10">શેરી 3</text>
                            <text x="15" y="104" fill="#64748b" font-size="10">શેરી 4</text>
                            <text x="15" y="54" fill="#64748b" font-size="10">શેરી 5</text>
                            
                            <line x1="100" y1="300" x2="100" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="150" y1="300" x2="150" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="200" y1="300" x2="200" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="250" y1="300" x2="250" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
                            <line x1="300" y1="300" x2="300" y2="0" stroke="#94a3b8" stroke-width="1.5"/>
                            
                            <text x="85" y="320" fill="#64748b" font-size="10">શેરી 1</text>
                            <text x="135" y="320" fill="#64748b" font-size="10">શેરી 2</text>
                            <text x="185" y="320" fill="#64748b" font-size="10">શેરી 3</text>
                            <text x="235" y="320" fill="#64748b" font-size="10">શેરી 4</text>
                            <text x="285" y="320" fill="#64748b" font-size="10">શેરી 5</text>
                            
                            <circle cx="250" cy="150" r="6" fill="#be123c"/>
                            <text x="260" y="145" fill="#be123c" font-size="12" font-weight="bold">(4, 3)</text>
                            
                            <circle cx="200" cy="100" r="6" fill="#1d4ed8"/>
                            <text x="210" y="95" fill="#1d4ed8" font-size="12" font-weight="bold">(3, 4)</text>
                        </svg>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:12px;'>
                        <p style='margin:0 0 5px 0; font-size:15px; color:#334155;'><b>જવાબો:</b></p>
                        
                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(i) કેટલી છેદતી શેરીઓનું નામાભિધાન (4, 3) તરીકે થઈ શકે?</h4>
                            <p style='margin:0; font-size:14px; color:#9f1239;'>ઉત્તર-દક્ષિણ દિશાની ચોથી (4) શેરી અને પૂર્વ-પશ્ચિમ દિશાની ત્રીજી (3) શેરી માત્ર એક જ બિંદુમાં છેદે છે. તેથી, <b>માત્ર 1 (એક અને માત્ર એક જ)</b> છેદતી શેરીનું નામાભિધાન (4, 3) તરીકે થઈ શકે.</p>
                        </div>

                        <div style='background-color:#eff6ff; padding:12px; border-left:4px solid #1d4ed8; border-radius:5px;'>
                            <h4 style='color:#1e3a8a; margin:0 0 5px 0;'>(ii) કેટલી છેદતી શેરીઓનું નામાભિધાન (3, 4) તરીકે થઈ શકે?</h4>
                            <p style='margin:0; font-size:14px; color:#1e40af;'>ઉત્તર-દક્ષિણ દિશાની ત્રીજી (3) શેરી અને પૂર્વ-પશ્ચિમ દિશાની ચોથી (4) શેરી પણ માત્ર એક જ બિંદુમાં છેદે છે. તેથી, <b>માત્ર 1 (એક અને માત્ર એક જ)</b> છેદતી શેરીનું નામાભિધાન (3, 4) તરીકે થઈ શકે.</p>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આખા ગ્રાફમાં કોઈપણ યામ (x, y) હંમેશા <b>અનન્ય (Unique)</b> જ હોય છે! એક નામનું એક જ ઘર હોય! તેથી આવા પ્રશ્નનો જવાબ હંમેશા <b>"માત્ર એક જ"</b> આવે. (4, 3) અને (3, 4) બંને તદ્દન અલગ જગ્યાઓ છે, તે ક્યારેય એક ન હોઈ શકે.</p>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 3.2 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નીચેના દરેક પ્રશ્નનો જવાબ આપો:\n(i) યામ સમતલમાં કોઈ પણ બિંદુ દર્શાવવા ઉપયોગમાં લેવાતી સમક્ષિતિજ અને શિરોલંબ રેખાઓનાં નામ શું છે?\n(ii) આ બે રેખાઓથી બનતા સમતલના દરેક ભાગનું નામ શું છે?\n(iii) આ બે રેખાઓ જ્યાં છેદે છે તે બિંદુનું નામ લખો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:12px;'>
                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 5px 0; font-size:15px;'>(i) સમક્ષિતિજ અને શિરોલંબ રેખાઓનાં નામ:</h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>
                                &bull; <b>સમક્ષિતિજ (આડી) રેખા:</b> તેને <b style='color:#0284c7;'>x-અક્ષ (X-axis)</b> કહે છે.<br>
                                &bull; <b>શિરોલંબ (ઊભી) રેખા:</b> તેને <b style='color:#be123c;'>y-અક્ષ (Y-axis)</b> કહે છે.
                            </p>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0; font-size:15px;'>(ii) સમતલના દરેક ભાગનું નામ:</h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>
                                આ બે રેખાઓ સમતલને 4 સરખા ભાગમાં વહેંચે છે. તે દરેક ભાગને <b style='color:#16a34a;'>ચરણ (Quadrant)</b> અથવા <b>પાદ</b> કહે છે. (પ્રથમ, દ્વિતીય, તૃતીય અને ચતુર્થ ચરણ).
                            </p>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0; font-size:15px;'>(iii) બે રેખાઓના છેદબિંદુનું નામ:</h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>
                                જ્યાં x-અક્ષ અને y-અક્ષ એકબીજાને છેદે છે (ભેગા થાય છે), તે બિંદુને <b style='color:#be123c;'>ઉગમબિંદુ (Origin)</b> કહે છે. તેને 'O' વડે દર્શાવાય છે અને તેના યામ <b>(0, 0)</b> હોય છે.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>શબ્દોમાં કન્ફ્યુઝન ન થાય તે માટે ટૂંકમાં યાદ રાખો: <br>
                    &bull; <b>આડી લાઈન = x-અક્ષ</b> (જેમ આપણે સૂતા હોઈએ)<br>
                    &bull; <b>ઊભી લાઈન = y-અક્ષ</b> (જેમ આપણે ઊભા હોઈએ)<br>
                    &bull; <b>ચોકડી = ઉગમબિંદુ</b> (બિંદુ ઝીરો ઝીરો!)</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 3.2 - પ્રશ્ન 2",
                "marks": 5,
                "question": "પાઠ્યપુસ્તકની આકૃતિ જુઓ અને નીચેના પ્રશ્નોના જવાબ લખો:\n(i) બિંદુ B ના યામ જણાવો.\n(ii) બિંદુ C ના યામ જણાવો.\n(iii) (-3, -5) દ્વારા દર્શાવાતું બિંદુ લખો.\n(iv) (2, -4) દ્વારા દર્શાવાતું બિંદુ લખો.\n(v) બિંદુ D નો x-યામ (કોટિ) જણાવો.\n(vi) બિંદુ H નો y-યામ (ભુજ) જણાવો.\n(vii) બિંદુ L ના યામ જણાવો.\n(viii) બિંદુ M ના યામ જણાવો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:20px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>યામ સમતલ (Cartesian Plane)</p>
                        <svg viewBox="-20 -20 340 340" style="width:100%; min-width:320px; max-width:400px; background-color:#ffffff; border:1px solid #e2e8f0;" xmlns="http://www.w3.org/2000/svg">
                            
                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="1"/>
                            </pattern>
                            <rect width="300" height="300" fill="url(#grid)" />
                            
                            <line x1="0" y1="150" x2="300" y2="150" stroke="#0f172a" stroke-width="2"/>
                            <line x1="150" y1="0" x2="150" y2="300" stroke="#0f172a" stroke-width="2"/>
                            
                            <polygon points="300,146 306,150 300,154" fill="#0f172a"/>
                            <text x="310" y="154" fill="#0f172a" font-size="12" font-weight="bold">X</text>
                            <polygon points="0,146 -6,150 0,154" fill="#0f172a"/>
                            <text x="-15" y="154" fill="#0f172a" font-size="12" font-weight="bold">X'</text>
                            
                            <polygon points="146,0 150,-6 154,0" fill="#0f172a"/>
                            <text x="156" y="-10" fill="#0f172a" font-size="12" font-weight="bold">Y</text>
                            <polygon points="146,300 150,306 154,300" fill="#0f172a"/>
                            <text x="156" y="315" fill="#0f172a" font-size="12" font-weight="bold">Y'</text>
                            
                            <text x="166" y="165" fill="#475569" font-size="10">1</text>
                            <text x="186" y="165" fill="#475569" font-size="10">2</text>
                            <text x="206" y="165" fill="#475569" font-size="10">3</text>
                            <text x="226" y="165" fill="#475569" font-size="10">4</text>
                            <text x="246" y="165" fill="#475569" font-size="10">5</text>
                            <text x="266" y="165" fill="#475569" font-size="10">6</text>
                            
                            <text x="123" y="165" fill="#475569" font-size="10">-1</text>
                            <text x="103" y="165" fill="#475569" font-size="10">-2</text>
                            <text x="83" y="165" fill="#475569" font-size="10">-3</text>
                            <text x="63" y="165" fill="#475569" font-size="10">-4</text>
                            <text x="43" y="165" fill="#475569" font-size="10">-5</text>
                            <text x="23" y="165" fill="#475569" font-size="10">-6</text>
                            
                            <text x="135" y="133" fill="#475569" font-size="10">1</text>
                            <text x="135" y="113" fill="#475569" font-size="10">2</text>
                            <text x="135" y="93" fill="#475569" font-size="10">3</text>
                            <text x="135" y="73" fill="#475569" font-size="10">4</text>
                            <text x="135" y="53" fill="#475569" font-size="10">5</text>
                            <text x="135" y="33" fill="#475569" font-size="10">6</text>
                            
                            <text x="130" y="173" fill="#475569" font-size="10">-1</text>
                            <text x="130" y="193" fill="#475569" font-size="10">-2</text>
                            <text x="130" y="213" fill="#475569" font-size="10">-3</text>
                            <text x="130" y="233" fill="#475569" font-size="10">-4</text>
                            <text x="130" y="253" fill="#475569" font-size="10">-5</text>
                            <text x="130" y="273" fill="#475569" font-size="10">-6</text>
                            
                            <text x="135" y="165" fill="#0f172a" font-size="12" font-weight="bold">O</text>
                            
                            <polyline points="50,150 50,110 150,110" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,4"/> <polyline points="150,250 250,250 250,150" fill="none" stroke="#be123c" stroke-width="1.5" stroke-dasharray="4,4"/> <polyline points="270,150 270,110 150,110" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,4"/> <polyline points="90,150 90,250 150,250" fill="none" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4,4"/> <polyline points="190,150 190,230 150,230" fill="none" stroke="#9333ea" stroke-width="1.5" stroke-dasharray="4,4"/> <polyline points="50,150 50,210 150,210" fill="none" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4,4"/> <circle cx="50" cy="110" r="4" fill="#0284c7"/>
                            <text x="35" y="105" fill="#0284c7" font-size="14" font-weight="bold">B</text>
                            
                            <circle cx="250" cy="250" r="4" fill="#be123c"/>
                            <text x="260" y="260" fill="#be123c" font-size="14" font-weight="bold">C</text>
                            
                            <circle cx="270" cy="110" r="4" fill="#16a34a"/>
                            <text x="280" y="105" fill="#16a34a" font-size="14" font-weight="bold">D</text>
                            
                            <circle cx="90" cy="250" r="4" fill="#ea580c"/>
                            <text x="75" y="260" fill="#ea580c" font-size="14" font-weight="bold">E</text>
                            
                            <circle cx="190" cy="230" r="4" fill="#9333ea"/>
                            <text x="200" y="240" fill="#9333ea" font-size="14" font-weight="bold">G</text>
                            
                            <circle cx="50" cy="210" r="4" fill="#d97706"/>
                            <text x="35" y="220" fill="#d97706" font-size="14" font-weight="bold">H</text>
                            
                            <circle cx="150" cy="50" r="4" fill="#0f172a"/>
                            <text x="160" y="55" fill="#0f172a" font-size="14" font-weight="bold">L</text>
                            
                            <circle cx="90" cy="150" r="4" fill="#0f172a"/>
                            <text x="85" y="140" fill="#0f172a" font-size="14" font-weight="bold">M</text>
                            
                        </svg>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:10px;'>
                        <p style='margin:0 0 5px 0; font-size:15px; color:#334155; font-weight:bold;'>આકૃતિ પરથી જવાબો:</p>
                        
                        <div style='display:flex; flex-wrap:wrap; gap:10px;'>
                            <div style='flex:1; min-width:250px; background-color:#f0f9ff; padding:10px; border-radius:5px; border-left:4px solid #0284c7;'>
                                <h4 style='color:#0c4a6e; margin:0 0 5px 0; font-size:14px;'>(i) બિંદુ B ના યામ:</h4>
                                <p style='margin:0; font-size:14px; color:#0369a1;'>x-અક્ષ પર -5 અને y-અક્ષ પર 2 છે. તેથી યામ <b>(-5, 2)</b> મળે.</p>
                            </div>
                            
                            <div style='flex:1; min-width:250px; background-color:#fff1f2; padding:10px; border-radius:5px; border-left:4px solid #be123c;'>
                                <h4 style='color:#881337; margin:0 0 5px 0; font-size:14px;'>(ii) બિંદુ C ના યામ:</h4>
                                <p style='margin:0; font-size:14px; color:#9f1239;'>x-અક્ષ પર 5 અને y-અક્ષ પર -5 છે. તેથી યામ <b>(5, -5)</b> મળે.</p>
                            </div>

                            <div style='flex:1; min-width:250px; background-color:#fff7ed; padding:10px; border-radius:5px; border-left:4px solid #ea580c;'>
                                <h4 style='color:#9a3412; margin:0 0 5px 0; font-size:14px;'>(iii) (-3, -5) વાળું બિંદુ:</h4>
                                <p style='margin:0; font-size:14px; color:#c2410c;'>x-અક્ષ પર -3 અને y-અક્ષ પર -5 વાળું બિંદુ <b>E</b> છે.</p>
                            </div>

                            <div style='flex:1; min-width:250px; background-color:#faf5ff; padding:10px; border-radius:5px; border-left:4px solid #9333ea;'>
                                <h4 style='color:#6b21a8; margin:0 0 5px 0; font-size:14px;'>(iv) (2, -4) વાળું બિંદુ:</h4>
                                <p style='margin:0; font-size:14px; color:#7e22ce;'>x-અક્ષ પર 2 અને y-અક્ષ પર -4 વાળું બિંદુ <b>G</b> છે.</p>
                            </div>

                            <div style='flex:1; min-width:250px; background-color:#f0fdf4; padding:10px; border-radius:5px; border-left:4px solid #16a34a;'>
                                <h4 style='color:#14532d; margin:0 0 5px 0; font-size:14px;'>(v) બિંદુ D નો x-યામ (કોટિ):</h4>
                                <p style='margin:0; font-size:14px; color:#15803d;'>બિંદુ D ના યામ (6, 2) છે. તેથી તેનો x-યામ <b>6</b> છે.</p>
                            </div>

                            <div style='flex:1; min-width:250px; background-color:#fef3c7; padding:10px; border-radius:5px; border-left:4px solid #d97706;'>
                                <h4 style='color:#b45309; margin:0 0 5px 0; font-size:14px;'>(vi) બિંદુ H નો y-યામ (ભુજ):</h4>
                                <p style='margin:0; font-size:14px; color:#b45309;'>બિંદુ H ના યામ (-5, -3) છે. તેથી તેનો y-યામ <b>-3</b> છે.</p>
                            </div>

                            <div style='flex:1; min-width:250px; background-color:#f8fafc; padding:10px; border-radius:5px; border-left:4px solid #475569;'>
                                <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:14px;'>(vii) બિંદુ L ના યામ:</h4>
                                <p style='margin:0; font-size:14px; color:#334155;'>બિંદુ L માત્ર y-અક્ષ પર છે, તેનો x-યામ શૂન્ય થાય. તેથી યામ <b>(0, 5)</b> મળે.</p>
                            </div>

                            <div style='flex:1; min-width:250px; background-color:#f8fafc; padding:10px; border-radius:5px; border-left:4px solid #475569;'>
                                <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:14px;'>(viii) બિંદુ M ના યામ:</h4>
                                <p style='margin:0; font-size:14px; color:#334155;'>બિંદુ M માત્ર x-અક્ષ પર છે, તેનો y-યામ શૂન્ય થાય. તેથી યામ <b>(-3, 0)</b> મળે.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>બે મહત્વની વાતો ગોખી લો:<br>
                    1) <b>x-યામ ને 'કોટિ'</b> કહેવાય અને <b>y-યામ ને 'ભુજ'</b> કહેવાય. આ હેતુલક્ષી પ્રશ્નોમાં અવારનવાર પૂછાય છે.<br>
                    2) જો બિંદુ <b>x-અક્ષ પર બેઠું હોય</b>, તો તેનો y-યામ હંમેશા શૂન્ય <b>(x, 0)</b> જ હોય. અને જો બિંદુ <b>y-અક્ષ પર બેઠું હોય</b>, તો તેનો x-યામ હંમેશા શૂન્ય <b>(0, y)</b> જ હોય!</p>
                </div>`
            }  
        ]
    },
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 4: દ્વિચલ સુરેખ સમીકરણો (સ્વાધ્યાય)
    // ------------------------------------
    "4": {
        "chapterName": "પ્રકરણ 4",
        "chapterTitle": "દ્વિચલ સુરેખ સમીકરણો (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 4.1 - પ્રશ્ન 1",
                "marks": 2,
                "question": "નોટબુકની કિંમત પેનની કિંમત કરતાં બમણી છે. આ વિધાનને દ્વિચલ સુરેખ સમીકરણ સ્વરૂપે દર્શાવો. (ધારો કે નોટબુકની કિંમત ₹ x અને પેનની કિંમત ₹ y છે.)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 8px 0; font-size:15px; color:#0c4a6e;'>પ્રશ્નમાં આપ્યા મુજબ:</p>
                        <ul style='margin:0 0 10px 0; padding-left:20px; font-size:14px; color:#334155; line-height:1.6;'>
                            <li>ધારો કે નોટબુકની કિંમત = <b>₹ x</b></li>
                            <li>ધારો કે પેનની કિંમત = <b>₹ y</b></li>
                        </ul>
                    </div>
                    
                    <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#1e3a8a; font-weight:bold;'>શરત મુજબ: નોટબુકની કિંમત = 2 &times; (પેનની કિંમત)</p>
                        <div style='font-family:monospace; font-size:16px; color:#0f172a; text-align:center; padding:10px; background-color:#ffffff; border-radius:5px; border:1px dashed #94a3b8;'>
                            &there4; x = 2y<br>
                            <span style='color:#64748b; font-size:13px;'>[2y ને બરાબરની ડાબી બાજુ લાવતાં નિશાની માઇનસ થશે]</span><br>
                            &there4; <b style='color:#16a34a; font-size:18px;'>x - 2y = 0</b>
                        </div>
                        <p style='margin:10px 0 0 0; font-size:14px; color:#334155;'>આ માંગેલું દ્વિચલ સુરેખ સમીકરણ છે.</p>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>ગાણિતિક કૂટપ્રશ્નોમાં <b>જેની પાછળ 'કરતાં', 'થી' અથવા 'ના' શબ્દ લાગેલો હોય</b>, ગુણાકાર હંમેશા તેની સાથે જ કરવો! <br>
                    અહીં "પેનની કિંમત <b>કરતાં</b>" લખ્યું છે, એટલે પેનની કિંમત (y) ને જ 2 વડે ગુણવાના. એટલે સમીકરણ સીધું જ <b>x = 2y</b> બની જશે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 4.1 - પ્રશ્ન 2",
                "marks": 4,
                "question": "નીચે દર્શાવેલા દ્વિચલ સુરેખ સમીકરણોને ax + by + c = 0 સ્વરૂપે દર્શાવો અને દરેકમાં a, b અને c ની કિંમત શોધો:\n(i) 2x + 3y = 9.35̅\n(ii) x - y/5 - 10 = 0\n(iii) -2x + 3y = 6\n(iv) x = 3y\n(v) 2x = -5y\n(vi) 3x + 2 = 0\n(vii) y - 2 = 0\n(viii) 5 = 2x", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>નિયમ: સમીકરણને પ્રમાણિત સ્વરૂપ <span style='color:#be123c;'>ax + by + c = 0</span> માં ફેરવવા માટે, બરાબર (=) ની જમણી બાજુ 0 લાવવો પડે. (બધા જ પદો ડાબી બાજુ લાવી દેવા).</p>
                    
                    <div style='overflow-x:auto;'>
                        <table style='width:100%; min-width:600px; border-collapse:collapse; text-align:center; font-size:15px;'>
                            <thead>
                                <tr style='background-color:#1e3a8a; color:#ffffff;'>
                                    <th style='padding:12px; border:1px solid #cbd5e1;'>ક્રમ</th>
                                    <th style='padding:12px; border:1px solid #cbd5e1;'>આપેલ સમીકરણ</th>
                                    <th style='padding:12px; border:1px solid #cbd5e1;'>ax + by + c = 0 સ્વરૂપ</th>
                                    <th style='padding:12px; border:1px solid #cbd5e1; color:#fde047;'>a (x નો સહગુણક)</th>
                                    <th style='padding:12px; border:1px solid #cbd5e1; color:#fde047;'>b (y નો સહગુણક)</th>
                                    <th style='padding:12px; border:1px solid #cbd5e1; color:#fde047;'>c (અચળ પદ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(i)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>2x + 3y = 9.3<span style='text-decoration:overline;'>5</span></td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>2x + 3y - 9.3<span style='text-decoration:overline;'>5</span> = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>3</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-9.3<span style='text-decoration:overline;'>5</span></td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(ii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>x - <div style='display:inline-block; vertical-align:middle;'><div style='border-bottom:1px solid #000;'>y</div><div>5</div></div> - 10 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>1x - <div style='display:inline-block; vertical-align:middle;'><div style='border-bottom:1px solid #0284c7;'>1</div><div>5</div></div>y - 10 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>1</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-1/5</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-10</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(iii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>-2x + 3y = 6</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>-2x + 3y - 6 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>3</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-6</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(iv)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>x = 3y</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>1x - 3y + 0 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>1</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-3</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>0</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(v)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>2x = -5y</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>2x + 5y + 0 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>5</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>0</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(vi)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>3x + 2 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>3x + 0y + 2 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>3</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>2</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(vii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>y - 2 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>0x + 1y - 2 = 0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>1</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-2</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(viii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>5 = 2x</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#0284c7;'>-2x + 0y + 5 = 0 <br><span style='font-size:12px; font-weight:normal; color:#64748b;'>(અથવા 2x + 0y - 5 = 0)</span></td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>-2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>0</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>$a, b$ અને $c$ શોધવા બહુ જ સરળ છે! <br>
                    &bull; જે <b>x</b> ની સાથે ચોંટેલો હોય તે <b style='color:#be123c;'>a</b><br>
                    &bull; જે <b>y</b> ની સાથે ચોંટેલો હોય તે <b style='color:#be123c;'>b</b><br>
                    &bull; અને જે એકલો (અચળ) હોય તે <b style='color:#be123c;'>c</b><br>
                    <b>ખાસ નોંધ:</b> જો કોઈ પદ સમીકરણમાં ગાયબ હોય (જેમ કે દાખલા vi માં y નથી), તો તેનો સહગુણક સીધો <b>0 (શૂન્ય)</b> લખી દેવો અને જો પદ છે પણ આગળ કોઈ અંક નથી (જેમ કે દાખલા ii માં x છે), તો તેનો સહગુણક <b>1</b> ગણાય!</p>
                </div>`
            },

            { 
                "questionNumber": "સ્વાધ્યાય 4.2 - પ્રશ્ન 1",
                "marks": 2,
                "question": "નીચેના પૈકી કયો વિકલ્પ સાચો છે અને શા માટે?\ny = 3x + 5 ને\n(i) અનન્ય ઉકેલ હોય.\n(ii) માત્ર બે ઉકેલ હોય.\n(iii) અનંત ઉકેલ હોય.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                        <h4 style='color:#14532d; margin:0 0 10px 0; font-size:16px;'>સાચો વિકલ્પ: (iii) અનંત ઉકેલ હોય.</h4>
                        
                        <p style='margin:0 0 10px 0; font-size:15px; color:#166534;'><b>કારણ:</b> દ્વિચલ સુરેખ સમીકરણ $y = 3x + 5$ માં, $x$ ની કોઈપણ કિંમત મૂકવાથી આપણને $y$ ની અનુરૂપ નવી કિંમત મળે છે. $x$ ની કિંમતો અનંત હોઈ શકે, તેથી તેના ઉકેલો પણ અનંત મળે છે.</p>
                        
                        <div style='text-align:center; overflow-x:auto; background-color:#ffffff; padding:15px; border-radius:8px; border:1px dashed #22c55e; margin-top:15px;'>
                            <p style='margin:0 0 10px 0; color:#15803d; font-weight:bold; font-size:14px;'>આલેખ પર સમજૂતી (રેખા પર અસંખ્ય બિંદુઓ હોય છે)</p>
                            <svg width="300" height="150" xmlns="http://www.w3.org/2000/svg">
                                <line x1="20" y1="120" x2="280" y2="120" stroke="#94a3b8" stroke-width="2"/>
                                <line x1="150" y1="10" x2="150" y2="140" stroke="#94a3b8" stroke-width="2"/>
                                
                                <line x1="50" y1="140" x2="250" y2="20" stroke="#0284c7" stroke-width="3"/>
                                
                                <circle cx="83.3" cy="120" r="4" fill="#be123c"/>
                                <circle cx="116.6" cy="100" r="4" fill="#be123c"/>
                                <circle cx="150" cy="80" r="4" fill="#be123c"/>
                                <circle cx="183.3" cy="60" r="4" fill="#be123c"/>
                                <circle cx="216.6" cy="40" r="4" fill="#be123c"/>
                                
                                <text x="170" y="30" fill="#0284c7" font-weight="bold" font-size="14">y = 3x + 5</text>
                                <text x="80" y="80" fill="#be123c" font-size="12">અનંત બિંદુઓ</text>
                                
                                <path d="M 250 20 L 240 15 L 245 25 z" fill="#0284c7"/>
                                <path d="M 50 140 L 60 145 L 55 135 z" fill="#0284c7"/>
                            </svg>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 4.2 - પ્રશ્ન 2",
                "marks": 4,
                "question": "નીચેનાં પૈકી પ્રત્યેક સમીકરણના ચાર ઉકેલ લખો:\n(i) 2x + y = 7\n(ii) πx + y = 9\n(iii) x = 4y", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>સમજૂતી: સમીકરણમાંથી કોઈ એક ચલ (x અથવા y) ને કર્તા બનાવીશું અને બીજા ચલની 4 અલગ-અલગ કિંમતો (જેમ કે 0, 1, 2, 3) ધારીશું.</p>

                    <div style='display:flex; flex-direction:column; gap:20px;'>
                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 10px 0;'>(i) 2x + y = 7</h4>
                            <p style='margin:0 0 8px 0; font-size:14px; color:#334155;'>અહીં $y$ ને કર્તા બનાવવું સહેલું છે: <b style='color:#0284c7;'>y = 7 - 2x</b></p>
                            <ul style='font-size:14px; color:#475569; padding-left:20px; line-height:1.6;'>
                                <li>જો x = 0 લઈએ, તો y = 7 - 2(0) = <b>7</b> &rarr; ઉકેલ (0, 7)</li>
                                <li>જો x = 1 લઈએ, તો y = 7 - 2(1) = 7 - 2 = <b>5</b> &rarr; ઉકેલ (1, 5)</li>
                                <li>જો x = 2 લઈએ, તો y = 7 - 2(2) = 7 - 4 = <b>3</b> &rarr; ઉકેલ (2, 3)</li>
                                <li>જો x = 3 લઈએ, તો y = 7 - 2(3) = 7 - 6 = <b>1</b> &rarr; ઉકેલ (3, 1)</li>
                            </ul>
                            <div style='overflow-x:auto; margin-top:10px;'>
                                <table style='width:100%; min-width:300px; border-collapse:collapse; text-align:center;'>
                                    <tr style='background-color:#bae6fd; color:#0369a1; font-weight:bold;'>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>x</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>0</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>1</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>2</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>3</td>
                                    </tr>
                                    <tr style='background-color:#ffffff;'>
                                        <td style='padding:8px; border:1px solid #7dd3fc; font-weight:bold; color:#0369a1;'>y</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>7</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>5</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>3</td>
                                        <td style='padding:8px; border:1px solid #7dd3fc;'>1</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 10px 0;'>(ii) &pi;x + y = 9</h4>
                            <p style='margin:0 0 8px 0; font-size:14px; color:#334155;'>અહીં પણ $y$ ને કર્તા બનાવીએ: <b style='color:#16a34a;'>y = 9 - &pi;x</b></p>
                            <ul style='font-size:14px; color:#475569; padding-left:20px; line-height:1.6;'>
                                <li>જો x = 0 લઈએ, તો y = 9 - &pi;(0) = <b>9</b> &rarr; ઉકેલ (0, 9)</li>
                                <li>જો x = 1 લઈએ, તો y = 9 - &pi;(1) = <b>9 - &pi;</b> &rarr; ઉકેલ (1, 9 - &pi;)</li>
                                <li>જો x = 2 લઈએ, તો y = 9 - &pi;(2) = <b>9 - 2&pi;</b> &rarr; ઉકેલ (2, 9 - 2&pi;)</li>
                                <li>જો x = -1 લઈએ, તો y = 9 - &pi;(-1) = <b>9 + &pi;</b> &rarr; ઉકેલ (-1, 9 + &pi;)</li>
                            </ul>
                            <div style='overflow-x:auto; margin-top:10px;'>
                                <table style='width:100%; min-width:300px; border-collapse:collapse; text-align:center;'>
                                    <tr style='background-color:#bbf7d0; color:#14532d; font-weight:bold;'>
                                        <td style='padding:8px; border:1px solid #86efac;'>x</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>0</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>1</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>2</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>-1</td>
                                    </tr>
                                    <tr style='background-color:#ffffff;'>
                                        <td style='padding:8px; border:1px solid #86efac; font-weight:bold; color:#14532d;'>y</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>9</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>9 - &pi;</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>9 - 2&pi;</td>
                                        <td style='padding:8px; border:1px solid #86efac;'>9 + &pi;</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 10px 0;'>(iii) x = 4y</h4>
                            <p style='margin:0 0 8px 0; font-size:14px; color:#334155;'>અહીં $x$ પહેલાથી જ કર્તા છે. તેથી આપણે $y$ ની કિંમતો ધારીશું: <b style='color:#be123c;'>x = 4y</b></p>
                            <ul style='font-size:14px; color:#475569; padding-left:20px; line-height:1.6;'>
                                <li>જો y = 0 લઈએ, તો x = 4(0) = <b>0</b> &rarr; ઉકેલ (0, 0)</li>
                                <li>જો y = 1 લઈએ, તો x = 4(1) = <b>4</b> &rarr; ઉકેલ (4, 1)</li>
                                <li>જો y = 2 લઈએ, તો x = 4(2) = <b>8</b> &rarr; ઉકેલ (8, 2)</li>
                                <li>જો y = 3 લઈએ, તો x = 4(3) = <b>12</b> &rarr; ઉકેલ (12, 3)</li>
                            </ul>
                            <div style='overflow-x:auto; margin-top:10px;'>
                                <table style='width:100%; min-width:300px; border-collapse:collapse; text-align:center;'>
                                    <tr style='background-color:#fecdd3; color:#881337; font-weight:bold;'>
                                        <td style='padding:8px; border:1px solid #fda4af;'>x</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>0</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>4</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>8</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>12</td>
                                    </tr>
                                    <tr style='background-color:#ffffff;'>
                                        <td style='padding:8px; border:1px solid #fda4af; font-weight:bold; color:#881337;'>y</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>0</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>1</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>2</td>
                                        <td style='padding:8px; border:1px solid #fda4af;'>3</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>ઉકેલ શોધતી વખતે કયો ચલ ધરવો તેમાં મુંઝવણ થાય છે? સિમ્પલ છે! જે ચલની સાથે કોઈ સહગુણક ન હોય (એટલે કે જે એકલો હોય), તેને કર્તા બનાવી લો અને બીજા ચલની કિંમત <b>0, 1, 2, 3</b> ધારી લો. ગણતરી સાવ સરળ થઈ જશે અને ભાગાકાર નહિ કરવો પડે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 4.2 - પ્રશ્ન 3",
                "marks": 3,
                "question": "નીચેનામાંથી કયાં બિંદુઓ સમીકરણ x - 2y = 4 ના ઉકેલ છે અને કયાં બિંદુઓ ઉકેલ નથી તે ચકાસો:\n(i) (0, 2)\n(ii) (2, 0)\n(iii) (4, 0)\n(iv) (√2, 4√2)\n(v) (1, 1)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>રીત: દરેક બિંદુના યામ (x, y) ને સમીકરણની ડાબી બાજુ (LHS = x - 2y) માં મૂકીશું. જો જવાબ 4 આવે (RHS), તો ઉકેલ છે, નહિ તો નથી.</p>

                    <div style='display:flex; flex-direction:column; gap:10px; overflow-x:auto;'>
                        
                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(i) (0, 2) માટે:</h4>
                            <div style='font-size:14px; color:#4c0519;'>
                                અહીં x = 0 અને y = 2.<br>
                                ડા.બા. = x - 2y = (0) - 2(2) = 0 - 4 = -4<br>
                                અહીં -4 &ne; 4 હોવાથી, <b style='color:#be123c; font-size:15px;'>(0, 2) એ ઉકેલ નથી.</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(ii) (2, 0) માટે:</h4>
                            <div style='font-size:14px; color:#4c0519;'>
                                અહીં x = 2 અને y = 0.<br>
                                ડા.બા. = x - 2y = (2) - 2(0) = 2 - 0 = 2<br>
                                અહીં 2 &ne; 4 હોવાથી, <b style='color:#be123c; font-size:15px;'>(2, 0) એ ઉકેલ નથી.</b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(iii) (4, 0) માટે:</h4>
                            <div style='font-size:14px; color:#064e3b;'>
                                અહીં x = 4 અને y = 0.<br>
                                ડા.બા. = x - 2y = (4) - 2(0) = 4 - 0 = 4<br>
                                અહીં 4 = 4 હોવાથી, <b style='color:#16a34a; font-size:15px;'>(4, 0) એ સમીકરણનો ઉકેલ છે!</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) (&radic;2, 4&radic;2) માટે:</h4>
                            <div style='font-size:14px; color:#4c0519;'>
                                અહીં x = &radic;2 અને y = 4&radic;2.<br>
                                ડા.બા. = x - 2y = (&radic;2) - 2(4&radic;2) = &radic;2 - 8&radic;2 = -7&radic;2<br>
                                અહીં -7&radic;2 &ne; 4 હોવાથી, <b style='color:#be123c; font-size:15px;'>(&radic;2, 4&radic;2) એ ઉકેલ નથી.</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(v) (1, 1) માટે:</h4>
                            <div style='font-size:14px; color:#4c0519;'>
                                અહીં x = 1 અને y = 1.<br>
                                ડા.બા. = x - 2y = (1) - 2(1) = 1 - 2 = -1<br>
                                અહીં -1 &ne; 4 હોવાથી, <b style='color:#be123c; font-size:15px;'>(1, 1) એ ઉકેલ નથી.</b>
                            </div>
                        </div>

                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ છે આપણી <b>"LHS = RHS ગેમ"</b>! ડાબી બાજુ x અને y ની કિંમત મૂકો. જો જવાબ જમણી બાજુ જેટલો જ (અહીં 4) આવે તો જ બિંદુ <b>પાસ</b> (ઉકેલ છે), નહિ તો <b>ફેલ</b> (ઉકેલ નથી)! હેતુલક્ષી પ્રશ્નમાં મનમાં જ ગણતરી કરી શકાય.</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 4.2 - પ્રશ્ન 4",
                "marks": 2,
                "question": "જો x = 2, y = 1 એ સમીકરણ 2x + 3y = k નો એક ઉકેલ હોય, તો k ની કિંમત શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0f9ff; padding:15px; border-radius:5px; border:1px solid #bae6fd;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0369a1;'><b>આપેલું સમીકરણ:</b> 2x + 3y = k</p>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'>અહીં (x = 2, y = 1) ઉકેલ હોવાથી, આપણે સમીકરણમાં x ની જગ્યાએ 2 અને y ની જગ્યાએ 1 મૂકીશું.</p>
                        
                        <div style='font-family:monospace; font-size:16px; color:#0f172a; text-align:center; padding:15px; background-color:#ffffff; border-radius:5px; border:1px dashed #0284c7;'>
                            2(2) + 3(1) = k<br><br>
                            &there4; 4 + 3 = k<br><br>
                            &there4; 7 = k<br><br>
                            <b style='color:#16a34a; font-size:20px;'>&there4; k = 7</b>
                        </div>
                        <p style='margin:10px 0 0 0; font-size:15px; color:#0369a1; text-align:center;'>આમ, માંગેલ k ની કિંમત <b>7</b> છે.</p>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવા દાખલા પરીક્ષા માટે <b>Free Marks</b> સમાન છે! k શોધવાનો હોય ત્યારે કોઈ સમીકરણ ઉકેલવાની જરૂર નથી, બસ આપેલી x અને y ની કિંમતો સીધી જ મૂકીને સાદું રૂપ આપી દો. 2 માર્ક્સ સીધા ખિસ્સામાં!</p>
                </div>`
            }
    
        
        ]
    },
        
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 5: યુક્લિડની ભૂમિતિનો પરિચય (સ્વાધ્યાય)
    // ------------------------------------
    "5": {
        "chapterName": "પ્રકરણ 5",
        "chapterTitle": "યુક્લિડની ભૂમિતિનો પરિચય (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 5.1 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નીચે આપેલાં વિધાનોમાંથી કયાં વિધાનો સત્ય છે અને કયાં વિધાનો અસત્ય છે ? તમારા જવાબ માટે કારણ આપો :\n(i) એક બિંદુમાંથી પસાર થતી માત્ર એક રેખા દોરી શકાય છે.\n(ii) બે ભિન્ન બિંદુઓમાંથી પસાર થતી અસંખ્ય રેખાઓ હોય છે.\n(iii) એક શાંત રેખાને બંને તરફ અનિશ્ચિત રીતે લંબાવી શકાય છે.\n(iv) જો બે વર્તુળ સમાન હોય, તો તેમની ત્રિજ્યાઓ સમાન હોય છે.\n(v) આકૃતિમાં, જો AB = PQ અને PQ = XY છે, તો AB = XY થાય.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        
                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(i) એક બિંદુમાંથી પસાર થતી માત્ર એક રેખા દોરી શકાય છે.</h4>
                            <p style='margin:0 0 10px 0; font-size:15px; color:#be123c; font-weight:bold;'>જવાબ: અસત્ય</p>
                            <p style='margin:0 0 10px 0; font-size:14px; color:#4c0519;'><b>કારણ:</b> કોઈ પણ એક બિંદુમાંથી અસંખ્ય (અનંત) રેખાઓ પસાર થઈ શકે છે.</p>
                            <div style='text-align:center; overflow-x:auto; background-color:#ffffff; padding:10px; border-radius:5px; border:1px dashed #fecdd3;'>
                                <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="75" x2="140" y2="75" stroke="#0284c7" stroke-width="2"/>
                                    <line x1="75" y1="10" x2="75" y2="140" stroke="#0284c7" stroke-width="2"/>
                                    <line x1="20" y1="20" x2="130" y2="130" stroke="#0284c7" stroke-width="2"/>
                                    <line x1="20" y1="130" x2="130" y2="20" stroke="#0284c7" stroke-width="2"/>
                                    <circle cx="75" cy="75" r="5" fill="#be123c"/>
                                    <text x="85" y="65" fill="#be123c" font-weight="bold">P</text>
                                </svg>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(ii) બે ભિન્ન બિંદુઓમાંથી પસાર થતી અસંખ્ય રેખાઓ હોય છે.</h4>
                            <p style='margin:0 0 10px 0; font-size:15px; color:#be123c; font-weight:bold;'>જવાબ: અસત્ય</p>
                            <p style='margin:0 0 10px 0; font-size:14px; color:#4c0519;'><b>કારણ:</b> યુક્લિડની પૂર્વધારણા 5.1 મુજબ, આપેલા બે ભિન્ન બિંદુઓમાંથી પસાર થતી એક અને <b>માત્ર એક જ (અનન્ય)</b> રેખા હોય છે.</p>
                            <div style='text-align:center; overflow-x:auto; background-color:#ffffff; padding:10px; border-radius:5px; border:1px dashed #fecdd3;'>
                                <svg width="250" height="60" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="30" x2="240" y2="30" stroke="#16a34a" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/>
                                    <circle cx="70" cy="30" r="5" fill="#1e3a8a"/>
                                    <text x="65" y="20" fill="#1e3a8a" font-weight="bold">A</text>
                                    <circle cx="180" cy="30" r="5" fill="#1e3a8a"/>
                                    <text x="175" y="20" fill="#1e3a8a" font-weight="bold">B</text>
                                    <defs>
                                        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                                            <path d="M0,0 L0,6 L6,3 z" fill="#16a34a" />
                                        </marker>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(iii) એક શાંત રેખાને બંને તરફ અનિશ્ચિત રીતે લંબાવી શકાય છે.</h4>
                            <p style='margin:0 0 10px 0; font-size:15px; color:#16a34a; font-weight:bold;'>જવાબ: સત્ય</p>
                            <p style='margin:0; font-size:14px; color:#14532d;'><b>કારણ:</b> યુક્લિડની પૂર્વધારણા 2 મુજબ, શાંત રેખા (જેને આપણે આજે <b>રેખાખંડ</b> કહીએ છીએ) તેને બંને તરફ અનંત સુધી લંબાવીને રેખા બનાવી શકાય છે.</p>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(iv) જો બે વર્તુળ સમાન હોય, તો તેમની ત્રિજ્યાઓ સમાન હોય છે.</h4>
                            <p style='margin:0 0 10px 0; font-size:15px; color:#16a34a; font-weight:bold;'>જવાબ: સત્ય</p>
                            <p style='margin:0; font-size:14px; color:#14532d;'><b>કારણ:</b> જો બે વર્તુળો સમાન (એકરૂપ) હોય, તો તે એકબીજા પર સંપૂર્ણપણે બંધબેસતા આવે છે. આથી તેમના કેન્દ્ર અને સીમાઓ એકરૂપ બને છે, પરિણામે તેમની ત્રિજ્યા પણ સમાન જ હોય.</p>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(v) જો AB = PQ અને PQ = XY છે, તો AB = XY થાય.</h4>
                            <p style='margin:0 0 10px 0; font-size:15px; color:#16a34a; font-weight:bold;'>જવાબ: સત્ય</p>
                            <p style='margin:0; font-size:14px; color:#14532d;'><b>કારણ:</b> યુક્લિડના સ્વયંસિદ્ધ સત્ય (1) મુજબ: "જે વસ્તુઓ કોઈ એક સમાન વસ્તુને સમાન હોય, તે વસ્તુઓ એકબીજાને પણ સમાન થાય." અહીં AB અને XY બંને PQ ને સમાન છે, તેથી તેઓ એકબીજાને સમાન થાય.</p>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 5.1 - પ્રશ્ન 2",
                "marks": 4,
                "question": "નીચે આપેલાં પદોની વ્યાખ્યા આપો. શું તેના માટે કોઈ એવા પદ છે જેને વ્યાખ્યાયિત કરવાની જરૂર છે ? એ કયા છે અને તમે તેને કેવી રીતે વ્યાખ્યાયિત કરશો ?\n(i) સમાંતર રેખાઓ\n(ii) લંબ રેખાઓ\n(iii) રેખાખંડ\n(iv) વર્તુળની ત્રિજ્યા\n(v) ચોરસ", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#fffbeb; padding:12px; border-radius:5px; border-left:4px solid #d97706; margin-bottom:15px;'>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#92400e;'><b>નોંધ:</b> આ વ્યાખ્યાઓ આપવા માટે આપણને બિંદુ, રેખા, કિરણ, ખૂણો, સમતલ વગેરે પદોની જરૂર પડે છે. આ પદોને <b>અવ્યાખ્યાયિત પદો</b> માનવામાં આવે છે, છતાં તેને સામાન્ય સમજણથી સમજી શકાય છે.</p>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f8fafc; padding:12px; border:1px solid #e2e8f0; border-radius:8px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0; font-size:16px;'>(i) સમાંતર રેખાઓ (Parallel Lines):</h4>
                            <div style='display:flex; flex-wrap:wrap; align-items:center; gap:15px;'>
                                <div style='flex:1; min-width:200px;'>
                                    <p style='margin:0; font-size:14px; color:#334155; line-height:1.6;'><b>વ્યાખ્યા:</b> એક જ સમતલમાં આવેલી બે રેખાઓ એકબીજાને ક્યારેય છેદે નહિ (ગમે તેટલી લંબાવવામાં આવે તો પણ), તો તે બે રેખાઓને સમાંતર રેખાઓ કહે છે.</p>
                                </div>
                                <div style='flex-shrink:0; background-color:#ffffff; padding:5px; border-radius:5px; border:1px dashed #cbd5e1;'>
                                    <svg width="150" height="60" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="10" y1="20" x2="140" y2="20" stroke="#0284c7" stroke-width="2"/>
                                        <line x1="10" y1="40" x2="140" y2="40" stroke="#0284c7" stroke-width="2"/>
                                        <text x="145" y="24" fill="#0284c7" font-size="12">m</text>
                                        <text x="145" y="44" fill="#0284c7" font-size="12">n</text>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border:1px solid #e2e8f0; border-radius:8px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0; font-size:16px;'>(ii) લંબ રેખાઓ (Perpendicular Lines):</h4>
                            <div style='display:flex; flex-wrap:wrap; align-items:center; gap:15px;'>
                                <div style='flex:1; min-width:200px;'>
                                    <p style='margin:0; font-size:14px; color:#334155; line-height:1.6;'><b>વ્યાખ્યા:</b> જો બે છેદતી રેખાઓ વચ્ચે બનતો ખૂણો <b>કાટખૂણો (90&deg;)</b> હોય, તો તે બે રેખાઓને લંબ રેખાઓ કહે છે.</p>
                                </div>
                                <div style='flex-shrink:0; background-color:#ffffff; padding:5px; border-radius:5px; border:1px dashed #cbd5e1;'>
                                    <svg width="150" height="100" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="20" y1="80" x2="130" y2="80" stroke="#16a34a" stroke-width="2"/>
                                        <line x1="75" y1="20" x2="75" y2="100" stroke="#16a34a" stroke-width="2"/>
                                        <polyline points="75,70 85,70 85,80" fill="none" stroke="#16a34a" stroke-width="1.5"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border:1px solid #e2e8f0; border-radius:8px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0; font-size:16px;'>(iii) રેખાખંડ (Line Segment):</h4>
                            <div style='display:flex; flex-wrap:wrap; align-items:center; gap:15px;'>
                                <div style='flex:1; min-width:200px;'>
                                    <p style='margin:0; font-size:14px; color:#334155; line-height:1.6;'><b>વ્યાખ્યા:</b> રેખાનો એવો ભાગ જેને બે અંત્યબિંદુઓ (End points) હોય છે, તેને રેખાખંડ કહે છે. તેની લંબાઈ ચોક્કસ માપી શકાય છે.</p>
                                </div>
                                <div style='flex-shrink:0; background-color:#ffffff; padding:5px; border-radius:5px; border:1px dashed #cbd5e1;'>
                                    <svg width="150" height="50" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="20" y1="25" x2="130" y2="25" stroke="#be123c" stroke-width="3"/>
                                        <circle cx="20" cy="25" r="4" fill="#be123c"/>
                                        <circle cx="130" cy="25" r="4" fill="#be123c"/>
                                        <text x="15" y="15" fill="#be123c" font-weight="bold">A</text>
                                        <text x="125" y="15" fill="#be123c" font-weight="bold">B</text>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border:1px solid #e2e8f0; border-radius:8px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0; font-size:16px;'>(iv) વર્તુળની ત્રિજ્યા (Radius):</h4>
                            <div style='display:flex; flex-wrap:wrap; align-items:center; gap:15px;'>
                                <div style='flex:1; min-width:200px;'>
                                    <p style='margin:0; font-size:14px; color:#334155; line-height:1.6;'><b>વ્યાખ્યા:</b> વર્તુળના કેન્દ્ર અને વર્તુળ પરના કોઈ પણ બિંદુને જોડતા રેખાખંડને વર્તુળની ત્રિજ્યા કહે છે.</p>
                                </div>
                                <div style='flex-shrink:0; background-color:#ffffff; padding:5px; border-radius:5px; border:1px dashed #cbd5e1;'>
                                    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="50" cy="50" r="40" fill="none" stroke="#ea580c" stroke-width="2"/>
                                        <circle cx="50" cy="50" r="3" fill="#ea580c"/>
                                        <line x1="50" y1="50" x2="90" y2="50" stroke="#ea580c" stroke-width="2"/>
                                        <text x="65" y="45" fill="#ea580c" font-weight="bold">r</text>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border:1px solid #e2e8f0; border-radius:8px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0; font-size:16px;'>(v) ચોરસ (Square):</h4>
                            <div style='display:flex; flex-wrap:wrap; align-items:center; gap:15px;'>
                                <div style='flex:1; min-width:200px;'>
                                    <p style='margin:0; font-size:14px; color:#334155; line-height:1.6;'><b>વ્યાખ્યા:</b> જે ચતુષ્કોણની ચારેય બાજુઓ સમાન હોય અને ચારેય ખૂણા કાટખૂણા (90&deg;) હોય, તેવા ચતુષ્કોણને ચોરસ કહે છે.</p>
                                </div>
                                <div style='flex-shrink:0; background-color:#ffffff; padding:5px; border-radius:5px; border:1px dashed #cbd5e1;'>
                                    <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="10" y="10" width="60" height="60" fill="none" stroke="#6d28d9" stroke-width="2"/>
                                        <polyline points="10,20 20,20 20,10" fill="none" stroke="#6d28d9" stroke-width="1"/>
                                        <polyline points="70,20 60,20 60,10" fill="none" stroke="#6d28d9" stroke-width="1"/>
                                        <polyline points="10,60 20,60 20,70" fill="none" stroke="#6d28d9" stroke-width="1"/>
                                        <polyline points="70,60 60,60 60,70" fill="none" stroke="#6d28d9" stroke-width="1"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 5.1 - પ્રશ્ન 3",
                "marks": 3,
                "question": "નીચે આપેલી બે પૂર્વધારણાઓનો વિચાર કરો:\n(i) જો બે ભિન્ન બિંદુઓ A અને B આપ્યા હોય, તો તેમની વચ્ચે હોય તેવું ત્રીજું બિંદુ C મળે.\n(ii) અહીં ઓછામાં ઓછા એવા ત્રણ બિંદુઓ મળે કે જે એક જ રેખા પર ન હોય.\nશું આ પૂર્વધારણાઓમાં કોઈ અવ્યાખ્યાયિત પદ છે ? શું આ પૂર્વધારણાઓ સુસંગત છે ? શું આ પૂર્વધારણાઓ યુક્લિડની પૂર્વધારણાઓમાંથી મળે છે ? સ્પષ્ટ કરો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <ul style='margin:0; padding-left:20px; font-size:15px; color:#334155; line-height:1.8;'>
                        <li><b>અવ્યાખ્યાયિત પદો:</b> હા, આ પૂર્વધારણાઓમાં 'બિંદુ' અને 'રેખા' જેવા પદો છે, જે ભૂમિતિમાં અવ્યાખ્યાયિત પદો માનવામાં આવે છે.</li>
                        
                        <li><b>સુસંગતતા:</b> હા, આ બંને પૂર્વધારણાઓ <b>સુસંગત (Consistent)</b> છે. કારણ કે બંને અલગ-અલગ પરિસ્થિતિઓ દર્શાવે છે અને એકબીજાનો વિરોધ કરતી નથી. 
                            <br>&bull; પહેલી પૂર્વધારણા કહે છે કે રેખાખંડ AB ની વચ્ચે બિંદુ C હોઈ શકે. 
                            <br>&bull; બીજી પૂર્વધારણા કહે છે કે સમતલમાં એવા બિંદુઓ પણ હોઈ શકે જે રેખા AB પર ન હોય (એટલે કે ત્રિકોણ બનાવી શકે).
                        </li>
                        
                        <li><b>યુક્લિડની પૂર્વધારણા સાથે સંબંધ:</b> ના, આ પૂર્વધારણાઓ સીધી રીતે યુક્લિડની પાંચ પૂર્વધારણાઓમાંથી મળતી <b>નથી</b>. પરંતુ, તે યુક્લિડના પૂર્વધારણા 5.1 (આપેલા બે ભિન્ન બિંદુઓમાંથી પસાર થતી અનન્ય રેખા હોય છે) સાથે સંબંધિત સ્વયંસિદ્ધ સત્યો પર આધારિત છે.</li>
                    </ul>
                </div>`
            },
               { 
                "questionNumber": "સ્વાધ્યાય 5.1 - પ્રશ્ન 4",
                "marks": 4,
                "question": "જો AC = BC થાય તેવું બિંદુ C, બિંદુઓ A અને B ની વચ્ચે હોય, તો સાબિત કરો કે AC = (1/2) AB છે. આકૃતિ દોરીને તેને સ્પષ્ટ કરો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg width="300" height="60" xmlns="http://www.w3.org/2000/svg">
                            <line x1="30" y1="30" x2="270" y2="30" stroke="#1e3a8a" stroke-width="3"/>
                            
                            <circle cx="30" cy="30" r="5" fill="#be123c"/>
                            <text x="25" y="20" fill="#be123c" font-weight="bold">A</text>
                            
                            <circle cx="150" cy="30" r="5" fill="#16a34a"/>
                            <text x="145" y="20" fill="#16a34a" font-weight="bold">C</text>
                            
                            <circle cx="270" cy="30" r="5" fill="#be123c"/>
                            <text x="265" y="20" fill="#be123c" font-weight="bold">B</text>
                            
                            <path d="M 30 45 Q 90 60 150 45" fill="none" stroke="#16a34a" stroke-width="2"/>
                            <path d="M 150 45 Q 210 60 270 45" fill="none" stroke="#16a34a" stroke-width="2"/>
                            
                            <text x="80" y="55" fill="#16a34a" font-size="12" font-weight="bold">AC</text>
                            <text x="200" y="55" fill="#16a34a" font-size="12" font-weight="bold">BC</text>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#0f172a; font-size:14px; font-weight:bold;'>અહીં AC અને BC બંને સમાન લંબાઈના છે.</p>
                    </div>

                    <div style='background-color:#f0f9ff; padding:15px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0369a1;'><b>સાબિતી:</b></p>
                        <div style='font-family:monospace; font-size:15px; color:#0c4a6e; line-height:1.8; margin-left:20px;'>
                            આપેલ છે કે: <b>AC = BC</b> ......(સમીકરણ 1)<br><br>
                            આપણે આકૃતિ પરથી સ્પષ્ટ જોઈ શકીએ છીએ કે બિંદુ C એ A અને B ની બરાબર વચ્ચે છે. તેથી, રેખાખંડ AB ના બે ટુકડા AC અને CB ભેગા મળીને આખો રેખાખંડ AB બનાવે છે.<br>
                            &there4; <b>AC + BC = AB</b><br><br>
                            હવે, સમીકરણ (1) મુજબ BC ની જગ્યાએ AC મૂકતાં:<br>
                            &there4; AC + AC = AB<br>
                            &there4; 2AC = AB<br><br>
                            &there4; <b style='color:#be123c; font-size:18px;'>AC = (1/2) AB</b> &nbsp;&nbsp;&nbsp; <span style='color:#16a34a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલો એટલું જ કહેવા માંગે છે કે <b>"અડધું + અડધું = આખું"</b>. જો એક લાકડીના બે એકસરખા ટુકડા કરીએ, તો કોઈ એક ટુકડો એ આખી લાકડી કરતાં અડધો (1/2) જ હોય!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 5.1 - પ્રશ્ન 5",
                "marks": 3,
                "question": "પ્રશ્ન 4 માં C રેખાખંડ AB નું મધ્યબિંદુ કહેવાય છે. સાબિત કરો કે દરેક રેખાખંડને એક અને માત્ર એક જ મધ્યબિંદુ હોય છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>સાબિતી: વિરોધાભાસની રીત (Method of Contradiction) દ્વારા</b></p>
                    
                    <div style='background-color:#f8fafc; padding:15px; border-left:4px solid #475569; border-radius:5px;'>
                        <ul style='margin:0; padding-left:20px; font-size:15px; color:#3f3f46; line-height:1.8;'>
                            <li>ધારો કે રેખાખંડ AB ને એક કરતાં વધુ, એટલે કે <b>બે અલગ-અલગ મધ્યબિંદુઓ C અને D</b> છે.</li>
                            <li>જો C મધ્યબિંદુ હોય, તો (પ્રશ્ન 4 મુજબ):<br>
                            <b>AC = (1/2) AB</b> ......(સમીકરણ 1)</li>
                            <li>તે જ રીતે, જો D પણ મધ્યબિંદુ હોય, તો:<br>
                            <b>AD = (1/2) AB</b> ......(સમીકરણ 2)</li>
                            <li>સમીકરણ 1 અને 2 ને સરખાવતાં (બંનેની જમણી બાજુ સમાન છે):<br>
                            <b style='color:#be123c;'>AC = AD</b></li>
                            <li>હવે, C અને D બિંદુઓ A અને B ની વચ્ચે જ છે. અને A થી C નું અંતર એ A થી D ના અંતર જેટલું જ છે. આ ત્યારે જ શક્ય બને જ્યારે <b>બિંદુ C અને બિંદુ D બંને એક જ જગ્યાએ હોય (એકબીજા પર સંપાતી હોય).</b></li>
                            <li>આમ, આપણી ધારણા (કે બે અલગ મધ્યબિંદુઓ છે) ખોટી પડે છે.</li>
                            <li><b>નિષ્કર્ષ:</b> તેથી સાબિત થાય છે કે કોઈપણ રેખાખંડને એક અને <b>માત્ર એક જ (અનન્ય)</b> મધ્યબિંદુ હોય છે.</li>
                        </ul>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 5.1 - પ્રશ્ન 6",
                "marks": 3,
                "question": "આકૃતિમાં જો AC = BD હોય, તો સાબિત કરો કે AB = CD.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f0fdf4; padding:15px; border-radius:8px; border:1px dashed #16a34a; margin-bottom:15px;'>
                        <svg width="400" height="80" xmlns="http://www.w3.org/2000/svg">
                            <line x1="30" y1="40" x2="370" y2="40" stroke="#16a34a" stroke-width="3"/>
                            
                            <circle cx="30" cy="40" r="5" fill="#be123c"/>
                            <text x="25" y="30" fill="#be123c" font-weight="bold">A</text>
                            
                            <circle cx="140" cy="40" r="5" fill="#1e3a8a"/>
                            <text x="135" y="30" fill="#1e3a8a" font-weight="bold">B</text>
                            
                            <circle cx="260" cy="40" r="5" fill="#1e3a8a"/>
                            <text x="255" y="30" fill="#1e3a8a" font-weight="bold">C</text>
                            
                            <circle cx="370" cy="40" r="5" fill="#be123c"/>
                            <text x="365" y="30" fill="#be123c" font-weight="bold">D</text>
                            
                            <path d="M 30 55 L 30 65 L 260 65 L 260 55" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="135" y="80" fill="#ea580c" font-size="14" font-weight="bold">AC</text>
                            
                            <path d="M 140 10 L 140 20 L 370 20 L 370 10" fill="none" stroke="#ea580c" stroke-width="2" transform="translate(0, -15)"/>
                            <text x="245" y="0" fill="#ea580c" font-size="14" font-weight="bold">BD</text>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:15px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-family:monospace; font-size:15px; color:#4c0519; line-height:1.8; margin-left:20px;'>
                            આપેલું છે કે: <br>
                            <b>AC = BD</b> ......(સમીકરણ 1)<br><br>
                            હવે આકૃતિ પરથી આપણે જોઈ શકીએ છીએ કે:<br>
                            AC એ બે ભાગનો બનેલો છે: <b>AC = AB + BC</b> ......(સમીકરણ 2)<br>
                            BD પણ બે ભાગનો બનેલો છે: <b>BD = BC + CD</b> ......(સમીકરણ 3)<br><br>
                            સમીકરણ (2) અને (3) ની કિંમતો સમીકરણ (1) માં મૂકતાં:<br>
                            &there4; <b>AB + BC = BC + CD</b><br><br>
                            યુક્લિડના સ્વયંસિદ્ધ સત્ય (3) મુજબ: "સરખામાંથી સરખું બાદ કરીએ તો શેષફળ સરખું રહે".<br>
                            અહીં બંને બાજુથી સામાન્ય ભાગ <b>BC</b> બાદ કરતાં:<br>
                            &there4; AB + BC - BC = BC + CD - BC<br>
                            &there4; <b style='color:#be123c; font-size:18px;'>AB = CD</b> &nbsp;&nbsp;&nbsp; <span style='color:#16a34a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>જ્યારે બે મોટા ટુકડા સમાન હોય, અને બંનેમાં કોઈ એક ભાગ <b>Common (સામાન્ય)</b> આવતો હોય, તો તે Common ભાગને હટાવી દેવાથી વધેલા બાકીના ટુકડા હંમેશા સમાન જ થાય. અહીં <b>BC</b> એ common ભાગ છે, જેને કાઢી નાખવાથી AB અને CD સમાન થઈ ગયા!</p>
                </div>`
            },
               { 
                "questionNumber": "સ્વાધ્યાય 5.1 - પ્રશ્ન 7",
                "marks": 2,
                "question": "યુક્લિડના સ્વયંસિદ્ધ સત્યોની યાદીમાં આપેલ સ્વયંસિદ્ધ સત્ય 5 એક સનાતન સત્ય (Universal Truth) કેમ મનાય છે ? (યાદ રાખો કે આ પ્રશ્ન પાંચમી પૂર્વધારણા સાથે સંકળાયેલ નથી).", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>યુક્લિડનું સ્વયંસિદ્ધ સત્ય 5: "આખું તેના ભાગ કરતાં મોટું હોય છે." (The whole is greater than the part).</b></p>
                        
                        <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'><b>કારણ:</b></p>
                        <ul style='margin:0; padding-left:20px; font-size:14px; color:#475569; line-height:1.6;'>
                            <li>આ વિધાન માત્ર ભૂમિતિ પૂરતું સીમિત નથી, પરંતુ દુનિયાની કોઈપણ વસ્તુ, જથ્થા કે પરિસ્થિતિ માટે સાચું છે.</li>
                            <li>ઉદાહરણ તરીકે: ભારત (આખું) એ ગુજરાત (ભાગ) કરતાં મોટું છે. એક આખું સફરજન તેના એક ટુકડા કરતાં મોટું જ હોય છે.</li>
                            <li>આથી, જે સત્ય દુનિયાના કોઈપણ ક્ષેત્રમાં, કોઈપણ સ્થળે અને સમયે સાચું ઠરતું હોય, તેને <b>સનાતન સત્ય (Universal Truth)</b> કહેવામાં આવે છે.</li>
                        </ul>
                    </div>
                </div>`
            }
        ]
    },

    
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 6: રેખાઓ અને ખૂણાઓ (સ્વાધ્યાય)
    // ------------------------------------
    "6": {
        "chapterName": "પ્રકરણ 6",
        "chapterTitle": "રેખાઓ અને ખૂણાઓ (સ્વાધ્યાય)",
        "qa_list": [
{ 
        "questionNumber": "સ્વાધ્યાય 6.1 - પ્રશ્ન 1",
        "marks": 3,
        "question": "આકૃતિમાં, રેખાઓ AB અને CD બિંદુ O માં છેદે છે. જો &ang;AOC + &ang;BOE = 70&deg; અને &ang;BOD = 40&deg; હોય, તો &ang;BOE અને વિપરીત &ang;COE શોધો.", 
        "answer": `
        <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
            
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>પ્રશ્નની આકૃતિ</p>
                <svg viewBox="0 0 300 260" style="width:100%; max-width:400px;" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowBlack" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                            <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                        </marker>
                    </defs>
                    
                    <!-- Line AB -->
                    <line x1="50" y1="150" x2="250" y2="150" stroke="#0f172a" stroke-width="2" marker-start="url(#arrowBlack)" marker-end="url(#arrowBlack)"/>
                    
                    <!-- Line CD (Angle 40 deg with AB) -->
                    <line x1="73.4" y1="85.7" x2="226.6" y2="214.3" stroke="#0f172a" stroke-width="2" marker-start="url(#arrowBlack)" marker-end="url(#arrowBlack)"/>
                    
                    <!-- Ray OE (Angle 30 deg with OB) -->
                    <line x1="150" y1="150" x2="236.6" y2="100.0" stroke="#0f172a" stroke-width="2" marker-end="url(#arrowBlack)"/>
                    
                    <!-- Angle Arc BOD = 40 deg -->
                    <path d="M 175.0 150.0 A 25 25 0 0 1 169.2 166.1" fill="none" stroke="#ea580c" stroke-width="2"/>
                    <text x="175" y="175" fill="#ea580c" font-size="12" font-weight="bold">40&deg;</text>

                    <!-- Angle Arc AOC = 40 deg (Vertically Opposite) -->
                    <path d="M 125.0 150.0 A 25 25 0 0 1 130.8 133.9" fill="none" stroke="#ea580c" stroke-width="2"/>
                    
                    <!-- Angle Arc BOE = 30 deg -->
                    <path d="M 185.0 150.0 A 35 35 0 0 0 180.3 132.5" fill="none" stroke="#047857" stroke-width="2"/>
                    <text x="195" y="140" fill="#047857" font-size="12" font-weight="bold">30&deg;</text>

                    <!-- Reflex Angle COE = 250 deg -->
                    <path d="M 189.0 127.5 A 45 45 0 1 1 115.5 121.1" fill="none" stroke="#be123c" stroke-width="1.5" stroke-dasharray="3,3"/>
                    <text x="110" y="210" fill="#be123c" font-size="12" font-weight="bold">વિપરીત (250&deg;)</text>

                    <!-- Points and Labels -->
                    <circle cx="150" cy="150" r="3" fill="#0f172a"/>
                    
                    <text x="45" y="145" fill="#be123c" font-weight="bold" font-size="15">A</text>
                    <text x="245" y="145" fill="#be123c" font-weight="bold" font-size="15">B</text>
                    <text x="65" y="80" fill="#1d4ed8" font-weight="bold" font-size="15">C</text>
                    <text x="230" y="230" fill="#1d4ed8" font-weight="bold" font-size="15">D</text>
                    <text x="245" y="100" fill="#16a34a" font-weight="bold" font-size="15">E</text>
                    <text x="145" y="170" fill="#0f172a" font-weight="bold" font-size="15">O</text>
                </svg>
            </div>

            <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                    રેખાઓ AB અને CD બિંદુ O માં છેદે છે.<br>
                    તેથી, <b>&ang;AOC = &ang;BOD</b> <span style='color:#64748b;'>(અભિકોણોની જોડ સમાન હોય)</span><br>
                    પરંતુ, &ang;BOD = 40&deg; આપેલ છે.<br>
                    &there4; <b>&ang;AOC = 40&deg;</b><br><br>
                    
                    હવે, રકમ મુજબ: &ang;AOC + &ang;BOE = 70&deg;<br>
                    &there4; 40&deg; + &ang;BOE = 70&deg;<br>
                    &there4; &ang;BOE = 70&deg; - 40&deg;<br>
                    &there4; <b style='color:#be123c; font-size:16px;'>&ang;BOE = 30&deg;</b> (આપણો પહેલો જવાબ)<br><br>
                    
                    હવે, રેખા AB પર આવેલા તમામ ખૂણાઓનો સરવાળો 180&deg; થાય (સરળકોણ / રૈખિક જોડ).<br>
                    &there4; &ang;AOC + &ang;COE + &ang;BOE = 180&deg;<br>
                    &there4; (&ang;AOC + &ang;BOE) + &ang;COE = 180&deg;<br>
                    &there4; 70&deg; + &ang;COE = 180&deg;<br>
                    &there4; &ang;COE = 180&deg; - 70&deg; = <b>110&deg;</b><br><br>
                    
                    આપણે <b>વિપરીત &ang;COE</b> શોધવાનો છે. (વિપરીત ખૂણો = 360&deg; - અંદરનો ખૂણો)<br>
                    &there4; વિપરીત &ang;COE = 360&deg; - 110&deg;<br>
                    &there4; <b style='color:#be123c; font-size:16px;'>વિપરીત &ang;COE = 250&deg;</b> (આપણો બીજો જવાબ)
                </div>
            </div>
        </div>
        
        <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
            <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
            <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવા દાખલામાં સૌથી પહેલા <b>X (ચોકડી)</b> ગોતો! જ્યાં ચોકડી પડે ત્યાં સામસામેના ખૂણા (અભિકોણો) સરખા જ હોય. અહીં AB અને CD ચોકડી બનાવે છે, તેથી નીચે 40&deg; તો ઉપર પણ 40&deg;. પછી સીધી લીટી (180&deg;) નો નિયમ વાપરો એટલે દાખલો તરત સોલ્વ!</p>
        </div>`
    },
          { 
        "questionNumber": "સ્વાધ્યાય 6.1 - પ્રશ્ન 2",
        "marks": 4,
        "question": "આકૃતિમાં, રેખાઓ XY અને MN બિંદુ O માં છેદે છે. જો &ang;POY = 90&deg; અને a : b = 2 : 3 હોય, તો c શોધો.", 
        "answer": `
        <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
            
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 300 240" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowBlack2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                            <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                        </marker>
                    </defs>
                    
                    <!-- Line XY -->
                    <line x1="30" y1="120" x2="270" y2="120" stroke="#0f172a" stroke-width="2.5" marker-start="url(#arrowBlack2)" marker-end="url(#arrowBlack2)"/>
                    
                    <!-- Line MN (At 54 degrees from negative x-axis) -->
                    <line x1="85.3" y1="31.0" x2="214.7" y2="209.0" stroke="#0f172a" stroke-width="2.5" marker-start="url(#arrowBlack2)" marker-end="url(#arrowBlack2)"/>
                    
                    <!-- Ray OP (Vertical) -->
                    <line x1="150" y1="120" x2="150" y2="30" stroke="#0f172a" stroke-width="2.5" marker-end="url(#arrowBlack2)"/>
                    
                    <!-- Right Angle Marker for POY -->
                    <polyline points="150,105 165,105 165,120" fill="#fefce8" stroke="#be123c" stroke-width="1.5"/>
                    
                    <!-- Angle Arc 'a' (POM = 36 deg) -->
                    <path d="M 129.4 91.7 A 35 35 0 0 1 150.0 85.0" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                    <text x="135" y="80" fill="#1d4ed8" font-weight="bold" font-size="16">a</text>
                    
                    <!-- Angle Arc 'b' (MOX = 54 deg) -->
                    <path d="M 120.0 120.0 A 30 30 0 0 1 132.4 95.7" fill="none" stroke="#16a34a" stroke-width="2"/>
                    <text x="110" y="105" fill="#16a34a" font-weight="bold" font-size="16">b</text>
                    
                    <!-- Angle Arc 'c' (XON = 126 deg) -->
                    <path d="M 125.0 120.0 A 25 25 0 0 0 164.7 140.2" fill="none" stroke="#ea580c" stroke-width="2"/>
                    <text x="135" y="150" fill="#ea580c" font-weight="bold" font-size="16">c</text>
                    
                    <!-- Points and Labels -->
                    <circle cx="150" cy="120" r="4" fill="#0f172a"/>
                    
                    <text x="25" y="112" fill="#0f172a" font-weight="bold" font-size="15">X</text>
                    <text x="265" y="112" fill="#0f172a" font-weight="bold" font-size="15">Y</text>
                    <text x="155" y="135" fill="#0f172a" font-weight="bold" font-size="15">O</text>
                    <text x="155" y="25" fill="#0f172a" font-weight="bold" font-size="15">P</text>
                    <text x="70" y="25" fill="#0f172a" font-weight="bold" font-size="15">M</text>
                    <text x="220" y="225" fill="#0f172a" font-weight="bold" font-size="15">N</text>
                </svg>
            </div>

            <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>ઉકેલ:</b></p>
                <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                    અહીં રેખા XY પર કિરણ OP આવેલું છે અને &ang;POY = 90&deg; છે.<br>
                    રૈખિક જોડના નિયમ મુજબ: &ang;POX + &ang;POY = 180&deg;<br>
                    &there4; &ang;POX + 90&deg; = 180&deg; &rArr; <b>&ang;POX = 90&deg;</b><br><br>
                    
                    હવે, આકૃતિ પરથી &ang;POX બે ખૂણાઓનો બનેલો છે: $a$ અને $b$.<br>
                    &there4; <b>a + b = 90&deg;</b><br>
                    આપણને ગુણોત્તર આપેલ છે: $a : b = 2 : 3$.<br>
                    ધારો કે $a = 2x$ અને $b = 3x$.<br>
                    &there4; $2x + 3x = 90&deg;$<br>
                    &there4; $5x = 90&deg;$ &rArr; $x = 18&deg;$<br><br>
                    
                    તેથી ખૂણાઓ મેળવીએ:<br>
                    $a = 2(18&deg;) = 36&deg;$<br>
                    <b style='color:#0f172a;'>$b = 3(18&deg;) = 54&deg;$</b><br><br>
                    
                    હવે આકૃતિમાં રેખા MN ને જુઓ. કિરણ OX તેના પર આવેલું છે.<br>
                    તેથી, $b$ અને $c$ રૈખિક જોડના ખૂણા બનાવે છે.<br>
                    &there4; $b + c = 180&deg;$<br>
                    &there4; $54&deg; + c = 180&deg;$<br>
                    &there4; $c = 180&deg; - 54&deg;$<br>
                    &there4; <b style='color:#be123c; font-size:18px;'>c = 126&deg;</b>
                </div>
            </div>
        </div>`
    },
            { 
                "questionNumber": "સ્વાધ્યાય 6.1 - પ્રશ્ન 3",
                "marks": 3,
                "question": "આકૃતિમાં, જો &ang;PQR = &ang;PRQ હોય, તો સાબિત કરો કે &ang;PQS = &ang;PRT.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 150" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="20" y1="120" x2="280" y2="120" stroke="#0f172a" stroke-width="2" marker-start="url(#arrowBlack3)" marker-end="url(#arrowBlack3)"/>
                            <polygon points="100,120 200,120 150,30" fill="none" stroke="#be123c" stroke-width="2"/>
                            
                            <text x="145" y="20" fill="#be123c" font-weight="bold">P</text>
                            <text x="95" y="140" fill="#be123c" font-weight="bold">Q</text>
                            <text x="195" y="140" fill="#be123c" font-weight="bold">R</text>
                            <text x="30" y="140" fill="#0f172a" font-weight="bold">S</text>
                            <text x="260" y="140" fill="#0f172a" font-weight="bold">T</text>
                            
                            <path d="M 115 120 A 15 15 0 0 0 110 100" fill="none" stroke="#16a34a" stroke-width="2"/>
                            <path d="M 185 120 A 15 15 0 0 1 190 100" fill="none" stroke="#16a34a" stroke-width="2"/>
                            
                            <defs>
                                <marker id="arrowBlack3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                    <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-family:monospace; font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            આકૃતિ પરથી સ્પષ્ટ છે કે ST એક સીધી રેખા છે.<br>
                            તેથી, &ang;PQS અને &ang;PQR રૈખિક જોડના ખૂણા બનાવે છે.<br>
                            &there4; <b>&ang;PQS + &ang;PQR = 180&deg;</b> ......(સમીકરણ 1)<br><br>
                            
                            તે જ રીતે, &ang;PRT અને &ang;PRQ પણ રૈખિક જોડના ખૂણા બનાવે છે.<br>
                            &there4; <b>&ang;PRT + &ang;PRQ = 180&deg;</b> ......(સમીકરણ 2)<br><br>
                            
                            સમીકરણ (1) અને (2) ની જમણી બાજુ (180&deg;) સમાન હોવાથી, ડાબી બાજુઓને સરખાવતાં:<br>
                            &there4; &ang;PQS + &ang;PQR = &ang;PRT + &ang;PRQ<br><br>
                            
                            પરંતુ, રકમમાં આપેલું છે કે <b>&ang;PQR = &ang;PRQ</b>.<br>
                            તેથી સમીકરણની બંને બાજુથી સમાન ખૂણાઓ ઉડી જશે.<br>
                            &there4; <b style='color:#be123c; font-size:16px;'>&ang;PQS = &ang;PRT</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>`
            },
      { 
        "questionNumber": "સ્વાધ્યાય 6.1 - પ્રશ્ન 4",
        "marks": 3,
        "question": "આકૃતિમાં, જો x + y = w + z હોય, તો સાબિત કરો કે AOB એક રેખા છે.", 
        "answer": `
        <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
            
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 300 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowBlack4" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                            <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                        </marker>
                    </defs>
                    
                    <!-- Line AOB -->
                    <line x1="30" y1="100" x2="270" y2="100" stroke="#0f172a" stroke-width="2.5" marker-start="url(#arrowBlack4)" marker-end="url(#arrowBlack4)"/>
                    
                    <!-- Ray OC (Top) -->
                    <line x1="150" y1="100" x2="190" y2="30.7" stroke="#0f172a" stroke-width="2.5" marker-end="url(#arrowBlack4)"/>
                    
                    <!-- Ray OD (Bottom) -->
                    <line x1="150" y1="100" x2="177.4" y2="175.2" stroke="#0f172a" stroke-width="2.5" marker-end="url(#arrowBlack4)"/>
                    
                    <!-- Angle Arc y (COA) -->
                    <path d="M 165.0 74.0 A 30 30 0 0 1 180.0 100.0" fill="none" stroke="#ea580c" stroke-width="2"/>
                    <text x="175" y="85" fill="#ea580c" font-weight="bold" font-size="16">y</text>
                    
                    <!-- Angle Arc x (BOC) -->
                    <path d="M 120.0 100.0 A 30 30 0 0 1 165.0 74.0" fill="none" stroke="#16a34a" stroke-width="2"/>
                    <text x="125" y="85" fill="#16a34a" font-weight="bold" font-size="16">x</text>
                    
                    <!-- Angle Arc z (AOD) -->
                    <path d="M 180.0 100.0 A 30 30 0 0 1 160.3 128.2" fill="none" stroke="#be123c" stroke-width="2"/>
                    <text x="175" y="125" fill="#be123c" font-weight="bold" font-size="16">z</text>
                    
                    <!-- Angle Arc w (DOB) -->
                    <path d="M 160.3 128.2 A 30 30 0 0 1 120.0 100.0" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                    <text x="125" y="125" fill="#1d4ed8" font-weight="bold" font-size="16">w</text>

                    <!-- Points and Labels -->
                    <circle cx="150" cy="100" r="4" fill="#0f172a"/>
                    
                    <text x="25" y="90" fill="#0f172a" font-weight="bold" font-size="15">B</text>
                    <text x="265" y="90" fill="#0f172a" font-weight="bold" font-size="15">A</text>
                    <text x="135" y="115" fill="#0f172a" font-weight="bold" font-size="15">O</text>
                    <text x="195" y="25" fill="#0f172a" font-weight="bold" font-size="15">C</text>
                    <text x="185" y="190" fill="#0f172a" font-weight="bold" font-size="15">D</text>
                </svg>
            </div>

            <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>સાબિતી:</b></p>
                <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                    આપણે જાણીએ છીએ કે બિંદુ O ની આસપાસ આવેલા તમામ ખૂણાઓનો (સંપૂર્ણ ખૂણાનો) સરવાળો 360&deg; થાય છે.<br>
                    &there4; <b>x + y + w + z = 360&deg;</b><br><br>
                    
                    રકમમાં આપેલું છે કે: <b>x + y = w + z</b><br>
                    તેથી, સમીકરણમાં (w + z) ની જગ્યાએ (x + y) મૂકી શકાય.<br>
                    &there4; (x + y) + (x + y) = 360&deg;<br>
                    &there4; 2(x + y) = 360&deg;<br>
                    &there4; x + y = 360&deg; / 2<br>
                    &there4; <b style='color:#be123c; font-size:16px;'>x + y = 180&deg;</b><br><br>
                    
                    અહીં, x અને y એ આસન્નકોણ (Adjacent angles) છે અને તેમનો સરવાળો 180&deg; થાય છે.<br>
                    જ્યારે બે આસન્નકોણનો સરવાળો 180&deg; થાય, ત્યારે તેમની સામાન્ય ન હોય તેવી બાજુઓ (OA અને OB) એક સીધી રેખા બનાવે છે <i>(રૈખિક જોડની પૂર્વધારણાનો પ્રતીપ)</i>.<br>
                    તેથી સાબિત થાય છે કે <b style='color:#16a34a;'>AOB એક સીધી રેખા છે.</b>
                </div>
            </div>
        </div>
        
        <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
            <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
            <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>કોઈપણ આકૃતિમાં જ્યારે બિંદુની ચારે બાજુના ખૂણાઓ આપ્યા હોય, ત્યારે આંખ બંધ કરીને <b>બધાનો સરવાળો = 360&deg;</b> મૂકી દેવો. પછી રકમમાં આપેલી શરત વાપરશો એટલે <b>2 વાર = 360</b> આવશે. બે ને સામે લઈ જઈને ભાગાકાર કરો એટલે <b>180&deg;</b> મળે. અને આપણને ખબર જ છે કે 180 નો ખૂણો એટલે <b>સીધી રેખા!</b></p>
        </div>`
    },
  { 
                "questionNumber": "સ્વાધ્યાય 6.1 - પ્રશ્ન 5",
                "marks": 4,
                "question": "આકૃતિમાં, POQ એક રેખા છે. કિરણ OR એ રેખા PQ ને લંબ છે. કિરણો OP અને OR ની વચ્ચે અન્ય એક કિરણ OS આવેલું છે. સાબિત કરો કે, &ang;ROS = 1/2 (&ang;QOS - &ang;POS).", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 180" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="20" y1="150" x2="280" y2="150" stroke="#0f172a" stroke-width="2" marker-start="url(#arrowBlack5)" marker-end="url(#arrowBlack5)"/>
                            <line x1="150" y1="150" x2="150" y2="30" stroke="#0f172a" stroke-width="2" marker-end="url(#arrowBlack5)"/>
                            <line x1="150" y1="150" x2="70" y2="60" stroke="#be123c" stroke-width="2" marker-end="url(#arrowBlack5)"/>
                            
                            <polyline points="150,140 160,140 160,150" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            
                            <text x="25" y="140" fill="#0f172a" font-weight="bold">P</text>
                            <text x="265" y="140" fill="#0f172a" font-weight="bold">Q</text>
                            <text x="145" y="165" fill="#0f172a" font-weight="bold">O</text>
                            <text x="155" y="25" fill="#0f172a" font-weight="bold">R</text>
                            <text x="60" y="55" fill="#be123c" font-weight="bold">S</text>
                            
                            <defs>
                                <marker id="arrowBlack5" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                    <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-family:monospace; font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            OR એ રેખા PQ ને લંબ છે, તેથી:<br>
                            &ang;ROQ = 90&deg; અને &ang;ROP = 90&deg;<br><br>
                            
                            આકૃતિ પરથી <b>&ang;ROS</b> ની કિંમત બે અલગ-અલગ રીતે લખી શકાય:<br>
                            <b>રીત 1 (ડાબી બાજુથી):</b><br>
                            &ang;ROS = &ang;ROP - &ang;POS<br>
                            &there4; <b>&ang;ROS = 90&deg; - &ang;POS</b> ......(સમીકરણ 1)<br><br>
                            
                            <b>રીત 2 (જમણી બાજુથી):</b><br>
                            &ang;ROS = &ang;QOS - &ang;ROQ<br>
                            &there4; <b>&ang;ROS = &ang;QOS - 90&deg;</b> ......(સમીકરણ 2)<br><br>
                            
                            સમીકરણ (1) અને (2) નો સરવાળો કરતાં:<br>
                            &ang;ROS + &ang;ROS = (90&deg; - &ang;POS) + (&ang;QOS - 90&deg;)<br>
                            <span style='color:#64748b; font-size:12px;'>[અહીં +90&deg; અને -90&deg; ઉડી જશે]</span><br>
                            &there4; 2(&ang;ROS) = &ang;QOS - &ang;POS<br><br>
                            
                            બે (2) ને જમણી બાજુ ભાગાકારમાં લઈ જતાં:<br>
                            &there4; <b style='color:#be123c; font-size:16px;'>&ang;ROS = &frac12; (&ang;QOS - &ang;POS)</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ <b>V.V.I.M.P.</b> સાબિતી યાદ રાખવાની સૌથી સહેલી રીત: જે ખૂણો ડાબી બાજુ માંગ્યો છે (ROS), તેને એકવાર <b>મોટા ખૂણામાંથી બાદ કરીને</b> લખો અને બીજી વાર <b>નાના ખૂણામાંથી બાદ કરીને</b> લખો. પછી બંનેનો સરવાળો કરશો એટલે સીધો 90&deg; ઉડી જશે અને જવાબ આવી જશે!</p>
                </div>`
            },
       { 
        "questionNumber": "સ્વાધ્યાય 6.1 - પ્રશ્ન 6",
        "marks": 4,
        "question": "આપેલ છે કે &ang;XYZ = 64&deg; અને XY ને બિંદુ P સુધી લંબાવેલ છે. આપેલ માહિતી પરથી આકૃતિ દોરો. જો કિરણ YQ એ &ang;ZYP નો દ્વિભાજક હોય, તો &ang;XYQ અને વિપરીત &ang;QYP શોધો.", 
        "answer": `
        <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>માહિતી પરથી દોરેલી આકૃતિ</p>
                <svg viewBox="0 0 300 210" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowBlack6" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                            <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                        </marker>
                    </defs>
                    
                    <!-- Line PYX -->
                    <line x1="50" y1="130" x2="250" y2="130" stroke="#0f172a" stroke-width="2.5" marker-start="url(#arrowBlack6)" marker-end="url(#arrowBlack6)"/>
                    
                    <!-- Ray YZ (At 64 deg from YX) -->
                    <line x1="150" y1="130" x2="193.8" y2="40.1" stroke="#0f172a" stroke-width="2.5" marker-end="url(#arrowBlack6)"/>
                    
                    <!-- Ray YQ (Bisector of ZYP, so at 122 deg from YX) -->
                    <line x1="150" y1="130" x2="97.0" y2="45.2" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#arrowBlack6)"/>
                    
                    <!-- Angle Arc XYZ = 64 deg -->
                    <path d="M 180.0 130.0 A 30 30 0 0 0 163.2 103.0" fill="none" stroke="#ea580c" stroke-width="2"/>
                    <text x="175" y="115" fill="#ea580c" font-size="13" font-weight="bold">64&deg;</text>
                    
                    <!-- Angle Arcs for Bisector (ZYQ and QYP = 58 deg) -->
                    <path d="M 167.5 94.0 A 40 40 0 0 0 128.8 96.1" fill="none" stroke="#16a34a" stroke-width="2"/>
                    <text x="135" y="90" fill="#16a34a" font-size="12" font-weight="bold">58&deg;</text>
                    
                    <path d="M 128.8 96.1 A 40 40 0 0 0 110.0 130.0" fill="none" stroke="#16a34a" stroke-width="2"/>
                    <text x="100" y="110" fill="#16a34a" font-size="12" font-weight="bold">58&deg;</text>

                    <!-- Reflex Angle QYP (302 deg) -->
                    <path d="M 105.0 130.0 A 45 45 0 1 0 126.2 91.8" fill="none" stroke="#be123c" stroke-width="1.5" stroke-dasharray="3,3"/>
                    <text x="125" y="195" fill="#be123c" font-size="12" font-weight="bold">વિપરીત (302&deg;)</text>

                    <!-- Points and Labels -->
                    <circle cx="150" cy="130" r="4" fill="#0f172a"/>
                    
                    <text x="45" y="145" fill="#0f172a" font-weight="bold" font-size="15">P</text>
                    <text x="145" y="150" fill="#0f172a" font-weight="bold" font-size="15">Y</text>
                    <text x="245" y="145" fill="#0f172a" font-weight="bold" font-size="15">X</text>
                    <text x="200" y="35" fill="#0f172a" font-weight="bold" font-size="15">Z</text>
                    <text x="85" y="40" fill="#1d4ed8" font-weight="bold" font-size="15">Q</text>
                </svg>
                <p style='margin:5px 0 0 0; color:#64748b; font-size:13px;'>નોંધ: કિરણ YQ એ &ang;ZYP ના સમાન બે ભાગ કરે છે.</p>
            </div>

            <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                <div style='font-family:monospace; font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                    XY ને P સુધી લંબાવેલ હોવાથી, PYX એક સીધી રેખા બને છે.<br>
                    તેથી, રૈખિક જોડના નિયમ મુજબ:<br>
                    &ang;XYZ + &ang;ZYP = 180&deg;<br>
                    &there4; 64&deg; + &ang;ZYP = 180&deg;<br>
                    &there4; &ang;ZYP = 180&deg; - 64&deg; = <b>116&deg;</b><br><br>
                    
                    હવે, રકમમાં આપેલ છે કે કિરણ YQ એ &ang;ZYP નો દ્વિભાજક (Bisector) છે.<br>
                    તેથી તે &ang;ZYP ના બે સમાન ભાગ કરશે.<br>
                    &there4; &ang;ZYQ = &ang;QYP = 116&deg; / 2 = <b>58&deg;</b><br><br>
                    
                    <b>(1) &ang;XYQ શોધવા માટે:</b><br>
                    આકૃતિ મુજબ, &ang;XYQ એ બે ખૂણાઓનો સરવાળો છે.<br>
                    &ang;XYQ = &ang;XYZ + &ang;ZYQ<br>
                    &there4; &ang;XYQ = 64&deg; + 58&deg;<br>
                    &there4; <b style='color:#be123c; font-size:16px;'>&ang;XYQ = 122&deg;</b><br><br>
                    
                    <b>(2) વિપરીત &ang;QYP શોધવા માટે:</b><br>
                    આપણે જાણીએ છીએ કે &ang;QYP = 58&deg; છે.<br>
                    વિપરીત ખૂણો શોધવા માટે તેને 360&deg; માંથી બાદ કરવો પડે.<br>
                    વિપરીત &ang;QYP = 360&deg; - &ang;QYP<br>
                    &there4; વિપરીત &ang;QYP = 360&deg; - 58&deg;<br>
                    &there4; <b style='color:#be123c; font-size:16px;'>વિપરીત &ang;QYP = 302&deg;</b>
                </div>
            </div>
        </div>`
    },
                        
        { 
        "questionNumber": "સ્વાધ્યાય 6.2 - પ્રશ્ન 1",
        "marks": 3,
        "question": "આકૃતિમાં, x અને y નાં મૂલ્યો શોધો અને પછી બતાવો કે AB || CD.", 
        "answer": `
        <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
            
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>પ્રશ્નની આકૃતિ</p>
                <svg viewBox="0 0 300 260" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrow62" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                            <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                        </marker>
                        <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                            <path d="M0,0 L0,8 L8,4 z" fill="#be123c" />
                        </marker>
                    </defs>

                    <!-- Parallel Lines AB and CD -->
                    <line x1="40" y1="80" x2="260" y2="80" stroke="#0f172a" stroke-width="2.5" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                    <line x1="40" y1="180" x2="260" y2="180" stroke="#0f172a" stroke-width="2.5" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                    
                    <!-- Transversal Line (At 130 deg to horizontal) -->
                    <line x1="57.7" y1="20" x2="242.3" y2="240" stroke="#be123c" stroke-width="2.5" marker-start="url(#arrowRed)" marker-end="url(#arrowRed)"/>
                    
                    <!-- Angle Arc 50 deg (Top Left) -->
                    <path d="M 83.0 80.0 A 25 25 0 0 1 92.0 60.8" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
                    <text x="65" y="65" fill="#1d4ed8" font-size="15" font-weight="bold">50&deg;</text>
                    
                    <!-- Angle Arc x (Bottom Left) -->
                    <path d="M 127.3 103.0 A 30 30 0 0 1 78.0 80.0" fill="none" stroke="#16a34a" stroke-width="2.5"/>
                    <text x="95" y="115" fill="#16a34a" font-size="18" font-weight="bold">x</text>
                    
                    <!-- Angle Arc y (Top Right) -->
                    <path d="M 172.7 157.0 A 30 30 0 0 1 222.0 180.0" fill="none" stroke="#ea580c" stroke-width="2.5"/>
                    <text x="195" y="165" fill="#ea580c" font-size="18" font-weight="bold">y</text>
                    
                    <!-- Angle Arc 130 deg (Bottom Left) Vertically Opposite to y -->
                    <path d="M 208.0 199.2 A 25 25 0 0 1 167.0 180.0" fill="none" stroke="#9333ea" stroke-width="2.5"/>
                    <text x="210" y="215" fill="#9333ea" font-size="15" font-weight="bold">130&deg;</text>

                    <!-- Points -->
                    <circle cx="108" cy="80" r="4" fill="#0f172a"/>
                    <circle cx="192" cy="180" r="4" fill="#0f172a"/>
                    
                    <!-- Labels -->
                    <text x="25" y="75" fill="#0f172a" font-weight="bold" font-size="16">A</text>
                    <text x="265" y="75" fill="#0f172a" font-weight="bold" font-size="16">B</text>
                    <text x="25" y="175" fill="#0f172a" font-weight="bold" font-size="16">C</text>
                    <text x="265" y="175" fill="#0f172a" font-weight="bold" font-size="16">D</text>
                </svg>
            </div>

            <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                    <b>1) x શોધવા માટે:</b><br>
                    આકૃતિમાં 50&deg; અને x એ એક જ સીધી રેખા (છેદિકા) પર આવેલા રૈખિક જોડના ખૂણા છે.<br>
                    &there4; x + 50&deg; = 180&deg;<br>
                    &there4; x = 180&deg; - 50&deg;<br>
                    &there4; <b style='color:#16a34a; font-size:16px;'>x = 130&deg;</b><br><br>
                    
                    <b>2) y શોધવા માટે:</b><br>
                    આકૃતિમાં y અને 130&deg; એ સામસામેના ખૂણા (અભિકોણો) છે. અભિકોણો હંમેશા સમાન હોય છે.<br>
                    &there4; <b style='color:#ea580c; font-size:16px;'>y = 130&deg;</b><br><br>
                    
                    <b>3) AB || CD સાબિત કરવા માટે:</b><br>
                    અહીં, x = 130&deg; અને y = 130&deg; છે. એટલે કે, <b>x = y</b>.<br>
                    પરંતુ આકૃતિ મુજબ, x અને y એ રેખાઓ AB અને CD ની છેદિકા દ્વારા બનતા <b>અંતઃયુગ્મકોણો (Alternate interior angles)</b> છે.<br>
                    જ્યારે અંતઃયુગ્મકોણો સમાન હોય, ત્યારે તે બે રેખાઓ હંમેશા સમાંતર હોય છે (યુગ્મકોણ પ્રતીપ પ્રમેય).<br>
                    &there4; <b style='color:#be123c; font-size:16px;'>AB || CD</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span>.
                </div>
            </div>
        </div>
        
        <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
            <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
            <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આકૃતિમાં <b>Z આકાર</b> શોધો! જ્યાં પણ Z આકાર બને, ત્યાં Z ના અંદરના બંને ખૂણા (યુગ્મકોણ) સરખા જ હોય. અહીં x અને y મળીને ઊંધો <b>Z</b> બનાવે છે. બંને 130&deg; આવ્યા એટલે સાબિત થઈ ગયું કે લાઈનો સમાંતર છે!</p>
        </div>`
    },
            { 
                "questionNumber": "સ્વાધ્યાય 6.2 - પ્રશ્ન 2",
                "marks": 4,
                "question": "આકૃતિમાં, જો AB || CD, CD || EF અને y : z = 3 : 7 છે, તો x નું મૂલ્ય શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 280" style="width:100%; max-width:300px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="40" y1="60" x2="260" y2="60" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                            <line x1="40" y1="140" x2="260" y2="140" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                            <line x1="40" y1="220" x2="260" y2="220" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                            
                            <line x1="120" y1="20" x2="200" y2="260" stroke="#be123c" stroke-width="2" marker-start="url(#arrowRed)" marker-end="url(#arrowRed)"/>
                            
                            <text x="25" y="55" fill="#0f172a" font-weight="bold">A</text>
                            <text x="265" y="55" fill="#0f172a" font-weight="bold">B</text>
                            <text x="25" y="135" fill="#0f172a" font-weight="bold">C</text>
                            <text x="265" y="135" fill="#0f172a" font-weight="bold">D</text>
                            <text x="25" y="215" fill="#0f172a" font-weight="bold">E</text>
                            <text x="265" y="215" fill="#0f172a" font-weight="bold">F</text>
                            
                            <path d="M 140 60 A 20 20 0 0 1 135 80" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                            <text x="145" y="85" fill="#1d4ed8" font-size="16" font-weight="bold">x</text>
                            
                            <path d="M 160 140 A 20 20 0 0 0 155 120" fill="none" stroke="#16a34a" stroke-width="2"/>
                            <text x="135" y="125" fill="#16a34a" font-size="16" font-weight="bold">y</text>
                            
                            <path d="M 194 220 A 20 20 0 0 1 187 240" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="195" y="250" fill="#ea580c" font-size="16" font-weight="bold">z</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            આપેલ છે કે: AB || CD અને CD || EF.<br>
                            જો બે રેખાઓ કોઈ ત્રીજી રેખાને સમાંતર હોય, તો તેઓ એકબીજાને પણ સમાંતર હોય છે.<br>
                            &there4; <b>AB || EF</b><br><br>
                            
                            હવે AB || EF હોવાથી, x અને z એ <b>અંતઃયુગ્મકોણો (Alternate interior angles)</b> બને છે.<br>
                            &there4; <b>x = z</b> ......(સમીકરણ 1)<br><br>
                            
                            ફરીથી, AB || CD હોવાથી, x અને y એ છેદિકાની <b>એક જ તરફના અંતઃકોણો</b> છે. તેમનો સરવાળો 180&deg; થાય.<br>
                            &there4; x + y = 180&deg;<br>
                            સમીકરણ 1 પરથી x ની જગ્યાએ z મૂકતાં:<br>
                            &there4; <b>z + y = 180&deg;</b> ......(સમીકરણ 2)<br><br>
                            
                            આપણને ગુણોત્તર y : z = 3 : 7 આપેલ છે.<br>
                            ધારો કે y = 3k અને z = 7k.<br>
                            સમીકરણ 2 માં કિંમત મૂકતાં:<br>
                            &there4; 7k + 3k = 180&deg;<br>
                            &there4; 10k = 180&deg; &rArr; <b>k = 18&deg;</b><br><br>
                            
                            હવે, x = z હોવાથી, આપણે સીધું z શોધીએ:<br>
                            z = 7k = 7 &times; 18&deg; = 126&deg;<br>
                            &there4; <b style='color:#be123c; font-size:18px;'>x = 126&deg;</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 6.2 - પ્રશ્ન 3",
                "marks": 3,
                "question": "આકૃતિમાં, જો AB || CD, EF ⊥ CD અને &ang;GED = 126&deg; હોય, તો &ang;AGE, &ang;GEF અને &ang;FGE શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:400px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="30" y1="50" x2="320" y2="50" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                            <line x1="30" y1="150" x2="320" y2="150" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                            
                            <text x="20" y="45" fill="#0f172a" font-weight="bold">A</text>
                            <text x="325" y="45" fill="#0f172a" font-weight="bold">B</text>
                            <text x="20" y="145" fill="#0f172a" font-weight="bold">C</text>
                            <text x="325" y="145" fill="#0f172a" font-weight="bold">D</text>
                            
                            <line x1="120" y1="50" x2="220" y2="150" stroke="#be123c" stroke-width="2"/>
                            <line x1="220" y1="50" x2="220" y2="150" stroke="#1d4ed8" stroke-width="2"/>
                            
                            <text x="110" y="40" fill="#0f172a" font-weight="bold">G</text>
                            <text x="215" y="40" fill="#0f172a" font-weight="bold">F</text>
                            <text x="215" y="170" fill="#0f172a" font-weight="bold">E</text>
                            
                            <polyline points="220,140 210,140 210,150" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
                            
                            <path d="M 220 150 A 40 40 0 0 0 180 110" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="180" y="140" fill="#ea580c" font-size="12" font-weight="bold">126&deg;</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            આપેલ છે: &ang;GED = 126&deg; અને EF &perp; CD (એટલે કે &ang;FED = 90&deg;).<br><br>
                            
                            <b>1) &ang;AGE શોધવા માટે:</b><br>
                            AB || CD છે અને છેદિકા GE છે. આથી &ang;AGE અને &ang;GED <b>અંતઃયુગ્મકોણો (Z આકાર)</b> બનાવે છે.<br>
                            &there4; &ang;AGE = &ang;GED<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>&ang;AGE = 126&deg;</b><br><br>
                            
                            <b>2) &ang;GEF શોધવા માટે:</b><br>
                            આકૃતિમાં, &ang;GED એ બે ખૂણાનો બનેલો છે: &ang;GEF અને &ang;FED.<br>
                            &there4; &ang;GEF + &ang;FED = &ang;GED<br>
                            &there4; &ang;GEF + 90&deg; = 126&deg;<br>
                            &there4; &ang;GEF = 126&deg; - 90&deg;<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>&ang;GEF = 36&deg;</b><br><br>
                            
                            <b>3) &ang;FGE શોધવા માટે:</b><br>
                            રેખા AB પર G બિંદુ આવેલું છે. તેથી &ang;AGE અને &ang;FGE રૈખિક જોડ બનાવે છે.<br>
                            &there4; &ang;AGE + &ang;FGE = 180&deg;<br>
                            &there4; 126&deg; + &ang;FGE = 180&deg;<br>
                            &there4; &ang;FGE = 180&deg; - 126&deg;<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>&ang;FGE = 54&deg;</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 6.2 - પ્રશ્ન 4",
                "marks": 4,
                "question": "આકૃતિમાં, જો PQ || ST, &ang;PQR = 110&deg; અને &ang;RST = 130&deg; હોય, તો &ang;QRS શોધો. (સૂચન : બિંદુ R માંથી પસાર થતી ST ને સમાંતર રેખા દોરો.)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:400px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="30" y1="50" x2="120" y2="50" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow62)"/>
                            <line x1="120" y1="50" x2="180" y2="150" stroke="#0f172a" stroke-width="2"/>
                            <line x1="180" y1="150" x2="240" y2="70" stroke="#0f172a" stroke-width="2"/>
                            <line x1="240" y1="70" x2="320" y2="70" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow62)"/>
                            
                            <line x1="130" y1="150" x2="280" y2="150" stroke="#be123c" stroke-width="2" stroke-dasharray="5,5"/>
                            <text x="110" y="155" fill="#be123c" font-weight="bold">U</text>
                            <text x="290" y="155" fill="#be123c" font-weight="bold">V</text>
                            
                            <text x="30" y="40" fill="#0f172a" font-weight="bold">P</text>
                            <text x="120" y="40" fill="#0f172a" font-weight="bold">Q</text>
                            <text x="180" y="170" fill="#0f172a" font-weight="bold">R</text>
                            <text x="235" y="60" fill="#0f172a" font-weight="bold">S</text>
                            <text x="320" y="60" fill="#0f172a" font-weight="bold">T</text>
                            
                            <path d="M 100 50 A 20 20 0 0 0 110 68" fill="none" stroke="#1d4ed8" stroke-width="2"/>
                            <text x="80" y="80" fill="#1d4ed8" font-size="12" font-weight="bold">110&deg;</text>
                            
                            <path d="M 260 70 A 20 20 0 0 1 250 83" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="260" y="95" fill="#ea580c" font-size="12" font-weight="bold">130&deg;</text>
                            
                            <path d="M 172 135 A 15 15 0 0 0 188 139" fill="none" stroke="#16a34a" stroke-width="2"/>
                            <text x="175" y="125" fill="#16a34a" font-size="14" font-weight="bold">?</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            સૂચન મુજબ, R માંથી પસાર થતી અને ST ને સમાંતર હોય તેવી એક રેખા UV દોરો (આકૃતિમાં લાલ તૂટક રેખા).<br>
                            આથી, <b>ST || UV</b> થશે. વળી રકમ મુજબ PQ || ST હોવાથી, <b>PQ || UV</b> પણ થશે.<br><br>
                            
                            હવે, ST || UV અને SR તેની છેદિકા છે.<br>
                            તેથી, &ang;RST અને &ang;SRV એ છેદિકાની એક જ તરફના અંતઃકોણો (C આકાર) છે, જેનો સરવાળો 180&deg; થાય.<br>
                            &there4; &ang;RST + &ang;SRV = 180&deg;<br>
                            &there4; 130&deg; + &ang;SRV = 180&deg;<br>
                            &there4; <b>&ang;SRV = 50&deg;</b><br><br>
                            
                            હવે, PQ || UV અને QR તેની છેદિકા છે.<br>
                            તેથી, &ang;PQR અને &ang;QRV એ અંતઃયુગ્મકોણો (Z આકાર) બને છે.<br>
                            &there4; &ang;QRV = &ang;PQR<br>
                            &there4; <b>&ang;QRV = 110&deg;</b><br><br>
                            
                            આકૃતિમાં, &ang;QRV એ બે ખૂણાનો સરવાળો છે: &ang;QRS અને &ang;SRV.<br>
                            &there4; &ang;QRS + &ang;SRV = &ang;QRV<br>
                            &there4; &ang;QRS + 50&deg; = 110&deg;<br>
                            &there4; &ang;QRS = 110&deg; - 50&deg;<br>
                            &there4; <b style='color:#be123c; font-size:18px;'>&ang;QRS = 60&deg;</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ <b>"તૂટેલા પુલ (Broken Bridge)"</b> વાળો દાખલો છે! જ્યારે પણ લાઈન વચ્ચેથી તૂટેલી દેખાય, ત્યાં નીચે એક સીધી <b>Support Line (આધાર રેખા)</b> દોરી દેવી. પછી બસ ડાબી બાજુથી <b>Z આકાર</b> અને જમણી બાજુથી <b>C આકાર</b> નો નિયમ વાપરો એટલે જવાબ દોડતો આવશે!</p>
                </div>`
            },
          { 
        "questionNumber": "સ્વાધ્યાય 6.2 - પ્રશ્ન 5",
        "marks": 3,
        "question": "આકૃતિમાં, જો AB || CD, &ang;APQ = 50&deg; અને &ang;PRD = 127&deg; હોય, તો x અને y શોધો.", 
        "answer": `
        <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 350 200" style="width:100%; max-width:380px;" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrow62" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                            <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                        </marker>
                    </defs>

                    <!-- Triangle Fill -->
                    <polygon points="180,50 87.7,160 262.9,160" fill="#f0f9ff" stroke="none"/>

                    <!-- Parallel Lines AB and CD -->
                    <line x1="30" y1="50" x2="320" y2="50" stroke="#0f172a" stroke-width="2.5" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                    <line x1="30" y1="160" x2="320" y2="160" stroke="#0f172a" stroke-width="2.5" marker-start="url(#arrow62)" marker-end="url(#arrow62)"/>
                    
                    <!-- Transversals PQ and PR -->
                    <line x1="180" y1="50" x2="87.7" y2="160" stroke="#0284c7" stroke-width="2.5"/>
                    <line x1="180" y1="50" x2="262.9" y2="160" stroke="#0284c7" stroke-width="2.5"/>
                    
                    <!-- Angle Arc 50 deg (APQ) -->
                    <path d="M 155.0 50.0 A 25 25 0 0 1 163.9 69.2" fill="none" stroke="#16a34a" stroke-width="2.5"/>
                    <text x="140" y="42" fill="#16a34a" font-size="14" font-weight="bold">50&deg;</text>
                    
                    <!-- Angle Arc x (PQR) -->
                    <path d="M 103.8 140.8 A 25 25 0 0 1 112.7 160.0" fill="none" stroke="#ea580c" stroke-width="2.5"/>
                    <text x="110" y="152" fill="#ea580c" font-size="16" font-weight="bold">x</text>
                    
                    <!-- Angle Arc y (QPR) -->
                    <path d="M 160.7 73.0 A 30 30 0 0 1 198.1 74.0" fill="none" stroke="#9333ea" stroke-width="2.5"/>
                    <text x="175" y="90" fill="#9333ea" font-size="16" font-weight="bold">y</text>
                    
                    <!-- Angle Arc 127 deg (PRD) -->
                    <path d="M 247.8 140.0 A 25 25 0 0 0 287.9 160.0" fill="none" stroke="#1d4ed8" stroke-width="2.5"/>
                    <text x="245" y="132" fill="#1d4ed8" font-size="14" font-weight="bold">127&deg;</text>

                    <!-- Points -->
                    <circle cx="180" cy="50" r="4" fill="#0f172a"/>
                    <circle cx="87.7" cy="160" r="4" fill="#0f172a"/>
                    <circle cx="262.9" cy="160" r="4" fill="#0f172a"/>
                    
                    <!-- Labels -->
                    <text x="20" y="40" fill="#0f172a" font-weight="bold" font-size="15">A</text>
                    <text x="310" y="40" fill="#0f172a" font-weight="bold" font-size="15">B</text>
                    <text x="20" y="180" fill="#0f172a" font-weight="bold" font-size="15">C</text>
                    <text x="310" y="180" fill="#0f172a" font-weight="bold" font-size="15">D</text>
                    <text x="180" y="35" fill="#be123c" font-weight="bold" font-size="15">P</text>
                    <text x="75" y="180" fill="#be123c" font-weight="bold" font-size="15">Q</text>
                    <text x="260" y="180" fill="#be123c" font-weight="bold" font-size="15">R</text>
                </svg>
            </div>

            <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                    આપેલું છે કે AB || CD.<br><br>
                    
                    <b>1) x શોધવા માટે:</b><br>
                    AB || CD અને PQ તેની છેદિકા છે.<br>
                    આથી, &ang;APQ અને &ang;PQR એ <b>અંતઃયુગ્મકોણો (Z આકાર)</b> બને છે.<br>
                    &there4; &ang;PQR = &ang;APQ<br>
                    &there4; <b style='color:#16a34a; font-size:16px;'>x = 50&deg;</b><br><br>
                    
                    <b>2) y શોધવા માટે:</b><br>
                    ફરીથી, AB || CD અને આ વખતે PR તેની છેદિકા છે.<br>
                    આથી, આખો ખૂણો &ang;APR અને &ang;PRD પણ <b>અંતઃયુગ્મકોણો</b> બને છે.<br>
                    &there4; &ang;APR = &ang;PRD<br>
                    હવે, &ang;APR એ બે ખૂણાઓ 50&deg; અને y નો બનેલો છે.<br>
                    &there4; 50&deg; + y = 127&deg;<br>
                    &there4; y = 127&deg; - 50&deg;<br>
                    &there4; <b style='color:#be123c; font-size:16px;'>y = 77&deg;</b>
                </div>
            </div>
        </div>
        
        <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
            <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
            <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આખો દાખલો <b>Z આકાર</b> (યુગ્મકોણ) પર જ આધારિત છે! પહેલો Z બને છે 50&deg; અને x થી, એટલે x સીધો 50&deg; મળી જાય. બીજો Z આકાર મોટો બને છે, જેમાં એક બાજુ 127&deg; છે અને બીજી બાજુ (50&deg; + y) છે. 127 માંથી 50 કાઢી નાખો એટલે y ની કિંમત 77&deg; ચપટી વગાડતા મળી જાય!</p>
        </div>`
    }
            
        ]
    },
        
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 7: ત્રિકોણ (સ્વાધ્યાય)
    // ------------------------------------
    "7": {
        "chapterName": "પ્રકરણ 7",
        "chapterTitle": "ત્રિકોણ (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 7.1 - પ્રશ્ન 1",
                "marks": 3,
                "question": "ચતુષ્કોણ ACBD માં, AC = AD છે અને AB એ &ang;A નો દ્વિભાજક છે. સાબિત કરો કે &Delta;ABC &cong; &Delta;ABD. BC અને BD વિશે તમે શું કહી શકશો?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,100 150,30 250,100 150,170" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            <line x1="50" y1="100" x2="250" y2="100" stroke="#be123c" stroke-width="2" stroke-dasharray="5,5"/>
                            
                            <line x1="95" y1="60" x2="105" y2="70" stroke="#16a34a" stroke-width="2"/>
                            <line x1="95" y1="140" x2="105" y2="130" stroke="#16a34a" stroke-width="2"/>
                            
                            <path d="M 80 100 A 30 30 0 0 0 75 83" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <path d="M 80 100 A 30 30 0 0 1 75 117" fill="none" stroke="#ea580c" stroke-width="2"/>
                            
                            <text x="30" y="105" fill="#0f172a" font-weight="bold">A</text>
                            <text x="260" y="105" fill="#0f172a" font-weight="bold">B</text>
                            <text x="145" y="20" fill="#0f172a" font-weight="bold">C</text>
                            <text x="145" y="190" fill="#0f172a" font-weight="bold">D</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            &Delta;ABC અને &Delta;ABD માં:<br>
                            1) <b>AC = AD</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span><br>
                            2) <b>&ang;CAB = &ang;DAB</b> <span style='color:#64748b;'>(કારણ કે AB એ &ang;A નો દ્વિભાજક છે)</span><br>
                            3) <b>AB = AB</b> <span style='color:#64748b;'>(બંને ત્રિકોણની સામાન્ય બાજુ)</span><br><br>
                            
                            અહીં બે બાજુઓ અને તેમની વચ્ચેનો ખૂણો સમાન છે. તેથી, <b>બાખૂબા (SAS - Side-Angle-Side)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            <b style='color:#15803d; font-size:16px;'>&there4; &Delta;ABC &cong; &Delta;ABD</b> <span style='color:#0f172a;'>(સાબિત થાય છે)</span><br><br>
                            
                            જ્યારે બે ત્રિકોણ એકરૂપ હોય, ત્યારે તેમના અનુરૂપ અંગો (CPCT) સમાન હોય છે.<br>
                            <b style='color:#be123c; font-size:15px;'>&there4; BC = BD</b> 
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>એકરૂપતા સાબિત કરવા માટે હંમેશા <b>3 વસ્તુઓ</b> શોધવાની હોય છે! આ દાખલામાં 2 વસ્તુ તો રકમમાં જ આપી દીધી હતી (બાજુ અને ખૂણો), અને ત્રીજી વસ્તુ ત્રિકોણની વચ્ચેની સામાન્ય બાજુ (દીવાલ) AB હતી. બસ આ 3 વસ્તુ મળી એટલે <b>SAS (બાખૂબા)</b> નિયમથી ત્રિકોણ એકરૂપ!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.1 - પ્રશ્ન 2",
                "marks": 4,
                "question": "ABCD એવો ચતુષ્કોણ છે જેમાં AD = BC અને &ang;DAB = &ang;CBA છે. સાબિત કરો કે:<br>(i) &Delta;ABD &cong; &Delta;BAC<br>(ii) BD = AC<br>(iii) &ang;ABD = &ang;BAC", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,150 250,150 200,50 100,50" fill="none" stroke="#0f172a" stroke-width="2"/>
                            <line x1="50" y1="150" x2="200" y2="50" stroke="#be123c" stroke-width="2"/>
                            <line x1="250" y1="150" x2="100" y2="50" stroke="#1d4ed8" stroke-width="2"/>
                            
                            <line x1="65" y1="100" x2="75" y2="95" stroke="#16a34a" stroke-width="2"/>
                            <line x1="235" y1="100" x2="225" y2="95" stroke="#16a34a" stroke-width="2"/>
                            
                            <path d="M 80 150 A 30 30 0 0 0 65 120" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <path d="M 220 150 A 30 30 0 0 1 235 120" fill="none" stroke="#ea580c" stroke-width="2"/>
                            
                            <text x="30" y="165" fill="#0f172a" font-weight="bold">A</text>
                            <text x="260" y="165" fill="#0f172a" font-weight="bold">B</text>
                            <text x="210" y="40" fill="#0f172a" font-weight="bold">C</text>
                            <text x="80" y="40" fill="#0f172a" font-weight="bold">D</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            <b>(i) &Delta;ABD &cong; &Delta;BAC સાબિત કરવા માટે:</b><br>
                            &Delta;ABD અને &Delta;BAC માં:<br>
                            1) <b>AD = BC</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span><br>
                            2) <b>&ang;DAB = &ang;CBA</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span><br>
                            3) <b>AB = BA</b> <span style='color:#64748b;'>(બંને ત્રિકોણની સામાન્ય બાજુ એટલે કે પાયો)</span><br><br>
                            
                            તેથી, <b>બાખૂબા (SAS)</b> એકરૂપતાની શરત મુજબ:<br>
                            <b style='color:#0284c7; font-size:16px;'>&there4; &Delta;ABD &cong; &Delta;BAC</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span><br><br>
                            
                            <b>(ii) BD = AC માટે:</b><br>
                            ઉપર સાબિત કર્યા મુજબ બંને ત્રિકોણ એકરૂપ છે. તેથી તેમના એકરૂપ અંગો (CPCT) સમાન થાય.<br>
                            <b style='color:#0284c7; font-size:16px;'>&there4; BD = AC (CPCT)</b><br><br>
                            
                            <b>(iii) &ang;ABD = &ang;BAC માટે:</b><br>
                            ફરીથી, સમાન કારણથી એકરૂપ ત્રિકોણના અનુરૂપ ખૂણાઓ સમાન હોય છે.<br>
                            <b style='color:#0284c7; font-size:16px;'>&there4; &ang;ABD = &ang;BAC (CPCT)</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.1 - પ્રશ્ન 3",
                "marks": 3,
                "question": "રેખાખંડ AB પર સમાન લંબ રેખાખંડો AD અને BC આવેલા છે. સાબિત કરો કે CD એ AB ને દુભાગે છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="50" y1="100" x2="250" y2="100" stroke="#0f172a" stroke-width="2"/>
                            <line x1="50" y1="100" x2="50" y2="170" stroke="#be123c" stroke-width="2"/>
                            <line x1="250" y1="100" x2="250" y2="30" stroke="#1d4ed8" stroke-width="2"/>
                            <line x1="50" y1="170" x2="250" y2="30" stroke="#16a34a" stroke-width="2"/>
                            
                            <line x1="40" y1="135" x2="60" y2="135" stroke="#0f172a" stroke-width="2"/>
                            <line x1="240" y1="65" x2="260" y2="65" stroke="#0f172a" stroke-width="2"/>
                            
                            <polyline points="60,100 60,110 50,110" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            <polyline points="240,100 240,90 250,90" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            
                            <text x="30" y="95" fill="#0f172a" font-weight="bold">A</text>
                            <text x="260" y="115" fill="#0f172a" font-weight="bold">B</text>
                            <text x="260" y="30" fill="#1d4ed8" font-weight="bold">C</text>
                            <text x="30" y="175" fill="#be123c" font-weight="bold">D</text>
                            <text x="145" y="125" fill="#16a34a" font-weight="bold">O</text>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            ધારો કે રેખાખંડ AB અને CD એકબીજાને <b>O</b> બિંદુમાં છેદે છે.<br>
                            આપણે સાબિત કરવાનું છે કે OA = OB (એટલે કે CD એ AB ના બે સરખા ભાગ કરે છે).<br><br>
                            
                            &Delta;OBC અને &Delta;OAD માં:<br>
                            1) <b>&ang;BOC = &ang;AOD</b> <span style='color:#64748b;'>(સામસામેના અભિકોણો)</span><br>
                            2) <b>&ang;OBC = &ang;OAD = 90&deg;</b> <span style='color:#64748b;'>(પક્ષ: બંને લંબ છે)</span><br>
                            3) <b>BC = AD</b> <span style='color:#64748b;'>(પક્ષ: સમાન લંબ છે)</span><br><br>
                            
                            અહીં બે ખૂણા અને એક બાજુ સમાન છે. તેથી <b>ખૂખૂબા (AAS - Angle-Angle-Side)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            &there4; &Delta;OBC &cong; &Delta;OAD<br><br>
                            
                            એકરૂપ ત્રિકોણના અનુરૂપ અંગો (CPCT) સમાન હોવાથી:<br>
                            &there4; <b>OB = OA</b><br><br>
                            
                            આનો અર્થ એ થયો કે બિંદુ O એ AB નું મધ્યબિંદુ છે.<br>
                            <b style='color:#be123c; font-size:15px;'>&there4; રેખાખંડ CD એ AB ને દુભાગે છે.</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.1 - પ્રશ્ન 4",
                "marks": 3,
                "question": "l અને m બે સમાંતર રેખાઓ છે. બીજી બે સમાંતર રેખાઓની જોડ p અને q તેમને છેદે છે. સાબિત કરો કે &Delta;ABC &cong; &Delta;CDA.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="20" y1="60" x2="280" y2="60" stroke="#0f172a" stroke-width="2"/>
                            <line x1="20" y1="140" x2="280" y2="140" stroke="#0f172a" stroke-width="2"/>
                            <text x="10" y="55" fill="#0f172a" font-weight="bold">l</text>
                            <text x="10" y="135" fill="#0f172a" font-weight="bold">m</text>
                            
                            <line x1="100" y1="20" x2="40" y2="180" stroke="#0f172a" stroke-width="2"/>
                            <line x1="260" y1="20" x2="200" y2="180" stroke="#0f172a" stroke-width="2"/>
                            <text x="105" y="15" fill="#0f172a" font-weight="bold">p</text>
                            <text x="265" y="15" fill="#0f172a" font-weight="bold">q</text>
                            
                            <text x="95" y="50" fill="#be123c" font-weight="bold">A</text>
                            <text x="245" y="50" fill="#be123c" font-weight="bold">D</text>
                            <text x="60" y="160" fill="#1d4ed8" font-weight="bold">B</text>
                            <text x="210" y="160" fill="#1d4ed8" font-weight="bold">C</text>
                            
                            <line x1="85" y1="60" x2="215" y2="140" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            અહીં, રેખાઓ l || m અને p || q આપેલ છે.<br>
                            આથી બનતો ચતુષ્કોણ ABCD સમાંતરબાજુ ચતુષ્કોણ બને છે.<br>
                            વિકર્ણ AC એ &Delta;ABC અને &Delta;CDA ને વિભાજિત કરે છે.<br><br>
                            
                            &Delta;ABC અને &Delta;CDA માં:<br>
                            1) <b>&ang;BCA = &ang;DAC</b> <span style='color:#64748b;'>(કારણ: l || m છે અને AC છેદિકા છે &rarr; અંતઃયુગ્મકોણો)</span><br>
                            2) <b>AC = CA</b> <span style='color:#64748b;'>(બંને ત્રિકોણની સામાન્ય બાજુ)</span><br>
                            3) <b>&ang;BAC = &ang;DCA</b> <span style='color:#64748b;'>(કારણ: p || q છે અને AC છેદિકા છે &rarr; અંતઃયુગ્મકોણો)</span><br><br>
                            
                            અહીં બે ખૂણાઓ અને તેમની વચ્ચેની અંતર્ગત બાજુ સમાન છે. તેથી <b>ખૂબાખૂ (ASA - Angle-Side-Angle)</b> એકરૂપતાની શરત મુજબ:<br>
                            <b style='color:#15803d; font-size:16px;'>&there4; &Delta;ABC &cong; &Delta;CDA</b> <span style='color:#0f172a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>`
            },
              { 
                "questionNumber": "સ્વાધ્યાય 7.1 - પ્રશ્ન 5",
                "marks": 4,
                "question": "કિરણ l એ &ang;A નો દ્વિભાજક છે અને B એ રેખા l પરનું કોઈ પણ બિંદુ છે. BP અને BQ એ બિંદુ B માંથી &ang;A ની બાજુઓ પર દોરેલા લંબ છે. સાબિત કરો કે:<br>(i) &Delta;APB &cong; &Delta;AQB<br>(ii) BP = BQ", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="30" y1="100" x2="220" y2="30" stroke="#0f172a" stroke-width="2"/>
                            <line x1="30" y1="100" x2="220" y2="170" stroke="#0f172a" stroke-width="2"/>
                            
                            <line x1="30" y1="100" x2="280" y2="100" stroke="#1d4ed8" stroke-width="2"/>
                            <text x="285" y="105" fill="#1d4ed8" font-weight="bold">l</text>
                            
                            <circle cx="180" cy="100" r="5" fill="#be123c"/>
                            <text x="185" y="95" fill="#be123c" font-weight="bold">B</text>
                            
                            <line x1="180" y1="100" x2="152" y2="55" stroke="#16a34a" stroke-width="2"/>
                            <line x1="180" y1="100" x2="152" y2="145" stroke="#16a34a" stroke-width="2"/>
                            
                            <text x="140" y="45" fill="#16a34a" font-weight="bold">Q</text>
                            <text x="140" y="165" fill="#16a34a" font-weight="bold">P</text>
                            <text x="15" y="105" fill="#0f172a" font-weight="bold">A</text>
                            
                            <polyline points="159,65 167,59 158,51" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            <polyline points="159,135 167,141 158,149" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            
                            <path d="M 60 100 A 30 30 0 0 0 57 89" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <path d="M 60 100 A 30 30 0 0 1 57 111" fill="none" stroke="#ea580c" stroke-width="2"/>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            <b>(i) &Delta;APB &cong; &Delta;AQB સાબિત કરવા માટે:</b><br>
                            &Delta;APB અને &Delta;AQB માં:<br>
                            1) <b>&ang;APB = &ang;AQB = 90&deg;</b> <span style='color:#64748b;'>(પક્ષ: BP અને BQ લંબ છે)</span><br>
                            2) <b>&ang;PAB = &ang;QAB</b> <span style='color:#64748b;'>(પક્ષ: રેખા l એ &ang;A નો દ્વિભાજક છે)</span><br>
                            3) <b>AB = AB</b> <span style='color:#64748b;'>(બંને ત્રિકોણની સામાન્ય બાજુ એટલે કે કર્ણ)</span><br><br>
                            
                            અહીં બે ખૂણા અને એક બાજુ (ખૂખૂબા) સમાન છે. તેથી <b>ખૂખૂબા (AAS)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; &Delta;APB &cong; &Delta;AQB</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span><br><br>
                            
                            <b>(ii) BP = BQ સાબિત કરવા માટે:</b><br>
                            ઉપર સાબિત કર્યા મુજબ બંને ત્રિકોણ એકરૂપ છે, તેથી તેના અનુરૂપ અંગો સમાન થાય.<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; BP = BQ (CPCT)</b> <span style='color:#16a34a;'>(અર્થાત્ બિંદુ B એ ખૂણાની બંને બાજુઓથી સમાન અંતરે છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલાની ફિગર જાણે <b>બાણ (Arrow)</b> જેવી દેખાય છે! જ્યારે પણ દ્વિભાજક (વચ્ચેની લીટી) અને લંબ (90&deg;) ભેગા થાય, ત્યારે <b>ખૂખૂબા (AAS)</b> નિયમ જ આવે. કારણ કે એક 90&deg; નો ખૂણો મળ્યો, બીજો ખૂણો દ્વિભાજકથી મળ્યો અને વચ્ચેની લીટી Common થઈ ગઈ!</p>
                </div>`
            },
                        
    { 
        "questionNumber": "સ્વાધ્યાય 7.1 - પ્રશ્ન 6",
        "marks": 4,
        "question": "આકૃતિમાં, AC = AE, AB = AD અને &ang;BAD = &ang;EAC છે. સાબિત કરો કે BC = DE.", 
        "answer": `
        <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 360 260" style="width:100%; max-width:400px;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Triangle ABC -->
                    <polygon points="160,40 50,190 250,190" fill="none" stroke="#0f172a" stroke-width="2"/>
                    
                    <!-- Triangle ADE -->
                    <polygon points="160,40 140,225 313,125" fill="none" stroke="#0f172a" stroke-width="2"/>
                    
                    <!-- Equal Sides Markings for AB = AD (Single Red Tick) -->
                    <line x1="99" y1="111" x2="111" y2="119" stroke="#be123c" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="143" y1="132" x2="157" y2="133" stroke="#be123c" stroke-width="2.5" stroke-linecap="round"/>
                    
                    <!-- Equal Sides Markings for AC = AE (Double Blue Tick) -->
                    <line x1="197" y1="116" x2="209" y2="108" stroke="#1d4ed8" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="201" y1="122" x2="213" y2="114" stroke="#1d4ed8" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="230" y1="87" x2="237" y2="75" stroke="#1d4ed8" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="236" y1="90" x2="243" y2="78" stroke="#1d4ed8" stroke-width="2.5" stroke-linecap="round"/>
                    
                    <!-- Angle Arcs for BAD and EAC -->
                    <path d="M 133.4 76.3 A 45 45 0 0 0 155.1 84.7" fill="none" stroke="#ea580c" stroke-width="2"/>
                    <path d="M 183.1 78.6 A 45 45 0 0 0 199.3 61.8" fill="none" stroke="#ea580c" stroke-width="2"/>
                    
                    <!-- Vertex Points -->
                    <circle cx="160" cy="40" r="3" fill="#0f172a"/>
                    <circle cx="50" cy="190" r="3" fill="#0f172a"/>
                    <circle cx="250" cy="190" r="3" fill="#0f172a"/>
                    <circle cx="140" cy="225" r="3" fill="#0f172a"/>
                    <circle cx="313" cy="125" r="3" fill="#0f172a"/>
                    
                    <!-- Labels -->
                    <text x="160" y="26" fill="#0f172a" font-weight="bold" font-size="16" text-anchor="middle">A</text>
                    <text x="32" y="196" fill="#0f172a" font-weight="bold" font-size="16" text-anchor="middle">B</text>
                    <text x="268" y="196" fill="#0f172a" font-weight="bold" font-size="16" text-anchor="middle">C</text>
                    <text x="140" y="246" fill="#0f172a" font-weight="bold" font-size="16" text-anchor="middle">D</text>
                    <text x="330" y="130" fill="#0f172a" font-weight="bold" font-size="16" text-anchor="middle">E</text>
                </svg>
            </div>

            <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>સાબિતી:</b></p>
                <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                    આપણને આપેલું છે કે: <b>&ang;BAD = &ang;EAC</b><br>
                    આ સમીકરણની બંને બાજુએ વચ્ચેનો સામાન્ય ખૂણો <b>&ang;DAC</b> ઉમેરતાં:<br>
                    &there4; &ang;BAD + &ang;DAC = &ang;EAC + &ang;DAC<br>
                    આકૃતિ પરથી સ્પષ્ટ છે કે, બે ખૂણાઓનો સરવાળો આખો ખૂણો બનાવે છે.<br>
                    &there4; <b>&ang;BAC = &ang;DAE</b> ......(પરિણામ 1)<br><br>
                    
                    હવે, &Delta;BAC અને &Delta;DAE માં સરખામણી કરીએ:<br>
                    1) <b>AB = AD</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span><br>
                    2) <b>&ang;BAC = &ang;DAE</b> <span style='color:#64748b;'>(પરિણામ 1 પરથી સાબિત કર્યું)</span><br>
                    3) <b>AC = AE</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span><br><br>
                    
                    અહીં બે બાજુઓ અને તેમની વચ્ચેનો ખૂણો સમાન છે. તેથી <b>બાખૂબા (SAS)</b> એકરૂપતાના નિયમ મુજબ:<br>
                    <b style='color:#0284c7; font-size:16px;'>&there4; &Delta;BAC &cong; &Delta;DAE</b><br><br>
                    
                    જ્યારે બે ત્રિકોણો એકરૂપ હોય, ત્યારે તેમના અનુરૂપ અંગો (CPCT) સમાન હોય છે.<br>
                    <b style='color:#be123c; font-size:16px;'>&there4; BC = DE</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span>
                </div>
            </div>
        </div>
        
        <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
            <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
            <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલાની ચાવી <b>વચ્ચેનો ટુકડો (&ang;DAC)</b> છે! આપેલા બંને નાના ખૂણાઓમાં વચ્ચેનો ખાલી ટુકડો ઉમેરી દો એટલે મોટા ત્રિકોણના આખા ખૂણા બની જશે. પછી તો સીધો જ <b>બાખૂબા (SAS)</b> નિયમ લગાવી દેવાનો!</p>
        </div>`
    },
            { 
                "questionNumber": "સ્વાધ્યાય 7.1 - પ્રશ્ન 7",
                "marks": 4,
                "question": "AB એ એક રેખાખંડ છે અને P તેનું મધ્યબિંદુ છે. D અને E એ રેખાખંડ AB ની એક જ બાજુએ આવેલાં એવાં બિંદુઓ છે કે જેથી &ang;BAD = &ang;ABE અને &ang;EPA = &ang;DPB થાય. સાબિત કરો કે:<br>(i) &Delta;DAP &cong; &Delta;EBP<br>(ii) AD = BE", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:400px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="50" y1="150" x2="300" y2="150" stroke="#0f172a" stroke-width="2"/>
                            <circle cx="175" cy="150" r="5" fill="#16a34a"/>
                            <text x="170" y="170" fill="#16a34a" font-weight="bold">P</text>
                            
                            <line x1="50" y1="150" x2="130" y2="30" stroke="#be123c" stroke-width="2"/>
                            <line x1="175" y1="150" x2="130" y2="30" stroke="#be123c" stroke-width="2"/>
                            
                            <line x1="300" y1="150" x2="220" y2="30" stroke="#1d4ed8" stroke-width="2"/>
                            <line x1="175" y1="150" x2="220" y2="30" stroke="#1d4ed8" stroke-width="2"/>
                            
                            <line x1="130" y1="30" x2="220" y2="30" stroke="#64748b" stroke-width="1" stroke-dasharray="4,4"/>
                            
                            <path d="M 80 150 A 30 30 0 0 0 70 120" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <path d="M 270 150 A 30 30 0 0 1 280 120" fill="none" stroke="#ea580c" stroke-width="2"/>
                            
                            <path d="M 145 150 A 30 30 0 0 1 155 120" fill="none" stroke="#9333ea" stroke-width="2"/>
                            <path d="M 205 150 A 30 30 0 0 0 195 120" fill="none" stroke="#9333ea" stroke-width="2"/>
                            
                            <text x="35" y="155" fill="#0f172a" font-weight="bold">A</text>
                            <text x="310" y="155" fill="#0f172a" font-weight="bold">B</text>
                            <text x="120" y="20" fill="#0f172a" font-weight="bold">D</text>
                            <text x="225" y="20" fill="#0f172a" font-weight="bold">E</text>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            આપણને આપેલું છે કે: <b>&ang;EPA = &ang;DPB</b><br>
                            આ સમીકરણની બંને બાજુએ વચ્ચેનો સામાન્ય ખૂણો <b>&ang;EPD</b> ઉમેરતાં:<br>
                            &there4; &ang;EPA + &ang;EPD = &ang;DPB + &ang;EPD<br>
                            આકૃતિ પરથી સ્પષ્ટ છે કે, બે ખૂણાઓનો સરવાળો આખો ખૂણો બનાવે છે.<br>
                            &there4; <b>&ang;DPA = &ang;EPB</b> ......(પરિણામ 1)<br><br>
                            
                            <b>(i) &Delta;DAP &cong; &Delta;EBP સાબિત કરવા:</b><br>
                            &Delta;DAP અને &Delta;EBP માં:<br>
                            1) <b>&ang;DAP = &ang;EBP</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે કે &ang;BAD = &ang;ABE)</span><br>
                            2) <b>AP = BP</b> <span style='color:#64748b;'>(કારણ: P એ AB નું મધ્યબિંદુ છે)</span><br>
                            3) <b>&ang;DPA = &ang;EPB</b> <span style='color:#64748b;'>(પરિણામ 1 પરથી સાબિત કર્યું)</span><br><br>
                            
                            અહીં બે ખૂણાઓ અને તેમની વચ્ચેની અંતર્ગત બાજુ સમાન છે. તેથી <b>ખૂબાખૂ (ASA)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; &Delta;DAP &cong; &Delta;EBP</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span><br><br>
                            
                            <b>(ii) AD = BE સાબિત કરવા:</b><br>
                            જ્યારે બે ત્રિકોણો એકરૂપ હોય, ત્યારે તેમના અનુરૂપ અંગો (CPCT) સમાન હોય છે.<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; AD = BE (CPCT)</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલો બિલકુલ પ્રશ્ન 6 ની <b>"Copy-Paste"</b> જ છે! ત્યાં બાજુઓમાં વચ્ચેનો ટુકડો ઉમેર્યો હતો, અહીં ખૂણાની અંદર વચ્ચેનો ટુકડો (EPD) ઉમેરવાનો છે. અને P મધ્યબિંદુ હોવાથી AP = BP બાજુ તો મફતમાં જ મળી ગઈ! બસ <b>ખૂબાખૂ (ASA)</b> લગાવો એટલે ખેલ ખતમ!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.1 - પ્રશ્ન 8",
                "marks": 5,
                "question": "કાટકોણ ત્રિકોણ ABC માં &ang;C કાટખૂણો છે. M એ કર્ણ AB નું મધ્યબિંદુ છે. બિંદુ C ને M સાથે જોડીને D સુધી એ રીતે લંબાવેલ છે કે જેથી DM = CM થાય. બિંદુ D ને બિંદુ B સાથે જોડેલ છે. સાબિત કરો કે:<br>(i) &Delta;AMC &cong; &Delta;BMD<br>(ii) &ang;DBC એ કાટખૂણો છે.<br>(iii) &Delta;DBC &cong; &Delta;ACB<br>(iv) CM = 1/2 AB", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 250" style="width:100%; max-width:400px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,200 250,200 250,50 50,50" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            <line x1="50" y1="200" x2="250" y2="50" stroke="#be123c" stroke-width="2"/>
                            <line x1="50" y1="50" x2="250" y2="200" stroke="#16a34a" stroke-width="2"/>
                            
                            <circle cx="150" cy="125" r="5" fill="#0f172a"/>
                            <text x="145" y="115" fill="#0f172a" font-weight="bold">M</text>
                            
                            <polyline points="235,200 235,185 250,185" fill="none" stroke="#ea580c" stroke-width="2"/>
                            
                            <text x="35" y="215" fill="#0f172a" font-weight="bold">B</text>
                            <text x="260" y="215" fill="#0f172a" font-weight="bold">C</text>
                            <text x="260" y="40" fill="#0f172a" font-weight="bold">A</text>
                            <text x="35" y="40" fill="#0f172a" font-weight="bold">D</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <div style='font-size:14px; color:#14532d; line-height:1.8; margin-left:10px;'>
                            <b>(i) &Delta;AMC &cong; &Delta;BMD સાબિત કરવા:</b><br>
                            &Delta;AMC અને &Delta;BMD માં:<br>
                            1) <b>AM = BM</b> <span style='color:#64748b;'>(કારણ: M એ કર્ણ AB નું મધ્યબિંદુ છે)</span><br>
                            2) <b>&ang;AMC = &ang;BMD</b> <span style='color:#64748b;'>(સામસામેના અભિકોણો)</span><br>
                            3) <b>CM = DM</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે કે DM = CM થાય તે રીતે લંબાવેલ છે)</span><br>
                            અહીં <b>બાખૂબા (SAS)</b> નિયમ મુજબ:<br>
                            <b style='color:#15803d; font-size:16px;'>&there4; &Delta;AMC &cong; &Delta;BMD</b> ......(પરિણામ 1)<br><br>
                            
                            <b>(ii) &ang;DBC કાટખૂણો છે તે સાબિત કરવા:</b><br>
                            પરિણામ 1 મુજબ બંને ત્રિકોણો એકરૂપ છે, તેથી તેના અનુરૂપ ખૂણાઓ સમાન થાય.<br>
                            &there4; &ang;MAC = &ang;MBD (CPCT)<br>
                            પરંતુ, આ બંને રેખાઓ AC અને BD ની છેદિકા AB દ્વારા બનતા <b>અંતઃયુગ્મકોણો (Alternate interior angles)</b> છે. જ્યારે અંતઃયુગ્મકોણો સમાન હોય, ત્યારે રેખાઓ સમાંતર હોય છે.<br>
                            &there4; <b>AC || BD</b><br>
                            હવે, AC || BD અને BC છેદિકા છે. તેથી છેદિકાની એક જ તરફના અંતઃકોણોનો સરવાળો 180&deg; થાય.<br>
                            &there4; &ang;DBC + &ang;ACB = 180&deg;<br>
                            પરંતુ &ang;ACB = 90&deg; (પક્ષમાં આપેલું છે).<br>
                            &there4; &ang;DBC + 90&deg; = 180&deg; &rArr; <b style='color:#15803d; font-size:16px;'>&ang;DBC = 90&deg; (કાટખૂણો છે)</b> ......(પરિણામ 2)<br><br>
                            
                            <b>(iii) &Delta;DBC &cong; &Delta;ACB સાબિત કરવા:</b><br>
                            &Delta;DBC અને &Delta;ACB માં:<br>
                            1) <b>DB = AC</b> <span style='color:#64748b;'>(CPCT, પરિણામ 1 પરથી)</span><br>
                            2) <b>&ang;DBC = &ang;ACB = 90&deg;</b> <span style='color:#64748b;'>(પરિણામ 2 પરથી)</span><br>
                            3) <b>BC = CB</b> <span style='color:#64748b;'>(સામાન્ય બાજુ)</span><br>
                            તેથી <b>બાખૂબા (SAS)</b> નિયમ મુજબ:<br>
                            <b style='color:#15803d; font-size:16px;'>&there4; &Delta;DBC &cong; &Delta;ACB</b> ......(પરિણામ 3)<br><br>
                            
                            <b>(iv) CM = 1/2 AB સાબિત કરવા:</b><br>
                            પરિણામ 3 મુજબ બંને મોટા કાટકોણ ત્રિકોણો એકરૂપ છે, તેથી તેમના કર્ણ સમાન થાય.<br>
                            &there4; <b>DC = AB</b> (CPCT)<br>
                            હવે, DC ના બે સરખા ભાગ DM અને CM છે. તેથી, CM એ આખા DC કરતાં અડધો છે.<br>
                            &there4; CM = 1/2 DC<br>
                            હવે DC ની જગ્યાએ AB મૂકતાં:<br>
                            <b style='color:#15803d; font-size:16px;'>&there4; CM = 1/2 AB</b> <span style='color:#0f172a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>`
            },
            
                    
            { 
                "questionNumber": "સ્વાધ્યાય 7.2 - પ્રશ્ન 1",
                "marks": 4,
                "question": "સમદ્વિબાજુ ત્રિકોણ ABC માં AB = AC છે. &ang;B અને &ang;C ના દ્વિભાજકો એકબીજાને O બિંદુમાં છેદે છે. A અને O ને જોડો. સાબિત કરો કે:<br>(i) OB = OC<br>(ii) AO એ &ang;A નો દ્વિભાજક છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 250" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="150,30 50,200 250,200" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            
                            <line x1="50" y1="200" x2="150" y2="150" stroke="#be123c" stroke-width="2"/>
                            <line x1="250" y1="200" x2="150" y2="150" stroke="#be123c" stroke-width="2"/>
                            <line x1="150" y1="30" x2="150" y2="150" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>
                            
                            <line x1="95" y1="120" x2="105" y2="110" stroke="#0f172a" stroke-width="2"/>
                            <line x1="195" y1="110" x2="205" y2="120" stroke="#0f172a" stroke-width="2"/>
                            
                            <path d="M 80 200 A 30 30 0 0 0 75 185" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <path d="M 220 200 A 30 30 0 0 1 225 185" fill="none" stroke="#ea580c" stroke-width="2"/>
                            
                            <text x="145" y="20" fill="#0284c7" font-weight="bold">A</text>
                            <text x="35" y="215" fill="#0284c7" font-weight="bold">B</text>
                            <text x="255" y="215" fill="#0284c7" font-weight="bold">C</text>
                            <text x="145" y="170" fill="#be123c" font-weight="bold">O</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            <b>(i) OB = OC સાબિત કરવા:</b><br>
                            &Delta;ABC માં, <b>AB = AC</b> (પક્ષમાં આપેલ છે).<br>
                            સમદ્વિબાજુ ત્રિકોણના નિયમ મુજબ, સમાન બાજુઓની સામેના ખૂણા સમાન હોય છે.<br>
                            &there4; &ang;C = &ang;B<br>
                            બંને બાજુ 1/2 વડે ગુણતાં:<br>
                            &there4; 1/2 &ang;C = 1/2 &ang;B<br>
                            હવે, OB અને OC એ અનુક્રમે &ang;B અને &ang;C ના દ્વિભાજકો છે, તેથી તેઓ આખા ખૂણાના અડધા ભાગ કરે છે.<br>
                            &there4; &ang;OCB = &ang;OBC<br>
                            હવે &Delta;OBC માં, બે ખૂણા (&ang;OCB અને &ang;OBC) સમાન છે. ત્રિકોણના નિયમ મુજબ સમાન ખૂણાની સામેની બાજુઓ સમાન હોય.<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; OB = OC</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span><br><br>
                            
                            <b>(ii) AO એ &ang;A નો દ્વિભાજક છે તેમ સાબિત કરવા:</b><br>
                            &Delta;ABO અને &Delta;ACO માં:<br>
                            1) <b>AB = AC</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span><br>
                            2) <b>OB = OC</b> <span style='color:#64748b;'>(પરિણામ 1 માં સાબિત કર્યું)</span><br>
                            3) <b>AO = AO</b> <span style='color:#64748b;'>(સામાન્ય બાજુ)</span><br>
                            અહીં <b>બાબાબા (SSS)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            &there4; &Delta;ABO &cong; &Delta;ACO<br>
                            એકરૂપ ત્રિકોણના અનુરૂપ અંગો (CPCT) સમાન હોય છે.<br>
                            &there4; &ang;BAO = &ang;CAO<br>
                            આનો અર્થ એ કે, રેખા AO એ &ang;A ના બે સરખા ભાગ કરે છે.<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; AO એ &ang;A નો દ્વિભાજક છે.</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલા માટે <b>"Mirror Effect (અરીસાનો નિયમ)"</b> યાદ રાખો! ત્રિકોણ ABC ની બરાબર વચ્ચે એક અરીસો (AO) મૂકી દો. ડાબી બાજુનું બધું જ જમણી બાજુ સમાન દેખાશે! AB = AC, OB = OC, અને ડાબી બાજુનો અડધો ખૂણો = જમણી બાજુનો અડધો ખૂણો. ગણતરીઓ પણ આ જ લોજિકથી સેટ થઈ જશે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.2 - પ્રશ્ન 2",
                "marks": 3,
                "question": "&Delta;ABC માં, AD એ BC નો લંબદ્વિભાજક છે. સાબિત કરો કે &Delta;ABC એ સમદ્વિબાજુ ત્રિકોણ છે જેમાં AB = AC છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 250" style="width:100%; max-width:300px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="150,30 50,200 250,200" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            
                            <line x1="150" y1="30" x2="150" y2="200" stroke="#be123c" stroke-width="2"/>
                            
                            <polyline points="150,190 160,190 160,200" fill="none" stroke="#0f172a" stroke-width="1.5"/>
                            <polyline points="150,190 140,190 140,200" fill="none" stroke="#0f172a" stroke-width="1.5"/>
                            
                            <line x1="95" y1="195" x2="105" y2="205" stroke="#1d4ed8" stroke-width="2"/>
                            <line x1="195" y1="195" x2="205" y2="205" stroke="#1d4ed8" stroke-width="2"/>
                            
                            <text x="145" y="20" fill="#16a34a" font-weight="bold">A</text>
                            <text x="35" y="215" fill="#16a34a" font-weight="bold">B</text>
                            <text x="255" y="215" fill="#16a34a" font-weight="bold">C</text>
                            <text x="145" y="220" fill="#be123c" font-weight="bold">D</text>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            રકમમાં આપેલ છે કે AD એ BC નો લંબદ્વિભાજક છે. આનો અર્થ થાય કે:<br>
                            (1) તે લંબ છે, એટલે કે &ang;ADB = 90&deg; અને &ang;ADC = 90&deg;<br>
                            (2) તે દ્વિભાજક છે, એટલે કે તે BC ના બે સરખા ભાગ કરે છે: BD = DC<br><br>
                            
                            હવે, &Delta;ABD અને &Delta;ACD ની સરખામણી કરીએ:<br>
                            1) <b>BD = DC</b> <span style='color:#64748b;'>(AD દ્વિભાજક હોવાથી)</span><br>
                            2) <b>&ang;ADB = &ang;ADC = 90&deg;</b> <span style='color:#64748b;'>(AD લંબ હોવાથી)</span><br>
                            3) <b>AD = AD</b> <span style='color:#64748b;'>(બંને ત્રિકોણની સામાન્ય બાજુ)</span><br><br>
                            
                            અહીં <b>બાખૂબા (SAS)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            &there4; &Delta;ABD &cong; &Delta;ACD<br><br>
                            
                            એકરૂપ ત્રિકોણના અનુરૂપ અંગો (CPCT) સમાન હોય છે.<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; AB = AC</b><br><br>
                            
                            જે ત્રિકોણમાં બે બાજુઓ સમાન હોય તેને સમદ્વિબાજુ ત્રિકોણ કહેવાય.<br>
                            <b style='color:#16a34a; font-size:15px;'>&there4; &Delta;ABC એ સમદ્વિબાજુ ત્રિકોણ છે.</b> <span style='color:#0f172a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.2 - પ્રશ્ન 3",
                "marks": 3,
                "question": "&Delta;ABC સમદ્વિબાજુ ત્રિકોણ છે જેમાં સમાન બાજુઓ AC અને AB પર અનુક્રમે વેધ BE અને CF દોરેલા છે. સાબિત કરો કે આ વેધ સમાન છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 250" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="175,30 50,200 300,200" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
                            
                            <line x1="50" y1="200" x2="230" y2="105" stroke="#be123c" stroke-width="2"/>
                            <line x1="300" y1="200" x2="120" y2="105" stroke="#1d4ed8" stroke-width="2"/>
                            
                            <polygon points="230,105 220,115 230,125 240,115" fill="none" stroke="#be123c" stroke-width="1.5"/>
                            <polygon points="120,105 130,115 120,125 110,115" fill="none" stroke="#1d4ed8" stroke-width="1.5"/>
                            
                            <text x="170" y="20" fill="#ca8a04" font-weight="bold">A</text>
                            <text x="30" y="215" fill="#ca8a04" font-weight="bold">B</text>
                            <text x="310" y="215" fill="#ca8a04" font-weight="bold">C</text>
                            <text x="245" y="105" fill="#be123c" font-weight="bold">E</text>
                            <text x="100" y="105" fill="#1d4ed8" font-weight="bold">F</text>
                        </svg>
                    </div>

                    <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#27272a;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#3f3f46; line-height:1.8; margin-left:10px;'>
                            &Delta;ABC એ સમદ્વિબાજુ ત્રિકોણ છે, જેમાં <b>AB = AC</b> છે.<br>
                            BE એ AC પરનો વેધ છે, તેથી &ang;AEB = 90&deg;.<br>
                            CF એ AB પરનો વેધ છે, તેથી &ang;AFC = 90&deg;.<br><br>
                            
                            હવે, ઉપરના બે નાના ત્રિકોણો &Delta;ABE અને &Delta;ACF ની સરખામણી કરીએ:<br>
                            1) <b>&ang;A = &ang;A</b> <span style='color:#64748b;'>(બંને ત્રિકોણનો સામાન્ય ખૂણો છે)</span><br>
                            2) <b>&ang;AEB = &ang;AFC = 90&deg;</b> <span style='color:#64748b;'>(કારણ કે BE અને CF વેધ છે)</span><br>
                            3) <b>AB = AC</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span><br><br>
                            
                            અહીં બે ખૂણાઓ અને એક બાજુ (સળંગ ક્રમમાં નથી) સમાન છે. તેથી <b>ખૂખૂબા (AAS - Angle-Angle-Side)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            &there4; &Delta;ABE &cong; &Delta;ACF<br><br>
                            
                            એકરૂપ ત્રિકોણના અનુરૂપ અંગો (CPCT) સમાન હોય છે.<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; BE = CF</b> <span style='color:#16a34a;'>(આમ, બંને વેધ સમાન છે તે સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આકૃતિમાં <b>A</b> ખૂણો સૌથી ઉપર છે. બંને વેધ વાળાઓ (BE અને CF) એ <b>A</b> ના ઘરેથી જ પસાર થાય છે! એટલે ખૂણો <b>A</b> બંને માટે કોમન (સામાન્ય) થઈ ગયો. બીજો 90&deg; નો ખૂણો (વેધ) છે, અને ત્રિકોણ સમદ્વિબાજુ હોવાથી AB = AC તો છે જ. એટલે <b>A-A-S</b> થી સીધું સાબિત!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.2 - પ્રશ્ન 4",
                "marks": 3,
                "question": "&Delta;ABC માં બાજુઓ AC અને AB પરના વેધ BE અને CF સમાન છે. સાબિત કરો કે:<br>(i) &Delta;ABE &cong; &Delta;ACF<br>(ii) AB = AC, એટલે કે &Delta;ABC સમદ્વિબાજુ ત્રિકોણ છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0f9ff; padding:10px; border-radius:5px; border-left:4px solid #0284c7; margin-bottom:15px;'>
                        <p style='margin:0; font-size:14px; color:#0369a1;'><b>નોંધ:</b> આ પ્રશ્નની આકૃતિ અને સાબિતીની રીત બિલકુલ <b>પ્રશ્ન 3 ના જેવી જ</b> છે, માત્ર શરતો ઉલટ-સુલટ આપેલી છે. અહીં વેધ સમાન આપેલા છે અને બાજુઓ સમાન સાબિત કરવાની છે.</p>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            <b>(i) &Delta;ABE &cong; &Delta;ACF સાબિત કરવા:</b><br>
                            &Delta;ABE અને &Delta;ACF માં:<br>
                            1) <b>&ang;A = &ang;A</b> <span style='color:#64748b;'>(સામાન્ય ખૂણો)</span><br>
                            2) <b>&ang;AEB = &ang;AFC = 90&deg;</b> <span style='color:#64748b;'>(કારણ કે BE અને CF વેધ છે)</span><br>
                            3) <b>BE = CF</b> <span style='color:#64748b;'>(અહીં પક્ષમાં આપેલ છે કે વેધ સમાન છે)</span><br><br>
                            
                            અહીં <b>ખૂખૂબા (AAS)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; &Delta;ABE &cong; &Delta;ACF</b> <span style='color:#16a34a;'>(પહેલું પરિણામ સાબિત થાય છે)</span><br><br>
                            
                            <b>(ii) AB = AC સાબિત કરવા:</b><br>
                            કારણ કે &Delta;ABE અને &Delta;ACF એકરૂપ ત્રિકોણો છે, તેથી તેમના અનુરૂપ અંગો (CPCT) સમાન થાય.<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; AB = AC</b> (CPCT)<br><br>
                            
                            અને જે ત્રિકોણની બે બાજુઓ સમાન હોય, તેને સમદ્વિબાજુ ત્રિકોણ કહે છે.<br>
                            <b style='color:#16a34a; font-size:15px;'>&there4; &Delta;ABC સમદ્વિબાજુ ત્રિકોણ છે.</b> <span style='color:#0f172a;'>(બીજું પરિણામ સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.2 - પ્રશ્ન 5",
                "marks": 3,
                "question": "&Delta;ABC અને &Delta;DBC સમાન પાયા BC પર આવેલા બે સમદ્વિબાજુ ત્રિકોણ છે. સાબિત કરો કે &ang;ABD = &ang;ACD.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 300" style="width:100%; max-width:300px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="150,30 50,150 250,150" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            <polygon points="150,270 50,150 250,150" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            
                            <line x1="150" y1="30" x2="150" y2="270" stroke="#be123c" stroke-width="2" stroke-dasharray="5,5"/>
                            
                            <line x1="95" y1="85" x2="105" y2="95" stroke="#0f172a" stroke-width="2"/>
                            <line x1="195" y1="95" x2="205" y2="85" stroke="#0f172a" stroke-width="2"/>
                            
                            <line x1="95" y1="205" x2="105" y2="215" stroke="#0f172a" stroke-width="2"/>
                            <line x1="90" y1="210" x2="100" y2="220" stroke="#0f172a" stroke-width="2"/>
                            <line x1="195" y1="215" x2="205" y2="205" stroke="#0f172a" stroke-width="2"/>
                            <line x1="200" y1="220" x2="210" y2="210" stroke="#0f172a" stroke-width="2"/>
                            
                            <text x="145" y="20" fill="#0284c7" font-weight="bold">A</text>
                            <text x="30" y="155" fill="#0f172a" font-weight="bold">B</text>
                            <text x="260" y="155" fill="#0f172a" font-weight="bold">C</text>
                            <text x="145" y="290" fill="#16a34a" font-weight="bold">D</text>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#64748b; font-size:13px;'>નોંધ: સાબિતી સરળ કરવા માટે A અને D ને જોડતી તૂટક રેખા દોરી છે.</p>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            સાબિતીને સરળ બનાવવા માટે <b>બિંદુ A અને બિંદુ D ને જોડો</b> (જેથી આકૃતિમાં બે ઊભા ત્રિકોણો &Delta;ABD અને &Delta;ACD બનશે).<br><br>
                            
                            હવે &Delta;ABD અને &Delta;ACD ની સરખામણી કરીએ:<br>
                            1) <b>AB = AC</b> <span style='color:#64748b;'>(પક્ષ: ઉપરનો ત્રિકોણ સમદ્વિબાજુ છે)</span><br>
                            2) <b>BD = CD</b> <span style='color:#64748b;'>(પક્ષ: નીચેનો ત્રિકોણ સમદ્વિબાજુ છે)</span><br>
                            3) <b>AD = AD</b> <span style='color:#64748b;'>(બંને ત્રિકોણની સામાન્ય બાજુ)</span><br><br>
                            
                            અહીં ત્રણેય બાજુઓ સમાન છે, તેથી <b>બાબાબા (SSS)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            &there4; &Delta;ABD &cong; &Delta;ACD<br><br>
                            
                            જ્યારે બે ત્રિકોણ એકરૂપ હોય, ત્યારે તેમના અનુરૂપ ખૂણાઓ (CPCT) સમાન હોય છે.<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; &ang;ABD = &ang;ACD</b> <span style='color:#0f172a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>`
            },
                        
          { 
        "questionNumber": "સ્વાધ્યાય 7.2 - પ્રશ્ન 6",
        "marks": 4,
        "question": "ΔABC સમદ્વિબાજુ ત્રિકોણ છે, જેમાં AB = AC. બાજુ BA ને બિંદુ D સુધી એવી રીતે લંબાવી છે કે જેથી AD = AB થાય. સાબિત કરો કે ∠BCD કાટખૂણો છે.", 
        "answer": `
        <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 320 270" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Main Triangle BCD -->
                    <polygon points="50,220 250,220 250,70" fill="#f0f9ff" stroke="#0f172a" stroke-width="2"/>
                    
                    <!-- Line AC inside the triangle -->
                    <line x1="150" y1="145" x2="250" y2="220" stroke="#0f172a" stroke-width="2"/>
                    
                    <!-- Equal Sides Markings for AB = AC = AD (Red Ticks) -->
                    <!-- Center of AB -->
                    <line x1="94" y1="174" x2="106" y2="191" stroke="#be123c" stroke-width="2.5" stroke-linecap="round"/>
                    <!-- Center of AD -->
                    <line x1="194" y1="99" x2="206" y2="116" stroke="#be123c" stroke-width="2.5" stroke-linecap="round"/>
                    <!-- Center of AC -->
                    <line x1="194" y1="191" x2="206" y2="174" stroke="#be123c" stroke-width="2.5" stroke-linecap="round"/>

                    <!-- Angle x at vertex B -->
                    <path d="M 85 220 A 35 35 0 0 0 78 199" fill="none" stroke="#ea580c" stroke-width="2"/>
                    <text x="92" y="213" fill="#ea580c" font-size="14" font-weight="bold">x</text>

                    <!-- Angle x at vertex C -->
                    <path d="M 215 220 A 35 35 0 0 1 222 199" fill="none" stroke="#ea580c" stroke-width="2"/>
                    <text x="202" y="213" fill="#ea580c" font-size="14" font-weight="bold">x</text>

                    <!-- Angle y at vertex D -->
                    <path d="M 250 105 A 35 35 0 0 0 222 91" fill="none" stroke="#16a34a" stroke-width="2"/>
                    <text x="235" y="110" fill="#16a34a" font-size="14" font-weight="bold">y</text>

                    <!-- Angle y at vertex C -->
                    <path d="M 222 199 A 35 35 0 0 1 250 185" fill="none" stroke="#16a34a" stroke-width="2"/>
                    <text x="238" y="180" fill="#16a34a" font-size="14" font-weight="bold">y</text>

                    <!-- Right Angle Marker for total ∠BCD -->
                    <polyline points="250,205 235,205 235,220" fill="none" stroke="#be123c" stroke-width="1.5" stroke-dasharray="3,3"/>

                    <!-- Vertex Points (Dots) -->
                    <circle cx="150" cy="145" r="3.5" fill="#0284c7"/>
                    <circle cx="50" cy="220" r="3.5" fill="#0284c7"/>
                    <circle cx="250" cy="220" r="3.5" fill="#0284c7"/>
                    <circle cx="250" cy="70" r="3.5" fill="#0284c7"/>

                    <!-- Labels for Vertices -->
                    <text x="132" y="138" fill="#0284c7" font-weight="bold" font-size="16">A</text>
                    <text x="32" y="235" fill="#0284c7" font-weight="bold" font-size="16">B</text>
                    <text x="258" y="235" fill="#0284c7" font-weight="bold" font-size="16">C</text>
                    <text x="258" y="65" fill="#0284c7" font-weight="bold" font-size="16">D</text>
                </svg>
            </div>

            <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>સાબિતી:</b></p>
                <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                    &Delta;ABC માં આપેલું છે કે <b>AB = AC</b>.<br>
                    સમદ્વિબાજુ ત્રિકોણના નિયમ મુજબ સમાન બાજુઓની સામેના ખૂણા સમાન હોય.<br>
                    &there4; &ang;ACB = &ang;ABC<br>
                    ધારો કે આ બંને ખૂણા <b>x</b> છે. <b>(&ang;ACB = &ang;ABC = x)</b> ......(સમીકરણ 1)<br><br>
                    
                    હવે, રકમ મુજબ AD = AB છે. અને આપણી પાસે AB = AC છે.<br>
                    તેથી <b>AD = AC</b> થશે.<br>
                    હવે &Delta;ACD માં બે બાજુ સમાન (AD = AC) હોવાથી તેના સામેના ખૂણા પણ સમાન થાય.<br>
                    &there4; &ang;ACD = &ang;ADC<br>
                    ધારો કે આ બંને ખૂણા <b>y</b> છે. <b>(&ang;ACD = &ang;ADC = y)</b> ......(સમીકરણ 2)<br><br>
                    
                    હવે મોટા <b>&Delta;BCD</b> માં ત્રણેય ખૂણાઓનો સરવાળો 180&deg; થાય છે.<br>
                    &there4; &ang;B + &ang;D + &ang;BCD = 180&deg;<br>
                    અહીં, આકૃતિ પરથી આખો ખૂણો <b>&ang;BCD = x + y</b> છે.<br>
                    સમીકરણમાં કિંમત મૂકતાં:<br>
                    &there4; (x) + (y) + (x + y) = 180&deg;<br>
                    &there4; 2x + 2y = 180&deg;<br>
                    &there4; 2(x + y) = 180&deg;<br>
                    &there4; x + y = 180&deg; / 2<br>
                    &there4; x + y = 90&deg;<br><br>
                    
                    પરંતુ x + y એ &ang;BCD છે.<br>
                    <b style='color:#be123c; font-size:18px;'>&there4; &ang;BCD = 90&deg; (કાટખૂણો છે)</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span>
                </div>
            </div>
        </div>
        
        <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
            <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
            <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલાને <b>"x-y ગેમ"</b> કહેવાય! નીચેના ત્રિકોણના બે ખૂણાને x નામ આપો, ઉપરના ત્રિકોણના બે ખૂણાને y નામ આપો. મોટા ત્રિકોણનો સરવાળો 180 થાય એટલે 2x + 2y = 180. બે ને સામાન્ય કાઢીને ભાગાકાર કરો એટલે x + y = 90 સીધું જ આવી જશે!</p>
        </div>`
    },
            { 
                "questionNumber": "સ્વાધ્યાય 7.2 - પ્રશ્ન 7",
                "marks": 3,
                "question": "કાટકોણ ત્રિકોણ ABC માં ∠A = 90° અને AB = AC છે. ∠B અને ∠C શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 200 200" style="width:100%; max-width:250px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,150 150,150 50,50" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            
                            <polyline points="50,135 65,135 65,150" fill="none" stroke="#be123c" stroke-width="2"/>
                            <text x="70" y="140" fill="#be123c" font-size="12" font-weight="bold">90&deg;</text>
                            
                            <line x1="40" y1="100" x2="60" y2="100" stroke="#0f172a" stroke-width="2"/>
                            <line x1="100" y1="140" x2="100" y2="160" stroke="#0f172a" stroke-width="2"/>
                            
                            <path d="M 125 150 A 20 20 0 0 0 135 135" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <path d="M 50 75 A 20 20 0 0 1 65 65" fill="none" stroke="#ea580c" stroke-width="2"/>
                            
                            <text x="35" y="165" fill="#16a34a" font-weight="bold">A</text>
                            <text x="160" y="165" fill="#16a34a" font-weight="bold">C</text>
                            <text x="35" y="45" fill="#16a34a" font-weight="bold">B</text>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            &Delta;ABC માં આપેલું છે કે <b>AB = AC</b>.<br>
                            આપણે જાણીએ છીએ કે સમાન બાજુઓની સામેના ખૂણાઓ સમાન હોય છે.<br>
                            &there4; <b>&ang;C = &ang;B</b> ......(સમીકરણ 1)<br><br>
                            
                            હવે, ત્રિકોણના ત્રણેય ખૂણાઓનો સરવાળો 180&deg; થાય છે.<br>
                            &there4; &ang;A + &ang;B + &ang;C = 180&deg;<br>
                            અહીં &ang;A = 90&deg; આપેલ છે, અને સમીકરણ 1 મુજબ &ang;C ની જગ્યાએ &ang;B લખી શકાય.<br>
                            &there4; 90&deg; + &ang;B + &ang;B = 180&deg;<br>
                            &there4; 90&deg; + 2&ang;B = 180&deg;<br>
                            &there4; 2&ang;B = 180&deg; - 90&deg;<br>
                            &there4; 2&ang;B = 90&deg;<br>
                            &there4; &ang;B = 90&deg; / 2<br>
                            &there4; <b style='color:#be123c; font-size:18px;'>&ang;B = 45&deg;</b><br><br>
                            
                            અને &ang;C = &ang;B હોવાથી,<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; &ang;C = 45&deg;</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.2 - પ્રશ્પ 8",
                "marks": 3,
                "question": "સાબિત કરો કે સમબાજુ ત્રિકોણના બધા જ ખૂણાનાં માપ 60° હોય છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 200 200" style="width:100%; max-width:250px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="100,30 30,150 170,150" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
                            
                            <line x1="55" y1="85" x2="75" y2="95" stroke="#0f172a" stroke-width="2"/>
                            <line x1="145" y1="85" x2="125" y2="95" stroke="#0f172a" stroke-width="2"/>
                            <line x1="100" y1="140" x2="100" y2="160" stroke="#0f172a" stroke-width="2"/>
                            
                            <path d="M 50 150 A 20 20 0 0 0 60 133" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <path d="M 150 150 A 20 20 0 0 1 140 133" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <path d="M 90 47 A 20 20 0 0 0 110 47" fill="none" stroke="#ea580c" stroke-width="2"/>
                            
                            <text x="95" y="20" fill="#ca8a04" font-weight="bold">A</text>
                            <text x="15" y="165" fill="#ca8a04" font-weight="bold">B</text>
                            <text x="180" y="165" fill="#ca8a04" font-weight="bold">C</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            ધારો કે &Delta;ABC એક સમબાજુ ત્રિકોણ છે.<br>
                            સમબાજુ ત્રિકોણમાં ત્રણેય બાજુઓ સમાન હોય છે.<br>
                            &there4; <b>AB = BC = AC</b><br><br>
                            
                            હવે, <b>AB = AC</b> હોવાથી,<br>
                            તેમની સામેના ખૂણાઓ સમાન થશે. &there4; <b>&ang;C = &ang;B</b> ......(સમીકરણ 1)<br><br>
                            
                            તે જ રીતે, <b>BC = AC</b> હોવાથી,<br>
                            તેમની સામેના ખૂણાઓ સમાન થશે. &there4; <b>&ang;A = &ang;B</b> ......(સમીકરણ 2)<br><br>
                            
                            સમીકરણ 1 અને 2 પરથી એ સ્પષ્ટ થાય છે કે:<br>
                            <b>&ang;A = &ang;B = &ang;C</b><br>
                            ધારો કે આ ત્રણેય ખૂણાઓનું માપ <b>x</b> છે.<br><br>
                            
                            ત્રિકોણના ત્રણેય ખૂણાઓનો સરવાળો 180&deg; થાય છે.<br>
                            &there4; &ang;A + &ang;B + &ang;C = 180&deg;<br>
                            &there4; x + x + x = 180&deg;<br>
                            &there4; 3x = 180&deg;<br>
                            &there4; x = 180&deg; / 3<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; x = 60&deg;</b><br><br>
                            
                            આમ, <b style='color:#16a34a; font-size:15px;'>&ang;A = 60&deg;, &ang;B = 60&deg;, &ang;C = 60&deg;</b> સાબિત થાય છે.
                        </div>
                    </div>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 7.3 - પ્રશ્ન 1",
                "marks": 5,
                "question": "ΔABC અને ΔDBC સમાન પાયા BC પર આવેલા બે સમદ્વિબાજુ ત્રિકોણો છે અને શિરોબિંદુઓ A અને D એ BC ની એક જ બાજુએ આવેલા છે. જો AD ને લંબાવતાં તે BC ને P બિંદુમાં છેદે, તો સાબિત કરો કે:<br>(i) ΔABD ≅ ΔACD<br>(ii) ΔABP ≅ ΔACP<br>(iii) AP એ ∠A તથા ∠D ને દુભાગે છે.<br>(iv) AP એ BC નો લંબદ્વિભાજક છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 250" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="175,30 50,200 300,200" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            <polygon points="175,130 50,200 300,200" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            
                            <line x1="175" y1="30" x2="175" y2="200" stroke="#be123c" stroke-width="2"/>
                            
                            <line x1="105" y1="120" x2="115" y2="110" stroke="#0f172a" stroke-width="2"/>
                            <line x1="110" y1="125" x2="120" y2="115" stroke="#0f172a" stroke-width="2"/>
                            <line x1="235" y1="110" x2="245" y2="120" stroke="#0f172a" stroke-width="2"/>
                            <line x1="230" y1="115" x2="240" y2="125" stroke="#0f172a" stroke-width="2"/>
                            
                            <line x1="105" y1="170" x2="115" y2="160" stroke="#0f172a" stroke-width="2"/>
                            <line x1="235" y1="160" x2="245" y2="170" stroke="#0f172a" stroke-width="2"/>
                            
                            <polyline points="175,190 185,190 185,200" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            
                            <text x="170" y="20" fill="#0284c7" font-weight="bold">A</text>
                            <text x="35" y="215" fill="#0f172a" font-weight="bold">B</text>
                            <text x="310" y="215" fill="#0f172a" font-weight="bold">C</text>
                            <text x="185" y="125" fill="#16a34a" font-weight="bold">D</text>
                            <text x="170" y="220" fill="#be123c" font-weight="bold">P</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            <b>(i) &Delta;ABD &cong; &Delta;ACD:</b><br>
                            &Delta;ABD અને &Delta;ACD માં:<br>
                            1) AB = AC (પક્ષ)<br>
                            2) BD = CD (પક્ષ)<br>
                            3) AD = AD (સામાન્ય બાજુ)<br>
                            <b style='color:#be123c;'>&there4; બાબાબા (SSS) નિયમ મુજબ &Delta;ABD &cong; &Delta;ACD</b>.<br>
                            આથી &ang;BAD = &ang;CAD (CPCT). એટલે કે &ang;BAP = &ang;CAP.<br><br>
                            
                            <b>(ii) &Delta;ABP &cong; &Delta;ACP:</b><br>
                            &Delta;ABP અને &Delta;ACP માં:<br>
                            1) AB = AC (પક્ષ)<br>
                            2) &ang;BAP = &ang;CAP (ઉપર સાબિત કર્યું)<br>
                            3) AP = AP (સામાન્ય બાજુ)<br>
                            <b style='color:#be123c;'>&there4; બાખૂબા (SAS) નિયમ મુજબ &Delta;ABP &cong; &Delta;ACP</b>.<br>
                            આથી BP = CP અને &ang;APB = &ang;APC (CPCT).<br><br>
                            
                            <b>(iii) AP એ &ang;A અને &ang;D ને દુભાગે છે:</b><br>
                            આપણે ઉપર જોયું કે &ang;BAP = &ang;CAP, એટલે કે AP એ &ang;A ને દુભાગે છે.<br>
                            તે જ રીતે &Delta;BDP અને &Delta;CDP એકરૂપ સાબિત કરી શકાય (SSS થી), જેથી &ang;BDP = &ang;CDP મળે. આમ, <b>AP એ &ang;D ને પણ દુભાગે છે.</b><br><br>
                            
                            <b>(iv) AP એ BC નો લંબદ્વિભાજક છે:</b><br>
                            ઉપર સાબિત કર્યું કે <b>BP = CP</b> (એટલે કે દુભાગે છે).<br>
                            વળી, &ang;APB + &ang;APC = 180&deg; (રૈખિક જોડ).<br>
                            પરંતુ &ang;APB = &ang;APC હોવાથી, બંને 90&deg; થાય (એટલે કે લંબ છે).<br>
                            <b style='color:#16a34a;'>&there4; AP એ BC નો લંબદ્વિભાજક છે.</b> (સાબિત થાય છે)
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.3 - પ્રશ્ન 2",
                "marks": 3,
                "question": "AD એ સમદ્વિબાજુ ત્રિકોણ ABC નો વેધ છે, જેમાં AB = AC. સાબિત કરો કે:<br>(i) AD એ BC ને દુભાગે છે.<br>(ii) AD એ ∠A ને દુભાગે છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 220" style="width:100%; max-width:300px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="150,30 50,180 250,180" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
                            
                            <line x1="150" y1="30" x2="150" y2="180" stroke="#be123c" stroke-width="2"/>
                            
                            <polyline points="150,170 160,170 160,180" fill="none" stroke="#be123c" stroke-width="1.5"/>
                            <polyline points="150,170 140,170 140,180" fill="none" stroke="#be123c" stroke-width="1.5"/>
                            
                            <line x1="95" y1="100" x2="105" y2="110" stroke="#0f172a" stroke-width="2"/>
                            <line x1="195" y1="110" x2="205" y2="100" stroke="#0f172a" stroke-width="2"/>
                            
                            <text x="145" y="20" fill="#ca8a04" font-weight="bold">A</text>
                            <text x="35" y="195" fill="#ca8a04" font-weight="bold">B</text>
                            <text x="255" y="195" fill="#ca8a04" font-weight="bold">C</text>
                            <text x="145" y="200" fill="#be123c" font-weight="bold">D</text>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            &Delta;ABD અને &Delta;ACD (બંને કાટકોણ ત્રિકોણો) માં:<br>
                            1) <b>&ang;ADB = &ang;ADC = 90&deg;</b> <span style='color:#64748b;'>(કારણ: AD વેધ છે) -> કાટખૂણો</span><br>
                            2) <b>AB = AC</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે) -> કર્ણ</span><br>
                            3) <b>AD = AD</b> <span style='color:#64748b;'>(બંને ત્રિકોણની સામાન્ય બાજુ) -> બાજુ</span><br><br>
                            
                            તેથી <b>કાકબા (RHS - Right Angle, Hypotenuse, Side)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; &Delta;ABD &cong; &Delta;ACD</b><br><br>
                            
                            એકરૂપ ત્રિકોણના અનુરૂપ અંગો (CPCT) સમાન હોય છે.<br>
                            <b>(i) BD = CD</b> <span style='color:#16a34a;'>(અર્થાત્ AD એ BC ને દુભાગે છે)</span><br>
                            <b>(ii) &ang;BAD = &ang;CAD</b> <span style='color:#16a34a;'>(અર્થાત્ AD એ &ang;A ને દુભાગે છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>જ્યારે ત્રિકોણમાં વેધ (90&deg;) હોય અને કર્ણ (સૌથી મોટી બાજુ) સમાન આપેલી હોય, ત્યારે આંખ બંધ કરીને <b>કાકબા (RHS)</b> નિયમ લગાવી દેવો! કાટખૂણો, કર્ણ અને એક બાજુ (અહીં સામાન્ય લીટી) - બસ આ 3 વસ્તુથી ત્રિકોણ એકરૂપ થઈ જશે.</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.3 - પ્રશ્ન 3",
                "marks": 4,
                "question": "એક ત્રિકોણ ABC ની બે બાજુઓ AB અને BC તથા મધ્યગા AM એ અનુક્રમે બીજા ત્રિકોણ PQR ની બાજુઓ PQ અને QR તથા મધ્યગા PN ને સમાન છે. સાબિત કરો કે:<br>(i) ΔABM ≅ ΔPQN<br>(ii) ΔABC ≅ ΔPQR", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 450 180" style="width:100%; max-width:450px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="100,20 30,140 170,140" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            <line x1="100" y1="20" x2="100" y2="140" stroke="#be123c" stroke-width="2" stroke-dasharray="4,4"/>
                            <text x="95" y="15" fill="#0f172a" font-weight="bold">A</text>
                            <text x="15" y="150" fill="#0f172a" font-weight="bold">B</text>
                            <text x="175" y="150" fill="#0f172a" font-weight="bold">C</text>
                            <text x="95" y="155" fill="#be123c" font-weight="bold">M</text>
                            
                            <line x1="60" y1="75" x2="70" y2="85" stroke="#16a34a" stroke-width="2"/>
                            <line x1="100" y1="75" x2="110" y2="85" stroke="#16a34a" stroke-width="2"/>
                            <line x1="90" y1="75" x2="100" y2="85" stroke="#16a34a" stroke-width="2"/>
                            
                            <polygon points="350,20 280,140 420,140" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            <line x1="350" y1="20" x2="350" y2="140" stroke="#be123c" stroke-width="2" stroke-dasharray="4,4"/>
                            <text x="345" y="15" fill="#0f172a" font-weight="bold">P</text>
                            <text x="265" y="150" fill="#0f172a" font-weight="bold">Q</text>
                            <text x="425" y="150" fill="#0f172a" font-weight="bold">R</text>
                            <text x="345" y="155" fill="#be123c" font-weight="bold">N</text>
                            
                            <line x1="310" y1="75" x2="320" y2="85" stroke="#16a34a" stroke-width="2"/>
                            <line x1="350" y1="75" x2="360" y2="85" stroke="#16a34a" stroke-width="2"/>
                            <line x1="340" y1="75" x2="350" y2="85" stroke="#16a34a" stroke-width="2"/>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            અહીં મધ્યગા AM એ પાયા BC ના બે સરખા ભાગ કરે છે, અને PN એ QR ના બે સરખા ભાગ કરે છે.<br>
                            રકમ મુજબ <b>BC = QR</b> આપેલું છે. બંને બાજુ અડધા કરતા:<br>
                            &there4; 1/2 BC = 1/2 QR<br>
                            <b style='color:#be123c;'>&there4; BM = QN</b> ......(પરિણામ 1)<br><br>
                            
                            <b>(i) &Delta;ABM &cong; &Delta;PQN માટે:</b><br>
                            &Delta;ABM અને &Delta;PQN માં:<br>
                            1) AB = PQ (પક્ષ)<br>
                            2) AM = PN (પક્ષ: મધ્યગા સમાન છે)<br>
                            3) BM = QN (પરિણામ 1 પરથી)<br>
                            તેથી <b>બાબાબા (SSS)</b> નિયમ મુજબ: <b style='color:#15803d; font-size:16px;'>&Delta;ABM &cong; &Delta;PQN</b>.<br>
                            આના પરથી CPCT મુજબ: <b>&ang;B = &ang;Q</b> ......(પરિણામ 2)<br><br>
                            
                            <b>(ii) &Delta;ABC &cong; &Delta;PQR માટે:</b><br>
                            મોટા ત્રિકોણો &Delta;ABC અને &Delta;PQR માં:<br>
                            1) AB = PQ (પક્ષ)<br>
                            2) &ang;B = &ang;Q (પરિણામ 2 પરથી સાબિત કર્યું)<br>
                            3) BC = QR (પક્ષ)<br>
                            તેથી <b>બાખૂબા (SAS)</b> નિયમ મુજબ: <b style='color:#15803d; font-size:16px;'>&Delta;ABC &cong; &Delta;PQR</b>. <span style='color:#0f172a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.3 - પ્રશ્ન 4",
                "marks": 3,
                "question": "BE અને CF એ ΔABC ના બે સમાન વેધ છે. એકરૂપતાના કાકબા (RHS) નિયમનો ઉપયોગ કરીને સાબિત કરો કે ΔABC સમદ્વિબાજુ ત્રિકોણ છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 250" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="175,30 50,200 300,200" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            
                            <line x1="50" y1="200" x2="230" y2="105" stroke="#be123c" stroke-width="2"/>
                            <line x1="300" y1="200" x2="120" y2="105" stroke="#be123c" stroke-width="2"/>
                            
                            <polygon points="230,105 220,115 230,125 240,115" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            <polygon points="120,105 130,115 120,125 110,115" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            
                            <line x1="50" y1="200" x2="300" y2="200" stroke="#16a34a" stroke-width="4"/>
                            
                            <text x="170" y="20" fill="#0f172a" font-weight="bold">A</text>
                            <text x="30" y="215" fill="#16a34a" font-weight="bold">B</text>
                            <text x="310" y="215" fill="#16a34a" font-weight="bold">C</text>
                            <text x="245" y="105" fill="#be123c" font-weight="bold">E</text>
                            <text x="100" y="105" fill="#be123c" font-weight="bold">F</text>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            અહીં આપણે નીચેના બે કાટકોણ ત્રિકોણો &Delta;BFC અને &Delta;CEB ની સરખામણી કરીશું.<br><br>
                            &Delta;BFC અને &Delta;CEB માં:<br>
                            1) <b>&ang;BFC = &ang;CEB = 90&deg;</b> <span style='color:#64748b;'>(કારણ: CF અને BE વેધ છે) -> કાટખૂણો</span><br>
                            2) <b>BC = CB</b> <span style='color:#64748b;'>(બંને ત્રિકોણનો સામાન્ય કર્ણ છે) -> કર્ણ</span><br>
                            3) <b>CF = BE</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે કે વેધ સમાન છે) -> બાજુ</span><br><br>
                            
                            અહીં <b>કાકબા (RHS)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            &there4; &Delta;BFC &cong; &Delta;CEB<br><br>
                            
                            એકરૂપ ત્રિકોણના અનુરૂપ ખૂણાઓ (CPCT) સમાન હોય છે.<br>
                            &there4; &ang;FBC = &ang;ECB (એટલે કે <b>&ang;B = &ang;C</b>)<br><br>
                            
                            આપણે જાણીએ છીએ કે જો ત્રિકોણના બે ખૂણા સમાન હોય, તો તેમની સામેની બાજુઓ પણ સમાન હોય છે.<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; AC = AB</b><br>
                            આમ, <b style='color:#16a34a;'>&Delta;ABC એ સમદ્વિબાજુ ત્રિકોણ છે.</b> <span style='color:#0f172a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 7.3 - પ્રશ્ન 5",
                "marks": 3,
                "question": "ΔABC એ સમદ્વિબાજુ ત્રિકોણ છે જેમાં AB = AC. AP ⊥ BC દોરીને દર્શાવો કે ∠B = ∠C.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#ffedd5; padding:10px; border-radius:5px; border-left:4px solid #ea580c; margin-bottom:15px;'>
                        <p style='margin:0; font-size:14px; color:#9a3412;'><b>નોંધ:</b> આ પ્રશ્ન ખરેખર સમદ્વિબાજુ ત્રિકોણના પ્રમેયની સાબિતી જ છે, જેમાં કાકબા (RHS) નિયમનો ઉપયોગ થાય છે.</p>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            અહીં AP &perp; BC દોરવામાં આવ્યો છે, તેથી બે કાટકોણ ત્રિકોણો &Delta;APB અને &Delta;APC બને છે.<br><br>
                            
                            &Delta;APB અને &Delta;APC ની સરખામણી કરીએ:<br>
                            1) <b>&ang;APB = &ang;APC = 90&deg;</b> <span style='color:#64748b;'>(કારણ: AP &perp; BC છે) -> કાટખૂણો</span><br>
                            2) <b>AB = AC</b> <span style='color:#64748b;'>(પક્ષ: સમદ્વિબાજુ ત્રિકોણ છે) -> કર્ણ</span><br>
                            3) <b>AP = AP</b> <span style='color:#64748b;'>(બંને ત્રિકોણની સામાન્ય બાજુ) -> બાજુ</span><br><br>
                            
                            તેથી <b>કાકબા (RHS)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            &there4; &Delta;APB &cong; &Delta;APC<br><br>
                            
                            જ્યારે બે ત્રિકોણ એકરૂપ હોય, ત્યારે તેમના અનુરૂપ અંગો (CPCT) સમાન હોય છે.<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; &ang;B = &ang;C</b> <span style='color:#16a34a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>`
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 8: ચતુષ્કોણ (સ્વાધ્યાય)
    // ------------------------------------
    "8": {
        "chapterName": "પ્રકરણ 8",
        "chapterTitle": "ચતુષ્કોણ (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 8.1 - પ્રશ્ન 1",
                "marks": 4,
                "question": "જો સમાંતરબાજુ ચતુષ્કોણના વિકર્ણો સમાન હોય, તો દર્શાવો કે તે લંબચોરસ છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,150 250,150 250,50 50,50" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            
                            <line x1="50" y1="150" x2="250" y2="50" stroke="#be123c" stroke-width="2" stroke-dasharray="4,4"/>
                            <line x1="50" y1="50" x2="250" y2="150" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>
                            
                            <text x="35" y="165" fill="#0f172a" font-weight="bold">A</text>
                            <text x="260" y="165" fill="#0f172a" font-weight="bold">B</text>
                            <text x="260" y="40" fill="#0f172a" font-weight="bold">C</text>
                            <text x="35" y="40" fill="#0f172a" font-weight="bold">D</text>
                            
                            <line x1="50" y1="150" x2="250" y2="150" stroke="#ea580c" stroke-width="4"/>
                            <text x="145" y="170" fill="#ea580c" font-size="12" font-weight="bold">સામાન્ય પાયો</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            ધારો કે ABCD એક સમાંતરબાજુ ચતુષ્કોણ છે, જેના વિકર્ણો સમાન છે. (એટલે કે <b>AC = BD</b>).<br>
                            આપણે સાબિત કરવાનું છે કે ABCD એક લંબચોરસ છે. (જો આપણે તેનો કોઈ એક ખૂણો 90&deg; સાબિત કરી દઈએ, તો તે લંબચોરસ સાબિત થઈ જશે).<br><br>
                            
                            &Delta;ABC અને &Delta;BAD માં સરખામણી કરીએ:<br>
                            1) <b>BC = AD</b> <span style='color:#64748b;'>(કારણ: સમાંતરબાજુ ચતુષ્કોણની સામસામેની બાજુઓ સમાન હોય છે)</span><br>
                            2) <b>AC = BD</b> <span style='color:#64748b;'>(પક્ષમાં આપેલું છે કે વિકર્ણો સમાન છે)</span><br>
                            3) <b>AB = BA</b> <span style='color:#64748b;'>(બંને ત્રિકોણનો સામાન્ય પાયો)</span><br><br>
                            
                            અહીં <b>બાબાબા (SSS)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            &there4; &Delta;ABC &cong; &Delta;BAD<br><br>
                            
                            એકરૂપ ત્રિકોણોના અનુરૂપ ખૂણાઓ સમાન હોય છે.<br>
                            <b style='color:#be123c;'>&there4; &ang;ABC = &ang;BAD</b> ......(પરિણામ 1)<br><br>
                            
                            હવે, સમાંતરબાજુ ચતુષ્કોણમાં AD || BC હોય છે અને AB તેમની છેદિકા છે. તેથી, છેદિકાની એક જ તરફના અંતઃકોણોનો સરવાળો 180&deg; થાય છે.<br>
                            &there4; &ang;BAD + &ang;ABC = 180&deg;<br>
                            પરિણામ 1 મુજબ બંને ખૂણા સમાન છે, તેથી &ang;BAD ની જગ્યાએ &ang;ABC મૂકતાં:<br>
                            &there4; &ang;ABC + &ang;ABC = 180&deg;<br>
                            &there4; 2&ang;ABC = 180&deg;<br>
                            &there4; &ang;ABC = 90&deg;<br><br>
                            
                            <b style='color:#15803d; font-size:16px;'>આમ, સમાંતરબાજુ ચતુષ્કોણ ABCD નો એક ખૂણો 90&deg; સાબિત થાય છે, તેથી તે લંબચોરસ છે.</b> <span style='color:#0f172a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલાનો કોન્સેપ્ટ સિમ્પલ છે: <b>"સમાંતરબાજુ ચતુષ્કોણને સીધો કરો!"</b> જો તમે ચતુષ્કોણને સીધો (90 ડિગ્રી પર) કરી દેશો, તો જ તેના બંને વિકર્ણો સરખા થશે, નહિ તો ત્રાસા ચતુષ્કોણમાં એક વિકર્ણ લાંબો અને એક ટૂંકો હોય. એટલે જ 90&deg; સાબિત કરવો પડે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 8.1 - પ્રશ્ન 2",
                "marks": 5,
                "question": "દર્શાવો કે ચોરસના વિકર્ણો સમાન હોય છે અને તે એકબીજાને કાટખૂણે દુભાગે છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 300" style="width:100%; max-width:300px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,250 250,250 250,50 50,50" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            
                            <line x1="50" y1="250" x2="250" y2="50" stroke="#1d4ed8" stroke-width="2"/>
                            <line x1="50" y1="50" x2="250" y2="250" stroke="#be123c" stroke-width="2"/>
                            
                            <polyline points="150,140 160,140 160,150" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            <text x="135" y="165" fill="#ea580c" font-weight="bold">O</text>
                            
                            <text x="35" y="265" fill="#0f172a" font-weight="bold">A</text>
                            <text x="260" y="265" fill="#0f172a" font-weight="bold">B</text>
                            <text x="260" y="35" fill="#0f172a" font-weight="bold">C</text>
                            <text x="35" y="35" fill="#0f172a" font-weight="bold">D</text>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            ધારો કે ABCD એક ચોરસ છે. તેથી તેની ચારેય બાજુઓ સમાન હોય (AB=BC=CD=AD) અને ચારેય ખૂણા 90&deg; હોય.<br><br>
                            
                            <b>ભાગ 1: વિકર્ણો સમાન છે (AC = BD)</b><br>
                            &Delta;ABC અને &Delta;BAD માં:<br>
                            1) AB = BA (સામાન્ય બાજુ)<br>
                            2) &ang;ABC = &ang;BAD = 90&deg; (ચોરસના ખૂણા)<br>
                            3) BC = AD (ચોરસની બાજુઓ)<br>
                            &there4; બાખૂબા (SAS) નિયમથી &Delta;ABC &cong; &Delta;BAD.<br>
                            <b style='color:#1d4ed8;'>&there4; AC = BD (CPCT)</b> ......(સાબિતી 1)<br><br>
                            
                            <b>ભાગ 2: વિકર્ણો દુભાગે છે (OA=OC, OB=OD)</b><br>
                            &Delta;AOB અને &Delta;COD માં:<br>
                            1) &ang;OAB = &ang;OCD (અંતઃયુગ્મકોણો, કારણ કે AB || CD)<br>
                            2) AB = CD (ચોરસની બાજુઓ)<br>
                            3) &ang;OBA = &ang;ODC (અંતઃયુગ્મકોણો)<br>
                            &there4; ખૂબાખૂ (ASA) નિયમથી &Delta;AOB &cong; &Delta;COD.<br>
                            <b style='color:#1d4ed8;'>&there4; OA = OC અને OB = OD (CPCT)</b> ......(સાબિતી 2)<br><br>
                            
                            <b>ભાગ 3: કાટખૂણે છેદે છે (&ang;AOB = 90&deg;)</b><br>
                            &Delta;AOB અને &Delta;AOD માં:<br>
                            1) OB = OD (ઉપર સાબિત કર્યું)<br>
                            2) AB = AD (ચોરસની બાજુઓ)<br>
                            3) OA = OA (સામાન્ય બાજુ)<br>
                            &there4; બાબાબા (SSS) નિયમથી &Delta;AOB &cong; &Delta;AOD.<br>
                            &there4; &ang;AOB = &ang;AOD (CPCT).<br>
                            પરંતુ &ang;AOB + &ang;AOD = 180&deg; (રૈખિક જોડ).<br>
                            &there4; 2&ang;AOB = 180&deg; &rArr; <b style='color:#1d4ed8;'>&ang;AOB = 90&deg;</b> ......(સાબિતી 3)<br><br>
                            
                            આમ, ત્રણેય બાબતો સાબિત થાય છે.
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 8.1 - પ્રશ્ન 3",
                "marks": 4,
                "question": "સમાંતરબાજુ ચતુષ્કોણ ABCD નો વિકર્ણ AC ખૂણા A નો દ્વિભાજક છે. સાબિત કરો કે:<br>(i) તે ∠C નો પણ દ્વિભાજક છે.<br>(ii) ABCD સમબાજુ ચતુષ્કોણ છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="100,160 300,160 250,40 50,40" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            
                            <line x1="50" y1="40" x2="300" y2="160" stroke="#be123c" stroke-width="2"/>
                            
                            <text x="30" y="35" fill="#0f172a" font-weight="bold">A</text>
                            <text x="260" y="30" fill="#0f172a" font-weight="bold">B</text>
                            <text x="315" y="165" fill="#0f172a" font-weight="bold">C</text>
                            <text x="80" y="175" fill="#0f172a" font-weight="bold">D</text>
                            
                            <path d="M 80 40 A 30 30 0 0 0 70 50" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="85" y="40" fill="#ea580c" font-size="12" font-weight="bold">1</text>
                            
                            <path d="M 50 70 A 30 30 0 0 1 70 50" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="55" y="70" fill="#ea580c" font-size="12" font-weight="bold">2</text>
                            
                            <path d="M 270 160 A 30 30 0 0 0 280 150" fill="none" stroke="#16a34a" stroke-width="2"/>
                            <text x="265" y="155" fill="#16a34a" font-size="12" font-weight="bold">3</text>
                            
                            <path d="M 300 130 A 30 30 0 0 1 280 150" fill="none" stroke="#16a34a" stroke-width="2"/>
                            <text x="290" y="130" fill="#16a34a" font-size="12" font-weight="bold">4</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            <b>(i) તે &ang;C નો દ્વિભાજક છે તેમ સાબિત કરવા:</b><br>
                            આપેલ છે કે AC એ &ang;A નો દ્વિભાજક છે. તેથી, <b>&ang;1 = &ang;2</b> ......(સમીકરણ 1)<br><br>
                            
                            હવે, ABCD એક સમાંતરબાજુ ચતુષ્કોણ છે, તેથી AB || CD અને AD || BC.<br>
                            AB || CD અને AC તેમની છેદિકા છે. આથી અંતઃયુગ્મકોણો (Z આકાર) સમાન થાય:<br>
                            <b>&ang;1 = &ang;4</b> ......(સમીકરણ 2)<br>
                            તે જ રીતે, AD || BC અને AC છેદિકા હોવાથી:<br>
                            <b>&ang;2 = &ang;3</b> ......(સમીકરણ 3)<br><br>
                            
                            સમીકરણ 1, 2 અને 3 પરથી આપણે કહી શકીએ કે:<br>
                            &there4; &ang;3 = &ang;2 (સમી. 3 પરથી)<br>
                            &there4; &ang;3 = &ang;1 (કારણ કે &ang;2 = &ang;1)<br>
                            &there4; <b>&ang;3 = &ang;4</b> (કારણ કે &ang;1 = &ang;4)<br>
                            આનો અર્થ એ કે AC એ &ang;C ના પણ બે સરખા ભાગ કરે છે.<br>
                            <b style='color:#15803d;'>&there4; AC એ &ang;C નો પણ દ્વિભાજક છે.</b><br><br>
                            
                            <b>(ii) ABCD સમબાજુ ચતુષ્કોણ છે તેમ સાબિત કરવા:</b><br>
                            ઉપર આપણે જોયું કે <b>&ang;2 = &ang;4</b> થાય છે.<br>
                            હવે &Delta;ADC માં જુઓ. જો ત્રિકોણના બે ખૂણા (&ang;2 અને &ang;4) સમાન હોય, તો તેમની સામેની બાજુઓ પણ સમાન હોય છે.<br>
                            &there4; <b>AD = CD</b><br>
                            સમાંતરબાજુ ચતુષ્કોણની પાસપાસેની બાજુઓ સમાન થઈ ગઈ, અને સામસામેની બાજુઓ તો સમાન હોય જ છે.<br>
                            તેથી, AB = BC = CD = AD.<br>
                            <b style='color:#15803d;'>&there4; ABCD એ સમબાજુ ચતુષ્કોણ છે.</b> (સાબિત થાય છે)
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલાને <b>"Z ગેમ"</b> કહી શકાય! આકૃતિમાં 1, 2, 3 અને 4 નંબર આપી દો. પછી બે વાર Z બનાવો. 1 ની સામે 4 આવશે અને 2 ની સામે 3 આવશે. 1 અને 2 તો પહેલાથી જ સરખા હતા, એટલે 3 અને 4 પણ સરખા થઈ જ ગયા! બસ આ જ રીતે આખી સાબિતી લખી નાખવાની!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 8.1 - પ્રશ્ન 4",
                "marks": 3,
                "question": "ABCD એક લંબચોરસ છે, જેમાં વિકર્ણ AC એ ∠A તેમજ ∠C બંનેને દુભાગે છે. સાબિત કરો કે:<br>(i) ABCD ચોરસ છે.<br>(ii) વિકર્ણ BD એ ∠B અને ∠D બંનેને દુભાગે છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#ffedd5; padding:10px; border-radius:5px; border-left:4px solid #ea580c; margin-bottom:15px;'>
                        <p style='margin:0; font-size:14px; color:#9a3412;'><b>નોંધ:</b> આ પ્રશ્નની સાબિતીની રીત બિલકુલ <b>પ્રશ્ન 3 ના જેવી જ</b> છે, માત્ર અહીં ચતુષ્કોણ લંબચોરસ આપેલો છે અને તેને ચોરસ સાબિત કરવાનો છે.</p>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            <b>(i) ABCD ચોરસ છે તેમ સાબિત કરવા:</b><br>
                            આપેલ છે કે લંબચોરસ ABCD નો વિકર્ણ AC એ &ang;A અને &ang;C બંનેને દુભાગે છે.<br>
                            તેથી, &ang;DAC = &ang;BAC અને &ang;DCA = &ang;BCA.<br>
                            આપણે જાણીએ છીએ કે લંબચોરસના બધા ખૂણા 90&deg; ના હોય છે. તેથી &ang;A = 90&deg; અને &ang;C = 90&deg;.<br>
                            દુભાગતા હોવાથી, &ang;DAC = 45&deg; અને &ang;DCA = 45&deg; થશે.<br><br>
                            
                            હવે &Delta;ADC માં, &ang;DAC = &ang;DCA = 45&deg; હોવાથી,<br>
                            સમાન ખૂણાની સામેની બાજુઓ સમાન થાય.<br>
                            &there4; <b>AD = CD</b><br>
                            લંબચોરસની પાસપાસેની બાજુઓ સમાન થઈ ગઈ. જે લંબચોરસની પાસપાસેની બાજુઓ સમાન હોય, તેને ચોરસ કહેવાય.<br>
                            <b style='color:#0284c7;'>&there4; ABCD એ ચોરસ છે.</b><br><br>
                            
                            <b>(ii) વિકર્ણ BD એ &ang;B અને &ang;D ને દુભાગે છે:</b><br>
                            હવે સાબિત થઈ ગયું છે કે ABCD ચોરસ છે. અને ચોરસના વિકર્ણો હંમેશા તેના શિરોબિંદુ આગળના ખૂણાઓને દુભાગે છે જ. (પ્રશ્ન 2 માં જોયું તેમ).<br>
                            <b style='color:#0284c7;'>&there4; વિકર્ણ BD એ &ang;B અને &ang;D બંનેને દુભાગે છે.</b>
                        </div>
                    </div>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 8.1 - પ્રશ્ન 5",
                "marks": 5,
                "question": "સમાંતરબાજુ ચતુષ્કોણ ABCD માં વિકર્ણ BD પર બે બિંદુઓ P અને Q એવાં લીધાં છે કે જેથી DP = BQ થાય. સાબિત કરો કે:<br>(i) ΔAPD ≅ ΔCQB<br>(ii) AP = CQ<br>(iii) ΔAQB ≅ ΔCPD<br>(iv) AQ = CP<br>(v) APCQ સમાંતરબાજુ ચતુષ્કોણ છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:400px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,150 250,150 300,50 100,50" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            
                            <line x1="50" y1="150" x2="300" y2="50" stroke="#0f172a" stroke-width="2"/>
                            
                            <circle cx="100" cy="130" r="4" fill="#ea580c"/>
                            <text x="95" y="145" fill="#ea580c" font-weight="bold">Q</text>
                            
                            <circle cx="250" cy="70" r="4" fill="#be123c"/>
                            <text x="245" y="65" fill="#be123c" font-weight="bold">P</text>
                            
                            <line x1="100" y1="50" x2="250" y2="70" stroke="#16a34a" stroke-width="2"/> <line x1="100" y1="50" x2="100" y2="130" stroke="#16a34a" stroke-width="2"/> <line x1="250" y1="150" x2="250" y2="70" stroke="#16a34a" stroke-width="2"/> <line x1="250" y1="150" x2="100" y2="130" stroke="#16a34a" stroke-width="2"/> <polygon points="100,50 100,130 250,150 250,70" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4"/>
                            
                            <text x="90" y="40" fill="#0f172a" font-weight="bold">A</text>
                            <text x="35" y="160" fill="#0f172a" font-weight="bold">B</text>
                            <text x="260" y="165" fill="#0f172a" font-weight="bold">C</text>
                            <text x="310" y="45" fill="#0f172a" font-weight="bold">D</text>
                            
                            <line x1="70" y1="135" x2="80" y2="145" stroke="#ea580c" stroke-width="2"/>
                            <line x1="270" y1="55" x2="280" y2="65" stroke="#be123c" stroke-width="2"/>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            <b>(i) &Delta;APD &cong; &Delta;CQB સાબિત કરવા:</b><br>
                            &Delta;APD અને &Delta;CQB માં:<br>
                            1) <b>AD = BC</b> <span style='color:#64748b;'>(સમાંતરબાજુ ચતુષ્કોણની સામસામેની બાજુઓ)</span><br>
                            2) <b>DP = BQ</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span><br>
                            3) <b>&ang;ADP = &ang;CBQ</b> <span style='color:#64748b;'>(AD || BC અને BD છેદિકા હોવાથી અંતઃયુગ્મકોણો)</span><br>
                            &there4; <b>બાખૂબા (SAS)</b> નિયમ મુજબ: <b style='color:#0284c7;'>&Delta;APD &cong; &Delta;CQB</b><br><br>
                            
                            <b>(ii) AP = CQ સાબિત કરવા:</b><br>
                            ઉપર સાબિત કર્યા મુજબ ત્રિકોણો એકરૂપ હોવાથી તેમના અનુરૂપ અંગો સમાન થાય.<br>
                            <b style='color:#be123c;'>&there4; AP = CQ (CPCT)</b> ......(પરિણામ 1)<br><br>
                            
                            <b>(iii) &Delta;AQB &cong; &Delta;CPD સાબિત કરવા:</b><br>
                            &Delta;AQB અને &Delta;CPD માં:<br>
                            1) <b>AB = CD</b> <span style='color:#64748b;'>(સમાંતરબાજુ ચતુષ્કોણની સામસામેની બાજુઓ)</span><br>
                            2) <b>BQ = DP</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span><br>
                            3) <b>&ang;ABQ = &ang;CDP</b> <span style='color:#64748b;'>(AB || CD અને BD છેદિકા હોવાથી અંતઃયુગ્મકોણો)</span><br>
                            &there4; <b>બાખૂબા (SAS)</b> નિયમ મુજબ: <b style='color:#0284c7;'>&Delta;AQB &cong; &Delta;CPD</b><br><br>
                            
                            <b>(iv) AQ = CP સાબિત કરવા:</b><br>
                            આ ત્રિકોણો એકરૂપ હોવાથી તેમના અનુરૂપ અંગો સમાન થાય.<br>
                            <b style='color:#be123c;'>&there4; AQ = CP (CPCT)</b> ......(પરિણામ 2)<br><br>
                            
                            <b>(v) APCQ સમાંતરબાજુ ચતુષ્કોણ છે:</b><br>
                            ચતુષ્કોણ APCQ માં પરિણામ 1 અને 2 પરથી: સામસામેની બાજુઓની બંને જોડ સમાન છે. (AP = CQ અને AQ = CP).<br>
                            જો કોઈ ચતુષ્કોણમાં સામસામેની બાજુઓની બંને જોડ સમાન હોય, તો તે સમાંતરબાજુ ચતુષ્કોણ કહેવાય છે.<br>
                            <b style='color:#16a34a;'>&there4; APCQ સમાંતરબાજુ ચતુષ્કોણ છે.</b> (સાબિત થાય છે)
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલામાં 5 સાબિતીઓ છે પણ ગભરાવાની જરૂર નથી! આ <b>"2 ટિકિટમાં 5 પિક્ચર"</b> જેવી ઓફર છે! પહેલા બે સામસામેના ત્રિકોણને <b>બાખૂબા</b> થી એકરૂપ કરો, એટલે સીધી બે બાજુઓ (CPCT) મળી જશે. ફરીથી બીજા બે સામસામેના ત્રિકોણને <b>બાખૂબા</b> થી એકરૂપ કરો, એટલે બીજી બે બાજુઓ મળી જશે! ચારેય બાજુઓ મળી ગઈ એટલે અંદરનો ચતુષ્કોણ સીધો જ સમાંતરબાજુ સાબિત થઈ જશે!</p>
                </div>`
            },
         { 
        "questionNumber": "સ્વાધ્યાય 8.1 - પ્રશ્ન 6",
        "marks": 4,
        "question": "ABCD સમાંતરબાજુ ચતુષ્કોણ છે અને તેનાં શિરોબિંદુઓ A અને C માંથી વિકર્ણ BD પર દોરેલા લંબ અનુક્રમે AP અને CQ છે. સાબિત કરો કે:<br>(i) ΔAPB ≅ ΔCQD<br>(ii) AP = CQ", 
        "answer": `
        <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 300 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Parallelogram ABCD -->
                    <polygon points="100,50 50,150 200,150 250,50" fill="#f0f9ff" stroke="#0f172a" stroke-width="2"/>
                    
                    <!-- Diagonal BD -->
                    <line x1="50" y1="150" x2="250" y2="50" stroke="#0f172a" stroke-width="2"/>
                    
                    <!-- Perpendicular AP -->
                    <line x1="100" y1="50" x2="130" y2="110" stroke="#be123c" stroke-width="2"/>
                    
                    <!-- Perpendicular CQ -->
                    <line x1="200" y1="150" x2="170" y2="90" stroke="#16a34a" stroke-width="2"/>
                    
                    <!-- Right Angle Marker at P -->
                    <polyline points="126,102 134,98 138,106" fill="none" stroke="#be123c" stroke-width="1.5"/>
                    
                    <!-- Right Angle Marker at Q -->
                    <polyline points="174,98 166,102 162,94" fill="none" stroke="#16a34a" stroke-width="1.5"/>

                    <!-- Tick marks for Equal Sides AB = CD -->
                    <line x1="69" y1="97" x2="81" y2="103" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round"/>
                    <line x1="219" y1="97" x2="231" y2="103" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round"/>

                    <!-- Angle Arcs for Alternate Interior Angles (ABP and CDQ) -->
                    <path d="M 59 132 A 20 20 0 0 1 68 141" fill="none" stroke="#ea580c" stroke-width="2"/>
                    <path d="M 241 68 A 20 20 0 0 1 232 59" fill="none" stroke="#ea580c" stroke-width="2"/>
                    
                    <!-- Vertices and Intersections -->
                    <circle cx="100" cy="50" r="3.5" fill="#0f172a"/>
                    <circle cx="50" cy="150" r="3.5" fill="#0f172a"/>
                    <circle cx="200" cy="150" r="3.5" fill="#0f172a"/>
                    <circle cx="250" cy="50" r="3.5" fill="#0f172a"/>
                    <circle cx="130" cy="110" r="3.5" fill="#be123c"/>
                    <circle cx="170" cy="90" r="3.5" fill="#16a34a"/>
                    
                    <!-- Labels -->
                    <text x="95" y="40" fill="#0f172a" font-weight="bold" font-size="15" text-anchor="middle">A</text>
                    <text x="35" y="155" fill="#0f172a" font-weight="bold" font-size="15" text-anchor="middle">B</text>
                    <text x="215" y="165" fill="#0f172a" font-weight="bold" font-size="15" text-anchor="middle">C</text>
                    <text x="255" y="40" fill="#0f172a" font-weight="bold" font-size="15" text-anchor="middle">D</text>
                    <text x="145" y="118" fill="#be123c" font-weight="bold" font-size="15">P</text>
                    <text x="150" y="85" fill="#16a34a" font-weight="bold" font-size="15">Q</text>
                </svg>
            </div>

            <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>સાબિતી:</b></p>
                <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                    <b>(i) &Delta;APB &cong; &Delta;CQD સાબિત કરવા:</b><br>
                    અહીં, આપણે બે ત્રિકોણો &Delta;APB અને &Delta;CQD ની સરખામણી કરીશું:<br>
                    1) <b>&ang;APB = &ang;CQD = 90&deg;</b> <span style='color:#64748b;'>(કારણ કે AP અને CQ લંબ છે)</span><br>
                    2) <b>AB = CD</b> <span style='color:#64748b;'>(સમાંતરબાજુ ચતુષ્કોણની સામસામેની બાજુઓ)</span><br>
                    3) <b>&ang;ABP = &ang;CDQ</b> <span style='color:#64748b;'>(AB || CD અને BD છેદિકા હોવાથી બનતા <b>અંતઃયુગ્મકોણો - Z આકાર</b>)</span><br><br>
                    
                    અહીં બે ખૂણા અને એક બાજુ સમાન છે. તેથી <b>ખૂખૂબા (AAS)</b> એકરૂપતાના નિયમ મુજબ:<br>
                    <b style='color:#0284c7; font-size:16px;'>&there4; &Delta;APB &cong; &Delta;CQD</b> <span style='color:#16a34a;'>(પહેલું પરિણામ સાબિત)</span><br><br>
                    
                    <b>(ii) AP = CQ સાબિત કરવા:</b><br>
                    ઉપર સાબિત કર્યા મુજબ બંને ત્રિકોણો એકરૂપ છે.<br>
                    આપણે જાણીએ છીએ કે એકરૂપ ત્રિકોણોના અનુરૂપ અંગો (CPCT) હંમેશા સમાન હોય છે.<br>
                    <b style='color:#be123c; font-size:16px;'>&there4; AP = CQ (CPCT)</b> <span style='color:#16a34a;'>(બીજું પરિણામ સાબિત)</span>
                </div>
            </div>
            
            <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલાની ચાવી <b>Z આકાર</b> છે! AB અને CD સમાંતર છે, એટલે BD છેદિકાથી Z આકારના અંતઃયુગ્મકોણો બને. બસ, આ ખૂણા અને કાટખૂણાનો ઉપયોગ કરો એટલે <b>ખૂખૂબા (AAS)</b> નિયમ સીધો જ લાગી જશે અને દાખલો પૂરો!</p>
            </div>
        </div>`
    },
            { 
                "questionNumber": "સ્વાધ્યાય 8.1 - પ્રશ્ન 7",
                "marks": 5,
                "question": "ΔABC અને ΔDEF માં, AB = DE, AB || DE, BC = EF અને BC || EF છે. શિરોબિંદુઓ A, B અને C ને અનુક્રમે D, E અને F સાથે જોડેલા છે. સાબિત કરો કે:<br>(i) ચતુષ્કોણ ABED સમાંતરબાજુ ચતુષ્કોણ છે.<br>(ii) ચતુષ્કોણ BEFC સમાંતરબાજુ ચતુષ્કોણ છે.<br>(iii) AD || CF અને AD = CF<br>(iv) ચતુષ્કોણ ACFD સમાંતરબાજુ ચતુષ્કોણ છે.<br>(v) AC = DF<br>(vi) ΔABC ≅ ΔDEF", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 250" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="100,50 50,150 150,150" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
                            
                            <polygon points="200,100 150,200 250,200" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            
                            <line x1="200" y1="100" x2="100" y2="50" stroke="#be123c" stroke-width="2"/> <line x1="150" y1="200" x2="50" y2="150" stroke="#16a34a" stroke-width="2"/> <line x1="250" y1="200" x2="150" y2="150" stroke="#ea580c" stroke-width="2"/> <text x="210" y="100" fill="#0f172a" font-weight="bold">A</text>
                            <text x="145" y="215" fill="#0f172a" font-weight="bold">B</text>
                            <text x="255" y="215" fill="#0f172a" font-weight="bold">C</text>
                            
                            <text x="90" y="45" fill="#0f172a" font-weight="bold">D</text>
                            <text x="35" y="155" fill="#0f172a" font-weight="bold">E</text>
                            <text x="155" y="145" fill="#0f172a" font-weight="bold">F</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            <b>(i) ચતુષ્કોણ ABED સમાંતરબાજુ ચતુષ્કોણ છે:</b><br>
                            પક્ષમાં આપેલું છે કે, <b>AB = DE અને AB || DE</b>.<br>
                            જો કોઈ ચતુષ્કોણમાં સામસામેની બાજુઓની <b>એક જ જોડ</b> સમાન અને સમાંતર બંને હોય, તો તે ચતુષ્કોણ સમાંતરબાજુ ચતુષ્કોણ બને છે.<br>
                            <b style='color:#0284c7;'>&there4; ABED સમાંતરબાજુ ચતુષ્કોણ છે.</b> (આ પરથી <b>AD = BE અને AD || BE</b> થશે).<br><br>
                            
                            <b>(ii) ચતુષ્કોણ BEFC સમાંતરબાજુ ચતુષ્કોણ છે:</b><br>
                            તે જ રીતે, પક્ષમાં આપેલું છે કે, <b>BC = EF અને BC || EF</b>.<br>
                            ઉપરના નિયમ મુજબ જ:<br>
                            <b style='color:#0284c7;'>&there4; BEFC સમાંતરબાજુ ચતુષ્કોણ છે.</b> (આ પરથી <b>CF = BE અને CF || BE</b> થશે).<br><br>
                            
                            <b>(iii) AD || CF અને AD = CF:</b><br>
                            પરિણામ (i) પરથી: AD = BE અને AD || BE.<br>
                            પરિણામ (ii) પરથી: CF = BE અને CF || BE.<br>
                            જ્યારે બે વસ્તુઓ કોઈ એક ત્રીજી વસ્તુ (અહીં BE) ને સમાન અને સમાંતર હોય, ત્યારે તેઓ એકબીજાને પણ સમાન અને સમાંતર થાય છે.<br>
                            <b style='color:#0284c7;'>&there4; AD = CF અને AD || CF.</b><br><br>
                            
                            <b>(iv) ચતુષ્કોણ ACFD સમાંતરબાજુ ચતુષ્કોણ છે:</b><br>
                            ઉપર પરિણામ (iii) માં આપણે સાબિત કર્યું કે AD અને CF સમાન અને સમાંતર છે.<br>
                            તેથી ચતુષ્કોણ ACFD ની સામસામેની બાજુઓની એક જોડ સમાન અને સમાંતર થઈ ગઈ.<br>
                            <b style='color:#0284c7;'>&there4; ACFD સમાંતરબાજુ ચતુષ્કોણ છે.</b><br><br>
                            
                            <b>(v) AC = DF:</b><br>
                            ચતુષ્કોણ ACFD સમાંતરબાજુ ચતુષ્કોણ હોવાથી, તેની સામસામેની બાજુઓ સમાન હોય.<br>
                            <b style='color:#0284c7;'>&there4; AC = DF.</b><br><br>
                            
                            <b>(vi) &Delta;ABC &cong; &Delta;DEF:</b><br>
                            &Delta;ABC અને &Delta;DEF માં:<br>
                            1) <b>AB = DE</b> (પક્ષમાં આપેલ છે)<br>
                            2) <b>BC = EF</b> (પક્ષમાં આપેલ છે)<br>
                            3) <b>AC = DF</b> (ઉપર પરિણામ v માં સાબિત કર્યું)<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; બાબાબા (SSS) એકરૂપતાના નિયમ મુજબ &Delta;ABC &cong; &Delta;DEF.</b> (સાબિત થાય છે)
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલો <b>"ટ્રેનના ડબ્બા"</b> જેવો છે! એક ડબ્બો સાબિત કરો એટલે બીજો તેની સાથે આપોઆપ ખેંચાઈને સાબિત થઈ જાય. ખાલી એક જ નિયમ યાદ રાખવાનો: <b>"જો એક જોડ સમાન અને સમાંતર હોય, તો આખો ચતુષ્કોણ સમાંતરબાજુ બની જાય."</b> બસ આ જ નિયમ વારંવાર લગાવતા જાવ એટલે 6 એ 6 સાબિતી પૂરી!</p>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 8.2 - પ્રશ્ન 1",
                "marks": 4,
                "question": "ચતુષ્કોણ ABCD ની બાજુઓ AB, BC, CD અને DA નાં મધ્યબિંદુઓ અનુક્રમે P, Q, R અને S છે. AC તેનો વિકર્ણ છે. સાબિત કરો કે:<br>(i) SR || AC અને SR = 1/2 AC<br>(ii) PQ = SR<br>(iii) PQRS સમાંતરબાજુ ચતુષ્કોણ છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#fefce8; padding:10px; border-radius:5px; border-left:4px solid #ca8a04; margin-bottom:15px;'>
                        <p style='margin:0; font-size:14px; color:#a16207;'><b>મધ્યબિંદુ પ્રમેય (Mid-point Theorem):</b> ત્રિકોણની કોઈપણ બે બાજુઓના મધ્યબિંદુઓને જોડતો રેખાખંડ ત્રીજી બાજુને સમાંતર હોય છે અને તેનાથી અડધા માપનો હોય છે.</p>
                    </div>

                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 220" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,180 250,200 300,50 100,20" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            
                            <line x1="50" y1="180" x2="300" y2="50" stroke="#be123c" stroke-width="2" stroke-dasharray="5,5"/>
                            
                            <polygon points="150,190 275,125 200,35 75,100" fill="none" stroke="#16a34a" stroke-width="2"/>
                            
                            <circle cx="150" cy="190" r="4" fill="#16a34a"/>
                            <circle cx="275" cy="125" r="4" fill="#16a34a"/>
                            <circle cx="200" cy="35" r="4" fill="#16a34a"/>
                            <circle cx="75" cy="100" r="4" fill="#16a34a"/>
                            
                            <text x="30" y="195" fill="#0f172a" font-weight="bold">A</text>
                            <text x="250" y="220" fill="#0f172a" font-weight="bold">B</text>
                            <text x="310" y="45" fill="#0f172a" font-weight="bold">C</text>
                            <text x="90" y="15" fill="#0f172a" font-weight="bold">D</text>
                            
                            <text x="145" y="210" fill="#16a34a" font-weight="bold">P</text>
                            <text x="285" y="130" fill="#16a34a" font-weight="bold">Q</text>
                            <text x="195" y="25" fill="#16a34a" font-weight="bold">R</text>
                            <text x="55" y="105" fill="#16a34a" font-weight="bold">S</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            <b>(i) SR || AC અને SR = 1/2 AC:</b><br>
                            ઉપરના ત્રિકોણ <b>&Delta;DAC</b> માં જુઓ:<br>
                            S એ AD નું મધ્યબિંદુ છે અને R એ DC નું મધ્યબિંદુ છે.<br>
                            તેથી, મધ્યબિંદુ પ્રમેય મુજબ, આ મધ્યબિંદુઓને જોડતો રેખાખંડ SR એ ત્રીજી બાજુ AC ને સમાંતર અને તેનાથી અડધો હોય.<br>
                            <b style='color:#be123c;'>&there4; SR || AC અને SR = 1/2 AC</b> ......(પરિણામ 1)<br><br>
                            
                            <b>(ii) PQ = SR:</b><br>
                            હવે નીચેના ત્રિકોણ <b>&Delta;BAC</b> માં જુઓ:<br>
                            P એ AB નું મધ્યબિંદુ છે અને Q એ BC નું મધ્યબિંદુ છે.<br>
                            તેથી, મધ્યબિંદુ પ્રમેય મુજબ:<br>
                            <b style='color:#be123c;'>&there4; PQ || AC અને PQ = 1/2 AC</b> ......(પરિણામ 2)<br><br>
                            
                            પરિણામ 1 અને 2 પરથી, SR અને PQ બંને AC થી અડધા (1/2 AC) છે. તેથી બંને સમાન થાય.<br>
                            <b style='color:#16a34a; font-size:16px;'>&there4; PQ = SR</b> ......(પરિણામ 3)<br><br>
                            
                            <b>(iii) PQRS સમાંતરબાજુ ચતુષ્કોણ છે:</b><br>
                            પરિણામ 1 અને 2 પરથી, SR || AC અને PQ || AC છે.<br>
                            &there4; <b>SR || PQ</b><br>
                            અને પરિણામ 3 માં આપણે સાબિત કર્યું કે <b>PQ = SR</b>.<br>
                            જો કોઈ ચતુષ્કોણમાં સામસામેની બાજુઓની એક જ જોડ સમાન અને સમાંતર બંને હોય, તો તે ચતુષ્કોણ સમાંતરબાજુ બને છે.<br>
                            <b style='color:#16a34a; font-size:16px;'>&there4; PQRS સમાંતરબાજુ ચતુષ્કોણ છે.</b> (સાબિત થાય છે)
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલાને <b>"સેન્ડવીચ ટ્રીક (Sandwich Trick)"</b> કહેવાય! વચ્ચેનો વિકર્ણ (AC) એ બ્રેડ છે. ઉપરના મધ્યબિંદુઓ (SR) અને નીચેના મધ્યબિંદુઓ (PQ) એ બ્રેડના અડધા જ હોય. બંને બ્રેડથી અડધા છે, એટલે એકબીજાને સમાન થઈ ગયા! અને સમાન થઈ ગયા એટલે આખો ચતુષ્કોણ સમાંતરબાજુ બની ગયો!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 8.2 - પ્રશ્ન 2",
                "marks": 5,
                "question": "સમબાજુ ચતુષ્કોણ ABCD ની બાજુઓ AB, BC, CD અને DA નાં મધ્યબિંદુઓ અનુક્રમે P, Q, R અને S છે. સાબિત કરો કે ચતુષ્કોણ PQRS લંબચોરસ છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 250" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="175,20 300,125 175,230 50,125" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            
                            <line x1="175" y1="20" x2="175" y2="230" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <line x1="50" y1="125" x2="300" y2="125" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                            
                            <polygon points="112.5,72.5 237.5,72.5 237.5,177.5 112.5,177.5" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            
                            <circle cx="112.5" cy="72.5" r="4" fill="#be123c"/>
                            <circle cx="237.5" cy="72.5" r="4" fill="#be123c"/>
                            <circle cx="237.5" cy="177.5" r="4" fill="#be123c"/>
                            <circle cx="112.5" cy="177.5" r="4" fill="#be123c"/>
                            
                            <polyline points="122.5,72.5 122.5,82.5 112.5,82.5" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            
                            <text x="170" y="15" fill="#16a34a" font-weight="bold">A</text>
                            <text x="310" y="130" fill="#16a34a" font-weight="bold">B</text>
                            <text x="170" y="245" fill="#16a34a" font-weight="bold">C</text>
                            <text x="35" y="130" fill="#16a34a" font-weight="bold">D</text>
                            
                            <text x="95" y="65" fill="#be123c" font-weight="bold">P</text>
                            <text x="245" y="65" fill="#be123c" font-weight="bold">Q</text>
                            <text x="245" y="190" fill="#be123c" font-weight="bold">R</text>
                            <text x="95" y="190" fill="#be123c" font-weight="bold">S</text>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            <b>પગલું 1: PQRS સમાંતરબાજુ ચતુષ્કોણ છે તેમ સાબિત કરવું.</b><br>
                            આગળના પ્રશ્ન (પ્રશ્ન 1) ની જેમ જ, મધ્યબિંદુ પ્રમેયનો ઉપયોગ કરીને:<br>
                            &Delta;ABC માં: PQ || AC અને PQ = 1/2 AC<br>
                            &Delta;DAC માં: SR || AC અને SR = 1/2 AC<br>
                            &there4; PQ || SR અને PQ = SR.<br>
                            <b style='color:#be123c;'>&there4; PQRS સમાંતરબાજુ ચતુષ્કોણ છે.</b> ......(પરિણામ 1)<br><br>
                            
                            <b>પગલું 2: PQRS ને લંબચોરસ સાબિત કરવો.</b><br>
                            સમાંતરબાજુ ચતુષ્કોણને લંબચોરસ સાબિત કરવા માટે તેનો <b>કોઈ એક ખૂણો 90&deg;</b> નો સાબિત કરવો પડે.<br>
                            આપણે જાણીએ છીએ કે <b>સમબાજુ ચતુષ્કોણ (ABCD) ના વિકર્ણો (AC અને BD) એકબીજાને કાટખૂણે (90&deg; એ) છેદે છે.</b><br>
                            ધારો કે AC અને BD બિંદુ O માં છેદે છે, તો &ang;AOB = 90&deg; થાય.<br><br>
                            
                            હવે, PQ || AC હોવાથી, અને QR || BD (બીજા વિકર્ણ માટે મધ્યબિંદુ પ્રમેય) હોવાથી,<br>
                            વચ્ચે બનતો નાનો ચતુષ્કોણ (ધારો કે OMRN) પણ સમાંતરબાજુ ચતુષ્કોણ બને છે.<br>
                            સમાંતરબાજુ ચતુષ્કોણના સામસામેના ખૂણા સમાન હોય છે.<br>
                            &there4; <b>&ang;PQR = &ang;AOB</b><br>
                            પરંતુ &ang;AOB = 90&deg; છે.<br>
                            &there4; <b style='color:#be123c; font-size:16px;'>&ang;PQR = 90&deg;</b><br><br>
                            
                            જે સમાંતરબાજુ ચતુષ્કોણનો એક ખૂણો કાટખૂણો હોય, તે લંબચોરસ છે.<br>
                            <b style='color:#1d4ed8; font-size:16px;'>&there4; PQRS એ લંબચોરસ છે.</b> (સાબિત થાય છે)
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 8.2 - પ્રશ્ન 3",
                "marks": 5,
                "question": "લંબચોરસ ABCD ની બાજુઓ AB, BC, CD અને DA નાં મધ્યબિંદુઓ અનુક્રમે P, Q, R અને S છે. સાબિત કરો કે ચતુષ્કોણ PQRS સમબાજુ ચતુષ્કોણ છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#ffedd5; padding:10px; border-radius:5px; border-left:4px solid #ea580c; margin-bottom:15px;'>
                        <p style='margin:0; font-size:14px; color:#9a3412;'><b>નોંધ:</b> આ દાખલો ઉપરના પ્રશ્ન 2 નો <b>બિલકુલ ઉલટો (Reverse)</b> દાખલો છે! ત્યાં સમબાજુની અંદર લંબચોરસ હતો, અહીં લંબચોરસની અંદર સમબાજુ સાબિત કરવાનો છે.</p>
                    </div>

                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 220" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="40,180 310,180 310,40 40,40" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            
                            <line x1="40" y1="180" x2="310" y2="40" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <line x1="40" y1="40" x2="310" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                            
                            <polygon points="175,40 310,110 175,180 40,110" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            
                            <circle cx="175" cy="40" r="4" fill="#be123c"/>
                            <circle cx="310" cy="110" r="4" fill="#be123c"/>
                            <circle cx="175" cy="180" r="4" fill="#be123c"/>
                            <circle cx="40" cy="110" r="4" fill="#be123c"/>
                            
                            <text x="25" y="35" fill="#0284c7" font-weight="bold">A</text>
                            <text x="315" y="35" fill="#0284c7" font-weight="bold">B</text>
                            <text x="315" y="195" fill="#0284c7" font-weight="bold">C</text>
                            <text x="25" y="195" fill="#0284c7" font-weight="bold">D</text>
                            
                            <text x="170" y="30" fill="#be123c" font-weight="bold">P</text>
                            <text x="320" y="115" fill="#be123c" font-weight="bold">Q</text>
                            <text x="170" y="195" fill="#be123c" font-weight="bold">R</text>
                            <text x="25" y="115" fill="#be123c" font-weight="bold">S</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            <b>પગલું 1: PQRS સમાંતરબાજુ ચતુષ્કોણ છે તેમ સાબિત કરવું.</b><br>
                            મધ્યબિંદુ પ્રમેય મુજબ (જેમ પ્રશ્ન 1 માં સાબિત કર્યું):<br>
                            PQ || AC અને PQ = 1/2 AC<br>
                            SR || AC અને SR = 1/2 AC<br>
                            <b style='color:#0284c7;'>&there4; PQ || SR અને PQ = SR, તેથી PQRS સમાંતરબાજુ ચતુષ્કોણ છે.</b> ......(પરિણામ 1)<br><br>
                            
                            <b>પગલું 2: PQRS ને સમબાજુ ચતુષ્કોણ સાબિત કરવો.</b><br>
                            સમાંતરબાજુ ચતુષ્કોણને સમબાજુ સાબિત કરવા માટે તેની <b>પાસપાસેની બાજુઓ (Adjacent sides) સમાન</b> સાબિત કરવી પડે.<br>
                            આપણે જાણીએ છીએ કે <b>લંબચોરસ (ABCD) ના બંને વિકર્ણો સમાન હોય છે. (AC = BD)</b><br><br>
                            
                            હવે, મધ્યબિંદુ પ્રમેય મુજબ:<br>
                            PQ = 1/2 AC (ત્રિકોણ ABC પરથી)<br>
                            QR = 1/2 BD (ત્રિકોણ BCD પરથી)<br><br>
                            
                            પરંતુ, લંબચોરસના વિકર્ણો સમાન હોવાથી, <b>AC = BD</b> છે.<br>
                            જો આખા વિકર્ણો સમાન હોય, તો તેમના અડધા ભાગ પણ સમાન જ થાય.<br>
                            &there4; 1/2 AC = 1/2 BD<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; PQ = QR</b><br><br>
                            
                            જે સમાંતરબાજુ ચતુષ્કોણની પાસપાસેની બાજુઓ (PQ અને QR) સમાન હોય, તેની ચારેય બાજુઓ સમાન થઈ જાય.<br>
                            <b style='color:#16a34a; font-size:16px;'>&there4; ચતુષ્કોણ PQRS એ સમબાજુ ચતુષ્કોણ છે.</b> (સાબિત થાય છે)
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 8.2 - પ્રશ્ન 4",
                "marks": 3,
                "question": "સમલંબ ચતુષ્કોણ ABCD માં AB || DC છે. BD તેનો વિકર્ણ છે અને E એ AD નું મધ્યબિંદુ છે. E માંથી પસાર થતી અને AB ને સમાંતર હોય તેવી રેખા દોરી છે, જે BC ને F બિંદુમાં છેદે છે. સાબિત કરો કે F એ BC નું મધ્યબિંદુ છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border-left:4px solid #16a34a; margin-bottom:15px;'>
                        <p style='margin:0; font-size:14px; color:#14532d;'><b>મધ્યબિંદુ પ્રમેયનો પ્રતીપ (Converse of Mid-point Theorem):</b> ત્રિકોણની એક બાજુના મધ્યબિંદુમાંથી બીજી બાજુને સમાંતર દોરેલી રેખા, ત્રીજી બાજુને દુભાગે છે (એટલે કે તેના મધ્યબિંદુમાં જ છેદે છે).</p>
                    </div>

                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,160 300,160 220,40 100,40" fill="#fffbeb" stroke="#ca8a04" stroke-width="2"/>
                            
                            <line x1="50" y1="160" x2="220" y2="40" stroke="#0f172a" stroke-width="2"/>
                            
                            <line x1="75" y1="100" x2="260" y2="100" stroke="#be123c" stroke-width="2"/>
                            
                            <circle cx="135" cy="100" r="4" fill="#be123c"/>
                            <text x="125" y="95" fill="#be123c" font-weight="bold">G</text>
                            
                            <circle cx="75" cy="100" r="4" fill="#1d4ed8"/>
                            <circle cx="260" cy="100" r="4" fill="#1d4ed8"/>
                            
                            <text x="35" y="170" fill="#ca8a04" font-weight="bold">A</text>
                            <text x="310" y="170" fill="#ca8a04" font-weight="bold">B</text>
                            <text x="230" y="35" fill="#ca8a04" font-weight="bold">C</text>
                            <text x="90" y="35" fill="#ca8a04" font-weight="bold">D</text>
                            
                            <text x="55" y="105" fill="#1d4ed8" font-weight="bold">E</text>
                            <text x="270" y="105" fill="#1d4ed8" font-weight="bold">F</text>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#64748b; font-size:13px;'>ધારો કે રેખા EF એ વિકર્ણ BD ને બિંદુ G માં છેદે છે.</p>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            <b>પગલું 1: &Delta;DAB માટે:</b><br>
                            અહીં E એ AD નું મધ્યબિંદુ છે. અને પક્ષ મુજબ EG || AB છે (કારણ કે આખી લાઈન EF || AB છે).<br>
                            મધ્યબિંદુ પ્રમેયના પ્રતીપ મુજબ: ત્રિકોણની એક બાજુના મધ્યબિંદુમાંથી દોરેલી સમાંતર રેખા ત્રીજી બાજુને દુભાગે.<br>
                            <b style='color:#be123c;'>&there4; G એ વિકર્ણ BD નું મધ્યબિંદુ છે.</b> ......(પરિણામ 1)<br><br>
                            
                            <b>પગલું 2: &Delta;BCD માટે:</b><br>
                            સમલંબ ચતુષ્કોણમાં AB || DC આપેલ છે, અને આપણે દોરેલી રેખા EF || AB છે.<br>
                            તેથી, ત્રણેય સમાંતર થાય: <b>EF || AB || DC</b>. આથી GF || DC થાય.<br>
                            હવે &Delta;BCD માં, G એ BD નું મધ્યબિંદુ છે (પરિણામ 1 પરથી), અને GF || DC છે.<br>
                            ફરીથી મધ્યબિંદુ પ્રમેયના પ્રતીપ મુજબ: G માંથી દોરેલી સમાંતર રેખા ત્રીજી બાજુ BC ને દુભાગે.<br>
                            <b style='color:#16a34a; font-size:16px;'>&there4; F એ બાજુ BC નું મધ્યબિંદુ છે.</b> (સાબિત થાય છે)
                        </div>
                    </div>
                </div>`
            }   
        ]
    },
        
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 9: વર્તુળ (સ્વાધ્યાય)
    // ------------------------------------
    "9": {
        "chapterName": "પ્રકરણ 9",
        "chapterTitle": "વર્તુળ (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 9.1 - પ્રશ્ન 1",
                "marks": 3,
                "question": "યાદ કરો કે જો બે વર્તુળોની ત્રિજ્યા સમાન હોય, તો તે બે વર્તુળો સમાન છે. સાબિત કરો કે સમાન વર્તુળોની સમાન જીવાઓ તેમના કેન્દ્રો આગળ સમાન ખૂણા આંતરે છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>સમાન વર્તુળો અને સમાન જીવાઓ</p>
                        <svg viewBox="0 0 350 150" style="width:100%; max-width:400px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="80" cy="75" r="60" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            <circle cx="80" cy="75" r="3" fill="#0f172a"/>
                            <text x="75" y="65" fill="#0f172a" font-weight="bold">O</text>
                            
                            <line x1="38" y1="117" x2="122" y2="117" stroke="#be123c" stroke-width="3"/>
                            <line x1="80" y1="75" x2="38" y2="117" stroke="#16a34a" stroke-width="2"/>
                            <line x1="80" y1="75" x2="122" y2="117" stroke="#16a34a" stroke-width="2"/>
                            
                            <text x="25" y="130" fill="#be123c" font-weight="bold">A</text>
                            <text x="125" y="130" fill="#be123c" font-weight="bold">B</text>
                            
                            <path d="M 68 87 A 15 15 0 0 0 92 87" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="75" y="105" fill="#ea580c" font-size="16" font-weight="bold">?</text>
                            
                            <circle cx="270" cy="75" r="60" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            <circle cx="270" cy="75" r="3" fill="#0f172a"/>
                            <text x="260" y="65" fill="#0f172a" font-weight="bold">O'</text>
                            
                            <line x1="228" y1="117" x2="312" y2="117" stroke="#be123c" stroke-width="3"/>
                            <line x1="270" y1="75" x2="228" y2="117" stroke="#16a34a" stroke-width="2"/>
                            <line x1="270" y1="75" x2="312" y2="117" stroke="#16a34a" stroke-width="2"/>
                            
                            <text x="215" y="130" fill="#be123c" font-weight="bold">C</text>
                            <text x="315" y="130" fill="#be123c" font-weight="bold">D</text>
                            
                            <path d="M 258 87 A 15 15 0 0 0 282 87" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="265" y="105" fill="#ea580c" font-size="16" font-weight="bold">?</text>
                            
                            <line x1="80" y1="112" x2="80" y2="122" stroke="#0f172a" stroke-width="2"/>
                            <line x1="270" y1="112" x2="270" y2="122" stroke="#0f172a" stroke-width="2"/>
                            
                            <line x1="55" y1="90" x2="63" y2="100" stroke="#0f172a" stroke-width="2"/>
                            <line x1="60" y1="86" x2="68" y2="96" stroke="#0f172a" stroke-width="2"/>
                            
                            <line x1="97" y1="100" x2="105" y2="90" stroke="#0f172a" stroke-width="2"/>
                            <line x1="92" y1="96" x2="100" y2="86" stroke="#0f172a" stroke-width="2"/>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            ધારો કે O અને O' કેન્દ્રવાળા બે સમાન વર્તુળો આપેલા છે.<br>
                            તેમાં બે સમાન જીવાઓ <b>AB અને CD</b> આપેલી છે. (એટલે કે <b>AB = CD</b>).<br>
                            આપણે સાબિત કરવાનું છે કે આ જીવાઓ કેન્દ્ર આગળ સમાન ખૂણા બનાવે છે, એટલે કે <b>&ang;AOB = &ang;CO'D</b>.<br><br>
                            
                            હવે &Delta;AOB અને &Delta;CO'D માં સરખામણી કરીએ:<br>
                            1) <b>OA = O'C</b> <span style='color:#64748b;'>(સમાન વર્તુળોની ત્રિજ્યાઓ સમાન જ હોય)</span><br>
                            2) <b>OB = O'D</b> <span style='color:#64748b;'>(સમાન વર્તુળોની ત્રિજ્યાઓ)</span><br>
                            3) <b>AB = CD</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે કે જીવાઓ સમાન છે)</span><br><br>
                            
                            અહીં ત્રણેય બાજુઓ સમાન છે. તેથી <b>બાબાબા (SSS)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            <b style='color:#15803d; font-size:16px;'>&there4; &Delta;AOB &cong; &Delta;CO'D</b><br><br>
                            
                            આપણે જાણીએ છીએ કે એકરૂપ ત્રિકોણોના અનુરૂપ અંગો (CPCT) સમાન હોય છે.<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; &ang;AOB = &ang;CO'D (CPCT)</b> <span style='color:#0f172a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આખી ભૂમિતિનો સૌથી સહેલો દાખલો! બે વર્તુળ સમાન છે એટલે તેમની 2-2 ત્રિજ્યા તો સમાન થઈ જ ગઈ (OA=O'C, OB=O'D). અને નીચેની બાજુ (જીવા) રકમમાં જ સમાન આપી છે. એટલે ત્રણેય બાજુ <b>(SSS)</b> સરખી! તો પછી ત્રિકોણની અંદરનો ખૂણો <b>(CPCT)</b> થી સીધો જ સરખો થઈ જાય!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 9.1 - પ્રશ્ન 2",
                "marks": 3,
                "question": "સાબિત કરો કે જો સમાન વર્તુળોની જીવાઓ તેમના કેન્દ્રો આગળ સમાન ખૂણા આંતરે, તો તે જીવાઓ સમાન છે. (પ્રશ્ન 1 નું પ્રતીપ)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>સમાન ખૂણા અને સમાન ત્રિજ્યા</p>
                        <svg viewBox="0 0 350 150" style="width:100%; max-width:400px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="80" cy="75" r="60" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
                            <circle cx="80" cy="75" r="3" fill="#0f172a"/>
                            <text x="75" y="65" fill="#0f172a" font-weight="bold">O</text>
                            
                            <line x1="38" y1="117" x2="122" y2="117" stroke="#0284c7" stroke-width="3" stroke-dasharray="4,4"/>
                            <line x1="80" y1="75" x2="38" y2="117" stroke="#16a34a" stroke-width="2"/>
                            <line x1="80" y1="75" x2="122" y2="117" stroke="#16a34a" stroke-width="2"/>
                            
                            <text x="25" y="130" fill="#0284c7" font-weight="bold">A</text>
                            <text x="125" y="130" fill="#0284c7" font-weight="bold">B</text>
                            
                            <path d="M 68 87 A 15 15 0 0 0 92 87" fill="none" stroke="#be123c" stroke-width="2"/>
                            <line x1="78" y1="85" x2="82" y2="95" stroke="#be123c" stroke-width="2"/>
                            
                            <circle cx="270" cy="75" r="60" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
                            <circle cx="270" cy="75" r="3" fill="#0f172a"/>
                            <text x="260" y="65" fill="#0f172a" font-weight="bold">O'</text>
                            
                            <line x1="228" y1="117" x2="312" y2="117" stroke="#0284c7" stroke-width="3" stroke-dasharray="4,4"/>
                            <line x1="270" y1="75" x2="228" y2="117" stroke="#16a34a" stroke-width="2"/>
                            <line x1="270" y1="75" x2="312" y2="117" stroke="#16a34a" stroke-width="2"/>
                            
                            <text x="215" y="130" fill="#0284c7" font-weight="bold">C</text>
                            <text x="315" y="130" fill="#0284c7" font-weight="bold">D</text>
                            
                            <path d="M 258 87 A 15 15 0 0 0 282 87" fill="none" stroke="#be123c" stroke-width="2"/>
                            <line x1="268" y1="85" x2="272" y2="95" stroke="#be123c" stroke-width="2"/>
                            
                            <line x1="55" y1="90" x2="63" y2="100" stroke="#0f172a" stroke-width="2"/>
                            <line x1="60" y1="86" x2="68" y2="96" stroke="#0f172a" stroke-width="2"/>
                            
                            <line x1="97" y1="100" x2="105" y2="90" stroke="#0f172a" stroke-width="2"/>
                            <line x1="92" y1="96" x2="100" y2="86" stroke="#0f172a" stroke-width="2"/>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            અહીં આપણને પક્ષમાં આપેલું છે કે કેન્દ્ર આગળ બનતા ખૂણા સમાન છે.<br>
                            એટલે કે <b>&ang;AOB = &ang;CO'D</b> છે.<br>
                            આપણે સાબિત કરવાનું છે કે બંને જીવાઓ સમાન છે <b>(AB = CD)</b>.<br><br>
                            
                            &Delta;AOB અને &Delta;CO'D માં સરખામણી કરીએ:<br>
                            1) <b>OA = O'C</b> <span style='color:#64748b;'>(સમાન વર્તુળોની ત્રિજ્યાઓ)</span><br>
                            2) <b>&ang;AOB = &ang;CO'D</b> <span style='color:#64748b;'>(પક્ષમાં આપેલ છે)</span><br>
                            3) <b>OB = O'D</b> <span style='color:#64748b;'>(સમાન વર્તુળોની ત્રિજ્યાઓ)</span><br><br>
                            
                            અહીં બે બાજુઓ અને તેમની વચ્ચેનો ખૂણો સમાન છે. તેથી <b>બાખૂબા (SAS - Side-Angle-Side)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; &Delta;AOB &cong; &Delta;CO'D</b><br><br>
                            
                            જ્યારે બે ત્રિકોણો એકરૂપ હોય, ત્યારે તેમના અનુરૂપ અંગો (CPCT) સમાન હોય છે.<br>
                            <b style='color:#1d4ed8; font-size:16px;'>&there4; AB = CD (CPCT)</b> <span style='color:#16a34a;'>(સાબિત થાય છે કે જીવાઓ સમાન છે.)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલો પહેલા દાખલાનો <b>"Replay (રિવર્સ)"</b> જ છે! ત્યાં આપણે બાજુ (જીવા) નો ઉપયોગ કરીને ખૂણો શોધ્યો હતો (SSS થી), અહીં આપણને ખૂણો આપી દીધો છે અને જીવા શોધવાની છે. એટલે બે બાજુઓની વચ્ચે ખૂણો આવ્યો, તો <b>બાખૂબા (SAS)</b> નિયમ લગાવી દેવાનો!</p>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 9.2 - પ્રશ્ન 1",
                "marks": 3,
                "question": "બે વર્તુળોની ત્રિજ્યા 5 સેમી અને 3 સેમી છે. તેઓ બે બિંદુઓમાં છેદે છે અને તેમના કેન્દ્રો વચ્ચેનું અંતર 4 સેમી છે. સામાન્ય જીવાની લંબાઈ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="80" fill="none" stroke="#0284c7" stroke-width="2"/>
                            <circle cx="164" cy="100" r="48" fill="none" stroke="#16a34a" stroke-width="2"/>
                            
                            <circle cx="100" cy="100" r="3" fill="#0f172a"/>
                            <text x="95" y="115" fill="#0f172a" font-weight="bold">O</text>
                            
                            <circle cx="164" cy="100" r="3" fill="#0f172a"/>
                            <text x="165" y="115" fill="#0f172a" font-weight="bold">O'</text>
                            
                            <line x1="164" y1="52" x2="164" y2="148" stroke="#be123c" stroke-width="3"/>
                            <text x="170" y="45" fill="#be123c" font-weight="bold">A</text>
                            <text x="170" y="165" fill="#be123c" font-weight="bold">B</text>
                            
                            <line x1="100" y1="100" x2="164" y2="100" stroke="#0f172a" stroke-width="2"/>
                            <line x1="100" y1="100" x2="164" y2="52" stroke="#0284c7" stroke-width="2"/>
                            <line x1="164" y1="100" x2="164" y2="52" stroke="#16a34a" stroke-width="2"/>
                            
                            <polyline points="154,100 154,90 164,90" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            
                            <text x="120" y="70" fill="#0284c7" font-weight="bold">5 cm</text>
                            <text x="168" y="80" fill="#16a34a" font-weight="bold">3 cm</text>
                            <text x="125" y="115" fill="#0f172a" font-weight="bold">4 cm</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            ધારો કે મોટા વર્તુળનું કેન્દ્ર O અને નાના વર્તુળનું કેન્દ્ર O' છે. તેમની સામાન્ય જીવા AB છે.<br>
                            અહીં મોટા વર્તુળની ત્રિજ્યા OA = 5 cm, નાના વર્તુળની ત્રિજ્યા O'A = 3 cm અને કેન્દ્રો વચ્ચેનું અંતર OO' = 4 cm છે.<br><br>
                            
                            &Delta;AOO' માં બાજુઓના વર્ગોનો સરવાળો ચકાસીએ:<br>
                            (O'A)<sup>2</sup> + (OO')<sup>2</sup> = 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = <b>25</b><br>
                            અને (OA)<sup>2</sup> = 5<sup>2</sup> = <b>25</b><br><br>
                            
                            અહીં પાયથાગોરસના પ્રમેયનું પાલન થાય છે: (O'A)<sup>2</sup> + (OO')<sup>2</sup> = (OA)<sup>2</sup><br>
                            તેથી, <b>&ang;AO'O = 90&deg;</b> થાય (એટલે કે નાના વર્તુળનું કેન્દ્ર O' એ જ જીવા AB નું મધ્યબિંદુ છે).<br><br>
                            
                            આપણે જાણીએ છીએ કે કેન્દ્રમાંથી જીવા પર દોરેલો લંબ જીવાને દુભાગે છે.<br>
                            તેથી, આખી જીવા AB = 2 &times; O'A<br>
                            &there4; AB = 2 &times; 3<br>
                            &there4; <b style='color:#be123c; font-size:16px;'>AB = 6 સેમી</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>જ્યારે પણ રકમમાં <b>3, 4 અને 5</b> સંખ્યા દેખાય, સમજી જવાનું કે આ <b>પાયથાગોરસની ત્રિપુટી</b> જ છે! આનો મતલબ કે કાટખૂણો બને છે અને નાના વર્તુળનું કેન્દ્ર જ જીવાની વચોવચ આવેલું છે. એટલે જીવાની લંબાઈ સીધી જ નાની ત્રિજ્યા (3) થી ડબલ એટલે <b>6 સેમી</b> થઈ જાય. ગણતરી વગર જવાબ!</p>
                </div>`
            },
        { 
        "questionNumber": "સ્વાધ્યાય 9.2 - પ્રશ્ન 2",
        "marks": 4,
        "question": "જો વર્તુળની બે સમાન જીવાઓ વર્તુળની અંદર છેદે, તો સાબિત કરો કે એક જીવાના રેખાખંડો બીજી જીવાના અનુરૂપ રેખાખંડોને સમાન છે.", 
        "answer": `
        <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 300 300" style="width:100%; max-width:320px;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Circle -->
                    <circle cx="150" cy="150" r="120" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                    
                    <!-- Chords AB and CD -->
                    <line x1="87.5" y1="47.5" x2="252.5" y2="212.5" stroke="#1d4ed8" stroke-width="2"/>
                    <line x1="87.5" y1="252.5" x2="252.5" y2="87.5" stroke="#1d4ed8" stroke-width="2"/>
                    
                    <!-- Line OP connecting center to intersection point -->
                    <line x1="150" y1="150" x2="190" y2="150" stroke="#0f172a" stroke-width="2" stroke-dasharray="3,3"/>
                    
                    <!-- Perpendiculars OM and ON -->
                    <line x1="150" y1="150" x2="170" y2="130" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,4"/>
                    <line x1="150" y1="150" x2="170" y2="170" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,4"/>
                    
                    <!-- Right Angle Markers at M and N -->
                    <polyline points="163,137 156,130 163,123" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                    <polyline points="163,163 156,170 163,177" fill="none" stroke="#ea580c" stroke-width="1.5"/>

                    <!-- Points -->
                    <circle cx="150" cy="150" r="4" fill="#0f172a"/>
                    <circle cx="190" cy="150" r="4" fill="#be123c"/>
                    <circle cx="170" cy="130" r="3.5" fill="#ea580c"/>
                    <circle cx="170" cy="170" r="3.5" fill="#ea580c"/>
                    
                    <!-- Labels -->
                    <text x="73" y="42" fill="#1d4ed8" font-weight="bold" font-size="15">A</text>
                    <text x="260" y="222" fill="#1d4ed8" font-weight="bold" font-size="15">B</text>
                    <text x="73" y="265" fill="#1d4ed8" font-weight="bold" font-size="15">C</text>
                    <text x="260" y="85" fill="#1d4ed8" font-weight="bold" font-size="15">D</text>
                    <text x="132" y="155" fill="#0f172a" font-weight="bold" font-size="15">O</text>
                    <text x="200" y="155" fill="#be123c" font-weight="bold" font-size="15">P</text>
                    <text x="165" y="120" fill="#ea580c" font-weight="bold" font-size="15">M</text>
                    <text x="165" y="190" fill="#ea580c" font-weight="bold" font-size="15">N</text>
                </svg>
            </div>

            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>સાબિતી:</b></p>
                <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                    ધારો કે વર્તુળનું કેન્દ્ર O છે. જીવા AB અને CD બિંદુ P આગળ છેદે છે.<br>
                    આપેલ છે: <b>AB = CD</b>.<br>
                    સાબિત કરવાનું છે: <b>AP = CP</b> અને <b>PB = PD</b>.<br><br>
                    
                    કેન્દ્ર O માંથી AB પર લંબ OM અને CD પર લંબ ON દોરો. બિંદુ O અને P ને જોડો.<br>
                    આપણે જાણીએ છીએ કે સમાન જીવાઓ કેન્દ્રથી સમાન અંતરે હોય છે.<br>
                    &there4; <b>OM = ON</b> ......(પરિણામ 1)<br><br>
                    
                    હવે, કાટકોણ ત્રિકોણો &Delta;OMP અને &Delta;ONP માં:<br>
                    1) <b>&ang;OMP = &ang;ONP = 90&deg;</b> <span style='color:#64748b;'>(કાટખૂણો)</span><br>
                    2) <b>OP = OP</b> <span style='color:#64748b;'>(સામાન્ય કર્ણ)</span><br>
                    3) <b>OM = ON</b> <span style='color:#64748b;'>(પરિણામ 1 પરથી બાજુ)</span><br>
                    તેથી <b>કાકબા (RHS)</b> એકરૂપતાના નિયમ મુજબ: <b>&Delta;OMP &cong; &Delta;ONP</b><br>
                    &there4; <b style='color:#0284c7;'>MP = NP (CPCT)</b> ......(પરિણામ 2)<br><br>
                    
                    હવે, AB = CD હોવાથી તેમના અડધા ભાગ પણ સમાન થાય.<br>
                    &there4; <b>AM = CN</b> ......(પરિણામ 3)<br>
                    અને <b>MB = ND</b> ......(પરિણામ 4)<br><br>
                    
                    પરિણામ 3 અને 2 નો સરવાળો કરતાં:<br>
                    AM + MP = CN + NP &rArr; <b style='color:#16a34a; font-size:16px;'>AP = CP</b> (મોટા રેખાખંડો સમાન સાબિત થયા)<br><br>
                    
                    પરિણામ 4 માંથી 2 બાદ કરતાં:<br>
                    MB - MP = ND - NP &rArr; <b style='color:#16a34a; font-size:16px;'>PB = PD</b> (નાના રેખાખંડો સમાન સાબિત થયા)
                </div>
            </div>
            
            <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલામાં સૌથી મોટી ટ્રીક કેન્દ્રથી જીવા પર લંબ દોરીને <b>કાકબા (RHS)</b> એકરૂપતા વાપરવાની છે. એકવાર MP = NP સાબિત થઈ જાય, એટલે જીવાના અડધા ભાગ (AM અને ND) સાથે સ્માર્ટ વર્ક કરીને ફક્ત સરવાળો અને બાદબાકી જ કરવાની છે, જેથી સીધો જ જવાબ મળી જશે!</p>
            </div>
        </div>`
    },
            { 
                "questionNumber": "સ્વાધ્યાય 9.2 - પ્રશ્ન 3",
                "marks": 3,
                "question": "જો વર્તુળની બે સમાન જીવાઓ વર્તુળની અંદર છેદે, તો સાબિત કરો કે છેદબિંદુને કેન્દ્ર સાથે જોડતી રેખા જીવાઓ સાથે સમાન ખૂણા બનાવે છે.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#ffedd5; padding:10px; border-radius:5px; border-left:4px solid #ea580c; margin-bottom:15px;'>
                        <p style='margin:0; font-size:14px; color:#9a3412;'><b>નોંધ:</b> આ પ્રશ્નની આકૃતિ અને શરૂઆતની સાબિતી બિલકુલ <b>પ્રશ્ન 2 જેવી જ</b> છે!</p>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            કેન્દ્ર O માંથી જીવા AB પર લંબ OM અને જીવા CD પર લંબ ON દોરો.<br>
                            જીવાઓ સમાન હોવાથી તેમના કેન્દ્રથી અંતર સમાન હોય છે. &there4; <b>OM = ON</b>.<br><br>
                            
                            કાટકોણ ત્રિકોણો &Delta;OMP અને &Delta;ONP માં:<br>
                            1) <b>&ang;OMP = &ang;ONP = 90&deg;</b> <span style='color:#64748b;'>(કાટખૂણો)</span><br>
                            2) <b>OP = OP</b> <span style='color:#64748b;'>(સામાન્ય કર્ણ)</span><br>
                            3) <b>OM = ON</b> <span style='color:#64748b;'>(સમાન જીવાઓનું કેન્દ્રથી અંતર)</span><br><br>
                            
                            તેથી <b>કાકબા (RHS)</b> એકરૂપતાના નિયમ મુજબ:<br>
                            &there4; &Delta;OMP &cong; &Delta;ONP<br><br>
                            
                            આપણે જાણીએ છીએ કે એકરૂપ ત્રિકોણોના અનુરૂપ ખૂણાઓ (CPCT) સમાન હોય છે.<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; &ang;OPM = &ang;OPN</b><br><br>
                            
                            આનો અર્થ એ થયો કે છેદબિંદુ P ને કેન્દ્ર O સાથે જોડતી રેખા OP એ બંને જીવાઓ (AB અને CD) સાથે સમાન ખૂણા બનાવે છે. <span style='color:#16a34a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 9.2 - પ્રશ્ન 4",
                "marks": 3,
                "question": "જો એક રેખા બે સમકેન્દ્રી વર્તુળોને (એક જ કેન્દ્ર ધરાવતાં વર્તુળો) A, B, C અને D બિંદુઓમાં છેદે, તો સાબિત કરો કે AB = CD.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="175" cy="100" r="80" fill="none" stroke="#0284c7" stroke-width="2"/>
                            <circle cx="175" cy="100" r="50" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            
                            <circle cx="175" cy="100" r="4" fill="#0f172a"/>
                            <text x="165" y="90" fill="#0f172a" font-weight="bold">O</text>
                            
                            <line x1="50" y1="130" x2="300" y2="130" stroke="#be123c" stroke-width="2" marker-start="url(#arrow92)" marker-end="url(#arrow92)"/>
                            
                            <circle cx="100.8" cy="130" r="4" fill="#be123c"/>
                            <circle cx="135" cy="130" r="4" fill="#be123c"/>
                            <circle cx="215" cy="130" r="4" fill="#be123c"/>
                            <circle cx="249.2" cy="130" r="4" fill="#be123c"/>
                            
                            <text x="95" y="150" fill="#be123c" font-weight="bold">A</text>
                            <text x="130" y="150" fill="#be123c" font-weight="bold">B</text>
                            <text x="210" y="150" fill="#be123c" font-weight="bold">C</text>
                            <text x="245" y="150" fill="#be123c" font-weight="bold">D</text>
                            
                            <line x1="175" y1="100" x2="175" y2="130" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,4"/>
                            <polyline points="175,120 185,120 185,130" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            <text x="168" y="145" fill="#ea580c" font-weight="bold">M</text>
                            
                            <defs>
                                <marker id="arrow92" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                    <path d="M0,0 L0,8 L8,4 z" fill="#be123c" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>સાબિતી:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            કેન્દ્ર O માંથી રેખા AD પર <b>લંબ OM</b> દોરો.<br><br>
                            
                            1) <b>મોટા વર્તુળ માટે:</b><br>
                            AD એ મોટા વર્તુળની જીવા છે અને OM તેના પર લંબ છે.<br>
                            કેન્દ્રમાંથી જીવા પર દોરેલો લંબ જીવાને દુભાગે છે.<br>
                            &there4; <b>AM = MD</b> ......(સમીકરણ 1)<br><br>
                            
                            2) <b>નાના વર્તુળ માટે:</b><br>
                            BC એ નાના વર્તુળની જીવા છે અને OM તેના પર પણ લંબ છે.<br>
                            &there4; <b>BM = MC</b> ......(સમીકરણ 2)<br><br>
                            
                            હવે, સમીકરણ 1 માંથી સમીકરણ 2 બાદ કરતાં:<br>
                            AM - BM = MD - MC<br>
                            આકૃતિ પરથી સ્પષ્ટ છે કે AM માંથી BM બાદ કરીએ તો <b>AB</b> વધે અને MD માંથી MC બાદ કરીએ તો <b>CD</b> વધે.<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; AB = CD</b> <span style='color:#0f172a;'>(સાબિત થાય છે)</span>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>માત્ર 3 લીટીનો દાખલો! કેન્દ્રમાંથી લંબ દોરો એટલે મોટી જીવાના બે સરખા કટકા (AM = MD) અને નાની જીવાના બે સરખા કટકા (BM = MC). પછી મોટા કટકામાંથી નાનો કટકો બાદ કરો એટલે બાજુમાં વધેલા <b>AB = CD</b> આપોઆપ સમાન મળી જશે!</p>
                </div>`
            },
               { 
                "questionNumber": "સ્વાધ્યાય 9.2 - પ્રશ્ન 5",
                "marks": 5,
                "question": "એક વિહારસ્થાનમાં 5 મી ત્રિજ્યાવાળા દોરેલા વર્તુળ પર રમત રમવા માટે ત્રણ છોકરીઓ રેશ્મા, સલમા અને મનદીપ ઊભાં છે. રેશ્મા દડો સલમા તરફ, સલમા મનદીપ તરફ અને મનદીપ રેશ્મા તરફ ફેંકે છે. જો રેશ્મા અને સલમા વચ્ચેનું તથા સલમા અને મનદીપ વચ્ચેનું અંતર 6 મી હોય, તો રેશ્મા અને મનદીપ વચ્ચેનું અંતર કેટલું હશે?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 250" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="175" cy="125" r="100" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            
                            <circle cx="175" cy="125" r="4" fill="#0f172a"/>
                            <text x="160" y="120" fill="#0f172a" font-weight="bold">O</text>
                            
                            <circle cx="95" cy="185" r="5" fill="#be123c"/>
                            <text x="75" y="195" fill="#be123c" font-weight="bold">R (રેશ્મા)</text>
                            
                            <circle cx="175" cy="25" r="5" fill="#be123c"/>
                            <text x="165" y="15" fill="#be123c" font-weight="bold">S (સલમા)</text>
                            
                            <circle cx="255" cy="185" r="5" fill="#be123c"/>
                            <text x="265" y="195" fill="#be123c" font-weight="bold">M (મનદીપ)</text>
                            
                            <line x1="95" y1="185" x2="175" y2="25" stroke="#16a34a" stroke-width="2"/>
                            <line x1="255" y1="185" x2="175" y2="25" stroke="#16a34a" stroke-width="2"/>
                            
                            <line x1="95" y1="185" x2="255" y2="185" stroke="#ea580c" stroke-width="3" stroke-dasharray="5,5"/>
                            
                            <line x1="175" y1="125" x2="95" y2="185" stroke="#0f172a" stroke-width="1.5"/>
                            <line x1="175" y1="125" x2="175" y2="25" stroke="#0f172a" stroke-width="1.5"/>
                            <line x1="175" y1="125" x2="255" y2="185" stroke="#0f172a" stroke-width="1.5"/>
                            
                            <text x="180" y="175" fill="#0f172a" font-weight="bold">K</text>
                            <polyline points="175,175 165,175 165,185" fill="none" stroke="#ea580c" stroke-width="1.5"/>
                            
                            <text x="110" y="100" fill="#16a34a" font-size="14" font-weight="bold">6m</text>
                            <text x="225" y="100" fill="#16a34a" font-size="14" font-weight="bold">6m</text>
                            <text x="135" y="165" fill="#0f172a" font-size="12">5m</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            ધારો કે રેશ્મા (R), સલમા (S) અને મનદીપ (M) ની સ્થિતિ આકૃતિમાં દર્શાવ્યા મુજબ છે.<br>
                            અહીં, RS = 6 m અને SM = 6 m. ત્રિજ્યા OR = OS = OM = 5 m છે.<br>
                            આપણે <b>RM</b> (રેશ્મા અને મનદીપ વચ્ચેનું અંતર) શોધવાનું છે.<br><br>
                            
                            ચતુષ્કોણ ORSM માં OR = OM = 5 અને RS = SM = 6 હોવાથી તે <b>પતંગાકાર ચતુષ્કોણ (Kite)</b> બને છે.<br>
                            પતંગાકાર ચતુષ્કોણના વિકર્ણો એકબીજાને કાટખૂણે છેદે. ધારો કે OS અને RM બિંદુ <b>K</b> માં છેદે છે.<br>
                            તેથી RM &perp; OS અને RK = KM થાય.<br><br>
                            
                            હવે &Delta;ORS નું ક્ષેત્રફળ આપણે બે રીતે શોધીશું:<br>
                            <b>રીત 1 (હેરોનનું સૂત્ર):</b><br>
                            બાજુઓ a=5, b=5, c=6. અર્ધપરિમિતિ s = (5+5+6)/2 = 8.<br>
                            ક્ષેત્રફળ = &radic;[8(8-5)(8-5)(8-6)] = &radic;[8 &times; 3 &times; 3 &times; 2] = &radic;144 = <b>12 m<sup>2</sup></b><br><br>
                            
                            <b>રીત 2 (પાયો &times; વેધ):</b><br>
                            &Delta;ORS નું ક્ષેત્રફળ = 1/2 &times; પાયો(OS) &times; વેધ(RK)<br>
                            &there4; 12 = 1/2 &times; 5 &times; RK<br>
                            &there4; 24 = 5 &times; RK<br>
                            &there4; RK = 24 / 5 = <b>4.8 m</b><br><br>
                            
                            આપણે RM શોધવાનો છે. RM = 2 &times; RK (કારણ કે K મધ્યબિંદુ છે).<br>
                            &there4; RM = 2 &times; 4.8<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; રેશ્મા અને મનદીપ વચ્ચેનું અંતર = 9.6 મીટર</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 9.2 - પ્રશ્ન 6",
                "marks": 5,
                "question": "20 મી ત્રિજ્યાવાળો એક ગોળ બગીચો એક વસાહતમાં આવેલો છે. ત્રણ છોકરાઓ અંકુર, સૈયદ અને ડેવિડ તેમના હાથમાં રમકડાનો ટેલિફોન રાખીને એકબીજા સાથે વાત કરવા માટે વર્તુળની સીમા પર સરખા અંતરે બેઠા છે. દરેકના ટેલિફોનની દોરીની લંબાઈ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 300" style="width:100%; max-width:300px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="150" r="100" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            
                            <polygon points="150,50 63.4,200 236.6,200" fill="none" stroke="#0284c7" stroke-width="2"/>
                            
                            <circle cx="150" cy="150" r="4" fill="#0f172a"/>
                            <text x="160" y="155" fill="#0f172a" font-weight="bold">O</text>
                            
                            <line x1="150" y1="50" x2="150" y2="200" stroke="#be123c" stroke-width="2" stroke-dasharray="4,4"/>
                            
                            <text x="145" y="40" fill="#0284c7" font-weight="bold">A (અંકુર)</text>
                            <text x="35" y="215" fill="#0284c7" font-weight="bold">S (સૈયદ)</text>
                            <text x="240" y="215" fill="#0284c7" font-weight="bold">D (ડેવિડ)</text>
                            <text x="155" y="215" fill="#be123c" font-weight="bold">M</text>
                            
                            <text x="120" y="110" fill="#16a34a" font-size="14" font-weight="bold">20</text>
                            <text x="125" y="180" fill="#ea580c" font-size="14" font-weight="bold">10</text>
                            <polyline points="150,190 160,190 160,200" fill="none" stroke="#be123c" stroke-width="1.5"/>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            ધારો કે અંકુર, સૈયદ અને ડેવિડ ની સ્થિતિ A, S અને D છે.<br>
                            તેઓ સમાન અંતરે બેઠા હોવાથી, &Delta;ASD એ <b>સમબાજુ ત્રિકોણ</b> બને છે.<br>
                            વર્તુળનું કેન્દ્ર O એ આ સમબાજુ ત્રિકોણનું મધ્યકેન્દ્ર (Centroid) પણ બને છે.<br><br>
                            
                            આપણે A માંથી SD પર મધ્યગા AM દોરીએ. સમબાજુ ત્રિકોણમાં મધ્યગા એ જ વેધ હોય છે, તેથી &ang;AMD = 90&deg;.<br>
                            મધ્યકેન્દ્ર O એ મધ્યગા AM નું <b>2:1 ગુણોત્તરમાં વિભાજન</b> કરે છે.<br>
                            અહીં, OA = વર્તુળની ત્રિજ્યા = 20 m.<br>
                            &there4; OA/OM = 2/1<br>
                            &there4; 20/OM = 2 &rArr; <b>OM = 10 m</b><br><br>
                            
                            આમ, આખી મધ્યગા <b>AM = OA + OM = 20 + 10 = 30 m</b> થશે.<br>
                            હવે કાટકોણ ત્રિકોણ &Delta;AMD માં પાયથાગોરસના પ્રમેય મુજબ:<br>
                            AD<sup>2</sup> = AM<sup>2</sup> + MD<sup>2</sup><br>
                            ધારો કે સમબાજુ ત્રિકોણની બાજુ 2x છે (એટલે AD = 2x). તો MD તેનું અડધું એટલે કે x થશે.<br>
                            &there4; (2x)<sup>2</sup> = (30)<sup>2</sup> + (x)<sup>2</sup><br>
                            &there4; 4x<sup>2</sup> = 900 + x<sup>2</sup><br>
                            &there4; 3x<sup>2</sup> = 900<br>
                            &there4; x<sup>2</sup> = 300 &rArr; x = &radic;300 = <b>10&radic;3 m</b><br><br>
                            
                            દરેકના ટેલિફોનની દોરીની લંબાઈ (બાજુ AD) = 2x.<br>
                            &there4; લંબાઈ = 2 &times; 10&radic;3<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; ટેલિફોનની દોરીની લંબાઈ = 20&radic;3 મીટર</b>
                        </div>
                    </div>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 9.3 - પ્રશ્ન 1",
                "marks": 3,
                "question": "આકૃતિમાં, કેન્દ્ર O વાળા વર્તુળ પર બિંદુઓ A, B અને C એવી રીતે આવેલાં છે કે જેથી ∠BOC = 30° અને ∠AOB = 60° થાય. જો ચાપ ABC સિવાયના વર્તુળના બાકીના ભાગ પર બિંદુ D હોય, તો ∠ADC શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 300" style="width:100%; max-width:300px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="150" r="100" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            
                            <circle cx="150" cy="150" r="4" fill="#0f172a"/>
                            <text x="140" y="165" fill="#0f172a" font-weight="bold">O</text>
                            
                            <line x1="150" y1="150" x2="150" y2="50" stroke="#0f172a" stroke-width="2"/> <line x1="150" y1="150" x2="250" y2="150" stroke="#0f172a" stroke-width="2"/> <line x1="150" y1="150" x2="236.6" y2="100" stroke="#0f172a" stroke-width="2"/> <line x1="150" y1="50" x2="50" y2="150" stroke="#be123c" stroke-width="2"/> <line x1="250" y1="150" x2="50" y2="150" stroke="#be123c" stroke-width="2"/> <circle cx="150" cy="50" r="4" fill="#be123c"/>
                            <text x="145" y="40" fill="#be123c" font-weight="bold">A</text>
                            
                            <circle cx="236.6" cy="100" r="4" fill="#be123c"/>
                            <text x="245" y="95" fill="#be123c" font-weight="bold">B</text>
                            
                            <circle cx="250" cy="150" r="4" fill="#be123c"/>
                            <text x="260" y="155" fill="#be123c" font-weight="bold">C</text>
                            
                            <circle cx="50" cy="150" r="4" fill="#16a34a"/>
                            <text x="35" y="155" fill="#16a34a" font-weight="bold">D</text>
                            
                            <path d="M 150 120 A 30 30 0 0 1 176 135" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="155" y="130" fill="#ea580c" font-size="12" font-weight="bold">60&deg;</text>
                            
                            <path d="M 176 135 A 30 30 0 0 1 180 150" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="185" y="145" fill="#ea580c" font-size="12" font-weight="bold">30&deg;</text>
                            
                            <path d="M 70 130 A 25 25 0 0 0 75 150" fill="none" stroke="#16a34a" stroke-width="2"/>
                            <text x="85" y="145" fill="#16a34a" font-size="14" font-weight="bold">?</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            આકૃતિ પરથી સ્પષ્ટ છે કે, કેન્દ્ર આગળ બનતો આખો ખૂણો &ang;AOC એ બે ખૂણાઓનો સરવાળો છે.<br>
                            &there4; &ang;AOC = &ang;AOB + &ang;BOC<br>
                            &there4; &ang;AOC = 60&deg; + 30&deg;<br>
                            &there4; <b>&ang;AOC = 90&deg;</b><br><br>
                            
                            હવે, <b>પ્રમેય 9.7 મુજબ:</b> "વર્તુળના કોઈ ચાપે કેન્દ્ર આગળ આંતરેલો ખૂણો, તે ચાપે વર્તુળના બાકીના ભાગ પરના કોઈ પણ બિંદુ આગળ આંતરેલા ખૂણા કરતાં <b>બમણો (ડબલ)</b> હોય છે."<br><br>
                            
                            અહીં કેન્દ્ર આગળનો ખૂણો &ang;AOC છે અને બાકીના ભાગ પરનો ખૂણો &ang;ADC છે.<br>
                            &there4; &ang;AOC = 2 &times; &ang;ADC<br>
                            &there4; 90&deg; = 2 &times; &ang;ADC<br>
                            &there4; &ang;ADC = 90&deg; / 2<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; &ang;ADC = 45&deg;</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ નિયમને <b>"કેન્દ્રનો ખૂણો ડબલ, બાકીનો ખૂણો અડધો!"</b> તરીકે યાદ રાખો. કેન્દ્ર O પાસે કુલ 90&deg; થયા, તો તેનાથી દૂર વર્તુળની સીમા પર (D પાસે) પહોંચતા ખૂણો અડધો (45&deg;) થઈ જાય. એમસીક્યુ (MCQ) માં ગણતરી વગર સીધો જ જવાબ લખી શકાય!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 9.3 - પ્રશ્ન 2",
                "marks": 4,
                "question": "વર્તુળની એક જીવા અને તેની ત્રિજ્યા સમાન છે. આ જીવાએ લઘુચાપ પરના બિંદુ આગળ અને ગુરુચાપ પરના બિંદુ આગળ આંતરેલો ખૂણો શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 300" style="width:100%; max-width:300px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="150" r="100" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            
                            <circle cx="150" cy="150" r="4" fill="#0f172a"/>
                            <text x="145" y="140" fill="#0f172a" font-weight="bold">O</text>
                            
                            <polygon points="150,150 100,236.6 200,236.6" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            
                            <text x="80" y="250" fill="#0284c7" font-weight="bold">A</text>
                            <text x="210" y="250" fill="#0284c7" font-weight="bold">B</text>
                            
                            <circle cx="150" cy="50" r="4" fill="#be123c"/>
                            <text x="145" y="40" fill="#be123c" font-weight="bold">P (ગુરુચાપ)</text>
                            <line x1="100" y1="236.6" x2="150" y2="50" stroke="#be123c" stroke-width="2"/>
                            <line x1="200" y1="236.6" x2="150" y2="50" stroke="#be123c" stroke-width="2"/>
                            
                            <circle cx="150" cy="250" r="4" fill="#ea580c"/>
                            <text x="135" y="270" fill="#ea580c" font-weight="bold">Q (લઘુચાપ)</text>
                            <line x1="100" y1="236.6" x2="150" y2="250" stroke="#ea580c" stroke-width="2"/>
                            <line x1="200" y1="236.6" x2="150" y2="250" stroke="#ea580c" stroke-width="2"/>
                            
                            <text x="110" y="200" fill="#0284c7" font-weight="bold">r</text>
                            <text x="180" y="200" fill="#0284c7" font-weight="bold">r</text>
                            <text x="145" y="230" fill="#0284c7" font-weight="bold">r</text>
                            
                            <path d="M 140 167 A 15 15 0 0 0 160 167" fill="none" stroke="#0284c7" stroke-width="2"/>
                            <text x="142" y="185" fill="#0284c7" font-size="12" font-weight="bold">60&deg;</text>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            <b>પગલું 1: કેન્દ્ર આગળનો ખૂણો</b><br>
                            ધારો કે વર્તુળની જીવા AB છે. રકમ મુજબ <b>જીવા AB ની લંબાઈ = વર્તુળની ત્રિજ્યા (r)</b> છે.<br>
                            તેથી, ત્રિકોણ OAB માં OA = OB = AB = r થાય.<br>
                            જે ત્રિકોણની ત્રણેય બાજુઓ સમાન હોય, તે <b>સમબાજુ ત્રિકોણ</b> બને છે.<br>
                            &there4; કેન્દ્ર આગળનો ખૂણો <b>&ang;AOB = 60&deg;</b> થાય.<br><br>
                            
                            <b>પગલું 2: ગુરુચાપ પરનો ખૂણો</b><br>
                            ધારો કે બિંદુ P એ ગુરુચાપ પર આવેલું છે. આપણે જાણીએ છીએ કે કેન્દ્ર આગળનો ખૂણો ડબલ હોય.<br>
                            &there4; &ang;AOB = 2 &times; &ang;APB<br>
                            &there4; 60&deg; = 2 &times; &ang;APB<br>
                            &there4; &ang;APB = 60&deg; / 2 = <b>30&deg;</b><br>
                            <b style='color:#be123c; font-size:16px;'>જવાબ 1: ગુરુચાપ પરના બિંદુ આગળ આંતરેલો ખૂણો = 30&deg;</b><br><br>
                            
                            <b>પગલું 3: લઘુચાપ પરનો ખૂણો</b><br>
                            ધારો કે બિંદુ Q એ લઘુચાપ પર આવેલું છે. 
                            અહીં ચતુષ્કોણ <b>APBQ એ ચક્રીય ચતુષ્કોણ (Cyclic Quadrilateral)</b> બને છે, કારણ કે તેના ચારેય શિરોબિંદુઓ વર્તુળ પર છે.<br>
                            ચક્રીય ચતુષ્કોણના સામસામેના ખૂણાઓનો સરવાળો 180&deg; થાય છે.<br>
                            &there4; &ang;APB + &ang;AQB = 180&deg;<br>
                            &there4; 30&deg; + &ang;AQB = 180&deg;<br>
                            &there4; &ang;AQB = 180&deg; - 30&deg; = <b>150&deg;</b><br>
                            <b style='color:#be123c; font-size:16px;'>જવાબ 2: લઘુચાપ પરના બિંદુ આગળ આંતરેલો ખૂણો = 150&deg;</b>
                        </div>
                    </div>
                </div>`
            },
          { 
        "questionNumber": "સ્વાધ્યાય 9.3 - પ્રશ્ન 3",
        "marks": 3,
        "question": "આકૃતિમાં, ∠PQR = 100° છે, જ્યાં P, Q અને R એ O કેન્દ્રવાળા વર્તુળ પરનાં બિંદુઓ છે. ∠OPR શોધો.", 
        "answer": `
        <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
            <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                <svg viewBox="0 0 300 300" style="width:100%; max-width:320px;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Circle -->
                    <circle cx="150" cy="150" r="100" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                    
                    <!-- Triangle OPR -->
                    <polygon points="150,150 51.5,132.6 248.5,132.6" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
                    <line x1="51.5" y1="132.6" x2="248.5" y2="132.6" stroke="#ca8a04" stroke-width="2"/>
                    
                    <!-- Nitesh Sir's Trick: Cyclic Quad point S (Dashed) -->
                    <polyline points="51.5,132.6 150,250 248.5,132.6" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/>
                    <circle cx="150" cy="250" r="3.5" fill="#64748b"/>
                    <text x="145" y="270" fill="#64748b" font-weight="bold" font-size="15">S</text>
                    <path d="M 135 232 A 25 25 0 0 0 165 232" fill="none" stroke="#64748b" stroke-width="1.5"/>
                    <text x="141" y="225" fill="#64748b" font-size="12" font-weight="bold">80&deg;</text>

                    <!-- Lines PQ and RQ -->
                    <line x1="51.5" y1="132.6" x2="116" y2="56" stroke="#be123c" stroke-width="2"/>
                    <line x1="248.5" y1="132.6" x2="116" y2="56" stroke="#be123c" stroke-width="2"/>
                    
                    <!-- Angle at Q (100 deg) -->
                    <path d="M 133 66 A 20 20 0 0 1 103 72" fill="none" stroke="#be123c" stroke-width="2"/>
                    <text x="108" y="90" fill="#be123c" font-size="13" font-weight="bold">100&deg;</text>
                    
                    <!-- Central Angles -->
                    <!-- Interior Angle 160 deg -->
                    <path d="M 125 146 A 25 25 0 0 1 175 146" fill="none" stroke="#ea580c" stroke-width="2"/>
                    <text x="135" y="138" fill="#ea580c" font-size="12" font-weight="bold">160&deg;</text>

                    <!-- Reflex Angle 200 deg -->
                    <path d="M 175 146 A 25 25 0 1 1 125 146" fill="none" stroke="#16a34a" stroke-width="2"/>
                    <text x="125" y="190" fill="#16a34a" font-size="13" font-weight="bold">વિપરીત (200&deg;)</text>

                    <!-- Find Angle OPR -->
                    <path d="M 81.5 132.6 A 30 30 0 0 1 81 137.8" fill="none" stroke="#0f172a" stroke-width="1.5"/>
                    <text x="65" y="125" fill="#ca8a04" font-size="16" font-weight="bold">?</text>

                    <!-- Points -->
                    <circle cx="150" cy="150" r="4" fill="#0f172a"/>
                    <circle cx="51.5" cy="132.6" r="4" fill="#ca8a04"/>
                    <circle cx="248.5" cy="132.6" r="4" fill="#ca8a04"/>
                    <circle cx="116" cy="56" r="4" fill="#be123c"/>
                    
                    <!-- Labels -->
                    <text x="145" y="145" fill="#0f172a" font-weight="bold" font-size="15">O</text>
                    <text x="35" y="138" fill="#ca8a04" font-weight="bold" font-size="15">P</text>
                    <text x="255" y="138" fill="#ca8a04" font-weight="bold" font-size="15">R</text>
                    <text x="105" y="45" fill="#be123c" font-weight="bold" font-size="15">Q</text>
                </svg>
            </div>

            <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                    આપેલ છે કે વર્તુળની સીમા પર <b>&ang;PQR = 100&deg;</b> છે.<br>
                    આપણે જાણીએ છીએ કે કેન્દ્ર આગળનો ખૂણો વર્તુળના બાકીના ભાગ પરના ખૂણા કરતા બમણો (ડબલ) હોય છે.<br>
                    પરંતુ અહીં ધ્યાન આપો! Q બિંદુ લઘુચાપ પર છે, તેથી કેન્દ્રનો <b>વિપરીત ખૂણો (Reflex Angle)</b> ડબલ થશે.<br>
                    &there4; વિપરીત &ang;POR = 2 &times; &ang;PQR<br>
                    &there4; વિપરીત &ang;POR = 2 &times; 100&deg; = <b>200&deg;</b><br><br>
                    
                    હવે, અંદરનો નાનો ખૂણો &ang;POR શોધવા માટે 360&deg; માંથી વિપરીત ખૂણો બાદ કરવો પડે.<br>
                    &there4; અંદરનો &ang;POR = 360&deg; - 200&deg; = <b>160&deg;</b><br><br>
                    
                    હવે ત્રિકોણ <b>&Delta;OPR</b> માં જુઓ:<br>
                    અહીં OP અને OR બંને એક જ વર્તુળની ત્રિજ્યાઓ છે. તેથી <b>OP = OR</b>.<br>
                    સમદ્વિબાજુ ત્રિકોણ હોવાથી તેમની સામેના ખૂણાઓ સમાન થાય.<br>
                    &there4; <b>&ang;OPR = &ang;ORP</b> (ધારો કે બંને x છે).<br><br>
                    
                    ત્રિકોણના ત્રણેય ખૂણાઓનો સરવાળો 180&deg; થાય.<br>
                    &there4; &ang;OPR + &ang;ORP + &ang;POR = 180&deg;<br>
                    &there4; x + x + 160&deg; = 180&deg;<br>
                    &there4; 2x = 180&deg; - 160&deg;<br>
                    &there4; 2x = 20&deg;<br>
                    &there4; x = 20&deg; / 2 = 10&deg;<br>
                    <b style='color:#be123c; font-size:18px;'>&there4; &ang;OPR = 10&deg;</b>
                </div>
            </div>
            
            <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ દાખલાને સોલ્વ કરવાનો <b>શોર્ટકટ રસ્તો ચક્રીય ચતુષ્કોણ</b> છે! વર્તુળ પર ગમે ત્યાં ચોથું બિંદુ S લઈ લો (જેમ આકૃતિમાં દર્શાવ્યું છે). PQRS ચક્રીય ચતુષ્કોણ બને. Q=100 હોય તો તેની સામે S=80 થાય. હવે S ની મદદથી કેન્દ્રનો ખૂણો તેનાથી ડબલ એટલે અંદરનો POR = 160 સીધો મળી જાય! પછી બાકી વધ્યા 20, જેને ત્રિકોણના બે સરખા ખૂણા વચ્ચે વહેંચી દો એટલે <b>10&deg; - 10&deg;</b> જવાબ!</p>
            </div>
        </div>`
    },
               { 
                "questionNumber": "સ્વાધ્યાય 9.3 - પ્રશ્ન 4",
                "marks": 3,
                "question": "આકૃતિમાં, ∠ABC = 69° અને ∠ACB = 31° છે, તો ∠BDC શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 300" style="width:100%; max-width:300px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="150" r="100" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            
                            <circle cx="70" cy="210" r="4" fill="#0f172a"/>
                            <text x="55" y="225" fill="#0f172a" font-weight="bold">B</text>
                            
                            <circle cx="230" cy="210" r="4" fill="#0f172a"/>
                            <text x="240" y="225" fill="#0f172a" font-weight="bold">C</text>
                            
                            <line x1="70" y1="210" x2="230" y2="210" stroke="#0f172a" stroke-width="2"/>
                            
                            <circle cx="120" cy="55" r="4" fill="#be123c"/>
                            <text x="110" y="45" fill="#be123c" font-weight="bold">A</text>
                            
                            <polygon points="70,210 230,210 120,55" fill="none" stroke="#be123c" stroke-width="2"/>
                            
                            <circle cx="210" cy="70" r="4" fill="#16a34a"/>
                            <text x="220" y="65" fill="#16a34a" font-weight="bold">D</text>
                            
                            <polygon points="70,210 230,210 210,70" fill="none" stroke="#16a34a" stroke-width="2"/>
                            
                            <path d="M 90 210 A 30 30 0 0 0 95 185" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="105" y="195" fill="#ea580c" font-size="12" font-weight="bold">69&deg;</text>
                            
                            <path d="M 210 210 A 30 30 0 0 1 200 185" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="175" y="195" fill="#ea580c" font-size="12" font-weight="bold">31&deg;</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            પ્રથમ, <b>&Delta;ABC</b> માં જુઓ:<br>
                            આપણને બે ખૂણાઓ આપેલા છે: <b>&ang;ABC = 69&deg;</b> અને <b>&ang;ACB = 31&deg;</b>.<br>
                            ત્રિકોણના ત્રણેય ખૂણાઓનો સરવાળો 180&deg; થાય છે.<br>
                            &there4; &ang;BAC + &ang;ABC + &ang;ACB = 180&deg;<br>
                            &there4; &ang;BAC + 69&deg; + 31&deg; = 180&deg;<br>
                            &there4; &ang;BAC + 100&deg; = 180&deg;<br>
                            &there4; &ang;BAC = 180&deg; - 100&deg;<br>
                            &there4; <b>&ang;BAC = 80&deg;</b><br><br>
                            
                            હવે, આકૃતિ પરથી સ્પષ્ટ છે કે <b>&ang;BAC અને &ang;BDC એ એક જ વૃત્તખંડ (Segment) ના ખૂણાઓ છે</b> (બંને જીવા BC દ્વારા આંતરેલા છે).<br>
                            વર્તુળના એક જ વૃત્તખંડમાં આવેલા ખૂણાઓ હંમેશા સમાન હોય છે.<br>
                            &there4; &ang;BDC = &ang;BAC<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; &ang;BDC = 80&deg;</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આ <b>"જોડિયા ભાઈઓ (Twins)"</b> વાળો નિયમ છે! જીવા BC ના એક જ તરફ જેટલા પણ ખૂણા બને (A, D કે બીજા કોઈ પણ) એ બધા જોડિયા ભાઈઓ જેવા હોય એટલે કે એકદમ સરખા જ હોય. આપણે ખાલી ત્રિકોણના નિયમથી A ગોતવાનો હતો (180 - 100 = 80), A = 80 હોય તો D પણ 80 જ થાય!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 9.3 - પ્રશ્ન 5",
                "marks": 4,
                "question": "આકૃતિમાં, A, B, C અને D એ વર્તુળ પરનાં ચાર બિંદુઓ છે. AC અને BD એ બિંદુ E માં એવી રીતે છેદે છે કે જેથી ∠BEC = 130° અને ∠ECD = 20° થાય. ∠BAC શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 300" style="width:100%; max-width:300px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="150" r="100" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            
                            <circle cx="70" cy="90" r="4" fill="#0f172a"/>
                            <text x="55" y="85" fill="#0f172a" font-weight="bold">A</text>
                            
                            <circle cx="70" cy="210" r="4" fill="#0f172a"/>
                            <text x="55" y="225" fill="#0f172a" font-weight="bold">B</text>
                            
                            <circle cx="230" cy="210" r="4" fill="#0f172a"/>
                            <text x="240" y="225" fill="#0f172a" font-weight="bold">C</text>
                            
                            <circle cx="230" cy="90" r="4" fill="#0f172a"/>
                            <text x="240" y="85" fill="#0f172a" font-weight="bold">D</text>
                            
                            <line x1="70" y1="90" x2="230" y2="210" stroke="#be123c" stroke-width="2"/> <line x1="70" y1="210" x2="230" y2="90" stroke="#1d4ed8" stroke-width="2"/> <line x1="70" y1="210" x2="230" y2="210" stroke="#0f172a" stroke-width="2"/> <line x1="70" y1="90" x2="70" y2="210" stroke="#0f172a" stroke-width="2"/> <line x1="230" y1="90" x2="230" y2="210" stroke="#0f172a" stroke-width="2"/> <circle cx="150" cy="150" r="4" fill="#ea580c"/>
                            <text x="150" y="170" fill="#ea580c" font-weight="bold">E</text>
                            
                            <path d="M 170 150 A 20 20 0 0 1 160 165" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="175" y="165" fill="#ea580c" font-size="12" font-weight="bold">130&deg;</text>
                            
                            <path d="M 230 190 A 20 20 0 0 0 215 198" fill="none" stroke="#ea580c" stroke-width="2"/>
                            <text x="200" y="190" fill="#ea580c" font-size="12" font-weight="bold">20&deg;</text>
                            
                            <path d="M 70 110 A 20 20 0 0 0 82 100" fill="none" stroke="#be123c" stroke-width="2"/>
                            <text x="85" y="115" fill="#be123c" font-size="14" font-weight="bold">?</text>
                        </svg>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            આકૃતિમાં, રેખા BD પર બિંદુ E આવેલું છે. તેથી &ang;BEC અને &ang;CED રૈખિક જોડ બનાવે છે.<br>
                            &there4; &ang;BEC + &ang;CED = 180&deg;<br>
                            &there4; 130&deg; + &ang;CED = 180&deg;<br>
                            &there4; &ang;CED = 180&deg; - 130&deg; = <b>50&deg;</b><br><br>
                            
                            હવે નાના ત્રિકોણ <b>&Delta;ECD</b> માં જુઓ:<br>
                            આપણને &ang;CED = 50&deg; મળ્યો છે, અને &ang;ECD = 20&deg; રકમમાં આપેલો છે.<br>
                            ત્રિકોણના ત્રણેય ખૂણાઓનો સરવાળો 180&deg; થાય છે.<br>
                            &there4; &ang;CED + &ang;ECD + &ang;CDE = 180&deg;<br>
                            &there4; 50&deg; + 20&deg; + &ang;CDE = 180&deg;<br>
                            &there4; 70&deg; + &ang;CDE = 180&deg;<br>
                            &there4; &ang;CDE = 180&deg; - 70&deg; = <b>110&deg;</b><br><br>
                            
                            અહીં, <b>&ang;BAC અને &ang;CDE (અથવા &ang;BDC) એ એક જ વૃત્તખંડના ખૂણાઓ છે</b> (જીવા BC દ્વારા આંતરેલા).<br>
                            એક જ વૃત્તખંડના ખૂણાઓ હંમેશા સમાન હોય છે.<br>
                            &there4; &ang;BAC = &ang;BDC<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; &ang;BAC = 110&deg;</b>
                        </div>
                    </div>
                </div>`
            }
            
       ]
    },
                
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 10: હેરોનનું સૂત્ર (સ્વાધ્યાય)
    // ------------------------------------
    "10": {
        "chapterName": "પ્રકરણ 10",
        "chapterTitle": "હેરોનનું સૂત્ર (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 10.1 - પ્રશ્ન 1",
                "marks": 4,
                "question": "ટ્રાફિક સિગ્નલનું પાટિયું 'SCHOOL AHEAD' (આગળ શાળા છે) સમબાજુ ત્રિકોણ આકારનું છે અને તેની બાજુની લંબાઈ 'a' છે. હેરોનના સૂત્ર પરથી તેનું ક્ષેત્રફળ મેળવો. જો તેની પરિમિતિ 180 સેમી હોય, તો તેનું ક્ષેત્રફળ કેટલું થાય?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 200 200" style="width:100%; max-width:250px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="100,20 20,160 180,160" fill="#fef08a" stroke="#ca8a04" stroke-width="6" stroke-linejoin="round"/>
                            <text x="100" y="100" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">SCHOOL</text>
                            <text x="100" y="120" fill="#0f172a" font-size="14" font-weight="bold" text-anchor="middle">AHEAD</text>
                            
                            <text x="45" y="85" fill="#be123c" font-size="16" font-weight="bold">a</text>
                            <text x="145" y="85" fill="#be123c" font-size="16" font-weight="bold">a</text>
                            <text x="100" y="180" fill="#be123c" font-size="16" font-weight="bold">a</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ભાગ 1: હેરોનના સૂત્ર પરથી 'a' બાજુવાળા ત્રિકોણનું ક્ષેત્રફળ</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            અહીં સમબાજુ ત્રિકોણની ત્રણેય બાજુઓ સમાન છે: બાજુ 1 = a, બાજુ 2 = a, બાજુ 3 = a.<br>
                            અર્ધપરિમિતિ (s) = (a + a + a) / 2 = <b>3a/2</b><br><br>
                            
                            હેરોનનું સૂત્ર: ક્ષેત્રફળ = &radic;[s(s - a)(s - b)(s - c)]<br>
                            &there4; ક્ષેત્રફળ = &radic;[ (3a/2) &times; (3a/2 - a) &times; (3a/2 - a) &times; (3a/2 - a) ]<br>
                            <span style='color:#64748b; font-size:12px;'>[લ.સા.અ. લેતાં: 3a/2 - 2a/2 = a/2]</span><br>
                            &there4; ક્ષેત્રફળ = &radic;[ (3a/2) &times; (a/2) &times; (a/2) &times; (a/2) ]<br>
                            &there4; ક્ષેત્રફળ = &radic;[ 3a<sup>4</sup> / 16 ]<br>
                            <b style='color:#0284c7; font-size:16px;'>&there4; સમબાજુ ત્રિકોણનું ક્ષેત્રફળ = (&radic;3 / 4) a<sup>2</sup></b>
                        </div>
                    </div>
                    
                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>ભાગ 2: પરિમિતિ 180 સેમી હોય ત્યારે ક્ષેત્રફળ</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            પરિમિતિ = 3a = 180 સેમી &rArr; <b>a = 60 સેમી</b><br>
                            તેથી, ઉપર મળેલા સૂત્રમાં a ની કિંમત મૂકતાં:<br>
                            ક્ષેત્રફળ = (&radic;3 / 4) &times; (60)<sup>2</sup><br>
                            &there4; ક્ષેત્રફળ = (&radic;3 / 4) &times; 3600<br>
                            &there4; ક્ષેત્રફળ = &radic;3 &times; 900<br>
                            <b style='color:#15803d; font-size:18px;'>&there4; ક્ષેત્રફળ = 900&radic;3 સેમી<sup>2</sup></b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>હેતુલક્ષી પ્રશ્નો માટે <b>સમબાજુ ત્રિકોણના ક્ષેત્રફળનું સૂત્ર સીધું જ યાદ રાખી લો: (&radic;3 / 4) a<sup>2</sup></b>. રકમમાં પરિમિતિ 180 છે એટલે બાજુ 60 થઈ. 60 નો વર્ગ 3600. તેને 4 વડે ભાગો એટલે 900. અને પાછળ &radic;3 ચોંટાડી દો! <b>900&radic;3</b> જવાબ મૌખિક જ આવી જશે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 10.1 - પ્રશ્ન 2",
                "marks": 4,
                "question": "એક ફ્લાયઓવરની ત્રિકોણાકાર દીવાલોનો ઉપયોગ જાહેરાત માટે થાય છે. દીવાલોની બાજુઓ 122 મી, 22 મી અને 120 મી છે. જાહેરાત પ્રતિ વર્ષ ₹ 5000 પ્રતિ મી² ના દરે કમાણી કરી આપે છે. એક કંપની તે દીવાલને 3 મહિના માટે ભાડે રાખે છે, તો તેણે કેટલું ભાડું ચૂકવવું પડે?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 150" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,130 290,130 290,30" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            
                            <line x1="20" y1="130" x2="330" y2="130" stroke="#475569" stroke-width="6"/>
                            
                            <text x="170" y="150" fill="#0f172a" font-weight="bold">120 મી</text>
                            <text x="300" y="90" fill="#0f172a" font-weight="bold">22 મી</text>
                            <text x="140" y="75" fill="#be123c" font-weight="bold" transform="rotate(-23 140,75)">122 મી</text>
                            
                            <text x="170" y="100" fill="#0284c7" font-weight="bold" font-size="14">ADVERTISEMENT</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>પગલું 1: ત્રિકોણાકાર દીવાલનું ક્ષેત્રફળ</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            અહીં દીવાલની બાજુઓ છે: a = 122 મી, b = 120 મી, c = 22 મી.<br>
                            અર્ધપરિમિતિ (s) = (122 + 120 + 22) / 2 = 264 / 2 = <b>132 મી</b><br><br>
                            
                            ક્ષેત્રફળ = &radic;[s(s - a)(s - b)(s - c)]<br>
                            = &radic;[ 132(132 - 122)(132 - 120)(132 - 22) ]<br>
                            = &radic;[ 132 &times; 10 &times; 12 &times; 110 ]<br>
                            <span style='color:#64748b; font-size:12px;'>[અવયવ પાડીએ જેથી વર્ગમૂળ સહેલાઈથી નીકળે: 132 = 12 &times; 11, 110 = 11 &times; 10]</span><br>
                            = &radic;[ (12 &times; 11) &times; 10 &times; 12 &times; (11 &times; 10) ]<br>
                            = &radic;[ (12 &times; 12) &times; (11 &times; 11) &times; (10 &times; 10) ]<br>
                            = 12 &times; 11 &times; 10<br>
                            <b style='color:#0284c7; font-size:16px;'>&there4; ક્ષેત્રફળ = 1320 મી<sup>2</sup></b>
                        </div>
                    </div>
                    
                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>પગલું 2: ભાડાની ગણતરી</b></p>
                        <div style='font-size:14px; color:#9f1239; line-height:1.8; margin-left:10px;'>
                            જાહેરાતનો વાર્ષિક (12 મહિનાનો) દર = ₹ 5000 પ્રતિ મી<sup>2</sup><br>
                            કંપની માત્ર <b>3 મહિના</b> માટે ભાડે રાખે છે.<br>
                            &there4; ચૂકવવાનું કુલ ભાડું = ક્ષેત્રફળ &times; દર &times; સમય<br>
                            &there4; ભાડું = 1320 &times; 5000 &times; (3 / 12)<br>
                            &there4; ભાડું = 1320 &times; 5000 &times; (1 / 4)<br>
                            &there4; ભાડું = 330 &times; 5000<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; કુલ ભાડું = ₹ 16,50,000 (16 લાખ 50 હજાર રૂપિયા)</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 10.1 - પ્રશ્ન 3",
                "marks": 3,
                "question": "બગીચામાં એક લપસણી છે. તેની એક બાજુની દીવાલ કોઈ રંગથી રંગી તેના પર 'KEEP THE PARK GREEN AND CLEAN' એવો સંદેશ લખેલો છે. જો દીવાલની બાજુઓ 15 મી, 11 મી અને 6 મી હોય, તો રંગેલ દીવાલનું ક્ષેત્રફળ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="50,150 250,150 120,40" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
                            
                            <text x="140" y="100" fill="#14532d" font-size="12" font-weight="bold" text-anchor="middle">KEEP THE PARK</text>
                            <text x="140" y="120" fill="#14532d" font-size="12" font-weight="bold" text-anchor="middle">GREEN & CLEAN</text>
                            
                            <text x="60" y="90" fill="#0f172a" font-weight="bold">11m</text>
                            <text x="195" y="90" fill="#0f172a" font-weight="bold">15m</text>
                            <text x="140" y="170" fill="#0f172a" font-weight="bold">6m</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            અહીં દીવાલની બાજુઓ છે: a = 15 મી, b = 11 મી, c = 6 મી.<br>
                            સૌપ્રથમ અર્ધપરિમિતિ (s) શોધીશું:<br>
                            s = (a + b + c) / 2<br>
                            s = (15 + 11 + 6) / 2 = 32 / 2 = <b>16 મી</b><br><br>
                            
                            હેરોનના સૂત્ર મુજબ:<br>
                            ક્ષેત્રફળ = &radic;[s(s - a)(s - b)(s - c)]<br>
                            = &radic;[ 16(16 - 15)(16 - 11)(16 - 6) ]<br>
                            = &radic;[ 16 &times; 1 &times; 5 &times; 10 ]<br>
                            <span style='color:#64748b; font-size:12px;'>[અવયવો પાડીએ: 16 નું વર્ગમૂળ 4 નીકળશે, 10 ને 5 &times; 2 લખીશું]</span><br>
                            = &radic;[ 16 &times; 5 &times; (5 &times; 2) ]<br>
                            = 4 &times; 5 &times; &radic;2<br>
                            = 20 &times; &radic;2<br>
                            <b style='color:#15803d; font-size:18px;'>&there4; રંગેલ દીવાલનું ક્ષેત્રફળ = 20&radic;2 મી<sup>2</sup></b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 10.1 - પ્રશ્ન 4",
                "marks": 3,
                "question": "જેની બે બાજુઓ 18 સેમી અને 10 સેમી હોય તથા પરિમિતિ 42 સેમી હોય તેવા ત્રિકોણનું ક્ષેત્રફળ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>પગલું 1: ત્રિકોણની ત્રીજી બાજુ શોધવી</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            ધારો કે a = 18 સેમી, b = 10 સેમી અને ત્રીજી બાજુ c શોધવાની છે.<br>
                            પરિમિતિ = 42 સેમી આપેલ છે.<br>
                            &there4; a + b + c = 42<br>
                            &there4; 18 + 10 + c = 42<br>
                            &there4; 28 + c = 42<br>
                            &there4; c = 42 - 28 = <b>14 સેમી</b><br><br>
                            
                            અર્ધપરિમિતિ (s) = પરિમિતિ / 2 = 42 / 2 = <b>21 સેમી</b>
                        </div>
                    </div>
                    
                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>પગલું 2: હેરોનના સૂત્રથી ક્ષેત્રફળ</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            ક્ષેત્રફળ = &radic;[s(s - a)(s - b)(s - c)]<br>
                            = &radic;[ 21(21 - 18)(21 - 10)(21 - 14) ]<br>
                            = &radic;[ 21 &times; 3 &times; 11 &times; 7 ]<br>
                            <span style='color:#64748b; font-size:12px;'>[અવયવ પાડીએ: 21 ને 7 &times; 3 લખી શકાય]</span><br>
                            = &radic;[ (7 &times; 3) &times; 3 &times; 11 &times; 7 ]<br>
                            = 7 &times; 3 &times; &radic;11<br>
                            <b style='color:#0284c7; font-size:18px;'>&there4; ત્રિકોણનું ક્ષેત્રફળ = 21&radic;11 સેમી<sup>2</sup></b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 10.1 - પ્રશ્ન 5",
                "marks": 4,
                "question": "ત્રિકોણની બાજુઓ 12:17:25 ના પ્રમાણમાં હોય અને તેની પરિમિતિ 540 સેમી હોય, તો તેનું ક્ષેત્રફળ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #64748b; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'><b>પગલું 1: ત્રિકોણની ત્રણેય બાજુઓ શોધવી</b></p>
                        <div style='font-size:14px; color:#475569; line-height:1.8; margin-left:10px;'>
                            આપેલ ગુણોત્તર = 12 : 17 : 25<br>
                            ધારો કે બાજુઓ અનુક્રમે a = 12x, b = 17x અને c = 25x છે.<br>
                            પરિમિતિ = 540 સેમી<br>
                            &there4; a + b + c = 540<br>
                            &there4; 12x + 17x + 25x = 540<br>
                            &there4; 54x = 540<br>
                            &there4; <b>x = 10</b><br><br>
                            
                            બાજુઓની લંબાઈ:<br>
                            a = 12(10) = <b>120 સેમી</b><br>
                            b = 17(10) = <b>170 સેમી</b><br>
                            c = 25(10) = <b>250 સેમી</b><br><br>
                            
                            અર્ધપરિમિતિ (s) = 540 / 2 = <b>270 સેમી</b>
                        </div>
                    </div>
                    
                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>પગલું 2: ક્ષેત્રફળની ગણતરી</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            ક્ષેત્રફળ = &radic;[s(s - a)(s - b)(s - c)]<br>
                            = &radic;[ 270(270 - 120)(270 - 170)(270 - 250) ]<br>
                            = &radic;[ 270 &times; 150 &times; 100 &times; 20 ]<br>
                            <span style='color:#64748b; font-size:12px;'>[ગણતરી સરળ કરવા 10 ના ગુણકો (મીંડા) અલગ કરીએ: 27 &times; 10, 15 &times; 10 વગેરે]</span><br>
                            = &radic;[ (9 &times; 3 &times; 10) &times; (5 &times; 3 &times; 10) &times; (10 &times; 10) &times; (4 &times; 5) ]<br>
                            = &radic;[ 9 &times; 9 &times; 25 &times; 4 &times; 10000 ]<br>
                            = 3 &times; 3 &times; 5 &times; 2 &times; 100<br>
                            = 9 &times; 10 &times; 100<br>
                            <b style='color:#15803d; font-size:18px;'>&there4; ક્ષેત્રફળ = 9000 સેમી<sup>2</sup></b>
                        </div>
                    </div>
                </div>`
            },
             { 
                "questionNumber": "સ્વાધ્યાય 10.1 - પ્રશ્ન 6",
                "marks": 3,
                "question": "સમદ્વિબાજુ ત્રિકોણની પરિમિતિ 30 સેમી અને સમાન બાજુઓ પૈકી પ્રત્યેકની લંબાઈ 12 સેમી છે, તો ત્રિકોણનું ક્ષેત્રફળ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 200 200" style="width:100%; max-width:200px;" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="100,20 30,170 170,170" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
                            
                            <line x1="60" y1="95" x2="70" y2="95" stroke="#0f172a" stroke-width="2"/>
                            <line x1="130" y1="95" x2="140" y2="95" stroke="#0f172a" stroke-width="2"/>
                            
                            <text x="35" y="100" fill="#be123c" font-weight="bold">12</text>
                            <text x="150" y="100" fill="#be123c" font-weight="bold">12</text>
                            <text x="95" y="190" fill="#1d4ed8" font-weight="bold">c = ?</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            સમદ્વિબાજુ ત્રિકોણ હોવાથી બે બાજુઓ સમાન છે: a = 12 સેમી, b = 12 સેમી.<br>
                            પરિમિતિ = 30 સેમી<br>
                            &there4; a + b + c = 30<br>
                            &there4; 12 + 12 + c = 30<br>
                            &there4; 24 + c = 30<br>
                            &there4; c = 30 - 24 = <b>6 સેમી</b> (ત્રીજી બાજુ મળી ગઈ)<br><br>
                            
                            અર્ધપરિમિતિ (s) = 30 / 2 = <b>15 સેમી</b><br><br>
                            
                            હેરોનના સૂત્ર પરથી ક્ષેત્રફળ = &radic;[s(s - a)(s - b)(s - c)]<br>
                            = &radic;[ 15(15 - 12)(15 - 12)(15 - 6) ]<br>
                            = &radic;[ 15 &times; 3 &times; 3 &times; 9 ]<br>
                            <span style='color:#64748b; font-size:12px;'>[9 નું વર્ગમૂળ 3, અને 3 &times; 3 નું વર્ગમૂળ પણ 3. 15 નું નહિ નીકળે]</span><br>
                            = 3 &times; 3 &times; &radic;15<br>
                            <b style='color:#0284c7; font-size:18px;'>&there4; ક્ષેત્રફળ = 9&radic;15 સેમી<sup>2</sup></b>
                        </div>
                    </div>
                </div>`
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 11: પૃષ્ઠફળ અને ઘનફળ (સ્વાધ્યાય)
    // ------------------------------------
    "11": {
        "chapterName": "પ્રકરણ 11",
        "chapterTitle": "પૃષ્ઠફળ અને ઘનફળ (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 11.1 - પ્રશ્ન 1",
                "marks": 2,
                "question": "જે શંકુના પાયાનો વ્યાસ 10.5 સેમી અને ત્રાંસી ઊંચાઈ 10 સેમી હોય, તેની વક્ર સપાટીનું ક્ષેત્રફળ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 250" style="width:100%; max-width:250px;" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="150" cy="180" rx="80" ry="25" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            <ellipse cx="150" cy="180" rx="80" ry="25" fill="none" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,4"/>
                            
                            <path d="M 70 180 L 150 30 L 230 180" fill="none" stroke="#0284c7" stroke-width="2"/>
                            
                            <line x1="150" y1="30" x2="230" y2="180" stroke="#be123c" stroke-width="3"/>
                            <text x="210" y="110" fill="#be123c" font-weight="bold">l = 10 cm</text>
                            
                            <line x1="70" y1="180" x2="230" y2="180" stroke="#16a34a" stroke-width="2"/>
                            <text x="110" y="220" fill="#16a34a" font-weight="bold">d = 10.5 cm</text>
                            
                            <circle cx="150" cy="180" r="3" fill="#0f172a"/>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            અહીં શંકુ માટે આપેલ માહિતી:<br>
                            પાયાનો વ્યાસ (d) = 10.5 સેમી<br>
                            તેથી, ત્રિજ્યા (r) = d / 2 = 10.5 / 2 = <b>5.25 સેમી</b><br>
                            ત્રાંસી ઊંચાઈ (l) = <b>10 સેમી</b><br><br>
                            
                            શંકુની વક્ર સપાટીનું ક્ષેત્રફળ (CSA) = <b>&pi;rl</b><br>
                            <span style='color:#64748b; font-size:12px;'>[અહીં &pi; = 22/7 લઈશું]</span><br>
                            = (22 / 7) &times; 5.25 &times; 10<br>
                            = (22 / 7) &times; (525 / 100) &times; 10<br>
                            <span style='color:#64748b; font-size:12px;'>[છેદ ઉડાડતાં: 525 / 7 = 75]</span><br>
                            = 22 &times; (75 / 10)<br>
                            = 22 &times; 7.5<br>
                            = <b style='color:#be123c; font-size:18px;'>165 સેમી<sup>2</sup></b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>દશાંશ ચિહ્ન (પોઇન્ટ) વાળા ગુણાકારમાં ભૂલ ન થાય તે માટે <b>પોઇન્ટ કાઢીને છેદમાં 10 કે 100 મૂકી દેવા!</b> જેમ કે 10.5 ના અડધા 5.25 થાય. તેને સીધું 525/100 લખીને ગણતરી કરશો તો 7 વડે આસાનીથી છેદ ઉડી જશે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.1 - પ્રશ્ન 2",
                "marks": 3,
                "question": "જેની ત્રાંસી ઊંચાઈ 21 મીટર અને પાયાનો વ્યાસ 24 મીટર હોય તેવા શંકુનું કુલ પૃષ્ઠફળ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 250" style="width:100%; max-width:250px;" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="150" cy="180" rx="80" ry="25" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
                            
                            <path d="M 70 180 L 150 30 L 230 180" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
                            
                            <text x="145" y="140" fill="#a16207" font-weight="bold">TSA</text>
                            
                            <line x1="150" y1="30" x2="230" y2="180" stroke="#be123c" stroke-width="2"/>
                            <text x="210" y="110" fill="#be123c" font-weight="bold">l = 21 m</text>
                            
                            <line x1="150" y1="180" x2="230" y2="180" stroke="#16a34a" stroke-width="2"/>
                            <circle cx="150" cy="180" r="3" fill="#0f172a"/>
                            <text x="160" y="200" fill="#16a34a" font-weight="bold">r = 12 m</text>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#64748b; font-size:13px;'>કુલ પૃષ્ઠફળ (TSA) = વક્ર સપાટી + પાયાનું ક્ષેત્રફળ</p>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            વ્યાસ (d) = 24 મીટર<br>
                            &there4; ત્રિજ્યા (r) = 24 / 2 = <b>12 મીટર</b><br>
                            ત્રાંસી ઊંચાઈ (l) = <b>21 મીટર</b><br><br>
                            
                            શંકુનું કુલ પૃષ્ઠફળ (TSA) = <b>&pi;r(l + r)</b><br>
                            = (22 / 7) &times; 12 &times; (21 + 12)<br>
                            = (22 / 7) &times; 12 &times; 33<br>
                            = (264 / 7) &times; 33<br>
                            = 8712 / 7<br>
                            <b style='color:#be123c; font-size:18px;'>= 1244.57 મીટર<sup>2</sup> (આશરે)</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.1 - પ્રશ્ન 3",
                "marks": 3,
                "question": "એક શંકુની વક્ર સપાટીનું ક્ષેત્રફળ 308 સેમી² અને તેની ત્રાંસી ઊંચાઈ 14 સેમી છે. તો (i) પાયાની ત્રિજ્યા (ii) શંકુનું કુલ પૃષ્ઠફળ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>(i) પાયાની ત્રિજ્યા (r) શોધવી:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            આપેલ છે: વક્ર સપાટીનું ક્ષેત્રફળ (CSA) = 308 સેમી<sup>2</sup><br>
                            ત્રાંસી ઊંચાઈ (l) = 14 સેમી<br><br>
                            
                            સૂત્ર: CSA = &pi;rl<br>
                            &there4; 308 = (22 / 7) &times; r &times; 14<br>
                            <span style='color:#64748b; font-size:12px;'>[છેદ ઉડાડતાં: 14 / 7 = 2]</span><br>
                            &there4; 308 = 22 &times; r &times; 2<br>
                            &there4; 308 = 44 &times; r<br>
                            &there4; r = 308 / 44<br>
                            <b style='color:#15803d; font-size:16px;'>&there4; r = 7 સેમી</b> (પાયાની ત્રિજ્યા)
                        </div>
                    </div>
                    
                    <div style='background-color:#eff6ff; padding:12px; border-left:4px solid #1d4ed8; border-radius:5px; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#1e3a8a;'><b>(ii) શંકુનું કુલ પૃષ્ઠફળ (TSA) શોધવું:</b></p>
                        <div style='font-size:14px; color:#1d4ed8; line-height:1.8; margin-left:10px;'>
                            કુલ પૃષ્ઠફળ = વક્ર સપાટીનું ક્ષેત્રફળ + પાયાનું ક્ષેત્રફળ<br>
                            TSA = CSA + &pi;r<sup>2</sup><br>
                            <span style='color:#64748b; font-size:12px;'>[અહીં આપણને CSA = 308 પહેલેથી જ આપેલું છે, તેથી ગણતરી બચી જશે!]</span><br>
                            = 308 + [(22 / 7) &times; 7 &times; 7]<br>
                            = 308 + (22 &times; 7)<br>
                            = 308 + 154<br>
                            <b style='color:#1d4ed8; font-size:18px;'>= 462 સેમી<sup>2</sup></b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>બીજા ભાગમાં કુલ પૃષ્ઠફળ શોધવા માટે મોટું સૂત્ર <b>&pi;r(l+r)</b> વાપરવાની કોઈ જરૂર નથી! વક્ર સપાટી (308) તો પહેલેથી જ આપેલી છે, બસ તેમાં નીચેના ગોળ પાયાનું ક્ષેત્રફળ <b>(&pi;r<sup>2</sup>)</b> ઉમેરી દો એટલે સીધો જવાબ 462 મળી જાય. સમય અને મહેનત બંનેની બચત!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.1 - પ્રશ્ન 4",
                "marks": 4,
                "question": "શંકુ આકારનો તંબુ 10 મીટર ઊંચો છે અને તેના પાયાની ત્રિજ્યા 24 મીટર છે, તો:<br>(i) તંબુની ત્રાંસી ઊંચાઈ શોધો.<br>(ii) 1 મી² ના ₹ 70 લેખે તંબુ બનાવવા માટે વપરાતા કેનવાસનો કુલ ખર્ચ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 250" style="width:100%; max-width:250px;" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="150" cy="180" rx="100" ry="25" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            <path d="M 50 180 L 150 20 L 250 180" fill="none" stroke="#0284c7" stroke-width="2"/>
                            
                            <line x1="150" y1="20" x2="150" y2="180" stroke="#be123c" stroke-width="2" stroke-dasharray="4,4"/>
                            <text x="125" y="110" fill="#be123c" font-weight="bold">h = 10</text>
                            
                            <line x1="150" y1="180" x2="250" y2="180" stroke="#16a34a" stroke-width="2"/>
                            <text x="175" y="175" fill="#16a34a" font-weight="bold">r = 24</text>
                            
                            <line x1="150" y1="20" x2="250" y2="180" stroke="#ea580c" stroke-width="3"/>
                            <text x="215" y="90" fill="#ea580c" font-weight="bold">l = ?</text>
                            
                            <polyline points="150,170 160,170 160,180" fill="none" stroke="#0f172a" stroke-width="1.5"/>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#64748b; font-size:13px;'>કાટકોણ ત્રિકોણ રચાતો હોવાથી પાયથાગોરસ વપરાશે.</p>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>(i) તંબુની ત્રાંસી ઊંચાઈ (l):</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            ઊંચાઈ (h) = 10 મી, ત્રિજ્યા (r) = 24 મી.<br>
                            પાયથાગોરસના પ્રમેય મુજબ, l<sup>2</sup> = r<sup>2</sup> + h<sup>2</sup><br>
                            &there4; l<sup>2</sup> = (24)<sup>2</sup> + (10)<sup>2</sup><br>
                            &there4; l<sup>2</sup> = 576 + 100<br>
                            &there4; l<sup>2</sup> = 676<br>
                            &there4; l = &radic;676<br>
                            <b style='color:#be123c; font-size:16px;'>&there4; l = 26 મીટર</b>
                        </div>
                    </div>
                    
                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>(ii) કેનવાસનો કુલ ખર્ચ:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            તંબુ બનાવવા માટે ફક્ત <b>વક્ર સપાટી</b> પર જ કાપડ (કેનવાસ) લાગે, નીચે ભોંયતળિયે નહિ.<br>
                            તેથી, કેનવાસનું ક્ષેત્રફળ = CSA = <b>&pi;rl</b><br>
                            = (22 / 7) &times; 24 &times; 26<br>
                            = 13728 / 7 મીટર<sup>2</sup><br><br>
                            
                            હવે, 1 મી<sup>2</sup> કેનવાસનો ખર્ચ = ₹ 70<br>
                            &there4; કુલ ખર્ચ = ક્ષેત્રફળ &times; દર<br>
                            = (13728 / 7) &times; 70<br>
                            <span style='color:#64748b; font-size:12px;'>[છેદ ઉડાડતાં: 70 / 7 = 10]</span><br>
                            = 13728 &times; 10<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; કુલ ખર્ચ = ₹ 1,37,280</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.1 - પ્રશ્ન 5",
                "marks": 4,
                "question": "જેની ઊંચાઈ 8 મીટર અને પાયાની ત્રિજ્યા 6 મીટર હોય તેવો શંકુ આકારનો તંબુ બનાવવા માટે 3 મીટર પહોળી કેટલી તાડપત્રીની જરૂર પડે? માની લો કે સિલાઈના માપ અને કાપકૂપમાં થતા બગાડ માટે આશરે 20 સેમી જેટલી વધારાની તાડપત્રી વપરાય છે. (π = 3.14 લો.)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>પગલું 1: તંબુનું ક્ષેત્રફળ શોધવું</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            ઊંચાઈ (h) = 8 મી, ત્રિજ્યા (r) = 6 મી.<br>
                            પ્રથમ ત્રાંસી ઊંચાઈ (l) શોધીએ: l = &radic;(r<sup>2</sup> + h<sup>2</sup>)<br>
                            &there4; l = &radic;(6<sup>2</sup> + 8<sup>2</sup>) = &radic;(36 + 64) = &radic;100 = <b>10 મીટર</b><br><br>
                            
                            તંબુની વક્ર સપાટીનું ક્ષેત્રફળ = <b>&pi;rl</b><br>
                            = 3.14 &times; 6 &times; 10<br>
                            = 31.4 &times; 6<br>
                            = <b>188.4 મીટર<sup>2</sup></b>
                        </div>
                    </div>
                    
                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>પગલું 2: તાડપત્રીની લંબાઈ શોધવી</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            તાડપત્રી (લંબચોરસ આકારની હોય છે) નું ક્ષેત્રફળ = તંબુનું વક્ર પૃષ્ઠફળ<br>
                            &there4; લંબાઈ (L) &times; પહોળાઈ (B) = 188.4<br>
                            અહીં પહોળાઈ (B) = 3 મીટર આપેલ છે.<br>
                            &there4; L &times; 3 = 188.4<br>
                            &there4; L = 188.4 / 3 = <b>62.8 મીટર</b><br><br>
                            
                            હવે, કાપકૂપમાં થતો બગાડ = 20 સેમી = <b>0.2 મીટર</b><br>
                            &there4; કુલ જરૂરી લંબાઈ = મૂળ લંબાઈ + બગાડ<br>
                            = 62.8 + 0.2<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; કુલ લંબાઈ = 63 મીટર</b>
                        </div>
                    </div>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 11.2 - પ્રશ્ન 1",
                "marks": 2,
                "question": "આપેલી ત્રિજ્યાવાળા ગોલકની વક્ર સપાટીનું ક્ષેત્રફળ શોધો: (i) 10.5 સેમી", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:250px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="100" r="80" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            
                            <ellipse cx="150" cy="100" rx="80" ry="30" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <path d="M 70 100 A 80 30 0 0 0 230 100" fill="none" stroke="#0284c7" stroke-width="2"/>
                            
                            <circle cx="150" cy="100" r="4" fill="#be123c"/>
                            <text x="140" y="90" fill="#be123c" font-weight="bold">O</text>
                            
                            <line x1="150" y1="100" x2="230" y2="100" stroke="#be123c" stroke-width="2"/>
                            <text x="175" y="90" fill="#be123c" font-weight="bold">r = 10.5</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            ગોલકની ત્રિજ્યા (r) = <b>10.5 સેમી</b><br><br>
                            
                            ગોલકની વક્ર સપાટીનું ક્ષેત્રફળ = <b>4&pi;r<sup>2</sup></b><br>
                            <span style='color:#64748b; font-size:12px;'>[ગણતરી સરળ કરવા 10.5 ને 105/10 લખીશું]</span><br>
                            = 4 &times; (22 / 7) &times; (105 / 10) &times; (105 / 10)<br>
                            <span style='color:#64748b; font-size:12px;'>[છેદ ઉડાડતાં: 105 / 7 = 15]</span><br>
                            = 4 &times; 22 &times; 15 &times; (105 / 100)<br>
                            = 88 &times; 15 &times; 1.05<br>
                            = 1320 &times; 1.05<br>
                            <b style='color:#be123c; font-size:18px;'>= 1386 સેમી<sup>2</sup></b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આખા ગોળા (Sphere) ને ક્યાંયથી પણ જુઓ, બધેથી ગોળ જ દેખાય! તેથી ગોલકમાં વક્ર સપાટી અને કુલ પૃષ્ઠફળ બંને એક જ હોય છે. તેનું એક માત્ર સૂત્ર છે <b>4&pi;r<sup>2</sup></b> (એટલે કે 4 વર્તુળના ક્ષેત્રફળ જેટલું)!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.2 - પ્રશ્ન 2",
                "marks": 2,
                "question": "આપેલા વ્યાસવાળા ગોલકની વક્ર સપાટીનું ક્ષેત્રફળ શોધો: (i) 14 સેમી", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            ગોલકનો વ્યાસ (d) = 14 સેમી<br>
                            &there4; ત્રિજ્યા (r) = d / 2 = 14 / 2 = <b>7 સેમી</b><br><br>
                            
                            ગોલકની વક્ર સપાટીનું ક્ષેત્રફળ = <b>4&pi;r<sup>2</sup></b><br>
                            = 4 &times; (22 / 7) &times; 7 &times; 7<br>
                            <span style='color:#64748b; font-size:12px;'>[એક 7 અને 7 ઊડી જશે]</span><br>
                            = 4 &times; 22 &times; 7<br>
                            = 88 &times; 7<br>
                            <b style='color:#15803d; font-size:18px;'>= 616 સેમી<sup>2</sup></b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.2 - પ્રશ્ન 3",
                "marks": 3,
                "question": "10 સેમી ત્રિજ્યાવાળા અર્ધગોલકનું કુલ પૃષ્ઠફળ શોધો. (π = 3.14 લો)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:250px;" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="150" cy="80" rx="80" ry="25" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
                            
                            <path d="M 70 80 A 80 80 0 0 0 230 80" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
                            
                            <text x="145" y="140" fill="#a16207" font-weight="bold">વક્ર સપાટી (2&pi;r&sup2;)</text>
                            <text x="145" y="75" fill="#a16207" font-weight="bold">પાયો (&pi;r&sup2;)</text>
                            
                            <circle cx="150" cy="80" r="3" fill="#be123c"/>
                            <line x1="150" y1="80" x2="230" y2="80" stroke="#be123c" stroke-width="2"/>
                            <text x="175" y="70" fill="#be123c" font-weight="bold">r = 10</text>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#64748b; font-size:13px;'>કુલ પૃષ્ઠફળ = 2&pi;r&sup2; + &pi;r&sup2; = 3&pi;r&sup2;</p>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            અર્ધગોલકની ત્રિજ્યા (r) = <b>10 સેમી</b><br>
                            &pi; = 3.14<br><br>
                            
                            અર્ધગોલકનું કુલ પૃષ્ઠફળ = <b>3&pi;r<sup>2</sup></b><br>
                            = 3 &times; 3.14 &times; (10)<sup>2</sup><br>
                            = 3 &times; 3.14 &times; 100<br>
                            <span style='color:#64748b; font-size:12px;'>[3.14 ને 100 વડે ગુણતા દશાંશ ચિહ્ન દૂર થશે]</span><br>
                            = 3 &times; 314<br>
                            <b style='color:#be123c; font-size:18px;'>= 942 સેમી<sup>2</sup></b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>અર્ધગોલકમાં વિદ્યાર્થીઓ સૌથી મોટી ભૂલ સૂત્રમાં કરે છે! જો માત્ર <b>"વક્ર સપાટી"</b> પૂછે (જેમ કે વાટકો), તો <b>2&pi;r<sup>2</sup></b> લેવું. પણ જો <b>"કુલ પૃષ્ઠફળ"</b> પૂછે (જેમ કે અડધું કાપેલું લીંબુ), તો ઉપરની ગોળ સપાટી પણ ઉમેરવી પડે, એટલે સૂત્ર <b>3&pi;r<sup>2</sup></b> બની જાય!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.2 - પ્રશ્ન 4",
                "marks": 3,
                "question": "એક ગોળાકાર ફુગ્ગામાં હવા ભરવાથી તેની ત્રિજ્યા 7 સેમીથી વધીને 14 સેમી થાય છે. આ બંને કિસ્સાઓમાં ગોળાકાર ફુગ્ગાની વક્ર સપાટીના ક્ષેત્રફળનો ગુણોત્તર શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="80" cy="100" r="40" fill="#fecdd3" stroke="#be123c" stroke-width="2"/>
                            <line x1="80" y1="100" x2="120" y2="100" stroke="#0f172a" stroke-width="2"/>
                            <text x="95" y="90" fill="#0f172a" font-weight="bold">7</text>
                            
                            <text x="145" y="105" fill="#0f172a" font-size="20" font-weight="bold">&rarr;</text>
                            
                            <circle cx="240" cy="100" r="80" fill="#fecdd3" stroke="#be123c" stroke-width="2"/>
                            <line x1="240" y1="100" x2="320" y2="100" stroke="#0f172a" stroke-width="2"/>
                            <text x="270" y="90" fill="#0f172a" font-weight="bold">14</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            ધારો કે હવા ભર્યા પહેલાંની ત્રિજ્યા r<sub>1</sub> = 7 સેમી<br>
                            હવા ભર્યા પછીની ત્રિજ્યા r<sub>2</sub> = 14 સેમી<br><br>
                            
                            માગેલ ગુણોત્તર = (મૂળ ફુગ્ગાનું ક્ષેત્રફળ) / (નવા ફુગ્ગાનું ક્ષેત્રફળ)<br>
                            ગુણોત્તર = (4&pi;r<sub>1</sub><sup>2</sup>) / (4&pi;r<sub>2</sub><sup>2</sup>)<br><br>
                            
                            અહીં અંશ અને છેદમાંથી <b>4&pi;</b> ઊડી જશે.<br>
                            &there4; ગુણોત્તર = (r<sub>1</sub> / r<sub>2</sub>)<sup>2</sup><br>
                            &there4; ગુણોત્તર = (7 / 14)<sup>2</sup><br>
                            <span style='color:#64748b; font-size:12px;'>[છેદ ઉડાડતાં: 7/14 = 1/2]</span><br>
                            &there4; ગુણોત્તર = (1 / 2)<sup>2</sup><br>
                            &there4; ગુણોત્તર = 1 / 4<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; બંને કિસ્સાઓના ક્ષેત્રફળનો ગુણોત્તર = 1 : 4</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>ગુણોત્તર પૂછ્યો હોય ત્યારે ક્યારેય પહેલાં ક્ષેત્રફળ શોધવા ન બેસવું! કારણ કે <b>4&pi;</b> તો કેન્સલ જ થવાનું છે. સીધો જ ત્રિજ્યાઓનો ગુણોત્તર લો (7 અને 14 એટલે 1:2) અને તેનો વર્ગ કરી દો. 1 નો વર્ગ 1, 2 નો વર્ગ 4. સીધો જવાબ <b>1:4</b>!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.2 - પ્રશ્ન 5",
                "marks": 4,
                "question": "પિત્તળના બનેલા એક અર્ધગોળાકાર વાટકાની અંદરનો વ્યાસ 10.5 સેમી છે. તેની અંદરની સપાટીને કલાઈ (Plating) કરવાનો ખર્ચ ₹ 16 પ્રતિ 100 સેમી² હોય, તો કુલ ખર્ચ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>પગલું 1: વાટકાની અંદરની વક્ર સપાટીનું ક્ષેત્રફળ</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            વાટકાનો વ્યાસ (d) = 10.5 સેમી<br>
                            &there4; ત્રિજ્યા (r) = 10.5 / 2 = <b>5.25 સેમી</b><br><br>
                            
                            વાટકો એટલે અર્ધગોલક. માત્ર અંદર કલાઈ કરવાની છે, તેથી વક્ર સપાટી લઈશું.<br>
                            અર્ધગોલકની વક્ર સપાટીનું ક્ષેત્રફળ (CSA) = <b>2&pi;r<sup>2</sup></b><br>
                            = 2 &times; (22 / 7) &times; 5.25 &times; 5.25<br>
                            <span style='color:#64748b; font-size:12px;'>[5.25 ને 525/100 લખતા]</span><br>
                            = 2 &times; (22 / 7) &times; (525 / 100) &times; (525 / 100)<br>
                            = 2 &times; 22 &times; 75 &times; 5.25 / 100<br>
                            = 44 &times; 0.75 &times; 5.25<br>
                            = 33 &times; 5.25<br>
                            <b style='color:#15803d; font-size:16px;'>= 173.25 સેમી<sup>2</sup></b>
                        </div>
                    </div>
                    
                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>પગલું 2: કલાઈ કરવાનો ખર્ચ</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            100 સેમી<sup>2</sup> પર કલાઈ કરવાનો ખર્ચ = ₹ 16<br>
                            &there4; 1 સેમી<sup>2</sup> નો ખર્ચ = 16 / 100 = <b>₹ 0.16</b><br><br>
                            
                            &there4; કુલ ખર્ચ = ક્ષેત્રફળ &times; દર<br>
                            = 173.25 &times; (16 / 100)<br>
                            = 2772 / 100<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; કુલ ખર્ચ = ₹ 27.72</b>
                        </div>
                    </div>
                </div>`
            },
        
                
            { 
                "questionNumber": "સ્વાધ્યાય 11.2 - પ્રશ્ન 6",
                "marks": 2,
                "question": "154 સેમી² વક્ર સપાટીનું ક્ષેત્રફળ ધરાવતા ગોલકની ત્રિજ્યા શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:250px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="100" r="80" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            <ellipse cx="150" cy="100" rx="80" ry="30" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <path d="M 70 100 A 80 30 0 0 0 230 100" fill="none" stroke="#16a34a" stroke-width="2"/>
                            
                            <circle cx="150" cy="100" r="4" fill="#be123c"/>
                            <line x1="150" y1="100" x2="230" y2="100" stroke="#be123c" stroke-width="2"/>
                            <text x="175" y="90" fill="#be123c" font-weight="bold" font-size="16">r = ?</text>
                            
                            <text x="150" y="30" fill="#0284c7" font-weight="bold" text-anchor="middle">ક્ષેત્રફળ = 154 cm²</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            આપેલ છે: ગોલકની વક્ર સપાટીનું ક્ષેત્રફળ = 154 સેમી<sup>2</sup><br>
                            આપણે જાણીએ છીએ કે ગોલકનું ક્ષેત્રફળ = <b>4&pi;r<sup>2</sup></b><br><br>
                            
                            &there4; 4&pi;r<sup>2</sup> = 154<br>
                            &there4; 4 &times; (22 / 7) &times; r<sup>2</sup> = 154<br>
                            &there4; r<sup>2</sup> = (154 &times; 7) / (4 &times; 22)<br>
                            <span style='color:#64748b; font-size:12px;'>[છેદ ઉડાડતાં: 154 / 22 = 7]</span><br>
                            &there4; r<sup>2</sup> = (7 &times; 7) / 4<br>
                            &there4; r<sup>2</sup> = 49 / 4<br>
                            બંને બાજુ વર્ગમૂળ લેતાં:<br>
                            &there4; r = &radic;(49 / 4)<br>
                            &there4; r = 7 / 2<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; ત્રિજ્યા (r) = 3.5 સેમી</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.2 - પ્રશ્ન 7",
                "marks": 3,
                "question": "ચંદ્રનો વ્યાસ પૃથ્વીના વ્યાસના આશરે ચોથા ભાગ જેટલો છે. તેમની વક્ર સપાટીના ક્ષેત્રફળોનો ગુણોત્તર શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="70" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            <text x="100" y="100" fill="#0284c7" font-weight="bold" font-size="16" text-anchor="middle">પૃથ્વી</text>
                            <line x1="30" y1="100" x2="170" y2="100" stroke="#0f172a" stroke-width="2" stroke-dasharray="4,4"/>
                            <text x="100" y="115" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">વ્યાસ: d</text>
                            
                            <text x="200" y="105" fill="#0f172a" font-size="20" font-weight="bold">&rarr;</text>
                            
                            <circle cx="270" cy="100" r="17.5" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
                            <text x="270" y="70" fill="#475569" font-weight="bold" font-size="14" text-anchor="middle">ચંદ્ર</text>
                            <line x1="252.5" y1="100" x2="287.5" y2="100" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="2,2"/>
                            <text x="270" y="115" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">d / 4</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            ધારો કે પૃથ્વીનો વ્યાસ = <b>d</b> છે.<br>
                            તેથી, પૃથ્વીની ત્રિજ્યા (r<sub>e</sub>) = <b>d / 2</b> થાય.<br><br>
                            
                            રકમ મુજબ ચંદ્રનો વ્યાસ એ પૃથ્વીના વ્યાસથી ચોથા ભાગનો છે.<br>
                            તેથી, ચંદ્રનો વ્યાસ = <b>d / 4</b><br>
                            આથી, ચંદ્રની ત્રિજ્યા (r<sub>m</sub>) = (d / 4) / 2 = <b>d / 8</b> થાય.<br><br>
                            
                            હવે ક્ષેત્રફળનો ગુણોત્તર = (ચંદ્રનું ક્ષેત્રફળ) / (પૃથ્વીનું ક્ષેત્રફળ)<br>
                            ગુણોત્તર = (4&pi;r<sub>m</sub><sup>2</sup>) / (4&pi;r<sub>e</sub><sup>2</sup>)<br>
                            અહીં 4&pi; ઉડી જશે.<br>
                            &there4; ગુણોત્તર = (r<sub>m</sub> / r<sub>e</sub>)<sup>2</sup><br>
                            &there4; ગુણોત્તર = [ (d / 8) / (d / 2) ]<sup>2</sup><br>
                            &there4; ગુણોત્તર = [ (d &times; 2) / (8 &times; d) ]<sup>2</sup><br>
                            <span style='color:#64748b; font-size:12px;'>[d અને d ઉડી જશે, 2/8 એટલે 1/4]</span><br>
                            &there4; ગુણોત્તર = (1 / 4)<sup>2</sup><br>
                            &there4; ગુણોત્તર = 1 / 16<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; ક્ષેત્રફળોનો ગુણોત્તર = 1 : 16</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>ગુણોત્તરના દાખલામાં ત્રિજ્યાને બદલે સીધો વ્યાસનો ગુણોત્તર લેશો તો પણ જવાબ એ જ આવશે! અહીં ચંદ્ર અને પૃથ્વીના વ્યાસનો ગુણોત્તર 1:4 છે. ક્ષેત્રફળ પૂછ્યું છે, તો સીધો જ તેનો વર્ગ (Square) કરી દો. 1 નો વર્ગ 1 અને 4 નો વર્ગ 16. સીધો જવાબ <b>1:16</b> તૈયાર!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.2 - પ્રશ્ન 8",
                "marks": 3,
                "question": "એક અર્ધગોળાકાર વાટકો 0.25 સેમી જાડા સ્ટીલનો બનેલો છે. વાટકાની અંદરની ત્રિજ્યા 5 સેમી છે. વાટકાની બહારની વક્ર સપાટીનું ક્ષેત્રફળ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 50 80 A 100 100 0 0 0 250 80" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
                            <path d="M 60 80 A 90 90 0 0 0 240 80" fill="#ffffff" stroke="#475569" stroke-width="2"/>
                            
                            <ellipse cx="150" cy="80" rx="100" ry="25" fill="none" stroke="#475569" stroke-width="2"/>
                            <ellipse cx="150" cy="80" rx="90" ry="20" fill="none" stroke="#475569" stroke-width="2"/>
                            
                            <path d="M 50 80 A 100 25 0 0 0 250 80 A 90 20 0 0 1 50 80 Z" fill="#94a3b8"/>
                            <path d="M 50 80 A 100 25 0 0 1 250 80 A 90 20 0 0 0 50 80 Z" fill="#e2e8f0"/>
                            
                            <circle cx="150" cy="80" r="3" fill="#be123c"/>
                            
                            <line x1="150" y1="80" x2="240" y2="80" stroke="#be123c" stroke-width="2"/>
                            <text x="175" y="75" fill="#be123c" font-weight="bold" font-size="12">r = 5</text>
                            
                            <line x1="240" y1="80" x2="250" y2="80" stroke="#ea580c" stroke-width="4"/>
                            <text x="255" y="75" fill="#ea580c" font-weight="bold" font-size="12">0.25 (જાડાઈ)</text>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#475569; font-size:13px;'>બહારની ત્રિજ્યા (R) = અંદરની ત્રિજ્યા (r) + જાડાઈ</p>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            વાટકાની અંદરની ત્રિજ્યા (r) = 5 સેમી<br>
                            સ્ટીલની જાડાઈ = 0.25 સેમી<br><br>
                            
                            આપણે બહારની વક્ર સપાટીનું ક્ષેત્રફળ શોધવાનું છે, તેથી આપણે <b>બહારની ત્રિજ્યા (R)</b> લેવી પડશે.<br>
                            બહારની ત્રિજ્યા (R) = અંદરની ત્રિજ્યા + જાડાઈ<br>
                            &there4; R = 5 + 0.25 = <b>5.25 સેમી</b><br><br>
                            
                            બહારની વક્ર સપાટીનું ક્ષેત્રફળ (અર્ધગોલક) = <b>2&pi;R<sup>2</sup></b><br>
                            = 2 &times; (22 / 7) &times; 5.25 &times; 5.25<br>
                            <span style='color:#64748b; font-size:12px;'>[5.25 ને 525/100 લખીશું]</span><br>
                            = 2 &times; (22 / 7) &times; (525 / 100) &times; (525 / 100)<br>
                            = 44 &times; (75 / 100) &times; 5.25<br>
                            = 44 &times; 0.75 &times; 5.25<br>
                            = 33 &times; 5.25<br>
                            <b style='color:#be123c; font-size:18px;'>= 173.25 સેમી<sup>2</sup></b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.2 - પ્રશ્ન 9",
                "marks": 5,
                "question": "એક લંબવૃત્તીય નળાકારમાં r ત્રિજ્યાવાળો એક ગોલક બરાબર બંધબેસતો આવેલો છે. તો શોધો:<br>(i) ગોલકની વક્ર સપાટીનું ક્ષેત્રફળ<br>(ii) નળાકારની વક્ર સપાટીનું ક્ષેત્રફળ<br>(iii) (i) અને (ii) માં મળતા ક્ષેત્રફળોનો ગુણોત્તર", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 250" style="width:100%; max-width:300px;" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="150" cy="40" rx="80" ry="20" fill="none" stroke="#0284c7" stroke-width="2"/>
                            <ellipse cx="150" cy="200" rx="80" ry="20" fill="none" stroke="#0284c7" stroke-width="2"/>
                            <line x1="70" y1="40" x2="70" y2="200" stroke="#0284c7" stroke-width="2"/>
                            <line x1="230" y1="40" x2="230" y2="200" stroke="#0284c7" stroke-width="2"/>
                            
                            <circle cx="150" cy="120" r="80" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" fill-opacity="0.7"/>
                            <ellipse cx="150" cy="120" rx="80" ry="25" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,4"/>
                            
                            <circle cx="150" cy="120" r="4" fill="#be123c"/>
                            
                            <line x1="150" y1="120" x2="230" y2="120" stroke="#be123c" stroke-width="2"/>
                            <text x="180" y="110" fill="#be123c" font-weight="bold">r</text>
                            
                            <line x1="260" y1="40" x2="260" y2="200" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow93)" marker-end="url(#arrow93)"/>
                            <text x="270" y="125" fill="#0f172a" font-weight="bold">h = 2r</text>
                            
                            <defs>
                                <marker id="arrow93" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                                    <path d="M0,0 L0,8 L8,4 z" fill="#0f172a" />
                                </marker>
                            </defs>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#64748b; font-size:13px;'>ગોલક બરાબર બંધબેસતો હોવાથી નળાકારની ઊંચાઈ એ ગોલકના વ્યાસ (2r) જેટલી થાય.</p>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            આકૃતિ પરથી સ્પષ્ટ છે કે ગોલક નળાકારમાં બરાબર બંધબેસતો હોવાથી:<br>
                            નળાકારની ત્રિજ્યા = ગોલકની ત્રિજ્યા = <b>r</b><br>
                            નળાકારની ઊંચાઈ (h) = ગોલકનો વ્યાસ = <b>2r</b><br><br>
                            
                            <b>(i) ગોલકની વક્ર સપાટીનું ક્ષેત્રફળ:</b><br>
                            ગોલકની ત્રિજ્યા r હોવાથી, તેનું ક્ષેત્રફળ = <b style='color:#be123c; font-size:16px;'>4&pi;r<sup>2</sup></b><br><br>
                            
                            <b>(ii) નળાકારની વક્ર સપાટીનું ક્ષેત્રફળ:</b><br>
                            નળાકારની વક્ર સપાટીનું સૂત્ર = 2&pi;rh<br>
                            અહીં h ની જગ્યાએ 2r મૂકતાં:<br>
                            = 2&pi;r(2r)<br>
                            = <b style='color:#16a34a; font-size:16px;'>4&pi;r<sup>2</sup></b><br><br>
                            
                            <b>(iii) બંને ક્ષેત્રફળોનો ગુણોત્તર:</b><br>
                            ગુણોત્તર = (ગોલકનું ક્ષેત્રફળ) / (નળાકારનું ક્ષેત્રફળ)<br>
                            = 4&pi;r<sup>2</sup> / 4&pi;r<sup>2</sup><br>
                            = 1 / 1<br>
                            <b style='color:#ea580c; font-size:18px;'>&there4; ગુણોત્તર = 1 : 1</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>મહાન ગણિતશાસ્ત્રી આર્કિમિડીઝે પણ આજ સાબિત કર્યું હતું! જો કોઈ નળાકારમાં ગોળો બરાબર ફિટ બેસાડવામાં આવે, તો <b>બંનેની વક્ર સપાટીઓનું ક્ષેત્રફળ હંમેશા સમાન જ થાય છે</b>. તેથી તેમનો ગુણોત્તર હંમેશા <b>1:1</b> જ રહે. આ ફેક્ટ સીધો જ MCQ માં પૂછાઈ શકે છે!</p>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 11.3 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નીચે આપેલા લંબવૃત્તીય શંકુનું ઘનફળ શોધો:<br>(i) ત્રિજ્યા 6 સેમી, ઊંચાઈ 7 સેમી<br>(ii) ત્રિજ્યા 3.5 સેમી, ઊંચાઈ 12 સેમી", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 250" style="width:100%; max-width:250px;" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="150" cy="180" rx="80" ry="25" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
                            
                            <path d="M 70 180 L 150 30 L 230 180 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            
                            <line x1="150" y1="30" x2="150" y2="180" stroke="#be123c" stroke-width="2"/>
                            <text x="135" y="110" fill="#be123c" font-weight="bold">h</text>
                            
                            <line x1="150" y1="180" x2="230" y2="180" stroke="#16a34a" stroke-width="2"/>
                            <text x="180" y="175" fill="#16a34a" font-weight="bold">r</text>
                            
                            <circle cx="150" cy="180" r="3" fill="#0f172a"/>
                            <text x="145" y="140" fill="#0369a1" font-weight="bold" font-size="14">ઘનફળ (V)</text>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#0f172a; font-weight:bold; font-size:14px;'>શંકુનું ઘનફળ (V) = (1/3) &pi;r&sup2;h</p>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px; min-width:300px;'>
                            <h4 style='color:#14532d; margin:0 0 8px 0;'>(i) r = 6 સેમી, h = 7 સેમી</h4>
                            <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                                શંકુનું ઘનફળ = (1 / 3) &times; &pi; &times; r<sup>2</sup> &times; h<br>
                                = (1 / 3) &times; (22 / 7) &times; 6 &times; 6 &times; 7<br>
                                <span style='color:#64748b; font-size:12px;'>[અહીં 7 અને 7 ઉડી જશે, તથા 6 / 3 = 2 થશે]</span><br>
                                = 22 &times; 2 &times; 6<br>
                                = 44 &times; 6<br>
                                <b style='color:#15803d; font-size:16px;'>= 264 સેમી<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; min-width:300px;'>
                            <h4 style='color:#881337; margin:0 0 8px 0;'>(ii) r = 3.5 સેમી, h = 12 સેમી</h4>
                            <div style='font-size:14px; color:#9f1239; line-height:1.8; margin-left:10px;'>
                                <span style='color:#64748b; font-size:12px;'>[3.5 ને 35/10 અથવા 7/2 લખીશું]</span><br>
                                શંકુનું ઘનફળ = (1 / 3) &times; (22 / 7) &times; (7 / 2) &times; (7 / 2) &times; 12<br>
                                <span style='color:#64748b; font-size:12px;'>[છેદ ઉડાડતાં: 12 / 3 = 4, 7 અને 7 કેન્સલ]</span><br>
                                = 22 &times; (7 / 4) &times; 4<br>
                                <span style='color:#64748b; font-size:12px;'>[અહીં 4 અને 4 ઉડી જશે]</span><br>
                                = 22 &times; 7<br>
                                <b style='color:#be123c; font-size:16px;'>= 154 સેમી<sup>3</sup></b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>ઘનફળના દાખલામાં પોઈન્ટ વાળી રકમ આવે એટલે <b>અપૂર્ણાંક (Fraction)</b> વાપરી જ લેવાનો! 3.5 એટલે 7 ના અડધા (7/2). સૂત્રમાં 7/2 મૂકો એટલે 22 અને 12 સાથે આરામથી છેદ ઉડી જશે અને ગુણાકાર સાવ સહેલો બની જશે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.3 - પ્રશ્ન 2",
                "marks": 4,
                "question": "નીચેના શંકુ આકારના વાસણની ક્ષમતા લિટરમાં શોધો:<br>(i) ત્રિજ્યા 7 સેમી, ત્રાંસી ઊંચાઈ 25 સેમી<br>(ii) ઊંચાઈ 12 સેમી, ત્રાંસી ઊંચાઈ 13 સેમી", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#fefce8; padding:10px; border-radius:5px; border-left:4px solid #ca8a04; margin-bottom:15px;'>
                        <p style='margin:0; font-size:14px; color:#a16207;'><b>ખાસ નોંધ:</b> ઘનફળ શોધવા માટે આપણે <b>સીધી ઊંચાઈ (h)</b> જોઈએ, જ્યારે અહીં ત્રાંસી ઊંચાઈ (l) આપેલી છે. તેથી પહેલા <b>પાયથાગોરસનો પ્રમેય (h&sup2; + r&sup2; = l&sup2;)</b> વાપરવો પડશે. વળી, <b>1000 સેમી<sup>3</sup> = 1 લિટર</b> થાય.</p>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:20px; overflow-x:auto;'>
                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(i) r = 7 સેમી, l = 25 સેમી</h4>
                            <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                                <b>પગલું 1: ઊંચાઈ (h) શોધવી</b><br>
                                h<sup>2</sup> = l<sup>2</sup> - r<sup>2</sup><br>
                                &there4; h<sup>2</sup> = (25)<sup>2</sup> - (7)<sup>2</sup><br>
                                &there4; h<sup>2</sup> = 625 - 49 = 576<br>
                                &there4; <b>h = &radic;576 = 24 સેમી</b><br><br>
                                
                                <b>પગલું 2: ઘનફળ (ક્ષમતા) શોધવી</b><br>
                                ઘનફળ = (1 / 3) &pi;r<sup>2</sup>h<br>
                                = (1 / 3) &times; (22 / 7) &times; 7 &times; 7 &times; 24<br>
                                <span style='color:#64748b; font-size:12px;'>[7 અને 7 ઉડી જશે, 24 / 3 = 8]</span><br>
                                = 22 &times; 7 &times; 8<br>
                                = 154 &times; 8 = <b>1232 સેમી<sup>3</sup></b><br><br>
                                
                                <b>પગલું 3: લિટરમાં રૂપાંતર</b><br>
                                ક્ષમતા (લિટરમાં) = 1232 / 1000<br>
                                <b style='color:#0284c7; font-size:16px;'>= 1.232 લિટર</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#881337; margin:0 0 8px 0;'>(ii) h = 12 સેમી, l = 13 સેમી</h4>
                            <div style='font-size:14px; color:#9f1239; line-height:1.8; margin-left:10px;'>
                                <b>પગલું 1: ત્રિજ્યા (r) શોધવી</b><br>
                                r<sup>2</sup> = l<sup>2</sup> - h<sup>2</sup><br>
                                &there4; r<sup>2</sup> = (13)<sup>2</sup> - (12)<sup>2</sup><br>
                                &there4; r<sup>2</sup> = 169 - 144 = 25<br>
                                &there4; <b>r = &radic;25 = 5 સેમી</b><br><br>
                                
                                <b>પગલું 2: ઘનફળ (ક્ષમતા) શોધવી</b><br>
                                ઘનફળ = (1 / 3) &pi;r<sup>2</sup>h<br>
                                = (1 / 3) &times; (22 / 7) &times; 5 &times; 5 &times; 12<br>
                                <span style='color:#64748b; font-size:12px;'>[12 / 3 = 4]</span><br>
                                = (22 / 7) &times; 25 &times; 4<br>
                                = 2200 / 7 સેમી<sup>3</sup><br><br>
                                
                                <b>પગલું 3: લિટરમાં રૂપાંતર</b><br>
                                ક્ષમતા (લિટરમાં) = (2200 / 7) / 1000<br>
                                = 2200 / 7000<br>
                                <span style='color:#64748b; font-size:12px;'>[મીંડા ઉડાડતાં અને 2 વડે ભાગતાં]</span><br>
                                <b style='color:#be123c; font-size:16px;'>= 11 / 35 લિટર</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.3 - પ્રશ્ન 3",
                "marks": 3,
                "question": "એક શંકુની ઊંચાઈ 15 સેમી છે. જો તેનું ઘનફળ 1570 સેમી³ હોય, તો તેના પાયાની ત્રિજ્યા શોધો. (π = 3.14 લો)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            ઊંચાઈ (h) = 15 સેમી<br>
                            ઘનફળ (V) = 1570 સેમી<sup>3</sup><br>
                            &pi; = 3.14 લેવાનું છે.<br><br>
                            
                            શંકુનું ઘનફળ = (1 / 3) &pi;r<sup>2</sup>h<br>
                            &there4; 1570 = (1 / 3) &times; 3.14 &times; r<sup>2</sup> &times; 15<br>
                            <span style='color:#64748b; font-size:12px;'>[15 / 3 = 5]</span><br>
                            &there4; 1570 = 3.14 &times; 5 &times; r<sup>2</sup><br>
                            &there4; 1570 = 15.70 &times; r<sup>2</sup><br><br>
                            
                            r<sup>2</sup> ને કર્તા બનાવતાં:<br>
                            &there4; r<sup>2</sup> = 1570 / 15.7<br>
                            &there4; r<sup>2</sup> = (1570 &times; 10) / 157<br>
                            &there4; r<sup>2</sup> = 10 &times; 10 = 100<br><br>
                            
                            બંને બાજુ વર્ગમૂળ લેતાં:<br>
                            &there4; r = &radic;100<br>
                            <b style='color:#15803d; font-size:18px;'>&there4; પાયાની ત્રિજ્યા (r) = 10 સેમી</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>જ્યારે પણ રકમમાં ઘનફળ <b>1570, 314 અથવા 4710</b> જેવું કંઈક આપે, ત્યારે તરત જ સમજી લેવું કે તેમાં <b>&pi; = 3.14</b> નો કમાલ છે! કારણ કે 1570 એ 3.14 ના સીધા ગુણકમાં (314 ના અડધા 157) આવે છે. છેદ ઉડાડવામાં આ હિન્ટ બહુ જ કામ લાગશે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.3 - પ્રશ્ન 4",
                "marks": 3,
                "question": "જો 9 સેમી ઊંચાઈવાળા શંકુનું ઘનફળ 48π સેમી³ હોય, તો તેના પાયાનો વ્યાસ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            ઊંચાઈ (h) = 9 સેમી<br>
                            ઘનફળ (V) = 48&pi; સેમી<sup>3</sup><br><br>
                            
                            શંકુનું ઘનફળ = (1 / 3) &pi;r<sup>2</sup>h<br>
                            &there4; 48&pi; = (1 / 3) &times; &pi; &times; r<sup>2</sup> &times; 9<br><br>
                            
                            <span style='color:#64748b; font-size:12px;'>[બંને બાજુથી &pi; ઉડી જશે, અને જમણી બાજુ 9 / 3 = 3 થશે]</span><br>
                            &there4; 48 = 3 &times; r<sup>2</sup><br>
                            &there4; r<sup>2</sup> = 48 / 3<br>
                            &there4; r<sup>2</sup> = 16<br><br>
                            
                            વર્ગમૂળ લેતાં:<br>
                            &there4; r = &radic;16 = <b>4 સેમી</b> (ત્રિજ્યા)<br><br>
                            
                            આપણે પાયાનો વ્યાસ (d) શોધવાનો છે.<br>
                            વ્યાસ (d) = 2 &times; ત્રિજ્યા (r)<br>
                            &there4; d = 2 &times; 4<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; પાયાનો વ્યાસ = 8 સેમી</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.3 - પ્રશ્ન 5",
                "marks": 3,
                "question": "3.5 મીટર વ્યાસવાળા શંકુ આકારના ખાડાની ઊંડાઈ 12 મીટર છે. તેની ક્ષમતા કિલોલિટરમાં કેટલી થાય?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:250px;" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="150" cy="40" rx="80" ry="20" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
                            
                            <path d="M 70 40 L 150 180 L 230 40 Z" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
                            
                            <line x1="150" y1="40" x2="150" y2="180" stroke="#be123c" stroke-width="2" stroke-dasharray="4,4"/>
                            <text x="130" y="110" fill="#be123c" font-weight="bold">h=12</text>
                            
                            <line x1="70" y1="40" x2="230" y2="40" stroke="#16a34a" stroke-width="2"/>
                            <text x="120" y="30" fill="#16a34a" font-weight="bold">d = 3.5 m</text>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#a16207; font-size:13px;'>નોંધ: 1 m&sup3; = 1 કિલોલિટર (kL) થાય.</p>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            ખાડાનો વ્યાસ (d) = 3.5 મી.<br>
                            &there4; ત્રિજ્યા (r) = 3.5 / 2 = 35 / 20 = <b>7 / 4 મીટર</b><br>
                            ઊંડાઈ એટલે કે ઊંચાઈ (h) = <b>12 મીટર</b><br><br>
                            
                            ખાડાની ક્ષમતા (ઘનફળ) = (1 / 3) &pi;r<sup>2</sup>h<br>
                            = (1 / 3) &times; (22 / 7) &times; (7 / 4) &times; (7 / 4) &times; 12<br>
                            <span style='color:#64748b; font-size:12px;'>[અહીં 7 અને 7 ઉડી જશે. 12 અને 3 નો છેદ ઉડતા 4 વધશે. આ 4 છેદના એક 4 સાથે ઉડી જશે.]</span><br>
                            = 22 &times; (7 / 4)<br>
                            <span style='color:#64748b; font-size:12px;'>[22 અને 4 ના અડધા કરતા]</span><br>
                            = 11 &times; 7 / 2<br>
                            = 77 / 2<br>
                            = <b>38.5 મીટર<sup>3</sup></b><br><br>
                            
                            આપણે જાણીએ છીએ કે <b>1 મીટર<sup>3</sup> = 1 કિલોલિટર (kL)</b> થાય છે.<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; ખાડાની ક્ષમતા = 38.5 કિલોલિટર</b>
                        </div>
                    </div>
                </div>`
            },
                 { 
                "questionNumber": "સ્વાધ્યાય 11.3 - પ્રશ્ન 6",
                "marks": 4,
                "question": "એક લંબવૃત્તીય શંકુનું ઘનફળ 9856 સેમી³ છે. જો તેના પાયાનો વ્યાસ 28 સેમી હોય, તો શોધો:<br>(i) શંકુની ઊંચાઈ<br>(ii) શંકુની ત્રાંસી ઊંચાઈ<br>(iii) શંકુની વક્ર સપાટીનું ક્ષેત્રફળ", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:20px; overflow-x:auto;'>
                        
                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#14532d; margin:0 0 8px 0;'>(i) શંકુની ઊંચાઈ (h):</h4>
                            <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                                વ્યાસ = 28 સેમી &there4; ત્રિજ્યા (r) = <b>14 સેમી</b><br>
                                ઘનફળ (V) = 9856 સેમી<sup>3</sup><br><br>
                                
                                (1 / 3) &pi;r<sup>2</sup>h = 9856<br>
                                &there4; (1 / 3) &times; (22 / 7) &times; 14 &times; 14 &times; h = 9856<br>
                                <span style='color:#64748b; font-size:12px;'>[14 / 7 = 2]</span><br>
                                &there4; (1 / 3) &times; 22 &times; 2 &times; 14 &times; h = 9856<br>
                                &there4; 616 &times; h / 3 = 9856<br>
                                &there4; h = (9856 &times; 3) / 616<br>
                                <span style='color:#64748b; font-size:12px;'>[9856 ભાગ્યા 616 = 16]</span><br>
                                &there4; h = 16 &times; 3<br>
                                <b style='color:#15803d; font-size:16px;'>&there4; ઊંચાઈ (h) = 48 સેમી</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#881337; margin:0 0 8px 0;'>(ii) શંકુની ત્રાંસી ઊંચાઈ (l):</h4>
                            <div style='font-size:14px; color:#9f1239; line-height:1.8; margin-left:10px;'>
                                પાયથાગોરસના પ્રમેય મુજબ: l<sup>2</sup> = r<sup>2</sup> + h<sup>2</sup><br>
                                &there4; l<sup>2</sup> = (14)<sup>2</sup> + (48)<sup>2</sup><br>
                                &there4; l<sup>2</sup> = 196 + 2304<br>
                                &there4; l<sup>2</sup> = 2500<br>
                                &there4; l = &radic;2500<br>
                                <b style='color:#be123c; font-size:16px;'>&there4; ત્રાંસી ઊંચાઈ (l) = 50 સેમી</b>
                            </div>
                        </div>
                        
                        <div style='background-color:#eff6ff; padding:12px; border-left:4px solid #1d4ed8; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(iii) વક્ર સપાટીનું ક્ષેત્રફળ (CSA):</h4>
                            <div style='font-size:14px; color:#1d4ed8; line-height:1.8; margin-left:10px;'>
                                શંકુની વક્ર સપાટી = <b>&pi;rl</b><br>
                                = (22 / 7) &times; 14 &times; 50<br>
                                <span style='color:#64748b; font-size:12px;'>[14 / 7 = 2]</span><br>
                                = 22 &times; 2 &times; 50<br>
                                = 44 &times; 50<br>
                                <b style='color:#1d4ed8; font-size:16px;'>= 2200 સેમી<sup>2</sup></b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.3 - પ્રશ્ન 7",
                "marks": 3,
                "question": "કાટકોણ ત્રિકોણ ABC માં બાજુઓનાં માપ 5 સેમી, 12 સેમી અને 13 સેમી છે. તેને 12 સેમી લંબાઈવાળી બાજુની આસપાસ પરિભ્રમણ કરાવવામાં આવે છે, તો તેનાથી બનતા ઘન આકારનું ઘનફળ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 250" style="width:100%; max-width:300px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="175" y1="20" x2="175" y2="180" stroke="#be123c" stroke-width="3" stroke-dasharray="5,5"/>
                            <text x="185" y="100" fill="#be123c" font-weight="bold">h = 12 cm</text>
                            
                            <polygon points="175,20 175,180 255,180" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
                            
                            <text x="210" y="195" fill="#16a34a" font-weight="bold">r = 5 cm</text>
                            
                            <text x="225" y="100" fill="#ea580c" font-weight="bold">13 cm</text>
                            
                            <ellipse cx="175" cy="180" rx="80" ry="25" fill="none" stroke="#94a3b8" stroke-width="2"/>
                            <path d="M 95 180 L 175 20" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
                            
                            <text x="175" y="230" fill="#0f172a" font-weight="bold" font-size="14" text-anchor="middle">બનતો આકાર: શંકુ</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            જ્યારે કાટકોણ ત્રિકોણને તેની કોઈ એક કાટખૂણો બનાવતી બાજુની આસપાસ ફેરવવામાં (પરિભ્રમણ) આવે, ત્યારે <b>શંકુ (Cone)</b> આકાર બને છે.<br><br>
                            
                            અહીં, 12 સેમી વાળી બાજુની આસપાસ ફેરવવાનો છે, તેથી તે તેની <b>ઊંચાઈ (h)</b> બનશે.<br>
                            અને બીજી બાજુ 5 સેમી છે, તે તેનો <b>પાયો (ત્રિજ્યા r)</b> બનશે. (13 સેમી એ કર્ણ એટલે કે ત્રાંસી ઊંચાઈ l બને).<br>
                            &there4; h = 12 સેમી, r = 5 સેમી.<br><br>
                            
                            શંકુનું ઘનફળ = (1 / 3) &pi;r<sup>2</sup>h<br>
                            = (1 / 3) &times; &pi; &times; 5 &times; 5 &times; 12<br>
                            <span style='color:#64748b; font-size:12px;'>[12 / 3 = 4]</span><br>
                            = &pi; &times; 25 &times; 4<br>
                            <b style='color:#be123c; font-size:18px;'>= 100&pi; સેમી<sup>3</sup></b><br>
                            <span style='color:#64748b; font-size:12px;'>(નોંધ: અહીં &pi; ની કિંમત મૂક્યા વગર જવાબ લખવો વધુ યોગ્ય છે, કારણ કે પછીના પ્રશ્નમાં ગુણોત્તર લેવાનો છે).</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.3 - પ્રશ્ન 8",
                "marks": 3,
                "question": "જો પ્રશ્ન 7 માં આપેલા ત્રિકોણ ABC ને 5 સેમી લંબાઈવાળી બાજુની આસપાસ પરિભ્રમણ કરાવવામાં આવે, તો બનતા ઘન આકારનું ઘનફળ શોધો. પ્રશ્ન 7 અને 8 માં મળતા બે ઘનફળનો ગુણોત્તર પણ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>પગલું 1: નવા શંકુનું ઘનફળ</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            આ વખતે ત્રિકોણને <b>5 સેમી</b> વાળી બાજુની આસપાસ ફેરવવામાં આવે છે.<br>
                            તેથી, <b>ઊંચાઈ (h) = 5 સેમી</b> થશે અને <b>ત્રિજ્યા (r) = 12 સેમી</b> થશે.<br><br>
                            
                            નવા શંકુનું ઘનફળ = (1 / 3) &pi;r<sup>2</sup>h<br>
                            = (1 / 3) &times; &pi; &times; 12 &times; 12 &times; 5<br>
                            <span style='color:#64748b; font-size:12px;'>[12 / 3 = 4]</span><br>
                            = &pi; &times; 4 &times; 12 &times; 5<br>
                            = &pi; &times; 240<br>
                            <b style='color:#15803d; font-size:18px;'>= 240&pi; સેમી<sup>3</sup></b>
                        </div>
                    </div>
                    
                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>પગલું 2: બંને ઘનફળનો ગુણોત્તર</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            પ્રશ્ન 7 નું ઘનફળ (V1) = 100&pi; સેમી<sup>3</sup><br>
                            પ્રશ્ન 8 નું ઘનફળ (V2) = 240&pi; સેમી<sup>3</sup><br><br>
                            
                            ગુણોત્તર = V1 / V2<br>
                            = 100&pi; / 240&pi;<br>
                            <span style='color:#64748b; font-size:12px;'>[&pi; અને મીંડા ઉડી જશે]</span><br>
                            = 10 / 24<br>
                            <span style='color:#64748b; font-size:12px;'>[બે વડે ભાગતાં: 5/12]</span><br>
                            = 5 / 12<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; ગુણોત્તર = 5 : 12</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવા દાખલામાં જો ફક્ત ગુણોત્તર જ પૂછ્યો હોય, તો સીધી શોર્ટકટ ટ્રીક વાપરો: <b>"જે બાજુઓની આસપાસ ફેરવ્યું હોય, તેમનો જ ગુણોત્તર લઈ લો!"</b> અહીં પહેલા 12 ની આસપાસ ફેરવ્યું અને પછી 5 ની આસપાસ. પણ જવાબમાં તેનો <b>વ્યસ્ત (ઊલટો) ગુણોત્તર</b> આવે છે, એટલે કે <b>5:12</b>. સીધો MCQ નો જવાબ તૈયાર!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.3 - પ્રશ્ન 9",
                "marks": 4,
                "question": "ઘઉંના એક ઢગલાનો આકાર શંકુ જેવો છે. તેનો વ્યાસ 10.5 મીટર અને ઊંચાઈ 3 મીટર છે. તેનું ઘનફળ શોધો. આ ઢગલાને વરસાદથી બચાવવા માટે કેનવાસથી ઢાંકવાનો છે. તો જરૂરી કેનવાસનું ક્ષેત્રફળ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ભાગ 1: ઘઉંના ઢગલાનું ઘનફળ</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            વ્યાસ (d) = 10.5 મી. &there4; ત્રિજ્યા (r) = 10.5 / 2 = <b>5.25 મી. (અથવા 21/4)</b><br>
                            ઊંચાઈ (h) = <b>3 મી.</b><br><br>
                            
                            ઘનફળ = (1 / 3) &pi;r<sup>2</sup>h<br>
                            = (1 / 3) &times; (22 / 7) &times; (21 / 4) &times; (21 / 4) &times; 3<br>
                            <span style='color:#64748b; font-size:12px;'>[અહીં 3 અને 3 ઉડી જશે. 21/7 = 3 થશે]</span><br>
                            = 22 &times; 3 &times; 21 / 16<br>
                            = 1386 / 16<br>
                            <b style='color:#0284c7; font-size:16px;'>= 86.625 મીટર<sup>3</sup></b>
                        </div>
                    </div>
                    
                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>ભાગ 2: કેનવાસનું ક્ષેત્રફળ (વક્ર સપાટી)</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            કેનવાસ ઢાંકવા માટે વક્ર સપાટીનું ક્ષેત્રફળ (&pi;rl) શોધવું પડે, જેના માટે ત્રાંસી ઊંચાઈ (l) જોઈશે.<br>
                            l<sup>2</sup> = r<sup>2</sup> + h<sup>2</sup><br>
                            l<sup>2</sup> = (5.25)<sup>2</sup> + (3)<sup>2</sup><br>
                            l<sup>2</sup> = 27.5625 + 9 = 36.5625<br>
                            &there4; l = &radic;36.5625 &approx; <b>6.05 મી.</b> (આશરે)<br><br>
                            
                            કેનવાસનું ક્ષેત્રફળ = &pi;rl<br>
                            = (22 / 7) &times; 5.25 &times; 6.05<br>
                            <span style='color:#64748b; font-size:12px;'>[5.25 / 7 = 0.75]</span><br>
                            = 22 &times; 0.75 &times; 6.05<br>
                            = 16.5 &times; 6.05<br>
                            <b style='color:#be123c; font-size:18px;'>= 99.825 મીટર<sup>2</sup></b>
                        </div>
                    </div>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 11.4 - પ્રશ્ન 1",
                "marks": 3,
                "question": "આપેલી ત્રિજ્યાવાળા ગોલકનું ઘનફળ શોધો:<br>(i) 7 સેમી<br>(ii) 0.63 મીટર", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:250px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="150" cy="100" r="80" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
                            <ellipse cx="150" cy="100" rx="80" ry="30" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <path d="M 70 100 A 80 30 0 0 0 230 100" fill="none" stroke="#0284c7" stroke-width="2"/>
                            
                            <circle cx="150" cy="100" r="4" fill="#be123c"/>
                            <line x1="150" y1="100" x2="230" y2="100" stroke="#be123c" stroke-width="2"/>
                            <text x="180" y="90" fill="#be123c" font-weight="bold">r</text>
                            
                            <text x="145" y="50" fill="#0369a1" font-weight="bold" font-size="14">ઘનફળ (V)</text>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#0f172a; font-weight:bold; font-size:14px;'>ગોલકનું ઘનફળ (V) = (4/3) &pi;r&sup3;</p>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px; min-width:300px;'>
                            <h4 style='color:#14532d; margin:0 0 8px 0;'>(i) r = 7 સેમી</h4>
                            <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                                ગોલકનું ઘનફળ = (4 / 3) &times; &pi; &times; r<sup>3</sup><br>
                                = (4 / 3) &times; (22 / 7) &times; 7 &times; 7 &times; 7<br>
                                <span style='color:#64748b; font-size:12px;'>[એક 7 અને 7 ઉડી જશે]</span><br>
                                = (4 / 3) &times; 22 &times; 49<br>
                                = 88 &times; 49 / 3<br>
                                = 4312 / 3<br>
                                <b style='color:#15803d; font-size:16px;'>= 1437.33 સેમી<sup>3</sup> (આશરે)</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; min-width:300px;'>
                            <h4 style='color:#881337; margin:0 0 8px 0;'>(ii) r = 0.63 મીટર</h4>
                            <div style='font-size:14px; color:#9f1239; line-height:1.8; margin-left:10px;'>
                                <span style='color:#64748b; font-size:12px;'>[0.63 ને 63/100 લખીશું]</span><br>
                                ગોલકનું ઘનફળ = (4 / 3) &times; (22 / 7) &times; (63 / 100) &times; (63 / 100) &times; (63 / 100)<br>
                                <span style='color:#64748b; font-size:12px;'>[છેદ ઉડાડતાં: 7 &times; 3 = 21, અને 63 / 21 = 3]</span><br>
                                = 4 &times; 22 &times; 3 &times; 63 &times; 63 / 1000000<br>
                                = 264 &times; 3969 / 1000000<br>
                                = 1047816 / 1000000<br>
                                <b style='color:#be123c; font-size:16px;'>= 1.05 મીટર<sup>3</sup> (આશરે)</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.4 - પ્રશ્ન 2",
                "marks": 3,
                "question": "આપેલા વ્યાસવાળા નક્કર ગોલક દ્વારા વિસ્થાપિત થતા પાણીનું કદ શોધો:<br>(i) 28 સેમી<br>(ii) 0.21 મીટર", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#fefce8; padding:10px; border-radius:5px; border-left:4px solid #ca8a04; margin-bottom:15px;'>
                        <p style='margin:0; font-size:14px; color:#a16207;'><b>નોંધ:</b> આર્કિમિડીઝના સિદ્ધાંત મુજબ, જ્યારે કોઈ નક્કર વસ્તુને પાણીમાં ડુબાડવામાં આવે, ત્યારે તે પોતાના <b>ઘનફળ જેટલું જ પાણી વિસ્થાપિત (બહાર કાઢે)</b> છે. એટલે આપણે માત્ર ગોલકનું ઘનફળ જ શોધવાનું છે.</p>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:20px; overflow-x:auto;'>
                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(i) વ્યાસ (d) = 28 સેમી</h4>
                            <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                                ત્રિજ્યા (r) = 28 / 2 = <b>14 સેમી</b><br><br>
                                વિસ્થાપિત પાણીનું કદ = ગોલકનું ઘનફળ = (4 / 3) &pi;r<sup>3</sup><br>
                                = (4 / 3) &times; (22 / 7) &times; 14 &times; 14 &times; 14<br>
                                <span style='color:#64748b; font-size:12px;'>[14 / 7 = 2]</span><br>
                                = (4 / 3) &times; 22 &times; 2 &times; 196<br>
                                = 176 &times; 196 / 3<br>
                                = 34496 / 3<br>
                                <b style='color:#0284c7; font-size:16px;'>= 11498.66 સેમી<sup>3</sup> (આશરે)</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#881337; margin:0 0 8px 0;'>(ii) વ્યાસ (d) = 0.21 મીટર</h4>
                            <div style='font-size:14px; color:#9f1239; line-height:1.8; margin-left:10px;'>
                                ત્રિજ્યા (r) = 0.21 / 2 = <b>0.105 મીટર (અથવા 105/1000)</b><br><br>
                                વિસ્થાપિત પાણીનું કદ = (4 / 3) &times; (22 / 7) &times; (105 / 1000) &times; (105 / 1000) &times; (105 / 1000)<br>
                                <span style='color:#64748b; font-size:12px;'>[7 &times; 3 = 21, અને 105 / 21 = 5]</span><br>
                                = 4 &times; 22 &times; 5 &times; 105 &times; 105 / 1000000000<br>
                                = 440 &times; 11025 / 1000000000<br>
                                = 4851000 / 1000000000<br>
                                <b style='color:#be123c; font-size:16px;'>= 0.004851 મીટર<sup>3</sup></b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.4 - પ્રશ્ન 3",
                "marks": 3,
                "question": "ધાતુના એક ગોળાનો વ્યાસ 4.2 સેમી છે. જો તેના દ્રવ્યની ઘનતા 8.9 ગ્રામ પ્રતિ સેમી³ હોય, તો તેનું દળ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>પગલું 1: ગોળાનું ઘનફળ શોધવું</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            વ્યાસ = 4.2 સેમી &there4; ત્રિજ્યા (r) = 4.2 / 2 = <b>2.1 સેમી (એટલે કે 21/10)</b><br><br>
                            
                            ગોળાનું ઘનફળ = (4 / 3) &pi;r<sup>3</sup><br>
                            = (4 / 3) &times; (22 / 7) &times; (21 / 10) &times; (21 / 10) &times; (21 / 10)<br>
                            <span style='color:#64748b; font-size:12px;'>[7 &times; 3 = 21, એટલે છેદનો 21 અને અંશનો એક 21 ઉડી જશે]</span><br>
                            = 4 &times; 22 &times; 21 &times; 21 / 1000<br>
                            = 88 &times; 441 / 1000<br>
                            = 38808 / 1000<br>
                            <b style='color:#15803d; font-size:16px;'>= 38.808 સેમી<sup>3</sup></b>
                        </div>
                    </div>
                    
                    <div style='background-color:#eff6ff; padding:12px; border-left:4px solid #1d4ed8; border-radius:5px; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#1e3a8a;'><b>પગલું 2: ગોળાનું દળ (Mass) શોધવું</b></p>
                        <div style='font-size:14px; color:#1d4ed8; line-height:1.8; margin-left:10px;'>
                            દળ = ઘનફળ &times; ઘનતા<br>
                            = 38.808 &times; 8.9<br>
                            <b style='color:#1d4ed8; font-size:18px;'>= 345.39 ગ્રામ (આશરે)</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>વિજ્ઞાનનો નિયમ ગણિતમાં! જ્યારે પણ "દળ" શોધવાનું કહે અને "ઘનતા" આપી હોય, ત્યારે સીધું સમજી જવાનું કે <b>દળ = કદ (ઘનફળ) &times; ઘનતા</b> થાય. એટલે પહેલા માત્ર ઘનફળ શોધી લો અને પછી તેને ઘનતા સાથે ગુણી નાખો!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.4 - પ્રશ્ન 4",
                "marks": 3,
                "question": "ચંદ્રનો વ્યાસ પૃથ્વીના વ્યાસના આશરે ચોથા ભાગ જેટલો છે. પૃથ્વીના ઘનફળના કેટલામા ભાગનું ઘનફળ ચંદ્રનું ઘનફળ થાય?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="70" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            <ellipse cx="100" cy="100" rx="70" ry="25" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <text x="100" y="100" fill="#0284c7" font-weight="bold" font-size="16" text-anchor="middle">પૃથ્વી (r)</text>
                            
                            <text x="200" y="105" fill="#0f172a" font-size="20" font-weight="bold">&rarr;</text>
                            
                            <circle cx="270" cy="100" r="17.5" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
                            <ellipse cx="270" cy="100" rx="17.5" ry="6" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2"/>
                            <text x="270" y="70" fill="#475569" font-weight="bold" font-size="14" text-anchor="middle">ચંદ્ર (r/4)</text>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#64748b; font-size:13px;'>ક્ષેત્રફળનો ગુણોત્તર સ્ક્વેર (Square) માં આવે, જ્યારે ઘનફળનો ગુણોત્તર ક્યુબ (Cube) માં આવે.</p>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            ધારો કે પૃથ્વીની ત્રિજ્યા = <b>r</b> છે.<br>
                            રકમ મુજબ ચંદ્રનો વ્યાસ પૃથ્વી કરતા ચોથા ભાગનો છે, તેથી ત્રિજ્યા પણ ચોથા ભાગની જ થાય.<br>
                            &there4; ચંદ્રની ત્રિજ્યા = <b>r / 4</b><br><br>
                            
                            માંગેલ ભાગ (ગુણોત્તર) = (ચંદ્રનું ઘનફળ) / (પૃથ્વીનું ઘનફળ)<br>
                            = [ (4 / 3) &pi;(r / 4)<sup>3</sup> ] / [ (4 / 3) &pi;(r)<sup>3</sup> ]<br>
                            <span style='color:#64748b; font-size:12px;'>[(4/3)&pi; બંને બાજુથી ઉડી જશે]</span><br>
                            = (r / 4)<sup>3</sup> / (r)<sup>3</sup><br>
                            = (r<sup>3</sup> / 64) / r<sup>3</sup><br>
                            = 1 / 64<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; ચંદ્રનું ઘનફળ પૃથ્વીના ઘનફળના 1/64 માં ભાગનું છે.</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.4 - પ્રશ્ન 5",
                "marks": 3,
                "question": "10.5 સેમી વ્યાસવાળા અર્ધગોળાકાર વાટકામાં કેટલા લિટર દૂધ સમાવી શકાય?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:250px;" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="150" cy="80" rx="90" ry="30" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
                            
                            <path d="M 60 80 A 90 90 0 0 0 240 80 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
                            <ellipse cx="150" cy="80" rx="85" ry="25" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
                            
                            <text x="145" y="140" fill="#a16207" font-weight="bold">ઘનફળ (V)</text>
                            
                            <circle cx="150" cy="80" r="3" fill="#be123c"/>
                            <line x1="150" y1="80" x2="235" y2="80" stroke="#be123c" stroke-width="2" stroke-dasharray="2,2"/>
                            <text x="160" y="70" fill="#be123c" font-weight="bold" font-size="12">d = 10.5</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            વાટકાનો વ્યાસ (d) = 10.5 સેમી<br>
                            &there4; ત્રિજ્યા (r) = 10.5 / 2 = <b>5.25 સેમી (અથવા 21/4 સેમી)</b><br><br>
                            
                            વાટકો અર્ધગોલાકાર છે, તેથી તેમાં સમાઈ શકતા દૂધનું કદ (ઘનફળ) = <b>(2 / 3) &pi;r<sup>3</sup></b><br>
                            = (2 / 3) &times; (22 / 7) &times; (21 / 4) &times; (21 / 4) &times; (21 / 4)<br>
                            <span style='color:#64748b; font-size:12px;'>[છેદ ઉડાડતાં: 7 &times; 3 = 21, જેથી અંશનો એક 21 ઉડી જશે. 2 અને 22 થી છેદના 4 ઉડશે]</span><br>
                            = 11 &times; 21 &times; 21 / (2 &times; 4)<br>
                            = 11 &times; 441 / 8<br>
                            = 4851 / 8<br>
                            = <b>606.375 સેમી<sup>3</sup></b> (આશરે)<br><br>
                            
                            હવે તેને લિટરમાં ફેરવવા માટે 1000 વડે ભાગીશું. (કારણ કે 1000 સેમી<sup>3</sup> = 1 લિટર)<br>
                            દૂધ (લિટરમાં) = 606.375 / 1000<br>
                            <b style='color:#15803d; font-size:18px;'>= 0.303 લિટર (આશરે)</b>
                        </div>
                    </div>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 11.4 - પ્રશ્ન 6",
                "marks": 3,
                "question": "એક અર્ધગોળાકાર ટાંકી 1 સેમી જાડા લોખંડના પતરામાંથી બનાવેલી છે. જો તેની અંદરની ત્રિજ્યા 1 મીટર હોય, તો આ ટાંકીમાં વપરાયેલા લોખંડનું ઘનફળ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 50 80 A 100 100 0 0 0 250 80" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
                            <path d="M 70 80 A 80 80 0 0 0 230 80" fill="#ffffff" stroke="#334155" stroke-width="2"/>
                            
                            <ellipse cx="150" cy="80" rx="100" ry="25" fill="none" stroke="#334155" stroke-width="2"/>
                            <ellipse cx="150" cy="80" rx="80" ry="20" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
                            
                            <path d="M 50 80 A 100 25 0 0 0 250 80 A 80 20 0 0 1 50 80 Z" fill="#64748b"/>
                            
                            <circle cx="150" cy="80" r="3" fill="#be123c"/>
                            
                            <line x1="150" y1="80" x2="230" y2="80" stroke="#be123c" stroke-width="2"/>
                            <text x="180" y="70" fill="#be123c" font-weight="bold" font-size="12">r = 1 m</text>
                            
                            <line x1="230" y1="80" x2="250" y2="80" stroke="#ea580c" stroke-width="3"/>
                            <text x="255" y="85" fill="#ea580c" font-weight="bold" font-size="12">જાડાઈ = 1 cm</text>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#475569; font-size:13px;'>લોખંડનું ઘનફળ = બહારનું ઘનફળ - અંદરનું ઘનફળ</p>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            અંદરની ત્રિજ્યા (r) = <b>1 મીટર</b><br>
                            ટાંકીની જાડાઈ = 1 સેમી = <b>0.01 મીટર</b><br>
                            &there4; બહારની ત્રિજ્યા (R) = 1 + 0.01 = <b>1.01 મીટર</b><br><br>
                            
                            લોખંડનું ઘનફળ = અર્ધગોળાકાર ટાંકીનું બહારનું ઘનફળ - અંદરનું ઘનફળ<br>
                            = (2 / 3) &pi;R<sup>3</sup> - (2 / 3) &pi;r<sup>3</sup><br>
                            = (2 / 3) &pi; (R<sup>3</sup> - r<sup>3</sup>)<br>
                            = (2 / 3) &times; (22 / 7) &times; [ (1.01)<sup>3</sup> - (1)<sup>3</sup> ]<br>
                            = (44 / 21) &times; [ 1.030301 - 1 ]<br>
                            = (44 / 21) &times; 0.030301<br>
                            = 1.333244 / 21<br>
                            <b style='color:#be123c; font-size:18px;'>= 0.06348 મીટર<sup>3</sup> (આશરે)</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>જ્યારે પણ "જાડાઈ" આપી હોય અને વપરાયેલા મટીરીયલ (ધાતુ/લાકડું) નું ઘનફળ શોધવું હોય, ત્યારે <b>મોટા ઘનફળમાંથી નાનું ઘનફળ બાદ કરવું પડે</b>. સૂત્ર <b>(2/3)&pi;(R&sup3; - r&sup3;)</b> સીધું જ વાપરવું, જેથી ગણતરીમાં &pi; બે વાર ન લખવો પડે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.4 - પ્રશ્ન 7",
                "marks": 3,
                "question": "જેની વક્ર સપાટીનું ક્ષેત્રફળ 154 સેમી² હોય તેવા ગોલકનું ઘનફળ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>પગલું 1: ગોલકની ત્રિજ્યા (r) શોધવી</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            ગોલકની વક્ર સપાટીનું ક્ષેત્રફળ = 154 સેમી<sup>2</sup><br>
                            &there4; 4&pi;r<sup>2</sup> = 154<br>
                            &there4; 4 &times; (22 / 7) &times; r<sup>2</sup> = 154<br>
                            &there4; r<sup>2</sup> = (154 &times; 7) / (4 &times; 22)<br>
                            <span style='color:#64748b; font-size:12px;'>[154 / 22 = 7]</span><br>
                            &there4; r<sup>2</sup> = (7 &times; 7) / 4<br>
                            &there4; r = 7 / 2 = <b>3.5 સેમી</b>
                        </div>
                    </div>
                    
                    <div style='background-color:#eff6ff; padding:12px; border-left:4px solid #1d4ed8; border-radius:5px; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#1e3a8a;'><b>પગલું 2: ગોલકનું ઘનફળ શોધવું</b></p>
                        <div style='font-size:14px; color:#1d4ed8; line-height:1.8; margin-left:10px;'>
                            ગોલકનું ઘનફળ (V) = (4 / 3) &pi;r<sup>3</sup><br>
                            = (4 / 3) &times; (22 / 7) &times; (7 / 2) &times; (7 / 2) &times; (7 / 2)<br>
                            <span style='color:#64748b; font-size:12px;'>[છેદ ઉડાડતાં: 7 અને 7 ઉડશે, છેદમાં 2&times;2=4 એ અંશના 4 સાથે ઉડશે. અને 22/2 = 11]</span><br>
                            = (11 &times; 7 &times; 7) / 3<br>
                            = (11 &times; 49) / 3<br>
                            = 539 / 3<br>
                            <b style='color:#1d4ed8; font-size:18px;'>= 179.66 સેમી<sup>3</sup> (અથવા 179 પૂર્ણાંક 2/3)</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.4 - પ્રશ્ન 8",
                "marks": 5,
                "question": "એક મકાનનો ઘુમ્મટ અર્ધગોળાકાર છે. તેને અંદરની બાજુએથી ચૂનો કરવાનો ખર્ચ ₹ 498.96 થાય છે. જો ચૂનો કરવાનો દર ₹ 2.00 પ્રતિ ચોરસ મીટર હોય, તો શોધો:<br>(i) ઘુમ્મટની અંદરની વક્ર સપાટીનું ક્ષેત્રફળ<br>(ii) ઘુમ્મટમાં રહેલી હવાનું ઘનફળ", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 300 200" style="width:100%; max-width:250px;" xmlns="http://www.w3.org/2000/svg">
                            <rect x="70" y="100" width="160" height="80" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
                            
                            <path d="M 70 100 A 80 80 0 0 1 230 100" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
                            <ellipse cx="150" cy="100" rx="80" ry="15" fill="none" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,4"/>
                            
                            <text x="150" y="60" fill="#0284c7" font-weight="bold" text-anchor="middle">અર્ધગોળાકાર ઘુમ્મટ</text>
                            <text x="150" y="150" fill="#475569" font-weight="bold" text-anchor="middle">મકાન</text>
                        </svg>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:20px; overflow-x:auto;'>
                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(i) ઘુમ્મટની અંદરની વક્ર સપાટીનું ક્ષેત્રફળ:</h4>
                            <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                                આપણે જાણીએ છીએ કે: <b>ક્ષેત્રફળ = કુલ ખર્ચ / પ્રતિ મીટર<sup>2</sup> દર</b><br>
                                &there4; અંદરની વક્ર સપાટીનું ક્ષેત્રફળ = 498.96 / 2<br>
                                <b style='color:#0284c7; font-size:16px;'>= 249.48 મીટર<sup>2</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; min-width:320px;'>
                            <h4 style='color:#881337; margin:0 0 8px 0;'>(ii) ઘુમ્મટમાં રહેલી હવાનું ઘનફળ:</h4>
                            <div style='font-size:14px; color:#9f1239; line-height:1.8; margin-left:10px;'>
                                ઘનફળ શોધવા માટે ત્રિજ્યા (r) શોધવી પડશે.<br>
                                અર્ધગોલકની વક્ર સપાટી = 2&pi;r<sup>2</sup><br>
                                &there4; 2 &times; (22 / 7) &times; r<sup>2</sup> = 249.48<br>
                                &there4; r<sup>2</sup> = (249.48 &times; 7) / 44<br>
                                &there4; r<sup>2</sup> = 1746.36 / 44<br>
                                &there4; r<sup>2</sup> = 39.69<br>
                                &there4; <b>r = &radic;39.69 = 6.3 મીટર</b><br><br>
                                
                                હવે, ઘુમ્મટમાં રહેલી હવાનું ઘનફળ (અર્ધગોલકનું ઘનફળ) = (2 / 3) &pi;r<sup>3</sup><br>
                                = (2 / 3) &times; (22 / 7) &times; 6.3 &times; 6.3 &times; 6.3<br>
                                <span style='color:#64748b; font-size:12px;'>[6.3 / 7 = 0.9, અને 0.9 / 3 = 0.3]</span><br>
                                = 2 &times; 22 &times; 0.3 &times; 6.3 &times; 6.3<br>
                                = 44 &times; 0.3 &times; 39.69<br>
                                = 13.2 &times; 39.69<br>
                                <b style='color:#be123c; font-size:16px;'>= 523.9 મીટર<sup>3</sup> (આશરે)</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.4 - પ્રશ્ન 9",
                "marks": 4,
                "question": "r ત્રિજ્યા અને S વક્ર સપાટીનું ક્ષેત્રફળ ધરાવતા 27 લોખંડના ગોલકો ઓગાળીને એક મોટો ગોલક બનાવવામાં આવે છે, જેની વક્ર સપાટીનું ક્ષેત્રફળ S' છે. તો શોધો:<br>(i) નવા ગોલકની ત્રિજ્યા r'<br>(ii) S અને S' નો ગુણોત્તર", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 350 200" style="width:100%; max-width:350px;" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="80" r="10" fill="#fecdd3" stroke="#be123c" stroke-width="1.5"/>
                            <circle cx="80" cy="80" r="10" fill="#fecdd3" stroke="#be123c" stroke-width="1.5"/>
                            <circle cx="110" cy="80" r="10" fill="#fecdd3" stroke="#be123c" stroke-width="1.5"/>
                            <circle cx="50" cy="110" r="10" fill="#fecdd3" stroke="#be123c" stroke-width="1.5"/>
                            <circle cx="80" cy="110" r="10" fill="#fecdd3" stroke="#be123c" stroke-width="1.5"/>
                            <circle cx="110" cy="110" r="10" fill="#fecdd3" stroke="#be123c" stroke-width="1.5"/>
                            
                            <text x="80" y="140" fill="#be123c" font-size="12" font-weight="bold" text-anchor="middle">27 નાના ગોલક</text>
                            <text x="80" y="155" fill="#be123c" font-size="12" font-weight="bold" text-anchor="middle">ત્રિજ્યા = r</text>
                            
                            <text x="160" y="105" fill="#0f172a" font-size="20" font-weight="bold">&rarr;</text>
                            
                            <circle cx="250" cy="95" r="40" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
                            
                            <text x="250" y="155" fill="#16a34a" font-size="12" font-weight="bold" text-anchor="middle">1 મોટો ગોલક</text>
                            <text x="250" y="170" fill="#16a34a" font-size="12" font-weight="bold" text-anchor="middle">ત્રિજ્યા = r'</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0c4a6e;'><b>(i) નવા ગોલકની ત્રિજ્યા r':</b></p>
                        <div style='font-size:14px; color:#0369a1; line-height:1.8; margin-left:10px;'>
                            જ્યારે વસ્તુઓને ઓગાળીને નવી વસ્તુ બનાવાય, ત્યારે <b>કુલ ઘનફળ સમાન રહે છે</b>.<br>
                            &there4; 1 મોટા ગોલકનું ઘનફળ = 27 નાના ગોલકનું ઘનફળ<br>
                            &there4; (4 / 3) &pi;(r')<sup>3</sup> = 27 &times; [ (4 / 3) &pi;r<sup>3</sup> ]<br>
                            <span style='color:#64748b; font-size:12px;'>[બંને બાજુથી (4/3)&pi; ઉડી જશે]</span><br>
                            &there4; (r')<sup>3</sup> = 27 r<sup>3</sup><br>
                            બંને બાજુ ઘનમૂળ (Cube root) લેતાં:<br>
                            &there4; r' = 3r<br>
                            <b style='color:#0284c7; font-size:16px;'>&there4; નવા ગોલકની ત્રિજ્યા r' = 3r</b>
                        </div>
                    </div>
                    
                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#881337;'><b>(ii) S અને S' નો ગુણોત્તર:</b></p>
                        <div style='font-size:14px; color:#4c0519; line-height:1.8; margin-left:10px;'>
                            S = નાના ગોલકનું ક્ષેત્રફળ = 4&pi;r<sup>2</sup><br>
                            S' = મોટા ગોલકનું ક્ષેત્રફળ = 4&pi;(r')<sup>2</sup><br><br>
                            
                            ગુણોત્તર = S / S'<br>
                            = (4&pi;r<sup>2</sup>) / (4&pi;(r')<sup>2</sup>)<br>
                            <span style='color:#64748b; font-size:12px;'>[4&pi; ઉડી જશે અને r' = 3r મુકતાં]</span><br>
                            = r<sup>2</sup> / (3r)<sup>2</sup><br>
                            = r<sup>2</sup> / 9r<sup>2</sup><br>
                            = 1 / 9<br>
                            <b style='color:#be123c; font-size:18px;'>&there4; S અને S' નો ગુણોત્તર = 1 : 9</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 11.4 - પ્રશ્ન 10",
                "marks": 2,
                "question": "દવાની એક કેપ્સુલ 3.5 મિમી વ્યાસવાળા ગોલક આકારની છે. આ કેપ્સુલને પૂરેપૂરી ભરવા માટે કેટલી દવાની (મિમી³ માં) જરૂર પડે?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d;'><b>ઉકેલ:</b></p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            વ્યાસ (d) = 3.5 મિમી<br>
                            &there4; ત્રિજ્યા (r) = 3.5 / 2 = <b>35 / 20 = 7 / 4 મિમી</b><br><br>
                            
                            દવાનું કદ = ગોલક આકારની કેપ્સુલનું ઘનફળ<br>
                            = (4 / 3) &pi;r<sup>3</sup><br>
                            = (4 / 3) &times; (22 / 7) &times; (7 / 4) &times; (7 / 4) &times; (7 / 4)<br>
                            <span style='color:#64748b; font-size:12px;'>[એક 7 અને 7 ઉડી જશે. એક 4 અને 4 ઉડી જશે. 22 અને 4 ના અડધા કરતાં 11 અને 2 વધશે]</span><br>
                            = (11 &times; 7 &times; 7) / (3 &times; 2 &times; 4)<br>
                            = (11 &times; 49) / 24<br>
                            = 539 / 24<br>
                            <b style='color:#15803d; font-size:18px;'>&there4; દવાનું કદ = 22.46 મિમી<sup>3</sup> (આશરે)</b>
                        </div>
                    </div>
                </div>`
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 12: આંકડાશાસ્ત્ર (સ્વાધ્યાય)
    // ------------------------------------
    "12": {
        "chapterName": "પ્રકરણ 12",
        "chapterTitle": "આંકડાશાસ્ત્ર (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 12.1 - પ્રશ્ન 1",
                "marks": 3,
                "question": "ધોરણ 9 ના 30 વિદ્યાર્થીઓના રક્તજૂથ (Blood Groups) ની વિગતો નીચે મુજબ છે:<br>A, B, O, O, AB, O, A, O, B, A, O, B, A, O, O, A, AB, O, A, A, O, O, AB, B, A, O, B, A, B, O.<br>આ માહિતીને આવૃત્તિ-વિતરણ કોષ્ટક સ્વરૂપમાં દર્શાવો. આ વિદ્યાર્થીઓના રક્તજૂથમાં કયું રક્તજૂથ સૌથી વધુ સામાન્ય છે અને કયું રક્તજૂથ સૌથી અસામાન્ય (વિરલ) છે?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>ઉકેલ:</p>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#475569;'>આપેલ માહિતી પરથી આવૃત્તિ-વિતરણ કોષ્ટક (Frequency Distribution Table) નીચે મુજબ તૈયાર કરી શકાય:</p>
                    
                    <div style='overflow-x:auto; margin-bottom:15px;'>
                        <table style='width:100%; min-width:300px; border-collapse:collapse; text-align:center; font-size:15px;'>
                            <thead>
                                <tr style='background-color:#1e3a8a; color:#ffffff;'>
                                    <th style='padding:12px; border:1px solid #cbd5e1;'>રક્તજૂથ (Blood Group)</th>
                                    <th style='padding:12px; border:1px solid #cbd5e1;'>આવૃત્તિ ચિહ્ન (Tally Marks)</th>
                                    <th style='padding:12px; border:1px solid #cbd5e1;'>વિદ્યાર્થીઓની સંખ્યા (આવૃત્તિ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>A</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-family:monospace; font-size:16px;'>&#824;|||| ||||</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>9</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1d4ed8;'>B</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-family:monospace; font-size:16px;'>&#824;|||| |</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>6</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#16a34a;'>O</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-family:monospace; font-size:16px;'>&#824;|||| &#824;|||| ||</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>12</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#ea580c;'>AB</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-family:monospace; font-size:16px;'>|||</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>3</td>
                                </tr>
                                <tr style='background-color:#e2e8f0; color:#0f172a;'>
                                    <td colspan="2" style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; text-align:right;'>કુલ (Total):</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; font-size:16px;'>30</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <ul style='margin:0; padding-left:20px; font-size:14px; color:#0369a1; line-height:1.8;'>
                            <li>કોષ્ટક પરથી સ્પષ્ટ છે કે, <b>રક્તજૂથ O</b> ધરાવતા વિદ્યાર્થીઓની સંખ્યા સૌથી વધુ (12) છે. તેથી તે <b>સૌથી વધુ સામાન્ય રક્તજૂથ</b> છે.</li>
                            <li><b>રક્તજૂથ AB</b> ધરાવતા વિદ્યાર્થીઓની સંખ્યા સૌથી ઓછી (3) છે. તેથી તે <b>સૌથી અસામાન્ય (વિરલ) રક્તજૂથ</b> છે.</li>
                        </ul>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવૃત્તિ ચિહ્ન (Tally Marks) કરતી વખતે હંમેશા <b>5 ના જૂથનો નિયમ</b> યાદ રાખો: ચાર ઊભી લીટી (||||) દોર્યા પછી પાંચમી લીટી તેમના પર ત્રાસી મારવી. આનાથી ગણતરીમાં ભૂલ થવાની શક્યતા 0% થઈ જાય છે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 12.1 - પ્રશ્ન 2",
                "marks": 4,
                "question": "ભારતીય સમાજમાં વિવિધ વિભાગોમાં પ્રતિ 1000 છોકરાઓ દીઠ છોકરીઓની સંખ્યા (હજાર દીઠ) નીચે મુજબ છે:<br>અનુસૂચિત જાતિ (SC): 940<br>અનુસૂચિત જનજાતિ (ST): 970<br>બિન-SC/ST: 920<br>પછાત જિલ્લાઓ: 950<br>બિન-પછાત જિલ્લાઓ: 920<br>ગ્રામ્ય: 930<br>શહેરી: 910<br>(i) આપેલી માહિતીનો લંબ આલેખ (Bar Graph) દોરો.<br>(ii) આલેખ પરથી તમે કયું તારણ કાઢી શકો છો?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>(i) લંબ આલેખ (Bar Graph):</p>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 500 300" style="width:100%; min-width:450px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="50" y1="50" x2="480" y2="50" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="80" x2="480" y2="80" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="110" x2="480" y2="110" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="140" x2="480" y2="140" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="170" x2="480" y2="170" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="200" x2="480" y2="200" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="230" x2="480" y2="230" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="260" x2="480" y2="260" stroke="#cbd5e1" stroke-width="2"/> <line x1="50" y1="30" x2="50" y2="260" stroke="#0f172a" stroke-width="2"/> <line x1="50" y1="260" x2="480" y2="260" stroke="#0f172a" stroke-width="2"/> <polyline points="45,265 55,270 45,275 55,280 50,285" fill="none" stroke="#0f172a" stroke-width="2"/> <text x="40" y="265" fill="#475569" font-size="12" text-anchor="end">910</text>
                            <text x="40" y="235" fill="#475569" font-size="12" text-anchor="end">920</text>
                            <text x="40" y="205" fill="#475569" font-size="12" text-anchor="end">930</text>
                            <text x="40" y="175" fill="#475569" font-size="12" text-anchor="end">940</text>
                            <text x="40" y="145" fill="#475569" font-size="12" text-anchor="end">950</text>
                            <text x="40" y="115" fill="#475569" font-size="12" text-anchor="end">960</text>
                            <text x="40" y="85" fill="#475569" font-size="12" text-anchor="end">970</text>
                            <text x="40" y="55" fill="#475569" font-size="12" text-anchor="end">980</text>
                            
                            <text x="15" y="150" fill="#0f172a" font-weight="bold" font-size="12" transform="rotate(-90 15,150)" text-anchor="middle">છોકરીઓની સંખ્યા</text>
                            
                            <rect x="70" y="170" width="30" height="90" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1"/>
                            <text x="85" y="165" fill="#1d4ed8" font-size="10" font-weight="bold" text-anchor="middle">940</text>
                            
                            <rect x="120" y="80" width="30" height="180" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
                            <text x="135" y="75" fill="#15803d" font-size="10" font-weight="bold" text-anchor="middle">970</text>
                            
                            <rect x="170" y="230" width="30" height="30" fill="#f59e0b" stroke="#c2410c" stroke-width="1"/>
                            <text x="185" y="225" fill="#c2410c" font-size="10" font-weight="bold" text-anchor="middle">920</text>
                            
                            <rect x="220" y="140" width="30" height="120" fill="#ef4444" stroke="#b91c1c" stroke-width="1"/>
                            <text x="235" y="135" fill="#b91c1c" font-size="10" font-weight="bold" text-anchor="middle">950</text>
                            
                            <rect x="270" y="230" width="30" height="30" fill="#8b5cf6" stroke="#6d28d9" stroke-width="1"/>
                            <text x="285" y="225" fill="#6d28d9" font-size="10" font-weight="bold" text-anchor="middle">920</text>
                            
                            <rect x="320" y="200" width="30" height="60" fill="#14b8a6" stroke="#0f766e" stroke-width="1"/>
                            <text x="335" y="195" fill="#0f766e" font-size="10" font-weight="bold" text-anchor="middle">930</text>
                            
                            <rect x="370" y="258" width="30" height="2" fill="#64748b" stroke="#334155" stroke-width="1"/>
                            <text x="385" y="255" fill="#334155" font-size="10" font-weight="bold" text-anchor="middle">910</text>
                            
                            <text x="85" y="280" fill="#0f172a" font-size="11" text-anchor="middle" transform="rotate(-30 85,280)">SC</text>
                            <text x="135" y="280" fill="#0f172a" font-size="11" text-anchor="middle" transform="rotate(-30 135,280)">ST</text>
                            <text x="185" y="280" fill="#0f172a" font-size="11" text-anchor="middle" transform="rotate(-30 185,280)">Non SC/ST</text>
                            <text x="235" y="280" fill="#0f172a" font-size="11" text-anchor="middle" transform="rotate(-30 235,280)">પછાત જિલ્લા</text>
                            <text x="285" y="280" fill="#0f172a" font-size="11" text-anchor="middle" transform="rotate(-30 285,280)">બિન-પછાત</text>
                            <text x="335" y="280" fill="#0f172a" font-size="11" text-anchor="middle" transform="rotate(-30 335,280)">ગ્રામ્ય</text>
                            <text x="385" y="280" fill="#0f172a" font-size="11" text-anchor="middle" transform="rotate(-30 385,280)">શહેરી</text>
                            
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#14532d; font-weight:bold;'>(ii) તારણો (Conclusions):</p>
                        <ul style='margin:0; padding-left:20px; font-size:14px; color:#166534; line-height:1.8;'>
                            <li><b>અનુસૂચિત જનજાતિ (ST)</b> વિભાગમાં પ્રતિ 1000 છોકરાઓ દીઠ છોકરીઓની સંખ્યા <b>સૌથી વધુ (970)</b> છે.</li>
                            <li><b>શહેરી</b> વિભાગમાં છોકરીઓની સંખ્યા <b>સૌથી ઓછી (910)</b> છે.</li>
                            <li>બિન-SC/ST અને બિન-પછાત જિલ્લાઓમાં છોકરીઓનું પ્રમાણ સમાન (920) છે.</li>
                            <li>એકંદરે, શહેરી વિસ્તારો કરતા ગ્રામ્ય વિસ્તારોમાં અને પછાત વર્ગમાં છોકરીઓનું પ્રમાણ વધુ સારું જોવા મળે છે.</li>
                        </ul>
                    </div>
                </div>`
            },
                { 
                "questionNumber": "સ્વાધ્યાય 12.1 - પ્રશ્ન 3",
                "marks": 5,
                "question": "એક છોડનાં 40 પાંદડાઓની લંબાઈ મિલીમીટર (mm) માં નીચે મુજબ માપવામાં આવી છે. આ માહિતી દર્શાવતો સ્તંભાલેખ (Histogram) દોરો.<br>લંબાઈ (mm) &rarr; પાંદડાઓની સંખ્યા<br>118 - 126 &rarr; 3<br>127 - 135 &rarr; 5<br>136 - 144 &rarr; 9<br>145 - 153 &rarr; 12<br>154 - 162 &rarr; 5<br>163 - 171 &rarr; 4<br>172 - 180 &rarr; 2", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#ffedd5; padding:12px; border-left:4px solid #ea580c; border-radius:5px; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#9a3412;'><b>પગલું 1: સતત વર્ગો (Continuous Classes) બનાવવા:</b></p>
                        <div style='font-size:14px; color:#c2410c; line-height:1.8;'>
                            અહીં આપેલા વર્ગો અસતત છે (જેમ કે 126 પર પૂરો થાય અને 127 થી શરૂ થાય). સ્તંભાલેખ દોરવા માટે વર્ગો <b>સતત (Continuous)</b> હોવા જરૂરી છે. <br>
                            આ માટે આપણે નીચલી સીમામાંથી <b>0.5 બાદ કરીશું</b> અને ઉપલી સીમામાં <b>0.5 ઉમેરીશું</b>.
                        </div>
                    </div>

                    <div style='overflow-x:auto; margin-bottom:15px;'>
                        <table style='width:100%; min-width:400px; border-collapse:collapse; text-align:center; font-size:14px;'>
                            <thead>
                                <tr style='background-color:#1e3a8a; color:#ffffff;'>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>આપેલ વર્ગ (લંબાઈ)</th>
                                    <th style='padding:10px; border:1px solid #cbd5e1; background-color:#1e40af;'>સતત વર્ગ (Continuous Class)</th>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>પાંદડાઓની સંખ્યા (આવૃત્તિ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style='background-color:#f8fafc;'><td style='padding:8px; border:1px solid #cbd5e1;'>118 - 126</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>117.5 - 126.5</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>3</td></tr>
                                <tr><td style='padding:8px; border:1px solid #cbd5e1;'>127 - 135</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>126.5 - 135.5</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>5</td></tr>
                                <tr style='background-color:#f8fafc;'><td style='padding:8px; border:1px solid #cbd5e1;'>136 - 144</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>135.5 - 144.5</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>9</td></tr>
                                <tr><td style='padding:8px; border:1px solid #cbd5e1;'>145 - 153</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>144.5 - 153.5</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>12</td></tr>
                                <tr style='background-color:#f8fafc;'><td style='padding:8px; border:1px solid #cbd5e1;'>154 - 162</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>153.5 - 162.5</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>5</td></tr>
                                <tr><td style='padding:8px; border:1px solid #cbd5e1;'>163 - 171</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>162.5 - 171.5</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>4</td></tr>
                                <tr style='background-color:#f8fafc;'><td style='padding:8px; border:1px solid #cbd5e1;'>172 - 180</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#be123c;'>171.5 - 180.5</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>2</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155; font-weight:bold;'>પગલું 2: સ્તંભાલેખ (Histogram)</p>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1;'>
                        <svg viewBox="0 0 500 300" style="width:100%; min-width:480px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="50" y1="50" x2="480" y2="50" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="80" x2="480" y2="80" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="110" x2="480" y2="110" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="140" x2="480" y2="140" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="170" x2="480" y2="170" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="200" x2="480" y2="200" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="230" x2="480" y2="230" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="30" x2="50" y2="260" stroke="#0f172a" stroke-width="2"/> <line x1="50" y1="260" x2="480" y2="260" stroke="#0f172a" stroke-width="2"/> <polyline points="55,260 60,250 65,270 70,260" fill="none" stroke="#0f172a" stroke-width="2"/>
                            
                            <text x="40" y="265" fill="#475569" font-size="12" text-anchor="end">0</text>
                            <text x="40" y="235" fill="#475569" font-size="12" text-anchor="end">2</text>
                            <text x="40" y="205" fill="#475569" font-size="12" text-anchor="end">4</text>
                            <text x="40" y="175" fill="#475569" font-size="12" text-anchor="end">6</text>
                            <text x="40" y="145" fill="#475569" font-size="12" text-anchor="end">8</text>
                            <text x="40" y="115" fill="#475569" font-size="12" text-anchor="end">10</text>
                            <text x="40" y="85" fill="#475569" font-size="12" text-anchor="end">12</text>
                            <text x="40" y="55" fill="#475569" font-size="12" text-anchor="end">14</text>
                            
                            <text x="15" y="150" fill="#0f172a" font-weight="bold" font-size="12" transform="rotate(-90 15,150)" text-anchor="middle">પાંદડાઓની સંખ્યા</text>
                            <text x="265" y="295" fill="#0f172a" font-weight="bold" font-size="12" text-anchor="middle">લંબાઈ (mm)</text>
                            
                            <rect x="80" y="215" width="50" height="45" fill="#38bdf8" stroke="#0369a1" stroke-width="1"/>
                            <text x="105" y="210" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">3</text>
                            
                            <rect x="130" y="185" width="50" height="75" fill="#38bdf8" stroke="#0369a1" stroke-width="1"/>
                            <text x="155" y="180" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">5</text>
                            
                            <rect x="180" y="125" width="50" height="135" fill="#38bdf8" stroke="#0369a1" stroke-width="1"/>
                            <text x="205" y="120" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">9</text>
                            
                            <rect x="230" y="80" width="50" height="180" fill="#38bdf8" stroke="#0369a1" stroke-width="1"/>
                            <text x="255" y="75" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">12</text>
                            
                            <rect x="280" y="185" width="50" height="75" fill="#38bdf8" stroke="#0369a1" stroke-width="1"/>
                            <text x="305" y="180" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">5</text>
                            
                            <rect x="330" y="200" width="50" height="60" fill="#38bdf8" stroke="#0369a1" stroke-width="1"/>
                            <text x="355" y="195" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">4</text>
                            
                            <rect x="380" y="230" width="50" height="30" fill="#38bdf8" stroke="#0369a1" stroke-width="1"/>
                            <text x="405" y="225" fill="#0369a1" font-size="10" font-weight="bold" text-anchor="middle">2</text>
                            
                            <text x="80" y="275" fill="#475569" font-size="10" text-anchor="middle">117.5</text>
                            <text x="130" y="275" fill="#475569" font-size="10" text-anchor="middle">126.5</text>
                            <text x="180" y="275" fill="#475569" font-size="10" text-anchor="middle">135.5</text>
                            <text x="230" y="275" fill="#475569" font-size="10" text-anchor="middle">144.5</text>
                            <text x="280" y="275" fill="#475569" font-size="10" text-anchor="middle">153.5</text>
                            <text x="330" y="275" fill="#475569" font-size="10" text-anchor="middle">162.5</text>
                            <text x="380" y="275" fill="#475569" font-size="10" text-anchor="middle">171.5</text>
                            <text x="430" y="275" fill="#475569" font-size="10" text-anchor="middle">180.5</text>
                        </svg>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>લંબ આલેખ (Bar Graph) અને સ્તંભાલેખ (Histogram) વચ્ચેનો મુખ્ય તફાવત યાદ રાખો: <b>લંબ આલેખમાં સ્તંભો વચ્ચે જગ્યા (Gap) હોય છે, જ્યારે સ્તંભાલેખમાં સ્તંભો એકબીજા સાથે ચોંટેલા (સતત) હોય છે.</b> જો રકમમાં વર્ગો વચ્ચે ગેપ હોય (જેમ કે 126 અને 127), તો 0.5 બાદ અને પ્લસ કરીને વર્ગોને પહેલા ચોંટાડવા પડે!</p>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 12.1 - પ્રશ્ન 4",
                "marks": 4,
                "question": "નીચેનું કોષ્ટક 400 નિઓન ગોળા (Neon Lamps) નું આયુષ્ય આપે છે:<br>આયુષ્ય (કલાકમાં): 300-400, 400-500, 500-600, 600-700, 700-800, 800-900, 900-1000<br>ગોળાની સંખ્યા: 14, 56, 60, 86, 74, 62, 48<br>(i) આપેલી માહિતીને દર્શાવતો સ્તંભાલેખ દોરો.<br>(ii) કેટલા ગોળાઓનું આયુષ્ય 700 કલાકથી વધુ છે?", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>(i) સ્તંભાલેખ (Histogram):</p>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg viewBox="0 0 500 300" style="width:100%; min-width:480px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="50" y1="50" x2="480" y2="50" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="90" x2="480" y2="90" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="130" x2="480" y2="130" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="170" x2="480" y2="170" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="210" x2="480" y2="210" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="30" x2="50" y2="250" stroke="#0f172a" stroke-width="2"/> <line x1="50" y1="250" x2="480" y2="250" stroke="#0f172a" stroke-width="2"/> <polyline points="55,250 60,240 65,260 70,250" fill="none" stroke="#0f172a" stroke-width="2"/>
                            
                            <text x="40" y="255" fill="#475569" font-size="12" text-anchor="end">0</text>
                            <text x="40" y="215" fill="#475569" font-size="12" text-anchor="end">20</text>
                            <text x="40" y="175" fill="#475569" font-size="12" text-anchor="end">40</text>
                            <text x="40" y="135" fill="#475569" font-size="12" text-anchor="end">60</text>
                            <text x="40" y="95" fill="#475569" font-size="12" text-anchor="end">80</text>
                            <text x="40" y="55" fill="#475569" font-size="12" text-anchor="end">100</text>
                            
                            <text x="15" y="140" fill="#0f172a" font-weight="bold" font-size="12" transform="rotate(-90 15,140)" text-anchor="middle">ગોળાની સંખ્યા</text>
                            <text x="265" y="290" fill="#0f172a" font-weight="bold" font-size="12" text-anchor="middle">આયુષ્ય (કલાકમાં)</text>
                            
                            <rect x="80" y="222" width="50" height="28" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
                            <text x="105" y="217" fill="#b45309" font-size="10" font-weight="bold" text-anchor="middle">14</text>
                            
                            <rect x="130" y="138" width="50" height="112" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
                            <text x="155" y="133" fill="#b45309" font-size="10" font-weight="bold" text-anchor="middle">56</text>
                            
                            <rect x="180" y="130" width="50" height="120" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
                            <text x="205" y="125" fill="#b45309" font-size="10" font-weight="bold" text-anchor="middle">60</text>
                            
                            <rect x="230" y="78" width="50" height="172" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
                            <text x="255" y="73" fill="#b45309" font-size="10" font-weight="bold" text-anchor="middle">86</text>
                            
                            <rect x="280" y="102" width="50" height="148" fill="#10b981" stroke="#047857" stroke-width="1"/>
                            <text x="305" y="97" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">74</text>
                            
                            <rect x="330" y="126" width="50" height="124" fill="#10b981" stroke="#047857" stroke-width="1"/>
                            <text x="355" y="121" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">62</text>
                            
                            <rect x="380" y="154" width="50" height="96" fill="#10b981" stroke="#047857" stroke-width="1"/>
                            <text x="405" y="149" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">48</text>
                            
                            <text x="80" y="265" fill="#475569" font-size="10" text-anchor="middle">300</text>
                            <text x="130" y="265" fill="#475569" font-size="10" text-anchor="middle">400</text>
                            <text x="180" y="265" fill="#475569" font-size="10" text-anchor="middle">500</text>
                            <text x="230" y="265" fill="#475569" font-size="10" text-anchor="middle">600</text>
                            <text x="280" y="265" fill="#475569" font-size="10" text-anchor="middle">700</text>
                            <text x="330" y="265" fill="#475569" font-size="10" text-anchor="middle">800</text>
                            <text x="380" y="265" fill="#475569" font-size="10" text-anchor="middle">900</text>
                            <text x="430" y="265" fill="#475569" font-size="10" text-anchor="middle">1000</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <p style='margin:0 0 5px 0; font-size:15px; color:#14532d; font-weight:bold;'>(ii) 700 કલાકથી વધુ આયુષ્ય ધરાવતા ગોળાઓ:</p>
                        <div style='font-size:14px; color:#166534; line-height:1.8; margin-left:10px;'>
                            700 કલાકથી વધુ એટલે કે 700-800, 800-900 અને 900-1000 ના વર્ગની આવૃત્તિઓનો સરવાળો (જે આલેખમાં <b>લીલા રંગ</b> થી દર્શાવેલ છે).<br>
                            કુલ ગોળાઓ = 74 + 62 + 48<br>
                            <b style='color:#15803d; font-size:16px;'>= 184 ગોળાઓ</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 12.1 - પ્રશ્ન 5",
                "marks": 5,
                "question": "નીચે આપેલા કોષ્ટકમાં એક પરીક્ષામાં બે વિભાગ (Section A અને Section B) ના વિદ્યાર્થીઓએ મેળવેલા ગુણ આપેલા છે:<br>ગુણ (0-10, 10-20, 20-30, 30-40, 40-50)<br>વિભાગ A ની આવૃત્તિ: 3, 9, 17, 12, 9<br>વિભાગ B ની આવૃત્તિ: 5, 19, 15, 10, 1<br>બંને વિભાગના વિદ્યાર્થીઓનો દેખાવ એક જ આલેખમાં 'આવૃત્તિ બહુકોણ' (Frequency Polygon) દ્વારા દર્શાવો અને બંનેના દેખાવની તુલના કરો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#fffbeb; padding:12px; border-left:4px solid #d97706; border-radius:5px; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#92400e;'><b>પગલું 1: વર્ગ-મધ્યક (Class Mark) શોધવો:</b></p>
                        <div style='font-size:14px; color:#b45309; line-height:1.8;'>
                            આવૃત્તિ બહુકોણ દોરવા માટે આપણે દરેક વર્ગની <b>વર્ગ-મધ્યક = (નીચલી સીમા + ઉપલી સીમા) / 2</b> શોધવી પડે. આલેખને બંધ કરવા માટે શરૂઆતમાં એક કાલ્પનિક વર્ગ (-10 થી 0) અને અંતમાં એક વર્ગ (50 થી 60) લેવો પડે, જેમની આવૃત્તિ 0 હોય.
                        </div>
                    </div>

                    <div style='overflow-x:auto; margin-bottom:15px;'>
                        <table style='width:100%; min-width:400px; border-collapse:collapse; text-align:center; font-size:14px;'>
                            <thead>
                                <tr style='background-color:#1e3a8a; color:#ffffff;'>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>ગુણ (વર્ગ)</th>
                                    <th style='padding:10px; border:1px solid #cbd5e1; background-color:#1e40af;'>વર્ગ-મધ્યક (x-axis)</th>
                                    <th style='padding:10px; border:1px solid #cbd5e1; color:#fde047;'>વિભાગ A (y-axis)</th>
                                    <th style='padding:10px; border:1px solid #cbd5e1; color:#fde047;'>વિભાગ B (y-axis)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style='background-color:#f1f5f9; color:#64748b;'>
                                    <td style='padding:8px; border:1px solid #cbd5e1;'>(-10 - 0)</td><td style='padding:8px; border:1px solid #cbd5e1;'>-5</td><td style='padding:8px; border:1px solid #cbd5e1;'>0</td><td style='padding:8px; border:1px solid #cbd5e1;'>0</td>
                                </tr>
                                <tr>
                                    <td style='padding:8px; border:1px solid #cbd5e1;'>0 - 10</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>5</td><td style='padding:8px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>3</td><td style='padding:8px; border:1px solid #cbd5e1; color:#1d4ed8; font-weight:bold;'>5</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:8px; border:1px solid #cbd5e1;'>10 - 20</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>15</td><td style='padding:8px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>9</td><td style='padding:8px; border:1px solid #cbd5e1; color:#1d4ed8; font-weight:bold;'>19</td>
                                </tr>
                                <tr>
                                    <td style='padding:8px; border:1px solid #cbd5e1;'>20 - 30</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>25</td><td style='padding:8px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>17</td><td style='padding:8px; border:1px solid #cbd5e1; color:#1d4ed8; font-weight:bold;'>15</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:8px; border:1px solid #cbd5e1;'>30 - 40</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>35</td><td style='padding:8px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>12</td><td style='padding:8px; border:1px solid #cbd5e1; color:#1d4ed8; font-weight:bold;'>10</td>
                                </tr>
                                <tr>
                                    <td style='padding:8px; border:1px solid #cbd5e1;'>40 - 50</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>45</td><td style='padding:8px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>9</td><td style='padding:8px; border:1px solid #cbd5e1; color:#1d4ed8; font-weight:bold;'>1</td>
                                </tr>
                                <tr style='background-color:#f1f5f9; color:#64748b;'>
                                    <td style='padding:8px; border:1px solid #cbd5e1;'>(50 - 60)</td><td style='padding:8px; border:1px solid #cbd5e1;'>55</td><td style='padding:8px; border:1px solid #cbd5e1;'>0</td><td style='padding:8px; border:1px solid #cbd5e1;'>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155; font-weight:bold;'>પગલું 2: આવૃત્તિ બહુકોણ (Frequency Polygon)</p>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1;'>
                        <svg viewBox="0 0 500 300" style="width:100%; min-width:480px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="50" y1="50" x2="480" y2="50" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="90" x2="480" y2="90" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="130" x2="480" y2="130" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="170" x2="480" y2="170" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="210" x2="480" y2="210" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="30" x2="50" y2="250" stroke="#0f172a" stroke-width="2"/> <line x1="50" y1="250" x2="480" y2="250" stroke="#0f172a" stroke-width="2"/> <text x="40" y="255" fill="#475569" font-size="12" text-anchor="end">0</text>
                            <text x="40" y="215" fill="#475569" font-size="12" text-anchor="end">4</text>
                            <text x="40" y="175" fill="#475569" font-size="12" text-anchor="end">8</text>
                            <text x="40" y="135" fill="#475569" font-size="12" text-anchor="end">12</text>
                            <text x="40" y="95" fill="#475569" font-size="12" text-anchor="end">16</text>
                            <text x="40" y="55" fill="#475569" font-size="12" text-anchor="end">20</text>
                            
                            <text x="15" y="140" fill="#0f172a" font-weight="bold" font-size="12" transform="rotate(-90 15,140)" text-anchor="middle">વિદ્યાર્થીઓની સંખ્યા</text>
                            <text x="265" y="290" fill="#0f172a" font-weight="bold" font-size="12" text-anchor="middle">ગુણ (વર્ગ-મધ્યક)</text>
                            
                            <line x1="360" y1="40" x2="380" y2="40" stroke="#be123c" stroke-width="2"/>
                            <circle cx="370" cy="40" r="3" fill="#be123c"/>
                            <text x="390" y="45" fill="#be123c" font-size="12" font-weight="bold">વિભાગ A</text>
                            
                            <line x1="360" y1="60" x2="380" y2="60" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="4,4"/>
                            <circle cx="370" cy="60" r="3" fill="#1d4ed8"/>
                            <text x="390" y="65" fill="#1d4ed8" font-size="12" font-weight="bold">વિભાગ B</text>
                            
                            <polyline points="70,250 130,220 190,160 250,80 310,130 370,160 430,250" fill="none" stroke="#be123c" stroke-width="2"/>
                            <circle cx="70" cy="250" r="4" fill="#be123c"/><circle cx="130" cy="220" r="4" fill="#be123c"/><circle cx="190" cy="160" r="4" fill="#be123c"/><circle cx="250" cy="80" r="4" fill="#be123c"/><circle cx="310" cy="130" r="4" fill="#be123c"/><circle cx="370" cy="160" r="4" fill="#be123c"/><circle cx="430" cy="250" r="4" fill="#be123c"/>
                            
                            <polyline points="70,250 130,200 190,60 250,100 310,150 370,240 430,250" fill="none" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="5,5"/>
                            <circle cx="70" cy="250" r="4" fill="#1d4ed8"/><circle cx="130" cy="200" r="4" fill="#1d4ed8"/><circle cx="190" cy="60" r="4" fill="#1d4ed8"/><circle cx="250" cy="100" r="4" fill="#1d4ed8"/><circle cx="310" cy="150" r="4" fill="#1d4ed8"/><circle cx="370" cy="240" r="4" fill="#1d4ed8"/><circle cx="430" cy="250" r="4" fill="#1d4ed8"/>
                            
                            <text x="70" y="265" fill="#475569" font-size="10" text-anchor="middle">-5</text>
                            <text x="130" y="265" fill="#475569" font-size="10" text-anchor="middle">5</text>
                            <text x="190" y="265" fill="#475569" font-size="10" text-anchor="middle">15</text>
                            <text x="250" y="265" fill="#475569" font-size="10" text-anchor="middle">25</text>
                            <text x="310" y="265" fill="#475569" font-size="10" text-anchor="middle">35</text>
                            <text x="370" y="265" fill="#475569" font-size="10" text-anchor="middle">45</text>
                            <text x="430" y="265" fill="#475569" font-size="10" text-anchor="middle">55</text>
                        </svg>
                    </div>

                    <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                        <p style='margin:0 0 5px 0; font-size:15px; color:#0c4a6e; font-weight:bold;'>તુલના (Conclusion):</p>
                        <ul style='margin:0; padding-left:20px; font-size:14px; color:#0369a1; line-height:1.8;'>
                            <li><b>વિભાગ A (લાલ લાઈન)</b> નો આલેખ જમણી બાજુ (વધુ ગુણ તરફ) ઊંચો રહે છે, કારણ કે તેમાં 20 થી 50 ગુણ મેળવનાર વિદ્યાર્થીઓ વધુ છે.</li>
                            <li><b>વિભાગ B (ભૂરી તૂટક લાઈન)</b> નો આલેખ ડાબી બાજુ (ઓછા ગુણ તરફ) ઊંચો છે (પીક 15 ગુણ પર છે).</li>
                            <li>તેથી, કહી શકાય કે <b>વિભાગ A ના વિદ્યાર્થીઓનો દેખાવ વિભાગ B ના વિદ્યાર્થીઓ કરતાં ઘણો સારો છે.</b></li>
                        </ul>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવૃત્તિ બહુકોણ (Polygon) નો સીધો નિયમ: <b>તે હવામાં લટકતો ન રહેવો જોઈએ!</b> એટલે જ આપણે શરૂઆતમાં એક કાલ્પનિક વર્ગ (-5) અને અંતમાં એક કાલ્પનિક વર્ગ (55) લઈને તેની આવૃત્તિ 0 (શૂન્ય) લીધી, જેથી આલેખ જમીન (x-axis) ને અડીને બરાબર બંધ થઈ જાય.</p>
                </div>`
            },
              { 
                "questionNumber": "સ્વાધ્યાય 12.1 - પ્રશ્ન 6",
                "marks": 4,
                "question": "એક શહેરમાં 30 દિવસમાં નોંધાયેલ મહત્તમ તાપમાન (સેલ્સિયસમાં) નીચે મુજબ છે:<br>28.5, 30.1, 29.2, 31.4, ... વગેરે.<br>અહીં 30 દિવસનું તાપમાન આપેલ છે. ધારો કે 28.0 - 29.0, 29.0 - 30.0, ... આ પ્રમાણેના વર્ગો બનાવીને એક સતત આવૃત્તિ-વિતરણ કોષ્ટક તૈયાર કરો અને તેના પરથી સ્તંભાલેખ દોરો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#fefce8; padding:10px; border-radius:5px; border-left:4px solid #ca8a04; margin-bottom:15px;'>
                        <p style='margin:0; font-size:14px; color:#a16207;'><b>નોંધ:</b> પરીક્ષામાં આવો પ્રશ્ન પૂછાય ત્યારે તમારે આપેલા કાચા ડેટા (Raw Data) ને વર્ગોમાં ગોઠવીને ગણતરી (Tally Marks) કરવી પડે છે. અહીં આપણે સીધું જ આવૃત્તિ-વિતરણ કોષ્ટક અને તેનો સ્તંભાલેખ દર્શાવેલ છે.</p>
                    </div>

                    <div style='overflow-x:auto; margin-bottom:15px;'>
                        <table style='width:100%; min-width:300px; border-collapse:collapse; text-align:center; font-size:14px;'>
                            <thead>
                                <tr style='background-color:#1e3a8a; color:#ffffff;'>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>તાપમાન (વર્ગ)</th>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>દિવસોની સંખ્યા (આવૃત્તિ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style='background-color:#f8fafc;'><td style='padding:8px; border:1px solid #cbd5e1;'>28.0 - 29.0</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>2</td></tr>
                                <tr><td style='padding:8px; border:1px solid #cbd5e1;'>29.0 - 30.0</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>5</td></tr>
                                <tr style='background-color:#f8fafc;'><td style='padding:8px; border:1px solid #cbd5e1;'>30.0 - 31.0</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>8</td></tr>
                                <tr><td style='padding:8px; border:1px solid #cbd5e1;'>31.0 - 32.0</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>10</td></tr>
                                <tr style='background-color:#f8fafc;'><td style='padding:8px; border:1px solid #cbd5e1;'>32.0 - 33.0</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>4</td></tr>
                                <tr><td style='padding:8px; border:1px solid #cbd5e1;'>33.0 - 34.0</td><td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold;'>1</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155; font-weight:bold;'>સ્તંભાલેખ (Histogram):</p>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1;'>
                        <svg viewBox="0 0 500 300" style="width:100%; min-width:450px;" xmlns="http://www.w3.org/2000/svg">
                            <line x1="50" y1="50" x2="450" y2="50" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="90" x2="450" y2="90" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="130" x2="450" y2="130" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="170" x2="450" y2="170" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="210" x2="450" y2="210" stroke="#e2e8f0" stroke-width="1"/> <line x1="50" y1="30" x2="50" y2="250" stroke="#0f172a" stroke-width="2"/> <line x1="50" y1="250" x2="450" y2="250" stroke="#0f172a" stroke-width="2"/> <polyline points="55,250 60,240 65,260 70,250" fill="none" stroke="#0f172a" stroke-width="2"/>
                            
                            <text x="40" y="255" fill="#475569" font-size="12" text-anchor="end">0</text>
                            <text x="40" y="215" fill="#475569" font-size="12" text-anchor="end">2</text>
                            <text x="40" y="175" fill="#475569" font-size="12" text-anchor="end">4</text>
                            <text x="40" y="135" fill="#475569" font-size="12" text-anchor="end">6</text>
                            <text x="40" y="95" fill="#475569" font-size="12" text-anchor="end">8</text>
                            <text x="40" y="55" fill="#475569" font-size="12" text-anchor="end">10</text>
                            
                            <text x="15" y="140" fill="#0f172a" font-weight="bold" font-size="12" transform="rotate(-90 15,140)" text-anchor="middle">દિવસોની સંખ્યા</text>
                            <text x="250" y="295" fill="#0f172a" font-weight="bold" font-size="12" text-anchor="middle">તાપમાન (&deg;C)</text>
                            
                            <rect x="80" y="220" width="55" height="30" fill="#fca5a5" stroke="#be123c" stroke-width="1"/>
                            <text x="107.5" y="215" fill="#be123c" font-size="10" font-weight="bold" text-anchor="middle">2</text>
                            
                            <rect x="135" y="175" width="55" height="75" fill="#fca5a5" stroke="#be123c" stroke-width="1"/>
                            <text x="162.5" y="170" fill="#be123c" font-size="10" font-weight="bold" text-anchor="middle">5</text>
                            
                            <rect x="190" y="130" width="55" height="120" fill="#fca5a5" stroke="#be123c" stroke-width="1"/>
                            <text x="217.5" y="125" fill="#be123c" font-size="10" font-weight="bold" text-anchor="middle">8</text>
                            
                            <rect x="245" y="100" width="55" height="150" fill="#fca5a5" stroke="#be123c" stroke-width="1"/>
                            <text x="272.5" y="95" fill="#be123c" font-size="10" font-weight="bold" text-anchor="middle">10</text>
                            
                            <rect x="300" y="190" width="55" height="60" fill="#fca5a5" stroke="#be123c" stroke-width="1"/>
                            <text x="327.5" y="185" fill="#be123c" font-size="10" font-weight="bold" text-anchor="middle">4</text>
                            
                            <rect x="355" y="235" width="55" height="15" fill="#fca5a5" stroke="#be123c" stroke-width="1"/>
                            <text x="382.5" y="230" fill="#be123c" font-size="10" font-weight="bold" text-anchor="middle">1</text>
                            
                            <text x="80" y="265" fill="#475569" font-size="10" text-anchor="middle">28</text>
                            <text x="135" y="265" fill="#475569" font-size="10" text-anchor="middle">29</text>
                            <text x="190" y="265" fill="#475569" font-size="10" text-anchor="middle">30</text>
                            <text x="245" y="265" fill="#475569" font-size="10" text-anchor="middle">31</text>
                            <text x="300" y="265" fill="#475569" font-size="10" text-anchor="middle">32</text>
                            <text x="355" y="265" fill="#475569" font-size="10" text-anchor="middle">33</text>
                            <text x="410" y="265" fill="#475569" font-size="10" text-anchor="middle">34</text>
                        </svg>
                    </div>
                </div>`
              }
            
        ]
    }
    
};

