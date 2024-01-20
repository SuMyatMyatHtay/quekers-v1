import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

import { useState } from "react";

import { Copy, Volume1 } from "lucide-react";

import { api } from "@/utils/api";
import { toast } from "@/components/ui/use-toast";
import { error } from "console";

const TranslationBox = () => {
    const [copied, setCopied] = useState(false);
    const [speaking, setSpeaking] = useState(false);

    const [duckWord, setDuckWord] = useState<string | undefined>(undefined);
    const [humanWord, setHumanWord] = useState<string | undefined>(undefined);
    const [originalLanguage, setOriginalLanguage] = useState<string | undefined>(undefined);

    const noMatchError = () => {
        console.log('No matching word found');
        toast({
            title: "No matching word found",
        })
    }

    const dthMutation = api.word.getMatchingWordDTH.useMutation();
    const htdMutation = api.word.getMatchingWordHTD.useMutation();

    const translateDuckToHuman = async () => {
        try {
            const result = await dthMutation.mutateAsync({ sentence: duckWord ?? "" });
            if (result?.sentence == duckWord) { noMatchError(); }
            setHumanWord(result?.sentence ?? duckWord ?? "");
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const translateHumanToDuck = async () => {
        try {
            const result = await htdMutation.mutateAsync({ sentence: humanWord ?? "" });


            if (result?.sentence == humanWord) { noMatchError(); }
            setDuckWord(result?.sentence ?? humanWord ?? "");

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleCopy = async (text: string) => {
        setCopied(true);
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
        } catch (err) {
            console.error('Unable to copy to clipboard', err);
        }

        setTimeout(() => {
            setCopied(false);
        }, 1000);
    }

    const handleSpeak = (text: string) => {
        setSpeaking(true);

        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = "English";
        window.speechSynthesis.speak(speech);

        setSpeaking(false);
    }

    const handleTranslate = async (language: string) => {
        setOriginalLanguage(language);

        if (originalLanguage === 'duck') {
            await translateDuckToHuman();
            //await printHighestMatchingWord();
        } else {
            await translateHumanToDuck();
            //await printHighestMatchingWord();
        }
    }

    return (
        <>
            <Card className="w-full mx-auto p-4 rounded-xl shadow-md bg-white">
                <CardHeader>
                    <CardTitle className="w-full bg-white rounded-xl font-semibold text-md">
                        Human (English)
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Textarea
                        placeholder="Type your message here."
                        value={humanWord}
                        onChange={(e) => setHumanWord(e.target.value)}
                    />
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-x-3">
                        <Button variant="outline" className="shadow-md" size="icon" onClick={() => handleCopy(humanWord ?? "")} disabled={!humanWord ?? humanWord == ""}>
                            <Copy className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="shadow-md" size="icon" onClick={() => handleSpeak(humanWord ?? "")} disabled={!humanWord ?? humanWord == ""}>
                            <Volume1 className="h-6 w-6" />
                        </Button>
                    </div>
                    <div>
                        <Button className="bg-sky-600 hover:bg-blue-700" onClick={() => handleTranslate('human')} disabled={!humanWord ?? humanWord == ""}>Translate</Button>
                    </div>
                </CardFooter>
            </Card>
            <Card className="w-full mx-auto p-4 rounded-xl shadow-md bg-white">
                <CardHeader>
                    <CardTitle className="w-full bg-white rounded-xl font-semibold text-md">
                        Duck
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Textarea
                        placeholder="Type your message here."
                        value={duckWord}
                        onChange={(e) => setDuckWord(e.target.value)}
                    />
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-x-3">
                        <Button variant="outline" className="shadow-md" size="icon" onClick={() => handleCopy(duckWord ?? "")} disabled={!duckWord ?? duckWord == ""}>
                            <Copy className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" className="shadow-md" size="icon" onClick={() => handleSpeak(duckWord ?? "")} disabled={!duckWord ?? duckWord == ""}>
                            <Volume1 className="h-6 w-6" />
                        </Button>
                    </div>
                    <div>
                        <Button className="bg-sky-600 hover:bg-blue-700" onClick={() => handleTranslate('duck')} disabled={!duckWord ?? duckWord == ""}>Translate</Button>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default TranslationBox;