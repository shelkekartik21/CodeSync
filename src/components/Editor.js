import React, { useEffect } from "react";
import Codemirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/darcula.css';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/lib/codemirror.css';

const Editor = () => {
    useEffect(() => {
        async function init() {
            Codemirror.fromTextArea(document.getElementById('realtimeEditor'), {
                mode: {name: 'javascript', json: true},
                theme: 'darcula',
                autoCloseTags: true,
                autoCloseBrackets: true,
                lineNumbers: true,
            });
        }
        init();
    }, []);

  return <textarea id="realtimeEditor"></textarea>;
};

export default Editor;
