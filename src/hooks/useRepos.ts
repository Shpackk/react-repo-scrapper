import { useEffect, useState } from "react";
import { fetchRepo } from "../services/fetchRepo";

export function useRepo() {
    const [repos, setRepos] = useState<any>()

    useEffect(() => {
        fetchRepo().then(rawRepos => setRepos(rawRepos))
    }, [])

    return {repos}
}