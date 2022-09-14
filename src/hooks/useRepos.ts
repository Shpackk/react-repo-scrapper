import { useEffect, useState } from "react";
import RepoObject from "../interfaces/repo";
import { fetchRepo } from "../services/fetchRepo";

export function useRepo(): {repos: RepoObject[] | undefined} {
    const [repos, setRepos] = useState<any>()

    useEffect(() => {
        fetchRepo().then(rawRepos => setRepos(rawRepos))
    }, [])

    return {repos}
}