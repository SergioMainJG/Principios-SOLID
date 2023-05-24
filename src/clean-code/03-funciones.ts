(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getInformatioCastByMovie( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( actorId: string ) {
        console.log({ actorId });
    }
    
    // Crear una película
    interface Movie{
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }

    function createMovie({title, description, rating, cast}: Movie){
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function verifyFullName( fullName: string ): boolean {
        console.log({ fullName });
        return true;
    }


    function createActor( fullName: string, birthDate: Date ): boolean {

        if ( verifyFullName(fullName)) return false;

        console.log('Crear actor');
        return true;        

    }

    // Continuar
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        
        if ( isDead ) return 1500;
         
        if ( isSeparated ) return 2500;
         
        return isRetired ? 3000 : 4000;
    }

})();




